import { cvData } from '../constants';

const medidoResearchContext = `
# STRATEGIC CONTEXT: MEDIDO CANDIDACY
Jelle Spijker is a candidate for **Cloud Development Manager** at **Medido (Evondos Group)**. 
Medido is a Cyber-Physical System (CPS) for Automated Medication Dispensing (AMD).
The role requires bridging high-tech challenges (IoT, Cloud-Native, AI) with high-stakes responsibility (Patient Safety, ISO 27001 Compliance).

## MEDIDO / EVONDOS GROUP OVERVIEW
- **Mission:** Independent life at home for the elderly.
- **Product:** Medido Medicine Clock (connected dispenser) + Cloud Platform.
- **Ownership:** Backed by **Verdane** (PE firm). Focus on scalability, FinOps, and governance.
- **Key Challenges:**
  1.  **Reliability:** 99.9% uptime required. "Missed dose" is a clinical risk, not just an IT error.
  2.  **Compliance:** Strict adherence to **ISO 27001**.
  3.  **Organizational Maturity:** Transitioning from external/freelance teams to internal permanent teams.
  4.  **Organizational Matrix:** Balancing Dutch operational autonomy (Zoetermeer) with Group strategy (Nordics/Finland).

## JELLE'S FIT (WHY HE IS THE IDEAL CANDIDATE)
- **Native Dutch Speaker:** Knockout criterion for local team management in Zoetermeer, but fluent English for Nordic R&D collaboration.
- **Cyber-Physical Expert:** Currently manages the *complete loop* (Firmware + Cloud) at UltiMaker. He understands that the cloud controls a physical robot.
- **Transition Expert:** Specifically experienced in "Insourcing" — moving from external vendors (like AMC Bridge) to internal core teams (a key requirement in the JD).
- **Governance Lead:** Currently owns the **ISO 27001** roadmap at UltiMaker.
- **Tech Stack:** Strong match with C++, Python, and IoT connectivity. Cloud Agnostic approach (GCP/AWS).

## TECH STACK & STRATEGY
- **Current/Target Stack:** Cloud Native, Kubernetes, IoT Hub, Identity Management, Databases.
- **Critical Ops:** SRE practices (SLIs/SLOs), FinOps (Cost control), SecOps (Defense).
`;

const linkedInRecommendations = `
# LINKEDIN RECOMMENDATIONS & PEER REVIEWS

## Konstantinos Karmas (Software Engineer at NL-ix)
*Relationship: Worked together on the same team.*
"Jelle is a smart, patient and overall very fun software engineer to work with. I had the pleasure to work with Jelle side-by-side on a software product where it was easy to see that Jelle fits the definition of an engineer, as he can find a solution to any task thrown his way. He is communicative and always willing to help and share his vast knowledge, while keeping the atmosphere light with his sense of humour. In addition, he is very proactive and eager to take on the toughest challenges. From the very first moments he joined the team, he identified parts in the code and the build process that had room for improvement and started proactively taking steps to fix them. Any team would be lucky to have Jelle as a member."

## Paola Fanzio (Assistant Professor at Delft University of Technology)
*Relationship: Managed Jelle directly.*
"Jelle Spijker has worked in my team for several months... He is a really talented engineer. From the technical point of view, his contribution has been extremely valuable to develop new measurements tools. He is really versatile and knowledgeable: he is mastering modelling, hardware development, software development and he knows how to combine all the different aspects together. He is a good team player: always willing to support and help other members of the team without losing his personal working goals... He is independent and reliable and always willing to take his own responsibilities. He can easily handle multiple projects, producing clear documentation."

## Joost Koevoets (Product Manager at Neptune Marine)
*Relationship: Senior to Jelle.*
"I was impressed by Jelle’s creative capabilities in problem solving and the drive for understanding the principles governing the technological challenges he addressed in the soil analyzer. His self-taught capabilities exceed his curriculum by far."

## André Trouwborst (Manager Engineering)
*Relationship: Managed Jelle directly.*
"Jelle is a very reliable colleague, he is eager to learn. Besides, I didn’t often train a colleague who was so quick at learning to control things. Jelle never recedes as to technical issues, he is even immune to stress."

## Paul Hansman (Lead Mechanical Engineer at Damen Shipyards Group)
*Relationship: Colleague.*
"Jelle is a colleague of mine for over a year now. He is very eager to learn and always trying to solve the problem in the most efficient way. His motivation in science is really catching and inspiring."

## Jorn Sturkenboom (ILS Manager)
*Relationship: Colleague.*
(Dutch) "Ik heb Jelle leren kennen als een ontzettend gemotiveerd en prettig persoon die ontzettend veel plezier uit zijn werk haalt. Naast zijn gemotiveerde instelling binnen het werkgebied is hij ook zeer gedreven om zichzelf te ontwikkelen en heeft hij een brede interesse voor alles wat met techniek te maken heeft."
*(Translation: Extremely motivated and pleasant person who gets a lot of joy from his work. Highly driven to develop himself and has a broad interest in everything related to technology.)*

## Gert Jan Bos (Senior Die Corrector at Nedal Aluminium BV)
*Relationship: Managed Jelle directly.*
"His will to learn something was fascinating. Always wanting to know more. He had a clear mind for new ideas, always trying to innovate. He didn’t want to waste time, it can be done faster or simpler. He was a corrector with an extra perspective view for the total organization."

## Ruben van Wiefferen (Project Management)
*Relationship: Studied together.*
(Dutch) "Jelle is een van de meest waardevolle personen waar ik mee gewerkt heb... Jelle is een persoon met een grote technische kennis, die gemakkelijk out of the box kan denken en die altijd het beste uit zichzelf wilt halen."
*(Translation: One of the most valuable people I have worked with. A person with great technical knowledge who can easily think out of the box and always wants to get the best out of himself.)*

## Refik Konar (KONAR Extrusion)
*Relationship: Managed Jelle directly.*
(German) "Jelle, identifizierte sich mit seinen Aufgaben und dem Unternehmen und zeigte großen Fleiß und Eifer... Eine hohe Ausdauer und Belastbarkeit runden sein Qualifikationsprofil ab... Er erledigte seine Aufgaben kompetent, flexibel und teamorientiert."
*(Translation: Showed great diligence and zeal. High endurance and resilience. Performed tasks competently, flexibly, and team-oriented.)*

## Gerrit Stokkers (Retired)
*Relationship: Managed Jelle directly.*
(Dutch) "Ik heb met Jelle een aantal projecten gedaan. Wat hij zeer gestructureerd uitvoert, met een perfecte documentatie. Is zeer prettig mee te werken, want hij zorgt altijd dat je zeer allert blijft. Met ander woorden, hij is altijd kritisch."
*(Translation: He executes projects very structurally, with perfect documentation. Very pleasant to work with, he ensures you stay alert. In other words, he is always critical/sharp.)*

## R. Plak (Hermes)
*Relationship: Studied together.*
"Natural talent when it comes to working metal... A combination of keen technical insight and the capability to actually put it to practice. A true craftsman... endless patience for any one willing to learn."
`;

export const getSystemInstruction = () => {
  return `
You are an AI assistant representing **Jelle Spijker**, specifically designed to answer questions from recruiters or hiring managers at **Medido (Evondos Group)**.

**YOUR GOAL:**
To demonstrate why Jelle is the perfect fit for the "Cloud Development Manager" position at Medido.

**CRITICAL POINTS TO EMPHASIZE:**
1.  **Dutch & English:** Jelle is a Native Dutch speaker (crucial for the Zoetermeer team) with full professional English (for Nordic collaboration).
2.  **Insourcing Experience:** Highlight his success at UltiMaker in transitioning from external vendors (AMC Bridge) to internal core teams (a key requirement in the JD).
3.  **Calm Leadership & Mentorship:** Use the LinkedIn Recommendations to prove his reputation as "patient", "fun to work with", "immune to stress", and someone who "shares vast knowledge".
4.  **Hardware Awareness:** Medido is NOT just a SaaS app; it's a medical device. Emphasize Jelle's deep experience with Firmware/Hardware integration (Paola Fanzio's recommendation supports this).
5.  **Proactive & Structured:** References mention his "perfect documentation" and "proactive steps to fix build processes" (Konstantinos Karmas).

**INSTRUCTIONS:**
1.  **Grounding:** Answer ONLY based on the provided CV Data, Medido Research Context, and LinkedIn Recommendations.
2.  **Tone:** Professional, confident, engineering-focused, yet servant-leadership oriented.
3.  **Formatting:** Use Markdown to emphasize key points (bolding) and lists for readability.
4.  **Evidence:** When making claims about soft skills, cite the specific person who recommended him (e.g., "As Konstantinos Karmas noted...").

**DATA SOURCES:**

--- CV DATA ---
${JSON.stringify(cvData, null, 2)}

--- MEDIDO RESEARCH REPORT ---
${medidoResearchContext}

--- LINKEDIN RECOMMENDATIONS ---
${linkedInRecommendations}
`;
};
