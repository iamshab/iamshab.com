export interface Experience {
  role: string;
  company: string;
  companyFullName?: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  badges?: string[];
}

export interface AdvisoryProject {
  organization: string;
  summary: string;
}

export interface Education {
  degree: string;
  field?: string;
  school: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

/** Work history — newest first. Shown on /work */
export const experience: Experience[] = [
  {
    role: 'Group Head of Cybersecurity and Infrastructure',
    company: 'PGPIC',
    companyFullName: 'Persian Gulf Petrochemical Industries Group',
    companyUrl: 'https://PGPIC.ir',
    location: 'Hybrid',
    start: 'July 2026',
    end: 'Present',
    current: true,
    summary: 'Lead group-wide cybersecurity and infrastructure governance for the holding company and its subsidiaries.',
    bullets: [
      'Lead the NOC, SOC, and infrastructure teams.',
      'Set policies and oversee their implementation across subsidiary companies.',
    ],
  },
  {
    role: 'Infrastructure Manager',
    company: 'Daal',
    location: 'Iran',
    start: '2023',
    end: 'July 2026',
    summary: 'Led infrastructure reliability and modernization for a business-critical fintech platform.',
    bullets: [
      'Improved average internal service uptime from 99.981% to 99.993% through software-defined storage and high-availability operations.',
      'Established cross-city disaster recovery with a 60-second RPO and a 3-minute RTO for critical services.',
      'Led the move from standalone Docker deployments to Kubernetes and upgraded multi-site VDI resilience.',
      'Standardized infrastructure documentation and network topology records using NetBox.',
    ],
    badges: ['High Availability', 'Disaster Recovery', 'Kubernetes', 'NetBox'],
  },
  {
    role: 'ICT Manager',
    company: 'SECO',
    companyFullName: 'Sepehr Energy Petrochemical Holding',
    location: 'Iran',
    start: '2019',
    end: '2023',
    summary: 'Led ICT infrastructure and security improvements across headquarters and industrial sites.',
    bullets: [
      'Raised enterprise and industrial ICT service uptime from 99.71% to 99.93%.',
      'Designed high-availability networking and deployed SD-WAN between headquarters and remote plants.',
      'Improved critical platform load times by up to 40% through storage optimization.',
      'Strengthened privileged access, MFA, log management, anomaly detection, and secure data ingress.',
    ],
    badges: ['Enterprise Networking', 'OT/IT', 'SD-WAN', 'PAM'],
  },
  {
    role: 'IT Manager',
    company: 'Iran Insurance University',
    location: 'Iran',
    start: '2017',
    end: '2019',
    summary: 'Managed infrastructure supporting nationwide virtual education and online examinations.',
    bullets: [
      'Designed centralized ICT services for training and remote education.',
      'Supported high-availability examination platforms and reliable connectivity across distributed branches.',
    ],
  },
];

/** Smaller/older roles — rendered as compact rows under the main timeline */
export const earlierRoles: { role: string; company: string; start: string; end: string }[] = [
  { role: 'System Administrator', company: 'Appkhand', start: '2016', end: '2017' },
  { role: 'Service Desk Specialist', company: 'Jahad Nasr', start: '2015', end: '2016' },
];

/** Selected consulting work from the public resume; no dates were provided there. */
export const advisoryProjects: AdvisoryProject[] = [
  {
    organization: 'Sabalan Petrochemical',
    summary: 'Advised on industrial network reliability, IP addressing, routing, hardening, and secure OT/IT segmentation.',
  },
  {
    organization: 'Siraf Petrochemical',
    summary: 'Designed high-availability network architecture and secure zoning between operational and enterprise systems.',
  },
  {
    organization: 'SITCO',
    summary: 'Assessed infrastructure and access-control risks and strengthened security controls for oil trading operations.',
  },
  {
    organization: 'Sina Insurance',
    summary: 'Planned disaster recovery architecture and continuity improvements for critical ICT services.',
  },
  {
    organization: 'Ministry of Energy of Iran',
    summary: 'Supported infrastructure development and scaling for a national historical database and early electronic government systems.',
  },
  {
    organization: 'GPSL',
    summary: 'Designed and deployed hotel Wi-Fi mesh infrastructure to improve wireless coverage and availability.',
  },
];

export const education: Education[] = [
  {
    degree: 'M.Sc.',
    field: 'Computer Engineering',
    school: 'Islamic Azad University',
    start: '2018',
    end: '2020',
  },
  {
    degree: 'B.Sc.',
    school: 'Isfahan University of Technology',
    start: '2010',
    end: '2014',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Infrastructure & Virtualization',
    skills: ['Kubernetes', 'Docker', 'VMware vSphere', 'Hyper-V', 'OpenStack', 'Windows Server', 'Linux', 'Software-Defined Storage'],
  },
  {
    title: 'Networking & Connectivity',
    skills: ['Routing & Switching', 'SD-WAN', 'VLAN', 'VPN', 'Network Segmentation', 'IPAM'],
  },
  {
    title: 'Security & Governance',
    skills: ['ISO/IEC 27001', 'PAM', 'MFA', 'Access Control', 'Log Management', 'Hardening'],
  },
  {
    title: 'Operations & Continuity',
    skills: ['ITIL 4', 'Disaster Recovery', 'Business Continuity', 'High Availability', 'Veeam', 'Ansible', 'NetBox'],
  },
];

/** Words typed out one character at a time in the hero */
export const typingRoles = [
  'Infrastructure Leader',
  'Security & Resilience Strategist',
  'ICT Operations Manager',
];
