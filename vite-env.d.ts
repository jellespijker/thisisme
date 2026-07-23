/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Home Assistant webhook (or Nabu Casa cloudhook) URL receiving visit beacons. Telemetry is disabled when unset. */
  readonly VITE_TELEMETRY_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
