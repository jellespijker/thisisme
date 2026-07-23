# Visit Telemetry via Home Assistant

The site can report visits to a **Home Assistant webhook** — no analytics
vendor, no cookies, no cost beyond what already runs at home. When the
endpoint is not configured, telemetry is compiled out entirely.

## How it works

```
Browser (GitHub Pages)                       Home at Tiel
┌─────────────────────┐   POST form data    ┌──────────────────────────┐
│ utils/telemetry.ts  │ ──────────────────► │ Home Assistant webhook   │
│ sendBeacon/fetch    │                     │ automation → logbook,    │
│ (no cookies, no IDs)│                     │ counter, phone notify    │
└─────────────────────┘                     └──────────────────────────┘
```

- Events: `page_view`, `filter_change` (which profile/industries recruiters
  pick), `print` (who exports a PDF, and for which profile).
- Payload fields: `event`, `visit` (random id per page load — not persistent,
  so no cross-visit tracking), `ts`, `page` (includes the active filter query),
  `referrer`, `lang`, `screen`, `tz`, `ua`, plus event-specific fields
  (`profile`, `industries`).
- "Who / from where": Home Assistant sees the HTTP request's source IP
  (`trigger.query` is empty; use a reverse-proxy header or the built-in
  `trigger` data, see below) and the timezone/language hints in the payload.
- The beacon posts `application/x-www-form-urlencoded` (a CORS-safelisted
  content type), so no preflight is needed and fire-and-forget works even
  though GitHub Pages and your home are different origins.
- Visitors with **Do Not Track** or **Global Privacy Control** enabled are
  never tracked.

## 1. Configure the site

Set the endpoint at build time (`.env.local` for local builds):

```bash
VITE_TELEMETRY_ENDPOINT=https://hooks.nabu.casa/XXXXXXXXXXXX
```

For GitHub Pages deploys, add a repository **secret** named
`VITE_TELEMETRY_ENDPOINT` (Settings → Secrets and variables → Actions); the
deploy workflow passes it into the build. Note that any client-side telemetry
endpoint is inherently visible in the shipped JavaScript — treat the webhook
id as rotatable, not as a secret credential.

## 2. Expose the webhook from home

Pick one (first is strongly recommended — no ports opened at home):

1. **Nabu Casa cloudhook** (you likely already subscribe for the UltiMaker
   integration): in Home Assistant, webhooks used by an automation can be
   enabled for the cloud under **Settings → Home Assistant Cloud → Webhooks**
   after the automation below is saved. You get a stable
   `https://hooks.nabu.casa/…` URL.
2. **Cloudflare Tunnel** in front of HA (free, no open ports).
3. Direct HTTPS exposure you may already have (DuckDNS + Let's Encrypt) —
   webhook endpoints in HA require no authentication, so path-guessing is the
   only protection; prefer options 1–2.

## 3. Home Assistant automation

`configuration.yaml` helpers:

```yaml
counter:
  cv_visits:
    name: CV visits
    icon: mdi:account-eye
  cv_pdf_exports:
    name: CV PDF exports
    icon: mdi:file-pdf-box
```

Automation (Settings → Automations → new, then edit in YAML):

```yaml
alias: CV telemetry
mode: queued
max: 25
triggers:
  - trigger: webhook
    webhook_id: cv-telemetry-CHANGE-ME   # long random string; becomes part of the URL
    allowed_methods: [POST]
    local_only: false
actions:
  - variables:
      d: "{{ trigger.data }}"
      summary: >-
        {{ d.event }} | {{ d.page }} | ref: {{ d.referrer or 'direct' }} |
        {{ d.lang }} | {{ d.tz }} | visit {{ d.visit }}
  - choose:
      - conditions: "{{ d.event == 'page_view' }}"
        sequence:
          - action: counter.increment
            target: { entity_id: counter.cv_visits }
          - action: notify.mobile_app_YOUR_PHONE   # optional push per visit
            data:
              title: "CV visitor"
              message: "{{ d.referrer or 'direct' }} · {{ d.tz }} · {{ d.lang }}"
      - conditions: "{{ d.event == 'print' }}"
        sequence:
          - action: counter.increment
            target: { entity_id: counter.cv_pdf_exports }
          - action: notify.mobile_app_YOUR_PHONE
            data:
              title: "CV exported to PDF"
              message: "Profile: {{ d.profile }} · industries: {{ d.industries }}"
  - action: logbook.log
    data:
      name: CV telemetry
      message: "{{ summary }}"
      entity_id: counter.cv_visits
```

The full raw payload of every event is also queryable from the recorder
database if you log it, or append it to a file for later analysis:

```yaml
  - action: notify.send_message        # file notifier appending JSONL
    target: { entity_id: notify.cv_telemetry_log }
    data:
      message: "{{ d | to_json }}"
```

with:

```yaml
notify:
  - platform: file
    name: cv_telemetry_log
    filename: /config/cv-telemetry.jsonl
    timestamp: true
```

### Source IP / geo ("from where")

Home Assistant does not expose the client IP to webhook triggers directly.
Practical options, in order of effort:

- **Timezone + language** from the payload already give a good coarse
  location (e.g. `Europe/Amsterdam` + `nl-NL`), with zero extra setup.
- If HA sits behind your own reverse proxy (Cloudflare Tunnel/nginx), log
  `CF-Connecting-For` / `X-Forwarded-For` at the proxy — that log maps
  timestamps to IPs, which you can join with the logbook timestamps.
- Nabu Casa cloudhooks terminate TLS at Nabu Casa; the source IP is not
  forwarded, so rely on the first two options there.

## Privacy posture (also what to tell recruiters if asked)

- No cookies, no localStorage, no fingerprinting, no third-party analytics.
- A visit id lives only in memory for one page load.
- DNT/GPC are honored.
- Data lands exclusively on your own hardware.
