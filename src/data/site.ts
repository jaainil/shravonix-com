/**
 * Shravonix — single source of site truth.
 *
 * ┌─────────────────────────────────────────────────────────────┐
 * │ OWNER TODO BEFORE LAUNCH:                                   │
 * │ Replace phone / whatsapp / email placeholders with the real │
 * │ business contact details. Every CTA reads from this file.   │
 * └─────────────────────────────────────────────────────────────┘
 */

export const contact = {
  // PLACEHOLDER — replace with the real business phone
  phoneDisplay: '+91 XXXXX XXXXX',
  phoneHref: 'tel:+910000000000',
  // PLACEHOLDER — replace with the real WhatsApp business number (country code, no +)
  whatsappHref: 'https://wa.me/910000000000',
  // PLACEHOLDER — replace with the real business email
  email: 'info@shravonix.com',

  cities: ['Anand', 'Nadiad'],
  region: 'Gujarat, India',
  hours: 'Mon – Sat · 9:00 – 19:00 IST',
};

export const site = {
  name: 'Shravonix',
  tagline: 'Signal over noise.',
  url: 'https://shravonix.com',
  description:
    'Shravonix designs, supplies, installs and maintains CCTV surveillance systems for factories, campuses, offices and homes across Anand, Nadiad and Gujarat. Enterprise-grade engineering, local accountability.',
};

export type ProcessPhase = {
  id: string;
  title: string;
  body: string;
  deliverable: string;
};

export const processPhases: ProcessPhase[] = [
  {
    id: 'survey',
    title: 'Site survey',
    body: 'We walk your site, map entry points, blind spots and lighting, and record what each camera must actually see — not guess from a floor plan.',
    deliverable: 'Free survey report & camera-count estimate',
  },
  {
    id: 'design',
    title: 'System design',
    body: 'Camera positions, lens choices, storage math for your retention period, network load and power — engineered on paper before anything is purchased.',
    deliverable: 'Layout drawing, BoM & fixed quote',
  },
  {
    id: 'install',
    title: 'Installation',
    body: 'Concealed cabling, labelled runs, correct mounting height and angle per the design. We commission, test every channel and hand over documentation.',
    deliverable: 'Tested system + handover file (logins, layout, warranties)',
  },
  {
    id: 'amc',
    title: 'AMC & monitoring',
    body: 'Scheduled preventive maintenance, lens and storage health checks, firmware updates and priority response when something needs attention.',
    deliverable: 'Service visits, health reports & remote support',
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'cctv-surveillance',
    title: 'CCTV supply & installation',
    short: 'Camera systems designed around your site: surveyed first, installed clean, documented at handover.',
    description:
      'We are a CCTV dealership and systems integrator. We supply surveillance hardware across bullet, dome and PTZ lines, then design and install the system around your site: camera count and placement from a real survey, storage sized to your retention policy, network and power done properly, and a handover file you can actually use.',
    points: [
      'Free site survey with camera-count estimate',
      'Design-first: layout drawing and fixed quote before purchase',
      'Bullet, dome and PTZ coverage for every lighting and distance condition',
      'Storage engineered to your retention period — no surprise overwrites',
      'Remote viewing on phone and office systems, configured and tested',
      'Concealed, labelled cabling with a full handover document',
    ],
  },
  {
    slug: 'amc-monitoring',
    title: 'AMC & monitoring',
    short: 'A camera that failed last month records nothing. Annual contracts keep your system healthy and proven.',
    description:
      'A camera that failed last month records nothing. Our annual maintenance contracts keep your surveillance proven and healthy: scheduled preventive visits, lens and recorder health checks, storage verification, firmware updates and priority response with remote support — so footage exists when you need it.',
    points: [
      'Scheduled preventive maintenance visits',
      'Per-channel health checks: lenses, focus, night vision, recording',
      'Storage and retention verification',
      'Firmware and security updates',
      'Priority response with defined visit windows',
      'Remote diagnostics and support between visits',
    ],
  },
];

export type Industry = {
  title: string;
  body: string;
  coverage: string[];
};

export const industries: Industry[] = [
  {
    title: 'Factories & manufacturing',
    body: 'Perimeter to production floor: gate, yard, raw-material bays, machine lines and dispatch. Built for dust, glare and 24×7 shifts.',
    coverage: ['Perimeter & gates', 'Production lines', 'Loading bays', 'Stores & yards'],
  },
  {
    title: 'Warehouses & logistics',
    body: 'Track every movement from truck bay to rack aisle. Wide-area coverage with fewer, better-placed cameras.',
    coverage: ['Dock & yard', 'Aisles & racking', 'Dispatch desk', 'Cold storage'],
  },
  {
    title: 'Offices & IT parks',
    body: 'Lobbies, lifts, server rooms and parking — professional coverage that respects privacy boundaries and looks the part.',
    coverage: ['Reception & lobby', 'Server & comms rooms', 'Lifts & corridors', 'Parking'],
  },
  {
    title: 'Education & institutions',
    body: 'Campus gates, corridors, buses and boundaries. Coverage that keeps students accounted for without turning the campus into a prison yard.',
    coverage: ['Gates & boundaries', 'Corridors & common areas', 'Buses', 'Admin blocks'],
  },
  {
    title: 'Hospitals & healthcare',
    body: 'Entry control, emergency bays, pharmacy and parking — discreet systems that keep records when disputes happen.',
    coverage: ['Entries & reception', 'Pharmacy & stores', 'Emergency bays', 'Parking'],
  },
  {
    title: 'Retail & showrooms',
    body: 'Counter, floor and stockroom coverage with clean faces — enough detail to settle a dispute, discreet enough for customers.',
    coverage: ['Counters & billing', 'Sales floor', 'Stock rooms', 'Entry & display windows'],
  },
  {
    title: 'Homes & apartments',
    body: 'Enterprise-grade reliability, sized for a house or a society: gates, parking, stairwells and entry doors, viewable on your phone.',
    coverage: ['Gates & porches', 'Parking', 'Stairwells & lobbies', 'Entry doors'],
  },
];

export type ProductModel = {
  name: string;
  tier: string;
  specs: [string, string][];
};

export type ProductCategory = {
  id: string;
  title: string;
  intro: string;
  art: 'bullet' | 'dome' | 'ptz' | 'nvr';
  models: ProductModel[];
};

/**
 * OWNER TODO: this catalog ships with representative tier definitions,
 * not real SKUs. Replace with the actual models you stock, or hand us
 * the list and we will fill it in.
 */
export const productCatalog: ProductCategory[] = [
  {
    id: 'bullet',
    title: 'Bullet cameras',
    intro: 'Long-range coverage for perimeters, yards and gates. Visible deterrence, IR night vision, weather-sealed.',
    art: 'bullet',
    models: [
      {
        name: 'IR Bullet — 2 MP',
        tier: 'Standard sites',
        specs: [
          ['Resolution', '2 MP (1080p)'],
          ['IR range', 'up to 30 m'],
          ['Rating', 'IP66 weather-sealed'],
          ['Best for', 'Gates, corridors, small shops'],
        ],
      },
      {
        name: 'IR Bullet — 4 MP',
        tier: 'Most requested',
        specs: [
          ['Resolution', '4 MP (2K)'],
          ['IR range', 'up to 40 m'],
          ['Rating', 'IP67 · WDR'],
          ['Best for', 'Perimeters, parking, factories'],
        ],
      },
      {
        name: 'IR Bullet — 8 MP',
        tier: 'Evidence-grade',
        specs: [
          ['Resolution', '8 MP (4K)'],
          ['IR range', 'up to 50 m'],
          ['Rating', 'IP67 · WDR · smart IR'],
          ['Best for', 'Yards, wide perimeters, plate reading'],
        ],
      },
    ],
  },
  {
    id: 'dome',
    title: 'Dome cameras',
    intro: 'Discreet indoor coverage for lobbies, corridors and counters. Vandal-resistant options for touch-prone spots.',
    art: 'dome',
    models: [
      {
        name: 'IR Dome — 4 MP',
        tier: 'Indoor standard',
        specs: [
          ['Resolution', '4 MP (2K)'],
          ['IR range', 'up to 30 m'],
          ['Mount', 'Ceiling / wall'],
          ['Best for', 'Lobbies, corridors, billing desks'],
        ],
      },
      {
        name: 'Vandal Dome — 4 MP',
        tier: 'Impact-rated',
        specs: [
          ['Resolution', '4 MP (2K)'],
          ['Housing', 'IK10 vandal-resistant'],
          ['Rating', 'IP67 · WDR'],
          ['Best for', 'Stairwells, lifts, warehouse racks'],
        ],
      },
    ],
  },
  {
    id: 'ptz',
    title: 'PTZ cameras',
    intro: 'Pan-tilt-zoom coverage where one camera must do the work of five — yards, campuses, large halls.',
    art: 'ptz',
    models: [
      {
        name: 'PTZ — 4 MP · 25×',
        tier: 'Wide-area',
        specs: [
          ['Resolution', '4 MP (2K)'],
          ['Optical zoom', '25×'],
          ['IR range', 'up to 100 m'],
          ['Best for', 'Yards, campuses, factory floors'],
        ],
      },
    ],
  },
  {
    id: 'nvr',
    title: 'Recorders & storage',
    intro: 'NVRs sized to your retention policy — the storage math is done in the design phase, not discovered after an incident.',
    art: 'nvr',
    models: [
      {
        name: 'NVR — 8 CH',
        tier: 'Small sites',
        specs: [
          ['Channels', '8 POE ports'],
          ['Storage', '1 × surveillance HDD'],
          ['Features', 'Remote view · mobile app'],
          ['Best for', 'Homes, shops, small offices'],
        ],
      },
      {
        name: 'NVR — 16 CH',
        tier: 'Growing sites',
        specs: [
          ['Channels', '16 POE ports'],
          ['Storage', '2 × surveillance HDD (RAID-ready)'],
          ['Features', 'Remote view · smart playback'],
          ['Best for', 'Warehouses, schools, showrooms'],
        ],
      },
      {
        name: 'NVR — 32 CH',
        tier: 'Enterprise',
        specs: [
          ['Channels', '32 POE ports'],
          ['Storage', '4 × surveillance HDD'],
          ['Features', 'RAID · dual NIC · user tiers'],
          ['Best for', 'Factories, campuses, hospitals'],
        ],
      },
    ],
  },
];
