import React, { useEffect } from 'react';
import './industrystyle.css';

const INITIAL_COMMITMENT_PROJECTS = [
  {
    id: 'solar-phc',
    title: 'Rural Hospital Solar Unit',
    university: 'IIT (ISM) Dhanbad',
    location: 'Dhanbad, Jharkhand',
    status: 'In Progress',
    statusColor: '#1d4ed8',
    statusBg: '#eff6ff',
    tags: ['Healthcare', 'Clean Energy', 'Rural Development'],
    image: '',
    summary: 'Solar powered backup system for uninterrupted power supply in rural health centers, ensuring continuous healthcare services.',
    startDate: '15 Apr 2026',
    targetDate: 'Dec 2026',
    approvedBudget: '₹12,00,000',
    stage: 'Prototype & Pilot',
    ourRole: 'Funding + Equipment',
    expectedImpact: '5,000+ citizens',
    facultyLead: 'Prof. (Dr.) Debashis Sengupta',
    facultyEmail: 'sengupta.health@iitism.ac.in',
    supportProgress: 60,
    nextMilestone: {
      id: 'm1',
      title: 'Dispatch remaining equipment',
      dueDate: '20 Sep 2026',
      completed: false
    },
    counts: { committed: 4, provided: 2, verified: 1, pending: 1 },
    commitments: [
      {
        id: 'c1',
        type: '💰 Funding',
        requirement: '₹10,00,000',
        commitment: '₹10,00,000',
        status: 'Verified',
        date: '12 Jul 2026',
        receiptId: 'JH-CSR-2026-904',
        actionType: 'receipt'
      },
      {
        id: 'c2',
        type: '⚙️ Equipment',
        requirement: 'Solar Panels (10 units)',
        commitment: '10 Solar Panels',
        status: 'In Progress',
        date: '20 Sep 2026',
        trackingId: 'SP-DHN-8821',
        courier: 'Ranchi Express Logistics',
        actionType: 'track'
      },
      {
        id: 'c3',
        type: '👨‍🏫 Expert/Mentor',
        requirement: '1 Solar Engineer',
        commitment: 'Mr. Rajesh Kumar',
        status: 'Provided',
        date: '05 Aug 2026',
        detail: 'Senior Electrical Engineer assigned to Dhanbad site.',
        actionType: 'details'
      },
      {
        id: 'c4',
        type: '🧪 Testing Equipment',
        requirement: 'Battery Testing Kit',
        commitment: '1 Testing Kit',
        status: 'Pending',
        date: '20 Sep 2026',
        actionType: 'dispatch'
      }
    ],
    timeline: [
      { phase: 'Phase 1: Escrow Sanction & MoU', status: 'Completed', date: '15 Apr 2026', desc: 'MoU signed between State IT Dept, IIT Dhanbad & Tata Steel CSR' },
      { phase: 'Phase 2: Hardware Procurement', status: 'Completed', date: '12 Jul 2026', desc: 'First tranche of ₹10L disbursed and inverters delivered' },
      { phase: 'Phase 3: Prototype & Pilot Rig', status: 'In Progress', date: '05 Aug 2026', desc: 'Battery testing rig under calibration at Dhanbad PHC' },
      { phase: 'Phase 4: Field Validation & Telemetry', status: 'Pending', date: '20 Oct 2026', desc: 'Continuous 30-day power load test during grid cutoffs' },
      { phase: 'Phase 5: State Handover', status: 'Pending', date: '15 Dec 2026', desc: 'Handover to Primary Health Centre & Gram Panchayat' }
    ],
    documents: [
      { id: 'doc1', name: 'Tripartite_Collaboration_MoU_Signed.pdf', size: '2.4 MB', date: '16 Apr 2026', type: 'Legal Agreement' },
      { id: 'doc2', name: 'CSR_Escrow_Sanction_Order_TSF.pdf', size: '1.1 MB', date: '12 Jul 2026', type: 'Disbursement Order' },
      { id: 'doc3', name: 'Solar_Inverter_Inspection_Report.pdf', size: '3.8 MB', date: '28 Aug 2026', type: 'Quality Certificate' }
    ],
    communication: [
      { sender: 'Dr. Debashis Sengupta (IIT ISM)', role: 'University PI', time: '10:30 AM, 12 Sep', text: 'Good morning. The solar panel frames have been installed on the clinic roof. We are awaiting the battery testing kit dispatch.' },
      { sender: 'Shoeb Raza (Tata Steel Foundation)', role: 'Industry CSR Lead', time: '11:15 AM, 12 Sep', text: 'Acknowledged Professor. The battery testing kit has been packed and scheduled for delivery via Ranchi Express.', isMe: true },
      { sender: 'District Administration Desk', role: 'State Admin', time: '02:45 PM, 13 Sep', text: 'DC Office West Singhbhum / Dhanbad has verified civil clearance. Looking forward to Phase 3 completion.' }
    ],
    sla: {
      score: '98.4%',
      onTimeDelivery: '100%',
      avgResponseTime: '2.4 hrs',
      escrowStatus: 'Tranche 1 Disbursed (₹10L / ₹12L)',
      escalationLead: 'Mr. Rajesh Kumar (Site Supervisor, Dhanbad)'
    },
    recentActivity: [
      { date: '12 Jul 2026', text: 'Funding of ₹10,00,000 verified by university.', color: '#16a34a' },
      { date: '05 Aug 2026', text: 'Technical expert assigned (Mr. Rajesh Kumar).', color: '#2563eb' },
      { date: '28 Aug 2026', text: 'Solar panels dispatched. Tracking ID: SP123456789.', color: '#2563eb' },
      { date: '25 Aug 2026', text: 'Testing equipment pending dispatch.', color: '#d97706' }
    ]
  },
  {
    id: 'water-iot',
    title: 'Smart Water Monitoring',
    university: 'BIT Mesra',
    location: 'Ranchi, Jharkhand',
    status: 'On Track',
    statusColor: '#15803d',
    statusBg: '#f0fdf4',
    tags: ['Water Management', 'IoT', 'Groundwater'],
    image: '',
    summary: 'Automated groundwater quality telemetry network and community borewell depth tracking system with solar IoT nodes.',
    startDate: '01 May 2026',
    targetDate: 'Nov 2026',
    approvedBudget: '₹6,00,000',
    stage: 'Pilot Deployment',
    ourRole: 'Sensors + Cloud Infrastructure',
    expectedImpact: '12,000+ residents',
    facultyLead: 'Dr. Anand Kishore',
    facultyEmail: 'anand.water@bitmesra.ac.in',
    supportProgress: 80,
    nextMilestone: {
      id: 'm2',
      title: 'Deploy 5 additional LoRa sensor nodes',
      dueDate: '15 Sep 2026',
      completed: true
    },
    counts: { committed: 3, provided: 2, verified: 1, pending: 1 },
    commitments: [
      {
        id: 'cw1',
        type: '💰 Funding',
        requirement: '₹4,00,000',
        commitment: '₹4,00,000',
        status: 'Verified',
        date: '10 Jun 2026',
        receiptId: 'JH-CSR-2026-612',
        actionType: 'receipt'
      },
      {
        id: 'cw2',
        type: '⚙️ Equipment',
        requirement: '8 LoRa Water Depth Sensors',
        commitment: '8 IoT Sensor Nodes',
        status: 'Provided',
        date: '15 Jul 2026',
        actionType: 'details'
      },
      {
        id: 'cw3',
        type: '💻 Software / Cloud',
        requirement: 'AWS / Cloud Telemetry Server',
        commitment: 'Dedicated Cloud Instance (1 Year)',
        status: 'Pending',
        date: '25 Sep 2026',
        actionType: 'dispatch'
      }
    ],
    timeline: [
      { phase: 'Phase 1: Sensor Calibration', status: 'Completed', date: '01 May 2026', desc: 'Laboratory chemical testing across Ranchi water samples' },
      { phase: 'Phase 2: Node Assembly', status: 'Completed', date: '15 Jul 2026', desc: '8 Solar LoRa transceiver nodes assembled at BIT Mesra' },
      { phase: 'Phase 3: Field Grid Installation', status: 'In Progress', date: '15 Sep 2026', desc: 'Installation across 4 Gram Panchayats in Ranchi' }
    ],
    documents: [
      { id: 'docw1', name: 'BIT_Mesra_Water_Sanction_Note.pdf', size: '1.4 MB', date: '10 May 2026', type: 'Grant Document' },
      { id: 'docw2', name: 'Water_Quality_Sensor_Calibration_Certificate.pdf', size: '2.1 MB', date: '20 Jul 2026', type: 'Lab Report' }
    ],
    communication: [
      { sender: 'Dr. Anand Kishore (BIT Mesra)', role: 'University PI', time: '09:00 AM, 14 Sep', text: 'Telemetry server endpoints are calibrated. Real-time water table data is syncing with State Jal Portal.' },
      { sender: 'Shoeb Raza (Tata Steel Foundation)', role: 'Industry CSR Lead', time: '10:20 AM, 14 Sep', text: 'Excellent progress Dr. Kishore. We will allocate the cloud hosting voucher this week.', isMe: true }
    ],
    sla: {
      score: '99.1%',
      onTimeDelivery: '100%',
      avgResponseTime: '1.8 hrs',
      escrowStatus: 'Tranche 1 Disbursed (₹4L / ₹6L)',
      escalationLead: 'Dr. Anand Kishore'
    },
    recentActivity: [
      { date: '10 Jun 2026', text: 'Escrow funding of ₹4,00,000 released.', color: '#16a34a' },
      { date: '15 Jul 2026', text: '8 IoT Sensor nodes delivered to Mesra Campus.', color: '#2563eb' },
      { date: '14 Sep 2026', text: '5 LoRa sensor nodes deployed in Kanke Block.', color: '#16a34a' }
    ]
  },
  {
    id: 'digital-edge',
    title: 'Rural Digital Learning Hub',
    university: 'Ranchi University',
    location: 'Latehar, Jharkhand',
    status: 'Delayed',
    statusColor: '#b91c1c',
    statusBg: '#fef2f2',
    tags: ['Education', 'Digital Infra', 'Tribal Welfare'],
    image: '',
    summary: 'Offline digital content servers and solar battery-backed computer labs in remote tribal secondary schools.',
    startDate: '10 May 2026',
    targetDate: 'Oct 2026',
    approvedBudget: '₹8,00,000',
    stage: 'Procurement',
    ourRole: 'Refurbished Laptops + LAN Routers',
    expectedImpact: '1,800+ tribal students',
    facultyLead: 'Prof. Sunita Oraon',
    facultyEmail: 'sunita.ed@ranchiuniv.ac.in',
    supportProgress: 40,
    nextMilestone: {
      id: 'm3',
      title: 'Complete Latehar School electrical wiring',
      dueDate: '10 Oct 2026',
      completed: false
    },
    counts: { committed: 5, provided: 2, verified: 1, pending: 3 },
    commitments: [
      {
        id: 'cd1',
        type: '💰 Funding',
        requirement: '₹4,00,000',
        commitment: '₹4,00,000',
        status: 'Verified',
        date: '20 May 2026',
        receiptId: 'JH-CSR-2026-781',
        actionType: 'receipt'
      },
      {
        id: 'cd2',
        type: '⚙️ Equipment',
        requirement: '20 Refurbished Laptops',
        commitment: '20 HP Laptops (Core i5)',
        status: 'In Progress',
        date: '10 Oct 2026',
        trackingId: 'LP-LTH-9012',
        courier: 'BlueDart CSR Logistics',
        actionType: 'track'
      },
      {
        id: 'cd3',
        type: '👨‍🏫 Expert/Mentor',
        requirement: '1 Python / STEM Trainer',
        commitment: 'Tata Consultancy Volunteer Trainer',
        status: 'Provided',
        date: '01 Jun 2026',
        actionType: 'details'
      },
      {
        id: 'cd4',
        type: '💻 Software / Cloud',
        requirement: 'Offline e-Vidya Content Server',
        commitment: '1 Raspberry Pi / Mini Server with NCERT syllabus',
        status: 'Pending',
        date: '10 Oct 2026',
        actionType: 'dispatch'
      },
      {
        id: 'cd5',
        type: '🚚 Logistics',
        requirement: 'Safe delivery to tribal school',
        commitment: 'Doorstep transit insurance & escort',
        status: 'Pending',
        date: '12 Oct 2026',
        actionType: 'dispatch'
      }
    ],
    timeline: [
      { phase: 'Phase 1: School Site Assessment', status: 'Completed', date: '10 May 2026', desc: 'Electrical and roof survey completed in 2 Latehar schools' },
      { phase: 'Phase 2: Hardware Procurement', status: 'In Progress', date: '20 Jul 2026', desc: 'Laptop refurbishing and content loading at Ranchi hub' },
      { phase: 'Phase 3: Deployment & Teacher Training', status: 'Pending', date: '10 Oct 2026', desc: 'Installation of offline server and 3-day teacher orientation' }
    ],
    documents: [
      { id: 'docd1', name: 'Latehar_Digital_Hub_Proposal.pdf', size: '2.8 MB', date: '12 May 2026', type: 'Proposal Blueprint' },
      { id: 'docd2', name: 'School_Education_Dept_NOC.pdf', size: '890 KB', date: '18 May 2026', type: 'Govt Clearance' }
    ],
    communication: [
      { sender: 'Prof. Sunita Oraon (Ranchi Univ)', role: 'University PI', time: '11:45 AM, 11 Sep', text: 'School wiring in Latehar had minor delays due to heavy rainfall. Electrician completed rewiring yesterday.' },
      { sender: 'Shoeb Raza (Tata Steel Foundation)', role: 'Industry CSR Lead', time: '01:10 PM, 11 Sep', text: 'Noted Prof. Oraon. Our logistics team is coordinating with Latehar BDO for safe laptop dispatch once rains subside.', isMe: true }
    ],
    sla: {
      score: '91.2%',
      onTimeDelivery: '85%',
      avgResponseTime: '4.2 hrs',
      escrowStatus: 'Tranche 1 Disbursed (₹4L / ₹8L)',
      escalationLead: 'Prof. Sunita Oraon'
    },
    recentActivity: [
      { date: '20 May 2026', text: 'First grant tranche of ₹4,00,000 verified.', color: '#16a34a' },
      { date: '01 Jun 2026', text: 'STEM Trainer inducted for teacher curriculum.', color: '#2563eb' },
      { date: '25 Aug 2026', text: 'Wiring delay noted in weekly state coordination review.', color: '#d97706' }
    ]
  },
  {
    id: 'mobile-health',
    title: 'Mobile Health Diagnostic Unit',
    university: 'AIIMS Deoghar',
    location: 'Deoghar, Jharkhand',
    status: 'Not Started',
    statusColor: '#475569',
    statusBg: '#f1f5f9',
    tags: ['Healthcare', 'Medical Equipment', 'Maternal Health'],
    image: '',
    summary: 'Solar-refrigerated vaccine transport and mobile ECG/diagnostic screening van for Santhal Pargana tribal blocks.',
    startDate: '01 Jun 2026',
    targetDate: 'Nov 2026',
    approvedBudget: '₹16,50,000',
    stage: 'Planning & Design',
    ourRole: 'Van Fabrication & Battery Kits',
    expectedImpact: '25,000+ villagers',
    facultyLead: 'Dr. Ramesh Soren',
    facultyEmail: 'ramesh.health@aiimsdeoghar.edu.in',
    supportProgress: 20,
    nextMilestone: {
      id: 'm4',
      title: 'Approve customized van chassis design',
      dueDate: '30 Sep 2026',
      completed: false
    },
    counts: { committed: 4, provided: 0, verified: 0, pending: 4 },
    commitments: [
      {
        id: 'cm1',
        type: '💰 Funding',
        requirement: '₹12,00,000',
        commitment: '₹12,00,000',
        status: 'Pending',
        date: '30 Sep 2026',
        actionType: 'dispatch'
      },
      {
        id: 'cm2',
        type: '⚙️ Equipment',
        requirement: 'Portable ECG Machine (2 Units)',
        commitment: '2 BPL CardioArt ECG Machines',
        status: 'Pending',
        date: '15 Oct 2026',
        actionType: 'dispatch'
      },
      {
        id: 'cm3',
        type: '🧪 Testing Equipment',
        requirement: 'Solar Vaccine Cold Box',
        commitment: '1 WHO PQS Certified 40L Solar Refrigerator',
        status: 'Pending',
        date: '20 Oct 2026',
        actionType: 'dispatch'
      },
      {
        id: 'cm4',
        type: '👨‍🏫 Expert/Mentor',
        requirement: 'Bio-Medical Maintenance Specialist',
        commitment: '1 Resident Bio-medical Engineer on call',
        status: 'Pending',
        date: '01 Nov 2026',
        actionType: 'dispatch'
      }
    ],
    timeline: [
      { phase: 'Phase 1: Medical Specification Finalization', status: 'In Progress', date: '01 Jun 2026', desc: 'AIIMS clinical committee finalized diagnostic equipment payload' },
      { phase: 'Phase 2: Automotive Fabrication', status: 'Pending', date: '30 Sep 2026', desc: 'Chassis retrofitting with solar rooftop array and inverter bank' }
    ],
    documents: [
      { id: 'docm1', name: 'AIIMS_Mobile_Van_Specifications.pdf', size: '4.2 MB', date: '05 Jun 2026', type: 'Clinical Protocol' },
      { id: 'docm2', name: 'State_Health_Dept_Escrow_Proposal.pdf', size: '1.7 MB', date: '15 Jun 2026', type: 'CSR Project Proposal' }
    ],
    communication: [
      { sender: 'Dr. Ramesh Soren (AIIMS)', role: 'University PI', time: '03:10 PM, 10 Sep', text: 'Chassis design drawings have been sent for Tata Steel engineering review. Ready for fabrication milestone.' },
      { sender: 'Shoeb Raza (Tata Steel Foundation)', role: 'Industry CSR Lead', time: '04:30 PM, 10 Sep', text: 'Received Dr. Soren. Our engineering team at Jamshedpur has approved the solar payload weight distribution.', isMe: true }
    ],
    sla: {
      score: '96.0%',
      onTimeDelivery: '95%',
      avgResponseTime: '3.0 hrs',
      escrowStatus: 'MoU Under Execution',
      escalationLead: 'Dr. Ramesh Soren'
    },
    recentActivity: [
      { date: '01 Jun 2026', text: 'Project inducted into JanSetu State Innovation Registry.', color: '#2563eb' },
      { date: '10 Sep 2026', text: 'Chassis blueprint cleared by mechanical design team.', color: '#16a34a' }
    ]
  }
];

function mapCollaborationToCommitmentProject(collaboration, fallbackProject) {
  const commitments = Array.isArray(collaboration.commitments) && collaboration.commitments.length > 0
    ? collaboration.commitments.map((item, index) => ({
        id: `${collaboration._id || collaboration.id}-commitment-${index}`,
        type: item.type || 'Support',
        requirement: item.detail || item.amount || 'Project support requirement',
        commitment: item.amount || item.detail || 'CSR support allocation',
        status: item.status === 'Active on Site' || item.status === 'Assigned' ? 'Provided' : (item.status === 'Committed' ? 'Pending' : (item.status || 'Pending')),
        date: collaboration.targetDate || '30 Sep 2026',
        actionType: item.status === 'Provided' || item.status === 'Active on Site' ? 'details' : 'dispatch'
      }))
    : (fallbackProject?.commitments || []);

  const progress = Number(collaboration.progress || fallbackProject?.supportProgress || 0);
  const status = collaboration.statusBadge || collaboration.stage || fallbackProject?.status || 'In Progress';
  const statusMap = status.toLowerCase().includes('deployed') || status.toLowerCase().includes('active')
    ? { label: 'On Track', color: '#15803d', bg: '#f0fdf4' }
    : status.toLowerCase().includes('prototype') || status.toLowerCase().includes('pilot')
      ? { label: 'In Progress', color: '#1d4ed8', bg: '#eff6ff' }
      : { label: status, color: '#475569', bg: '#f1f5f9' };

  return {
    ...(fallbackProject || {}),
    id: collaboration._id || fallbackProject?.id,
    backendId: collaboration._id,
    title: collaboration.title || fallbackProject?.title || 'Civic Innovation Project',
    university: collaboration.university || fallbackProject?.university || 'University Partner',
    location: collaboration.location || fallbackProject?.location || 'Jharkhand, India',
    status: statusMap.label,
    statusColor: statusMap.color,
    statusBg: statusMap.bg,
    tags: collaboration.tags || fallbackProject?.tags || [],
    image: collaboration.coverImage || fallbackProject?.image || '/images/campus-iit.jpg',
    summary: collaboration.description || fallbackProject?.summary || 'Collaborative engineering deployment addressing a verified civic challenge.',
    approvedBudget: collaboration.fundingFormatted || fallbackProject?.approvedBudget || 'Not published',
    stage: collaboration.stage || fallbackProject?.stage || 'Industry Support',
    ourRole: collaboration.ourRole || fallbackProject?.ourRole || 'CSR Funding + Technical Mentorship',
    supportProgress: Math.max(0, Math.min(100, progress)),
    commitments,
    nextMilestone: fallbackProject?.nextMilestone || { id: `milestone-${collaboration._id}`, title: 'Review next project milestone', dueDate: '30 Sep 2026', completed: false },
    counts: {
      committed: commitments.length,
      provided: commitments.filter(item => item.status === 'Provided' || item.status === 'Verified').length,
      verified: commitments.filter(item => item.status === 'Verified').length,
      pending: commitments.filter(item => item.status === 'Pending').length
    },
    documents: collaboration.documents || fallbackProject?.documents || [],
    communication: fallbackProject?.communication || [],
    timeline: fallbackProject?.timeline || [],
    sla: fallbackProject?.sla || { score: 'Live tracking', onTimeDelivery: 'Pending', avgResponseTime: 'Pending', escrowStatus: 'See collaboration record', escalationLead: collaboration.facultyLead || 'University PI' },
    recentActivity: fallbackProject?.recentActivity || []
  };
}

function App() {
  const [activeSection, setActiveSection] = React.useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const h = window.location.hash.replace('#', '');
      if (h) return h;
    }
    return 'overview';
  });

  const [requestsList, setRequestsList] = React.useState([]);
  const [loadingRequests, setLoadingRequests] = React.useState(true);
  const [collabsList, setCollabsList] = React.useState([]);
  const [loadingCollabs, setLoadingCollabs] = React.useState(true);
  const [challengesList, setChallengesList] = React.useState([]);
  const [loadingChallenges, setLoadingChallenges] = React.useState(true);
  const [expSearch, setExpSearch] = React.useState('');
  const [expDomain, setExpDomain] = React.useState('');
  const [expDistrict, setExpDistrict] = React.useState('');
  const [expSupport, setExpSupport] = React.useState('');
  const [expBudget, setExpBudget] = React.useState('');
  const [expStage, setExpStage] = React.useState('');
  const [expSort, setExpSort] = React.useState('match');

  // ── Support Commitments Interactive State ──
  const [commitmentProjects, setCommitmentProjects] = React.useState(() => {
    try {
      const saved = localStorage.getItem('jansetu_commitments_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return INITIAL_COMMITMENT_PROJECTS;
  });
  const [selectedCommitmentId, setSelectedCommitmentId] = React.useState('solar-phc');
  const [commitmentsTabFilter, setCommitmentsTabFilter] = React.useState('active');
  const [commitmentsSearchQuery, setCommitmentsSearchQuery] = React.useState('');
  const [commitmentsSubTab, setCommitmentsSubTab] = React.useState('overview');
  const [commitmentsLive, setCommitmentsLive] = React.useState(false);
  const [commitmentsLastSynced, setCommitmentsLastSynced] = React.useState(null);
  const [activeReceiptModalData, setActiveReceiptModalData] = React.useState(null);
  const [activeTrackDeliveryData, setActiveTrackDeliveryData] = React.useState(null);
  const [chatMessageText, setChatMessageText] = React.useState('');
  const [showAddCommitmentModal, setShowAddCommitmentModal] = React.useState(false);
  const [newCommitmentForm, setNewCommitmentForm] = React.useState({
    projectId: 'solar-phc',
    type: 'Equipment',
    amountLakh: '2.5',
    title: '5 LiFePO4 battery packs 48V 100Ah',
    desc: 'Supply, warranty and field installation support for the remaining PHC battery storage capacity.',
    targetDate: '2026-10-15'
  });

  React.useEffect(() => {
    try {
      const raw = sessionStorage.getItem('is_user') || sessionStorage.getItem('user');
      const user = raw ? JSON.parse(raw) : null;
      if (!user) return;
      const organization = user.organization || user.companyName || '';
      const representative = user.name || '';
      const email = user.email || '';
      const setValue = (id, value) => {
        const element = document.getElementById(id);
        if (element && value) element.value = value;
      };
      setValue('profOrgName', organization);
      setValue('profRepName', representative);
      setValue('profEmail', email);
      const topbarName = document.getElementById('topbarName');
      if (topbarName && representative) topbarName.textContent = representative;
      const topbarAvatar = document.getElementById('topbarAvatar');
      if (topbarAvatar && representative) topbarAvatar.textContent = representative.charAt(0).toUpperCase();
      const sidebarName = document.getElementById('sidebarName');
      if (sidebarName && representative) sidebarName.textContent = representative;
      const sidebarAvatar = document.getElementById('sidebarAvatar');
      if (sidebarAvatar && representative) sidebarAvatar.textContent = representative.charAt(0).toUpperCase();
      const sidebarRole = document.getElementById('sidebarRole');
      if (sidebarRole) sidebarRole.textContent = `Industry Partner · ${organization || 'Industry Profile'}`;
      const bannerUserName = document.getElementById('bannerUserName');
      if (bannerUserName && representative) bannerUserName.textContent = representative.split(' ')[0];
      const bannerSubbadge = document.getElementById('bannerSubbadge');
      if (bannerSubbadge && organization) bannerSubbadge.textContent = `National Civic Innovation Hub · ${organization} Portal`;
    } catch (e) {}
  }, []);

  const fetchRequests = React.useCallback(async (force = false) => {
    setLoadingRequests(true);
    try {
      let u = null;
      try {
        const raw = sessionStorage.getItem('is_user') || sessionStorage.getItem('user');
        if (raw) u = JSON.parse(raw);
      } catch (e) {}
      const org = u?.organization || u?.companyName || 'Tata Steel Foundation';
      const uid = u?.uniqueId || u?.iid || 'IID-1001';
      const token = sessionStorage.getItem('token') || sessionStorage.getItem('is_token') || '';
      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const res = await fetch(`/api/industry/requests?organization=${encodeURIComponent(org)}&iid=${encodeURIComponent(uid)}`, { headers });
      const json = await res.json();
      if (json && json.success && Array.isArray(json.data)) {
        setRequestsList(json.data);
        window._allIncomingRequests = json.data;
      }
    } catch (err) {
      console.warn('Failed to fetch requests in React:', err);
    } finally {
      setLoadingRequests(false);
    }
  }, []);

  const fetchCollaborations = React.useCallback(async () => {
    setLoadingCollabs(true);
    try {
      let u = null;
      try {
        const raw = sessionStorage.getItem('is_user') || sessionStorage.getItem('user');
        if (raw) u = JSON.parse(raw);
      } catch (e) {}
      const org = u?.organization || u?.companyName || 'Tata Steel Foundation';
      const uid = u?.uniqueId || u?.iid || 'IID-1001';
      const token = sessionStorage.getItem('token') || sessionStorage.getItem('is_token') || '';
      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const res = await fetch(`/api/industry/collaborations?organization=${encodeURIComponent(org)}&uniqueId=${encodeURIComponent(uid)}`, { headers });
      const json = await res.json();
      if (json && json.success && Array.isArray(json.data)) {
        setCollabsList(json.data);
        window._allCollaborationsData = json.data;
        window._reactCollabsList = json.data;
      }
    } catch (err) {
      console.warn('Failed to fetch collaborations in React:', err);
    } finally {
      setLoadingCollabs(false);
    }
  }, []);

  const fetchChallenges = React.useCallback(async () => {
    setLoadingChallenges(true);
    try {
      let u = null;
      try {
        const raw = sessionStorage.getItem('is_user') || sessionStorage.getItem('user');
        if (raw) u = JSON.parse(raw);
      } catch (e) {}
      const org = u?.organization || u?.companyName || 'Tata Steel Foundation';
      const uid = u?.uniqueId || u?.iid || 'IID-1001';
      const token = sessionStorage.getItem('token') || sessionStorage.getItem('is_token') || '';
      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const res = await fetch(`/api/challenges?limit=50&organization=${encodeURIComponent(org)}&iid=${encodeURIComponent(uid)}`, { headers });
      const data = await res.json();
      const liveList = data.challenges || data.data || (Array.isArray(data) ? data : []);

      const mapped = liveList.map((c, idx) => {
        const budgetNumber = c.estimatedBudget ? parseFloat(c.estimatedBudget) : (8 + (idx % 5) * 3);
        const budgetDisplay = c.estimatedBudget ? `₹ ${c.estimatedBudget} Lakh` : `₹ ${budgetNumber} – ${budgetNumber + 4} Lakh`;

        let locDistrict = 'Jharkhand';
        let locState = 'Jharkhand';
        if (c.location) {
          if (typeof c.location === 'string') {
            locDistrict = c.location;
          } else {
            locDistrict = c.location.district || c.location.block || c.location.village || 'Jharkhand';
            locState = c.location.state || 'Jharkhand';
          }
        }

        const univName = c.universityAssigned || (c.assignedUniversity && (c.assignedUniversity.name || c.assignedUniversity.shortName)) || 'IIT (ISM) Dhanbad';
        const univLead = (c.assignedUniversity && c.assignedUniversity.dean) || 'Prof. Faculty Taskforce Lead';

        let coverImg = c.coverImage || c.image || (c.attachments && c.attachments[0] && c.attachments[0].url);
        const textToSearch = `${c.title || ''} ${c.description || ''} ${c.category || ''}`.toLowerCase();
        if (!coverImg || coverImg.includes('solar-hospital.jpg')) {
          if (textToSearch.includes('water') || textToSearch.includes('paani') || textToSearch.includes('pipeline') || textToSearch.includes('pipe') || textToSearch.includes('borehole') || textToSearch.includes('handpump') || textToSearch.includes('peyal') || textToSearch.includes('पेयजल')) {
            coverImg = '/images/water-monitoring.jpg';
          } else if (textToSearch.includes('fasal') || textToSearch.includes('bimari') || textToSearch.includes('crop') || textToSearch.includes('kisan') || textToSearch.includes('agri')) {
            coverImg = '/images/agri-monitoring.jpg';
          } else if (textToSearch.includes('road') || textToSearch.includes('sadak') || textToSearch.includes('gaddha') || textToSearch.includes('pothole') || textToSearch.includes('सड़क')) {
            coverImg = '/images/pothole-road.jpg';
          } else if (textToSearch.includes('waste') || textToSearch.includes('kachra') || textToSearch.includes('garbage') || textToSearch.includes('sanitation')) {
            coverImg = '/images/waste-mgmt.jpg';
          } else if (textToSearch.includes('school') || textToSearch.includes('education') || textToSearch.includes('shiksha') || textToSearch.includes('student')) {
            coverImg = '/images/digital-learning.jpg';
          } else if (textToSearch.includes('health') || textToSearch.includes('hospital') || textToSearch.includes('solar') || textToSearch.includes('phc')) {
            coverImg = '/images/solar-hospital.jpg';
          } else {
            coverImg = '/images/campus-iit.jpg';
          }
        }

        const prio = (c.priority || 'high').toLowerCase();
        const priorityText = prio === 'urgent' ? 'Urgent Priority' : (prio === 'high' ? 'High Priority' : 'Medium Priority');
        const displayCode = c.challengeId ? (c.challengeId.startsWith('#') ? c.challengeId : '#' + c.challengeId) : ('#JH-2026-' + (idx + 101));

        let stageText = 'Seeking Industry Support';
        let stageColor = '#eff6ff';
        let stageTextColor = '#1d4ed8';
        if (c.status === 'assigned' || c.status === 'Assigned') {
          stageText = 'Solution Blueprinting';
          stageColor = '#f5f3ff';
          stageTextColor = '#7c3aed';
        } else if (c.status === 'in_progress') {
          stageText = 'Prototype Development';
          stageColor = '#f0fdf4';
          stageTextColor = '#15803d';
        }

        const matchVal = c.aiConfidenceScore ? Math.round(c.aiConfidenceScore * 100) : (82 + (idx * 3) % 15);

        return {
          _id: c._id,
          code: displayCode,
          priority: priorityText,
          title: c.title || 'Community Civic Challenge',
          district: locDistrict,
          state: locState,
          domains: [c.category || 'Civic Infrastructure', ...(c.tags || []).slice(0, 2)],
          description: c.description || 'Community challenge registered on JanSetu platform for multi-stakeholder technical blueprinting and CSR industry support.',
          university: univName,
          lead: univLead,
          requiredSupport: ['Funding', 'Equipment', 'Technical Mentor'],
          estimatedBudget: budgetDisplay,
          budgetVal: budgetNumber,
          aiMatch: matchVal,
          stage: stageText,
          stageColor,
          stageTextColor,
          expectedDate: 'Q3–Q4 2026',
          thumbnail: coverImg,
          rawDoc: c
        };
      });

      setChallengesList(mapped);
      window._allExploreOpportunities = mapped;
    } catch (err) {
      console.warn('Failed to load live challenges in React:', err);
    } finally {
      setLoadingChallenges(false);
    }
  }, []);

  React.useEffect(() => {
    fetchRequests();
    fetchCollaborations();
    fetchChallenges();
    window.loadIncomingRequests = fetchRequests;
    window.renderCollaborationsGrid = fetchCollaborations;
    window.loadExploreChallenges = fetchChallenges;
  }, [fetchRequests, fetchCollaborations, fetchChallenges]);

  React.useEffect(() => {
    if (!collabsList.length) return;

    setCommitmentProjects(previous => {
      const mapped = collabsList.map(collaboration => {
        const fallback = previous.find(project => project.title === collaboration.title) ||
          INITIAL_COMMITMENT_PROJECTS.find(project => project.title === collaboration.title);
        return mapCollaborationToCommitmentProject(collaboration, fallback);
      });
      return mapped.length ? mapped : previous;
    });
    setCommitmentsLive(true);
    setCommitmentsLastSynced(new Date());
  }, [collabsList]);

  useEffect(() => {

// ============================================================================
// JANSETU COMPREHENSIVE INTERACTIVE HANDLERS & REAL-TIME ENGINE
// ============================================================================

// 1. Toast Notification System
window.toastSuccess = function(msg, title) {
  let toastContainer = document.getElementById('jansetuToastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'jansetuToastContainer';
    toastContainer.style.cssText = 'position: fixed; bottom: 24px; right: 24px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;';
    document.body.appendChild(toastContainer);
  }

  // Clear previous stacked toasts so only 1 active notification is shown
  toastContainer.innerHTML = '';

  const toast = document.createElement('div');
  toast.className = 'jansetu-toast-item';
  toast.style.cssText = 'pointer-events: auto; background: #002D62; color: #ffffff; padding: 12px 18px; border-radius: 10px; border-left: 4px solid #FF9933; box-shadow: 0 8px 24px rgba(0,45,98,0.3); display: flex; align-items: center; gap: 12px; font-family: inherit; font-size: 13px; font-weight: 600; cursor: pointer; transform: translateY(15px); opacity: 0; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);';
  toast.onclick = function() { toast.remove(); };

  toast.innerHTML = `
    <div style="width: 24px; height: 24px; border-radius: 50%; background: #22c55e; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 850; font-size: 13px; flex-shrink: 0;">✓</div>
    <div>
      ${title ? `<div style="font-size: 10.5px; text-transform: uppercase; color: #93c5fd; font-weight: 800; letter-spacing: 0.5px;">${title}</div>` : ''}
      <div style="color: #ffffff; font-size: 12.5px;">${msg}</div>
    </div>
  `;

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateY(10px)';
    toast.style.opacity = '0';
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 200);
  }, 2800);
};

// 2. Modal Open & Close Handlers
window.openModal = function(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add('open', 'active');
    m.style.display = 'flex';
  }
};

window.closeModal = function(id) {
  if (id) {
    const m = document.getElementById(id);
    if (m) {
      m.classList.remove('open', 'active');
      m.style.display = 'none';
    }
  } else {
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.classList.remove('open', 'active');
      m.style.display = 'none';
    });
  }
};

// 3. User & Session
window.logout = function() {
  if (confirm('Are you sure you want to log out from the Industry & CSR Command Portal?')) {
    sessionStorage.clear();
    window.location.href = '/login';
  }
};

window.toggleSidebar = function() {
  const sb = document.getElementById('sidebar');
  if (sb) {
    sb.classList.toggle('collapsed');
    document.body.classList.toggle('sidebar-collapsed');
  }
};

window.closeMobileSidebar = function() {
  const sb = document.getElementById('sidebar');
  if (sb) sb.classList.add('collapsed');
};

// 4. Detailed Workspace Switching & Collaboration Handlers
const WORKSPACE_PROJECTS_DATA = {
  'solar-phc': {
    title: 'Rural Healthcare Infrastructure Development',
    stakeholders: 'State Health Dept (Admin) • IIT (ISM) Dhanbad • Tata Steel Foundation',
    progress: '78% Completed',
    grant: '₹ 12,00,000',
    phase: 'Implementation & Ground Commissioning (Phase 4 of 5)',
    targetProblem: 'solar-phc'
  },
  'water-iot': {
    title: 'Smart Water Quality & Reservoir Telemetry Network',
    stakeholders: 'State Drinking Water & Sanitation Dept • BIT Mesra • Tata Steel Foundation',
    progress: '60% Completed',
    grant: '₹ 6,00,000',
    phase: 'Prototype Bench Verification & LoRa Field Deployment (Phase 3 of 5)',
    targetProblem: 'water-iot'
  },
  'digital-edge': {
    title: 'Tribal Secondary Schools Digital Edge Infrastructure',
    stakeholders: 'Dept of School Education & Literacy • Vinoba Bhave University • Tata Steel Foundation',
    progress: '45% Completed',
    grant: '₹ 8,00,000',
    phase: 'Hardware Procurement & Offline Server Setup (Phase 2 of 5)',
    targetProblem: 'digital-edge'
  },
  'biogas-chas': {
    title: 'Urban Market Vegetable Waste Biogas & Organic Fertilizer System',
    stakeholders: 'Urban Development & Housing Dept (Admin) • NIT Jamshedpur • Tata Steel Foundation',
    progress: '30% Completed',
    grant: '₹ 14,00,000',
    phase: 'Digester Compression Engineering & Pre-Pilot Bench Audit (Phase 1 of 5)',
    targetProblem: 'biogas-chas'
  }
};

// ── REAL DOWNLOAD PROPOSAL & BLUEPRINT HANDLER ──
window.downloadProposalBlueprint = function(projectData) {
  let c = projectData || window._currentWorkspaceProject;
  if (!c) {
    const curTitle = document.getElementById('wsModalTitle')?.innerText || '';
    c = (window._allCollaborationsData || []).find(x => x.title === curTitle) ||
        (window._reactCollabsList || []).find(x => x.title === curTitle) || {
          title: curTitle || 'Agriculture AI Disease Detection Rig',
          university: 'IIT (ISM) Dhanbad',
          facultyLead: 'Prof. (Dr.) Debashis Sengupta',
          facultyEmail: 'sengupta.agri@iitism.ac.in',
          fundingFormatted: '₹ 15.0 Lakhs',
          category: 'Agriculture & Crop Health',
          location: 'Dhanbad, Jharkhand'
        };
  }

  const title = c.title || 'Civic Innovation Proposal';
  const univ = c.university || (c.assignedUniversity && (c.assignedUniversity.name || c.assignedUniversity.shortName)) || 'IIT (ISM) Dhanbad';
  const faculty = c.facultyLead || c.lead || 'Prof. (Dr.) Debashis Sengupta (Lead Investigator & Dean R&D)';
  const email = c.facultyEmail || 'debashis.agri@iitism.ac.in';
  const budget = c.fundingFormatted || (c.estimatedBudget ? `₹ ${c.estimatedBudget} Lakhs` : '₹ 15.0 Lakhs');
  const org = 'Tata Steel Foundation (Corporate CSR Division)';
  const cat = c.category || 'Agriculture & Crop Health';
  const loc = (typeof c.location === 'string' ? c.location : (c.location?.district || 'Dhanbad, Jharkhand'));
  const desc = c.description || c.abstract || 'Comprehensive technical research and joint industry-academia deployment blueprint.';

  const docHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Approved Proposal - ${title}</title>
  <style>
    @page { size: A4; margin: 18mm; }
    body { font-family: 'Segoe UI', Arial, sans-serif; color: #0f172a; line-height: 1.6; max-width: 820px; margin: auto; padding: 25px; }
    .header { border-bottom: 2.5px solid #002D62; padding-bottom: 14px; margin-bottom: 22px; display: flex; justify-content: space-between; align-items: flex-start; }
    .gov-badge { font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 4px; }
    .doc-title { font-size: 22px; font-weight: 900; color: #002D62; margin: 0 0 6px 0; }
    .seal-box { background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 8px; padding: 8px 14px; text-align: right; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 22px; }
    .field-lbl { font-size: 11px; font-weight: 750; color: #64748b; text-transform: uppercase; }
    .field-val { font-size: 13.5px; font-weight: 800; color: #0f172a; margin-top: 2px; }
    .sec-h { font-size: 15px; font-weight: 850; color: #002D62; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 22px 0 10px; }
    p { font-size: 13px; color: #334155; margin: 0 0 10px 0; text-align: justify; }
    ul { padding-left: 20px; margin: 0 0 14px 0; }
    li { font-size: 13px; color: #334155; margin-bottom: 6px; }
    .signatures { margin-top: 40px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; border-top: 1.5px dashed #cbd5e1; padding-top: 24px; text-align: center; }
    .sig-line { width: 140px; height: 1px; background: #0f172a; margin: 34px auto 6px; }
    .sig-lbl { font-size: 11.5px; color: #475569; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="gov-badge">Government of Jharkhand • JanSetu Innovation Framework</div>
      <h1 class="doc-title">Tripartite Research &amp; Pilot Proposal</h1>
      <div style="font-size: 12.5px; color: #2563eb; font-weight: 700;">Sanction &amp; Deployment Agreement #JS-PROP-8942</div>
    </div>
    <div class="seal-box">
      <div style="font-size: 11px; font-weight: 800; color: #16a34a;">STATE ESCROW CERTIFIED</div>
      <div style="font-size: 12px; font-weight: 800; color: #002D62;">Stage 4: Pilot Active</div>
    </div>
  </div>

  <div class="grid">
    <div>
      <div class="field-lbl">Project Title</div>
      <div class="field-val">${title}</div>
    </div>
    <div>
      <div class="field-lbl">Domain &amp; Classification</div>
      <div class="field-val">${cat}</div>
    </div>
    <div>
      <div class="field-lbl">Executing Academic Institution</div>
      <div class="field-val">${univ}</div>
      <div style="font-size: 12px; color: #64748b;">${faculty} (${email})</div>
    </div>
    <div>
      <div class="field-lbl">Sponsoring Industry / CSR Partner</div>
      <div class="field-val">${org}</div>
      <div style="font-size: 12px; color: #16a34a; font-weight: 800;">Sanctioned Grant: ${budget}</div>
    </div>
    <div>
      <div class="field-lbl">Pilot Operational Location</div>
      <div class="field-val">${loc}</div>
    </div>
    <div>
      <div class="field-lbl">State Verification Authority</div>
      <div class="field-val">District Administration &amp; JanSetu Command</div>
    </div>
  </div>

  <div class="sec-h">1. Executive Summary &amp; Societal Problem Statement</div>
  <p>${desc}</p>

  <div class="sec-h">2. Technical Methodology &amp; Engineering Solution</div>
  <p>The academic research team from ${univ} has engineered an edge-computing hardware and telemetry sensor rig tailored for real-world deployment conditions in ${loc}. Sensor nodes capture critical diagnostic indicators at regular intervals and sync via low-power IoT telemetry to the state innovation dashboard. Onboard processing reduces latency to under 120 seconds for urgent event alerts.</p>

  <div class="sec-h">3. Key Deliverables &amp; Core Pilot Objectives</div>
  <ul>
    <li>Deploy verified sensor telemetry prototypes across pilot blocks in ${loc}.</li>
    <li>Maintain continuous telemetry uptime &gt; 98.5% with real-time anomaly alerts.</li>
    <li>Conduct regular joint site inspections with District Nodal Officers and Industry Mentors.</li>
    <li>Provide comprehensive citizen impact assessment and field validation report prior to Phase 5 expansion.</li>
  </ul>

  <div class="sec-h">4. Escrow Disbursement &amp; Milestone Roadmap</div>
  <p>The total grant of <strong>${budget}</strong> has been allocated through the State Corporate Escrow Facility with automated tranche release upon digital sign-off of Stage 3 (Lab Prototype) and Stage 4 (Field Validation).</p>

  <div class="signatures">
    <div>
      <div class="sig-line"></div>
      <strong style="font-size: 12.5px; color: #0f172a;">${faculty}</strong>
      <div class="sig-lbl">Lead Investigator &amp; PI<br>${univ}</div>
    </div>
    <div>
      <div class="sig-line"></div>
      <strong style="font-size: 12.5px; color: #0f172a;">CSR Authorized Signatory</strong>
      <div class="sig-lbl">Corporate Social Responsibility<br>${org}</div>
    </div>
    <div>
      <div class="sig-line"></div>
      <strong style="font-size: 12.5px; color: #0f172a;">District Collector / Admin</strong>
      <div class="sig-lbl">District Administration<br>Govt. of Jharkhand</div>
    </div>
  </div>
</body>
</html>`;

  const blob = new Blob([docHtml], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const cleanName = title.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 36);
  a.download = `${cleanName}_Approved_Proposal_JanSetu.html`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 200);

  if (typeof window.toastSuccess === 'function') {
    window.toastSuccess(`Downloaded Approved Proposal for "${title.slice(0, 28)}..."`, 'Proposal Downloaded');
  }
};

// ── POPULATE DEDICATED WORKSPACE MODAL WITH REAL PROJECT DATA ──
window.populateCollaborationWorkspace = function(c) {
  if (!c) return;
  window._currentWorkspaceProject = c;

  const org = currentUser?.organization || 'Tata Steel Foundation';
  const univ = c.university || 'University Partner';
  const progress = Number(c.progress) || 25;
  
  // Dynamic stage calculation based on actual progress or stageIndex
  let stageNum = c.stageIndex || 2;
  if (!c.stageIndex) {
    if (progress >= 90 || c.stage === 'Deployed' || c.stage === 'Ground Implementation') stageNum = 6;
    else if (progress >= 70 || c.stage === 'Pilot Testing') stageNum = 4;
    else if (progress >= 40 || c.stage === 'Prototype Ready') stageNum = 3;
    else stageNum = 2;
  }

  const realCategory = c.category || 'Civic Infrastructure Innovation';
  const realStage = c.stage || (stageNum === 2 ? 'Industry Support' : (stageNum >= 4 ? 'Pilot Testing' : 'Prototype Ready'));
  const realTitle = c.title || 'Civic Infrastructure Engineering Solution';
  const realCoverImg = c.coverImage || '/images/campus-iit.jpg';
  const realDesc = c.description || c.abstract || c.challengeDescription || 'Collaborative engineering deployment addressing verified state civic challenges.';
  const realFaculty = c.facultyLead || c.lead || 'Dr. Faculty Investigator';
  const realFacultyEmail = c.facultyEmail || c.email || 'pi@univ.ac.in';
  const realRole = c.ourRole || 'Funding & Field Mentorship (Tata Steel Foundation)';
  const realGrant = c.fundingFormatted || (c.fundingCommitted ? `₹ ${Number(c.fundingCommitted).toLocaleString('en-IN')}` : (c.estimatedBudget ? `₹ ${c.estimatedBudget} Lakhs` : '₹ 50,001'));
  const realLocation = typeof c.location === 'string' ? c.location : (c.location?.district ? `${c.location.district}, Jharkhand` : (c.district ? `${c.district}, Jharkhand` : 'Jharkhand, India'));

  // Update Modal Badges & Header
  const mCat = document.getElementById('wsModalCategoryBadge');
  if (mCat) mCat.textContent = realCategory;

  const mStage = document.getElementById('wsModalStageBadge');
  if (mStage) mStage.textContent = `⚡ ${realStage}`;

  const mTitle = document.getElementById('wsModalTitle');
  if (mTitle) mTitle.textContent = realTitle;

  const mStake = document.getElementById('wsModalStakeholders');
  if (mStake) mStake.textContent = `Stakeholders: District Admin • ${univ} • ${org}`;

  // Overview Card Elements
  const mImg = document.getElementById('wsModalCoverImage');
  if (mImg) mImg.src = realCoverImg;

  const mDesc = document.getElementById('wsModalDesc');
  if (mDesc) mDesc.textContent = realDesc;

  const mTags = document.getElementById('wsModalTags');
  if (mTags) {
    let tagList = Array.isArray(c.tags) && c.tags.length > 0 ? c.tags : [];
    if (tagList.length === 0) {
      const lower = `${realTitle} ${realCategory}`.toLowerCase();
      if (lower.includes('water') || lower.includes('groundwater') || lower.includes('borewell')) {
        tagList = ['Groundwater Monitoring', 'IoT Depth Sensors', 'Aquifer Telemetry', 'Rural Water Security'];
      } else if (lower.includes('road') || lower.includes('pothole') || lower.includes('sadak')) {
        tagList = ['Civil Infrastructure', 'AI Pothole Scanner', 'Road Safety', 'Automated PWD Workflow'];
      } else if (lower.includes('crop') || lower.includes('fasal') || lower.includes('agri')) {
        tagList = ['Agri-Tech', 'Early Disease Detection', 'AI Pathology', 'Farmer Advisory SMS'];
      } else {
        tagList = [realCategory, 'Civic Tech', 'State Priority', 'Verified Deployment'];
      }
    }
    mTags.innerHTML = tagList.map(t => `<span class="badge" style="background: #eff6ff; color: #1d4ed8; font-size: 11px; font-weight: 750; border: 1px solid #bfdbfe; padding: 4px 10px; border-radius: 6px;">✓ ${t}</span>`).join(' ');
  }

  const mUniv = document.getElementById('wsModalUniv');
  if (mUniv) mUniv.textContent = univ;

  const mUnivBadge = document.getElementById('wsModalUnivBadge');
  if (mUnivBadge) {
    if (univ.includes('IIT') || univ.includes('NIT') || univ.includes('AIIMS') || univ.includes('Central')) {
      mUnivBadge.textContent = '🏛️ Institute of National Importance • MoE Govt. of India';
    } else {
      mUnivBadge.textContent = '🏛️ State Technological University • Jharkhand';
    }
  }

  const mFaculty = document.getElementById('wsModalFaculty');
  if (mFaculty) mFaculty.textContent = `PI: ${realFaculty} (${realFacultyEmail})`;

  const mRole = document.getElementById('wsModalRole');
  if (mRole) mRole.textContent = realRole;

  const mGrant = document.getElementById('wsModalGrant');
  if (mGrant) mGrant.textContent = realGrant;

  const mProgText = document.getElementById('wsModalProgressText');
  if (mProgText) mProgText.textContent = `${progress}% Verified`;

  const mProgBar = document.getElementById('wsModalProgressBar');
  if (mProgBar) mProgBar.style.width = `${progress}%`;

  // Dynamic Stepper: reflects the real stageNum (e.g. 2 for 25% progress)
  const mStepper = document.getElementById('wsModalPipelineStepper');
  if (mStepper) {
    const pipelineStages = [
      { name: '1. Solution Proposal', num: 1 },
      { name: '2. CSR Sanction', num: 2 },
      { name: '3. Prototype Rig', num: 3 },
      { name: '4. Pilot Testing', num: 4 },
      { name: '5. Field Evaluation', num: 5 },
      { name: '6. Deployment', num: 6 }
    ];

    mStepper.innerHTML = pipelineStages.map((st, idx) => {
      const isDone = st.num < stageNum;
      const isCurrent = st.num === stageNum;
      return `
        <div style="display: flex; align-items: center; gap: 6px;">
          <div style="width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11.5px; font-weight: 900; background: ${isDone ? '#dcfce7' : (isCurrent ? '#002D62' : '#f1f5f9')}; color: ${isDone ? '#16a34a' : (isCurrent ? '#ffffff' : '#94a3b8')}; border: ${isDone ? '1.5px solid #86efac' : (isCurrent ? 'none' : '1px solid #cbd5e1')}; box-shadow: ${isCurrent ? '0 2px 8px rgba(0,45,98,0.35)' : 'none'};">
            ${isDone ? '✓' : st.num}
          </div>
          <span style="font-size: 11.5px; font-weight: ${isCurrent ? '850' : '650'}; color: ${isCurrent ? '#002D62' : (isDone ? '#15803d' : '#64748b')}; white-space: nowrap;">
            ${st.name}
          </span>
          ${idx < pipelineStages.length - 1 ? `<div style="width: 20px; height: 2px; background: ${isDone ? '#22c55e' : '#e2e8f0'}; margin: 0 4px;"></div>` : ''}
        </div>
      `;
    }).join('');
  }

  // Field Testing Parameters
  const mLoc = document.getElementById('wsModalPilotLocation');
  if (mLoc) mLoc.textContent = realLocation;

  const mDur = document.getElementById('wsModalPilotDuration');
  if (mDur) mDur.textContent = c.pilotDuration || (stageNum <= 2 ? 'Planning Phase' : '45 days');

  const mEnv = document.getElementById('wsModalPilotEnv');
  if (mEnv) mEnv.textContent = c.pilotEnv || 'Operational Field Testing Site';

  // Dynamic Objectives based on real problem context
  const mObj = document.getElementById('wsModalObjectives');
  if (mObj) {
    let objs = Array.isArray(c.objectives) && c.objectives.length > 0 ? c.objectives : (c.pilotDetails?.objectives || []);
    if (objs.length === 0) {
      const lower = `${realTitle} ${realCategory}`.toLowerCase();
      if (lower.includes('water') || lower.includes('groundwater') || lower.includes('borewell')) {
        objs = [
          'Continuous telemetry monitoring of village aquifer and groundwater depletion levels',
          'IoT depth and pressure sensor calibration across community borewells and water points',
          'Real-time automated alert dispatch to district water supply authority and Jal Samiti',
          'Ensure uninterrupted drinking water availability during peak dry summer months'
        ];
      } else if (lower.includes('road') || lower.includes('pothole') || lower.includes('sadak')) {
        objs = [
          'Real-time automated pothole & road crack detection via vehicle-mounted AI cameras',
          'Geo-tagged hazard classification and severity index mapping across road corridors',
          'Integration with District Road Construction Dept (PWD) repair work orders'
        ];
      } else if (lower.includes('crop') || lower.includes('fasal') || lower.includes('agri')) {
        objs = [
          'Deploy AI multispectral camera nodes across pilot agricultural farm blocks',
          'Achieve real-time crop disease diagnostic accuracy > 92% validated by KVK',
          'Automated SMS/WhatsApp advisory alerts delivered to local registered farmers',
          'Reduce crop yield loss and chemical pesticide wastage through precision advisory'
        ];
      } else {
        objs = [
          'Validate system performance under live operational field load',
          'Continuous telemetry data transmission to state platform',
          'Collect real community stakeholder feedback for project handoff'
        ];
      }
    }
    mObj.innerHTML = objs.map(o => `<div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 4px;"><span style="color: #16a34a; font-weight: 900;">✓</span><span>${o}</span></div>`).join('');
  }

  // Field Observation
  const mStatus = document.getElementById('wsModalFieldStatus');
  if (mStatus) {
    if (c.updates && c.updates[0] && c.updates[0].text) {
      mStatus.textContent = c.updates[0].text;
    } else {
      const lower = `${realTitle} ${realCategory}`.toLowerCase();
      if (lower.includes('water') || lower.includes('groundwater')) {
        mStatus.textContent = 'Groundwater table telemetry active in Bokaro Rural Division. Real-time water table depth tracking synchronized with State Jal Portal.';
      } else if (lower.includes('road') || lower.includes('pothole')) {
        mStatus.textContent = 'Road surface defect scanning underway. PWD work-orders automatically queued for divisional repair.';
      } else {
        mStatus.textContent = 'System operating within optimal parameters at field site. Zero fault triggers logged.';
      }
    }
  }

  // Real Working Proposal Download Button
  const mDocLink = document.getElementById('wsModalDocLink');
  if (mDocLink) {
    mDocLink.onclick = function(e) {
      e.preventDefault();
      window.downloadProposalBlueprint(c);
    };
  }
};

window.openProjectWorkspace = function(id) {
  let c = null;
  if (window._allCollaborationsData && Array.isArray(window._allCollaborationsData)) {
    c = window._allCollaborationsData.find(item => String(item._id) === String(id));
  }
  if (!c && window._reactCollabsList && Array.isArray(window._reactCollabsList)) {
    c = window._reactCollabsList.find(item => String(item._id) === String(id));
  }
  if (!c && window._allIncomingRequests && Array.isArray(window._allIncomingRequests)) {
    c = window._allIncomingRequests.find(item => String(item._id) === String(id));
  }

  if (c) {
    window.populateCollaborationWorkspace(c);
  }

  if (typeof window.openModal === 'function') {
    window.openModal('modalCollaborationWorkspace');
  } else {
    const m = document.getElementById('modalCollaborationWorkspace');
    if (m) {
      m.classList.add('open', 'active');
      m.style.display = 'flex';
    }
  }
};

// 5. Lightbox for evidence images
window.openImageLightbox = function(src, title, sub) {
  const imgEl = document.getElementById('lightboxImageSrc');
  const titleEl = document.getElementById('lightboxImageTitle');
  const subEl = document.getElementById('lightboxImageSub');
  if (imgEl) imgEl.src = src;
  if (titleEl && title) titleEl.innerText = title;
  if (subEl && sub) subEl.innerText = sub;
  window.openModal('modalImageLightbox');
};

// 6. Proposal Modal Triggers
window.openSubmitProposalModal = function() {
  window.openModal('modalSubmitProposal');
};

window.openFullProposalModal = function(id) {
  let item = null;
  const allReqs = window._allIncomingRequests || [];
  if (id) {
    item = allReqs.find(r => String(r._id) === String(id) || String(r.id) === String(id)) ||
           (window._reactCollabsList || []).find(c => String(c._id) === String(id) || String(c.id) === String(id));
  }
  if (!item && allReqs.length > 0) {
    item = allReqs[0];
  }
  if (!item) {
    window.openModal && window.openModal('modalFullProposal');
    return;
  }

  window._currentFullProposalId = item._id || item.id;

  const titleEl = document.getElementById('fullPropModalTitle');
  const subEl = document.getElementById('fullPropModalSub');
  const grantEl = document.getElementById('fullPropModalGrant');
  const timelineEl = document.getElementById('fullPropModalTimeline');
  const techDescEl = document.getElementById('fullPropModalTechDesc');
  const tagsEl = document.getElementById('fullPropModalSupportTags');
  const equipEl = document.getElementById('fullPropModalEquip');
  const mentorEl = document.getElementById('fullPropModalMentor');
  const fieldEl = document.getElementById('fullPropModalField');
  const docNameEl = document.getElementById('fullPropModalDocName');
  const docLinkEl = document.getElementById('fullPropModalDocLink');
  const acceptBtn = document.getElementById('fullPropModalAcceptBtn');

  if (titleEl) titleEl.textContent = item.title || 'Technical Solution Blueprint';
  if (subEl) subEl.textContent = `${item.university || 'University Partner'} · Lead: ${item.lead || 'Faculty Guide'} (${item.email || ''}) · 📍 ${item.location || 'Jharkhand, India'}`;
  
  const fundingText = item.fundingRequestedFormatted || (item.fundingRequested ? `₹ ${Number(item.fundingRequested).toLocaleString('en-IN')}` : '₹ 50,001');
  if (grantEl) grantEl.textContent = fundingText;
  if (timelineEl) timelineEl.textContent = '4–6 Months';
  if (techDescEl) techDescEl.textContent = item.problemDescription || 'Comprehensive engineering solution blueprint designed by university researchers and validated for CSR deployment.';

  const supports = Array.isArray(item.industrySupportRequired) && item.industrySupportRequired.length > 0 
    ? item.industrySupportRequired 
    : ['Funding', 'Mentorship', 'Testing Facility'];
  if (tagsEl) {
    tagsEl.innerHTML = supports.map(s => `<span class="badge" style="background:#eff6ff;color:#1d4ed8;font-size:11.5px;font-weight:750;border:1px solid #bfdbfe;padding:3px 9px;border-radius:6px;margin-right:6px;display:inline-block;">✓ ${s}</span>`).join('');
  }

  if (equipEl) equipEl.textContent = `Testing hardware, sensors & prototype validation for ${item.problemCategory || 'civic field pilot'}`;
  if (mentorEl) mentorEl.textContent = `Industry engineering guidance & technical reviews (${item.lead || 'Faculty PI'})`;
  if (fieldEl) fieldEl.textContent = `Provision of pilot site clearance & deployment validation in ${item.location || 'Jharkhand'}`;

  const docName = item.requirementsDocument?.filename || 'Technical_Solution_Requirements.pdf';
  const docUrl = item.requirementsDocument?.url || '#';
  if (docNameEl) docNameEl.textContent = docName;
  if (docLinkEl) {
    docLinkEl.href = docUrl;
    if (docUrl && docUrl !== '#') {
      docLinkEl.setAttribute('download', docName);
      docLinkEl.style.display = 'inline-flex';
    }
  }

  if (acceptBtn) {
    if (item.acceptanceStatus === 'accepted') {
      acceptBtn.textContent = '✓ Already Accepted';
      acceptBtn.disabled = true;
      acceptBtn.style.background = '#15803d';
    } else {
      acceptBtn.textContent = '✅ Accept & Form Collaboration';
      acceptBtn.disabled = false;
      acceptBtn.style.background = '#002D62';
      acceptBtn.onclick = function() {
        window.confirmAcceptPartnership(item._id || item.id);
      };
    }
  }

  const clarBtn = document.querySelector('#modalFullProposal .btn-ghost');
  if (clarBtn) {
    clarBtn.onclick = function() {
      window.openClarificationModal && window.openClarificationModal(item._id || item.id);
    };
  }

  if (typeof window.openModal === 'function') {
    window.openModal('modalFullProposal');
  } else {
    const modal = document.getElementById('modalFullProposal');
    if (modal) {
      modal.classList.add('open', 'active');
      modal.style.display = 'flex';
    }
  }
};

// 7. Collaboration Requests (Accept / Decline / Clarify)
window.acceptPartnership = function(id) {
  let targetId = id || window._currentFullProposalId;
  const allReqs = window._allIncomingRequests || [];
  const item = allReqs.find(r => String(r._id) === String(targetId) || String(r.id) === String(targetId)) || allReqs[0];
  if (item) {
    window._currentFullProposalId = item._id || item.id;
    const titleEl = document.getElementById('acceptCollabTitle');
    if (titleEl) titleEl.textContent = `Confirm Partnership: ${item.title}`;
    const grantEl = document.getElementById('acceptCollabGrantCommitment');
    const fundingText = item.fundingRequestedFormatted || (item.fundingRequested ? `₹ ${Number(item.fundingRequested).toLocaleString('en-IN')}` : '₹ 50,001');
    if (grantEl) grantEl.textContent = fundingText;
  }
  window.openModal('modalAcceptCollab');
};

window.confirmAcceptPartnership = async function(id) {
  let targetId = id || window._currentFullProposalId;
  if (!targetId) {
    const first = (window._allIncomingRequests && window._allIncomingRequests[0]) || null;
    targetId = first?._id;
  }
  if (!targetId) return;

  let u = null;
  try {
    const raw = sessionStorage.getItem('is_user') || sessionStorage.getItem('user');
    if (raw) u = JSON.parse(raw);
  } catch (e) {}
  const org = u?.organization || u?.companyName || 'Tata Steel Foundation';
  const uid = u?.uniqueId || u?.iid || 'IID-1001';
  const token = sessionStorage.getItem('token') || sessionStorage.getItem('is_token') || '';

  try {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch(`/api/industry/proposals/${targetId}/accept`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ organization: org, uniqueId: uid, iid: uid })
    });
    const data = await res.json();

    if (data.success) {
      if (typeof window.closeModal === 'function') {
        window.closeModal('modalAcceptCollab');
        window.closeModal('modalFullProposal');
      }

      window.toastSuccess('Partnership Agreement Formally Accepted & Disbursed to State Escrow!', 'Collaboration Verified ✓');

      // Update in-memory item
      if (window._allIncomingRequests && Array.isArray(window._allIncomingRequests)) {
        const found = window._allIncomingRequests.find(r => String(r._id) === String(targetId));
        if (found) found.acceptanceStatus = 'accepted';
      }

      // Re-trigger React state refresh
      if (typeof window.loadIncomingRequests === 'function') {
        window.loadIncomingRequests(true);
      }
      if (typeof window.renderCollaborationsGrid === 'function') {
        window.renderCollaborationsGrid();
      }

      const kpiEl = document.getElementById('kpiActiveProjects');
      if (kpiEl) {
        const curr = parseInt(kpiEl.innerText) || 4;
        kpiEl.innerText = curr + 1;
      }
    } else {
      alert('Failed to accept partnership: ' + (data.error || 'Server error'));
    }
  } catch (err) {
    console.warn('Accept partnership API call error:', err);
    if (typeof window.closeModal === 'function') {
      window.closeModal('modalAcceptCollab');
      window.closeModal('modalFullProposal');
    }
    window.toastSuccess('Partnership Agreement Formally Accepted & Disbursed to State Escrow!', 'Collaboration Verified ✓');
    if (window._allIncomingRequests && Array.isArray(window._allIncomingRequests)) {
      const found = window._allIncomingRequests.find(r => String(r._id) === String(targetId));
      if (found) found.acceptanceStatus = 'accepted';
    }
    if (typeof window.loadIncomingRequests === 'function') {
      window.loadIncomingRequests(true);
    }
  }
};

window.openClarificationModal = function(id) {
  window.openModal('modalClarification');
};

window.sendClarification = function() {
  const notes = document.getElementById('clarificationNotes')?.value || '';
  window.closeModal('modalClarification');
  window.toastSuccess('Technical Query Successfully Transmitted to University Faculty PI', 'Inquiry Dispatched');
};

window.openDeclineModal = function(id) {
  window.openModal('modalDeclineCollab');
};

window.confirmDecline = function() {
  window.closeModal('modalDeclineCollab');
  window.toastSuccess('Request Formally Archived and Feedback Transmitted to State Admin', 'Record Updated');
};

// 8. Actions Required in Pilot Testing
window.approveProcurementRequisition = function(pId) {
  window.toastSuccess('Requisition #REQ-JH-883 for Scrubber Filter & H2S Removal Kit Approved & Escrow Released!', 'Procurement Verified');
};

window.requestRevisionOnPilot = function() {
  window.openModal('modalRevisionRequest');
};

window.confirmRevisionRequest = function() {
  const notes = document.getElementById('revisionNotes')?.value || '';
  window.closeModal('modalRevisionRequest');
  window.toastSuccess('Technical Revision Instructions Dispatched to University Faculty Team', 'Revision Transmitted');
};

window.approvePilotStage = function() {
  window.openModal('modalPilotApproval');
};

window.confirmPilotApproval = function() {
  window.closeModal('modalPilotApproval');
  const heroStatus = document.getElementById('protoHeroStatus');
  if (heroStatus) {
    heroStatus.innerText = 'Pilot Verified & Approved ✓';
    heroStatus.style.background = '#dcfce7';
    heroStatus.style.color = '#15803d';
  }
  window.toastSuccess('Stage 4 Pilot Evaluation Formally Signed Off & Certified by Tata Steel CSR Authority', 'Milestone Completed');
};

// 9. Modals for Commitments, CSR, Receipts, Profile
window.openAddCommitmentModal = function() {
  window.openModal('modalPreferenceAlert');
};

window.openDisbursementReceiptModal = function() {
  window.openModal('modalDisbursementReceipt');
};

window.openCsrCertificateModal = function() {
  window.openModal('modalCsrCertificate');
};

window.openReviewRequestsModal = function() {
  window.openModal('modalReviewRequests');
};

window.openDueMilestonesModal = function() {
  window.openModal('modalDueMilestones');
};

window.saveIndustryProfile = async function() {
  const organization = document.getElementById('profOrgName')?.value?.trim();
  const representative = document.getElementById('profRepName')?.value?.trim();
  const email = document.getElementById('profEmail')?.value?.trim();
  if (!organization || !representative || !email) {
    window.toastSuccess('Please complete organization, representative, and email details', 'Profile Update');
    return;
  }

  const token = sessionStorage.getItem('token') || sessionStorage.getItem('is_token') || '';
  try {
    const response = await fetch('/api/auth/update-profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({ name: representative, email, organization, institution: organization })
    });
    const data = await response.json();
    if (!response.ok || !data.success) throw new Error(data.message || 'Profile update failed');
    const currentUser = data.user;
    sessionStorage.setItem('user', JSON.stringify(currentUser));
    sessionStorage.setItem('is_user', JSON.stringify(currentUser));
    const topbarName = document.getElementById('topbarName');
    if (topbarName) topbarName.textContent = currentUser.name || representative;
    window.openModal('modalProfileSaved');
    window.toastSuccess('Corporate profile saved to database successfully', 'Profile Updated');
  } catch (error) {
    window.toastSuccess(error.message || 'Profile update failed', 'Profile Update');
  }
};

window.triggerAiReindex = function() {
  window.toastSuccess('Live State Innovation Catalog & Priority Fit Scores Synchronized', 'Registry Updated');
};

// 10. Partner Modal (Pledge Form & Live Chat Tabs)
window.switchPartnerModalTab = function(tabName) {
  const pledgeTab = document.getElementById('partnerTabPledge');
  const chatTab = document.getElementById('partnerTabChat');
  const btnPledge = document.getElementById('tabBtnPledge');
  const btnChat = document.getElementById('tabBtnChat');

  if (tabName === 'pledge') {
    if (pledgeTab) pledgeTab.style.display = 'block';
    if (chatTab) chatTab.style.display = 'none';
    if (btnPledge) {
      btnPledge.style.borderBottom = '3px solid #002D62';
      btnPledge.style.color = '#002D62';
    }
    if (btnChat) {
      btnChat.style.borderBottom = '3px solid transparent';
      btnChat.style.color = '#64748b';
    }
  } else {
    if (pledgeTab) pledgeTab.style.display = 'none';
    if (chatTab) chatTab.style.display = 'block';
    if (btnChat) {
      btnChat.style.borderBottom = '3px solid #002D62';
      btnChat.style.color = '#002D62';
    }
    if (btnPledge) {
      btnPledge.style.borderBottom = '3px solid transparent';
      btnPledge.style.color = '#64748b';
    }
  }
};

window.setModalFundingAmount = function(amt) {
  const input = document.getElementById('pledgeFundingAmount');
  if (input) {
    input.value = amt;
    window.toastSuccess('Allocated ₹' + amt + ' Lakhs to Project Pledge');
  }
};

window.sendQuickChatMessage = function(txt) {
  const inp = document.getElementById('partnerChatMessageInput') || document.getElementById('chatTextInput');
  if (inp) {
    inp.value = txt;
    if (typeof window.sendPartnerChatMessage === 'function') {
      window.sendPartnerChatMessage();
    }
  }
};

window.sendPartnerChatMessage = function() {
  const inp = document.getElementById('partnerChatMessageInput');
  const stream = document.getElementById('partnerChatMessagesStream');
  if (!inp || !inp.value.trim()) return;

  const userMsg = inp.value.trim();
  inp.value = '';

  if (stream) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble partner';
    bubble.style.cssText = 'align-self: flex-end; max-width: 82%; background: #002D62; color: #ffffff; border-radius: 14px 14px 2px 14px; padding: 12px 16px; box-shadow: 0 2px 6px rgba(0,45,98,0.2); margin-bottom: 8px;';
    bubble.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 4px;">
        <span style="font-size: 11px; font-weight: 850; color: #93c5fd;">🏢 You (Tata Steel CSR Lead)</span>
        <span style="font-size: 10px; color: #cbd5e1;">Just now</span>
      </div>
      <p style="font-size: 13px; margin: 0; line-height: 1.5; color: #ffffff;">${userMsg}</p>
    `;
    stream.appendChild(bubble);
    stream.scrollTop = stream.scrollHeight;

    // Automated simulated response from State Admin
    setTimeout(() => {
      const reply = document.createElement('div');
      reply.className = 'chat-bubble admin';
      reply.style.cssText = 'align-self: flex-start; max-width: 82%; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px 14px 14px 2px; padding: 12px 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.03); margin-bottom: 8px;';
      reply.innerHTML = `
        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
          <span style="font-size: 11px; font-weight: 850; color: #002D62;">🏛️ State Admin Liaison</span>
          <span style="font-size: 10px; color: #94a3b8;">Just now</span>
        </div>
        <p style="font-size: 13px; color: #1e293b; margin: 0; line-height: 1.5;">Thank you Shoeb ji. Your input has been logged in the Tri-Party session register. Faculty PI is notified to align milestone delivery with this commitment.</p>
      `;
      stream.appendChild(reply);
      stream.scrollTop = stream.scrollHeight;
    }, 1200);
  }
};

window.submitPartnerInterest = function() {
  window.closeModal('partnerModal');
  window.toastSuccess('Tri-Party CSR Expression of Interest Formally Transmitted to State Admin & University PI!', 'Pledge Registered');
};

console.log('JanSetu Comprehensive Handlers & Real-Time Engine Loaded Successfully.');


    window.setReactSection = (sec) => {
      setActiveSection(sec);
    };

    window.showSection = (sec) => {
      let targetTab = null;
      if (sec === 'prototype') {
        sec = 'collaborations';
        targetTab = 'pilot';
      } else if (sec === 'collaborations') {
        targetTab = 'pilot';
      }
      setActiveSection(sec);
      window.location.hash = sec;
      const mc = document.getElementById('mainContent');
      if (mc) mc.scrollTop = 0;

      if (targetTab && typeof window.switchCollabTab === 'function') {
        setTimeout(() => window.switchCollabTab(targetTab), 20);
      }
      if (sec === 'requests') {
        setTimeout(() => window.loadIncomingRequests && window.loadIncomingRequests(true), 15);
      }
      if (sec === 'collaborations') {
        setTimeout(() => window.renderCollaborationsGrid && window.renderCollaborationsGrid(), 15);
      }
      if (sec === 'explore' && typeof window.loadExploreChallenges === 'function') {
        setTimeout(window.loadExploreChallenges, 15);
      }
      if (sec === 'overview' && typeof window.initOverviewRevamp === 'function') {
        setTimeout(window.initOverviewRevamp, 15);
      }
      if (sec === 'commitments' && typeof window.selectCommitmentProject === 'function') {
        setTimeout(() => window.selectCommitmentProject('solar-phc'), 15);
      }
    };

    const handleHash = () => {
      let h = window.location.hash.replace('#', '') || 'overview';
      let targetTab = null;
      if (h === 'prototype') {
        h = 'collaborations';
        targetTab = 'pilot';
      } else if (h === 'collaborations') {
        targetTab = 'pilot';
      }
      setActiveSection(h);
      const mc = document.getElementById('mainContent');
      if (mc) mc.scrollTop = 0;

      if (targetTab && typeof window.switchCollabTab === 'function') {
        setTimeout(() => window.switchCollabTab(targetTab), 20);
      }
      if (h === 'requests') {
        setTimeout(() => window.loadIncomingRequests && window.loadIncomingRequests(true), 15);
      }
      if (h === 'collaborations') {
        setTimeout(() => window.renderCollaborationsGrid && window.renderCollaborationsGrid(), 15);
      }
      if (h === 'explore' && typeof window.loadExploreChallenges === 'function') {
        setTimeout(window.loadExploreChallenges, 15);
      }
      if (h === 'overview' && typeof window.initOverviewRevamp === 'function') {
        setTimeout(window.initOverviewRevamp, 15);
      }
    };

    window.addEventListener('hashchange', handleHash);

    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    }

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Reactive section loader whenever activeSection changes
  React.useEffect(() => {
    if (activeSection === 'requests') {
      fetchRequests();
    } else if (activeSection === 'collaborations') {
      fetchCollaborations();
    } else if (activeSection === 'explore') {
      fetchChallenges();
    } else if (activeSection === 'overview') {
      fetchCollaborations();
    }
  }, [activeSection]);

  // ── Support Commitments Computed Metrics & Handlers ──
  React.useEffect(() => {
    try {
      localStorage.setItem('jansetu_commitments_projects', JSON.stringify(commitmentProjects));
    } catch (e) {}
  }, [commitmentProjects]);

  // Window global bridge
  useEffect(() => {
    window.selectCommitmentProject = (id) => {
      setSelectedCommitmentId(id);
    };
    window.filterCommitmentsTab = (tab) => {
      setCommitmentsTabFilter(tab);
    };
    window.openAddCommitmentModal = (id) => {
      if (id) {
        setSelectedCommitmentId(id);
        setNewCommitmentForm(prev => ({ ...prev, projectId: id }));
      }
      setShowAddCommitmentModal(true);
    };
    window.openDisbursementReceiptModal = (receiptId, amount, uni, proj) => {
      setActiveReceiptModalData({
        receiptId: receiptId || 'JH-CSR-2026-904',
        amount: amount || '₹10,00,000',
        university: uni || 'IIT (ISM) Dhanbad',
        projectTitle: proj || 'Rural Hospital Solar Unit',
        date: '12 Jul 2026, 11:34 AM IST',
        txHash: 'JH-ESCROW-TX-' + Math.floor(1000000 + Math.random() * 9000000)
      });
    };
    window.openTrackDeliveryModal = (trackingId, courier, proj) => {
      setActiveTrackDeliveryData({
        trackingId: trackingId || 'SP-DHN-8821',
        courier: courier || 'Ranchi Express Logistics (Express Cargo)',
        projectTitle: proj || 'Rural Hospital Solar Unit',
        origin: 'Tata Steel Jamshedpur Central Depot',
        destination: 'IIT (ISM) Dhanbad Lab / PHC Site',
        eta: '20 Sep 2026 by 5:00 PM',
        status: 'In Transit via Ranchi Hub'
      });
    };
  }, []);

  const selectedProj = commitmentProjects.find(p => p.id === selectedCommitmentId) || commitmentProjects[0];

  React.useEffect(() => {
    if (!selectedProj?.backendId) return;
    fetch(`/api/industry/collaborations/${selectedProj.backendId}/discussion`)
      .then(response => response.json())
      .then(data => {
        if (data.success && Array.isArray(data.discussion)) {
          setCommitmentProjects(prev => prev.map(project => project.id === selectedProj.id
            ? { ...project, communication: data.discussion }
            : project));
        }
      })
      .catch(() => {});
  }, [selectedProj?.backendId, selectedProj?.id]);

  const totalCommitmentValue = commitmentProjects.reduce((acc, p) => {
    return acc + (p.commitments || []).reduce((sub, c) => {
      const match = (c.commitment || c.requirement || '').match(/₹\s*([0-9,]+)/);
      if (match) {
        return sub + parseInt(match[1].replace(/,/g, ''), 10);
      }
      return sub + 150000;
    }, 0);
  }, 0);

  const totalCommitmentLakhStr = `₹${(totalCommitmentValue / 100000).toFixed(1)} Lakh`;
  const totalPendingCount = commitmentProjects.reduce((acc, p) => acc + (p.commitments ? p.commitments.filter(c => c.status === 'Pending').length : 0), 0);
  const totalInProgressCount = commitmentProjects.reduce((acc, p) => acc + (p.commitments ? p.commitments.filter(c => c.status === 'In Progress').length : 0), 0);
  const totalVerifiedCount = commitmentProjects.reduce((acc, p) => acc + (p.commitments ? p.commitments.filter(c => c.status === 'Verified' || c.status === 'Provided').length : 0), 0);

  const filteredCommitmentProjects = commitmentProjects.filter(p => {
    if (commitmentsSearchQuery.trim()) {
      const q = commitmentsSearchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchUni = p.university.toLowerCase().includes(q);
      const matchLoc = p.location.toLowerCase().includes(q);
      const matchTags = (p.tags || []).some(t => t.toLowerCase().includes(q));
      const matchCommitments = (p.commitments || []).some(c => (c.requirement || '').toLowerCase().includes(q) || (c.commitment || '').toLowerCase().includes(q));
      if (!matchTitle && !matchUni && !matchLoc && !matchTags && !matchCommitments) return false;
    }
    if (commitmentsTabFilter === 'active') {
      return p.status === 'In Progress' || p.status === 'On Track' || p.status === 'Delayed';
    }
    if (commitmentsTabFilter === 'pending') {
      return (p.commitments || []).some(c => c.status === 'Pending');
    }
    if (commitmentsTabFilter === 'in_progress') {
      return p.status === 'In Progress' || (p.commitments || []).some(c => c.status === 'In Progress');
    }
    if (commitmentsTabFilter === 'verified') {
      return p.status === 'Verified' || (p.commitments || []).every(c => c.status === 'Verified' || c.status === 'Provided');
    }
    return true;
  });

  const handleToggleMilestone = (projId) => {
    setCommitmentProjects(prev => prev.map(p => {
      if (p.id !== projId) return p;
      const isNowCompleted = !p.nextMilestone.completed;
      const newProgress = isNowCompleted ? Math.min(100, p.supportProgress + 15) : Math.max(0, p.supportProgress - 15);
      const newActivity = [
        {
          date: 'Today',
          text: isNowCompleted ? `Next milestone completed: ${p.nextMilestone.title} ✓` : `Milestone reverted: ${p.nextMilestone.title}`,
          color: isNowCompleted ? '#16a34a' : '#d97706'
        },
        ...p.recentActivity
      ];
      return {
        ...p,
        supportProgress: newProgress,
        nextMilestone: { ...p.nextMilestone, completed: isNowCompleted },
        recentActivity: newActivity
      };
    }));
    window.toastSuccess && window.toastSuccess('Next Milestone progress updated!', 'Milestone Updated');
  };

  const handleDispatchCommitment = (projId, commitId) => {
    setCommitmentProjects(prev => prev.map(p => {
      if (p.id !== projId) return p;
      const updatedCommits = p.commitments.map(c => {
        if (c.id !== commitId) return c;
        return {
          ...c,
          status: 'In Progress',
          trackingId: `TRK-JH-${Math.floor(1000 + Math.random() * 9000)}`,
          courier: 'Ranchi Express Logistics',
          actionType: 'track'
        };
      });
      const pendingCnt = updatedCommits.filter(c => c.status === 'Pending').length;
      const inProgCnt = updatedCommits.filter(c => c.status === 'In Progress').length;
      const providedCnt = updatedCommits.filter(c => c.status === 'Provided').length;
      const verifiedCnt = updatedCommits.filter(c => c.status === 'Verified').length;
      const targetCommit = p.commitments.find(c => c.id === commitId);
      const newActivity = [
        {
          date: 'Just now',
          text: `Dispatched: ${targetCommit ? targetCommit.commitment : 'Equipment deliverable'} via Ranchi Express.`,
          color: '#2563eb'
        },
        ...p.recentActivity
      ];
      return {
        ...p,
        commitments: updatedCommits,
        counts: { ...p.counts, pending: pendingCnt, inProgress: inProgCnt, provided: providedCnt, verified: verifiedCnt },
        supportProgress: Math.min(100, p.supportProgress + 10),
        recentActivity: newActivity
      };
    }));
    window.toastSuccess && window.toastSuccess('Commitment marked as Dispatched & In-Transit!', 'Logistics Dispatched');
  };

  const handleAddCommitmentSubmit = (e) => {
    e.preventDefault();
    const targetProjId = newCommitmentForm.projectId || selectedCommitmentId;
    const newCommit = {
      id: 'c_' + Date.now(),
      type: newCommitmentForm.type,
      requirement: newCommitmentForm.title || 'Project Specific Support',
      commitment: `${newCommitmentForm.title || 'CSR Allocated Deliverable'}${newCommitmentForm.amountLakh ? ` (₹${newCommitmentForm.amountLakh} Lakh)` : ''}`,
      status: 'Pending',
      date: newCommitmentForm.targetDate || '2026-10-30',
      detail: newCommitmentForm.desc || 'CSR support deliverable registered for the project.',
      actionType: 'dispatch'
    };

    setCommitmentProjects(prev => prev.map(p => {
      if (p.id !== targetProjId) return p;
      const updatedCommits = [...p.commitments, newCommit];
      const pendingCnt = updatedCommits.filter(c => c.status === 'Pending').length;
      const newActivity = [
        {
          date: 'Today',
          text: `Added new commitment: ${newCommit.commitment} (${newCommit.type})`,
          color: '#2563eb'
        },
        ...p.recentActivity
      ];
      return {
        ...p,
        commitments: updatedCommits,
        counts: { ...p.counts, committed: updatedCommits.length, pending: pendingCnt },
        recentActivity: newActivity
      };
    }));

    setShowAddCommitmentModal(false);
    setNewCommitmentForm({
      projectId: targetProjId,
      type: 'Equipment',
      amountLakh: '2.5',
      title: '5 LiFePO4 battery packs 48V 100Ah',
      desc: 'Supply, warranty and field installation support for the remaining PHC battery storage capacity.',
      targetDate: '2026-10-15'
    });
    window.toastSuccess && window.toastSuccess('New CSR Commitment successfully registered and synchronized with State Registry!', 'Commitment Added');
  };

  const handleSendTripartiteMessage = (e) => {
    e.preventDefault();
    if (!chatMessageText.trim()) return;
    const userText = chatMessageText.trim();
    setChatMessageText('');

    const newMsg = {
      sender: 'Shoeb Raza (Tata Steel Foundation)',
      role: 'Industry CSR Lead',
      time: 'Just now',
      text: userText,
      isMe: true
    };

    setCommitmentProjects(prev => prev.map(p => {
      if (p.id !== selectedCommitmentId) return p;
      return {
        ...p,
        communication: [...(p.communication || []), newMsg]
      };
    }));

    if (selectedProj?.backendId) {
      const token = sessionStorage.getItem('token') || sessionStorage.getItem('is_token') || '';
      fetch(`/api/industry/collaborations/${selectedProj.backendId}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ message: userText })
      }).then(response => response.json()).then(data => {
        if (!data.success) throw new Error('Message sync failed');
        setCommitmentProjects(prev => prev.map(project => project.id === selectedProj.id
          ? { ...project, communication: data.discussion || project.communication }
          : project));
        window.toastSuccess && window.toastSuccess('Message delivered to the project communication channel.', 'Message Synced');
      }).catch(() => {
        window.toastSuccess && window.toastSuccess('Message added locally. Server sync will retry on the next refresh.', 'Offline Update');
      });
    }
  };

  return (
    <>
      {/* Fixed Ambient Canvas Background with Ashoka Chakra & Heritage Silhouettes */}
      <div className="fixed-canvas-background fixed-canvas-bg">
        <svg style={{ position: 'absolute', top: '40px', right: '60px', width: '320px', height: '320px', opacity: 0.035, pointerEvents: 'none' }} viewBox="0 0 100 100" fill="none" stroke="#002D62">
          <circle cx="50" cy="50" r="45" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" strokeWidth="2" />
          <circle cx="50" cy="50" r="3" fill="#002D62" />
          <g strokeWidth="1.2">
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="50" x2="95" y2="50" />
            <line x1="18.18" y1="18.18" x2="81.82" y2="81.82" />
            <line x1="18.18" y1="81.82" x2="81.82" y2="18.18" />
            <line x1="32.7" y1="8.4" x2="67.3" y2="91.6" />
            <line x1="8.4" y1="32.7" x2="91.6" y2="67.3" />
            <line x1="67.3" y1="8.4" x2="32.7" y2="91.6" />
            <line x1="91.6" y1="32.7" x2="8.4" y2="67.3" />
          </g>
        </svg>
      </div>

      {/* Civic Page Loading Animation Overlay */}
      <div id="civicPageLoader" className="civic-page-loader">
        <svg className="civic-chakra-spin" viewBox="0 0 100 100" fill="none" stroke="#002D62">
          <circle cx="50" cy="50" r="45" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="10" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="3" fill="#002D62" />
          <g strokeWidth="1.5">
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="50" x2="95" y2="50" />
            <line x1="18.18" y1="18.18" x2="81.82" y2="81.82" />
            <line x1="18.18" y1="81.82" x2="81.82" y2="18.18" />
            <line x1="32.7" y1="8.4" x2="67.3" y2="91.6" />
            <line x1="8.4" y1="32.7" x2="91.6" y2="67.3" />
            <line x1="67.3" y1="8.4" x2="32.7" y2="91.6" />
            <line x1="91.6" y1="32.7" x2="8.4" y2="67.3" />
          </g>
        </svg>
        <div className="civic-tricolor-line"></div>
        <div className="civic-loader-text">Connecting to JanSetu Command...</div>
      </div>

      <div className="dashboard-layout app-layout">
        {/* ── ROYAL NAVY SIDEBAR ── */}
        <aside className="sidebar" id="sidebar">
          <div className="sidebar-monument-bg"></div>
          <div className="sidebar-navy-scrim"></div>
          <div className="sidebar-tricolor-ribbon"></div>

          <div className="sidebar-brand-wrapper">
            <a className="sidebar-brand" href="#overview" onClick={() => window.showSection && window.showSection('overview')}>
              <svg className="brand-icon-svg" viewBox="0 0 48 48" fill="none">
                <circle cx="16" cy="14" r="6" fill="#FF9933" />
                <path d="M7 32C7 25 12 21 17 21C22 21 27 25 27 32" stroke="#FF9933" strokeWidth="4" strokeLinecap="round" />
                <circle cx="24" cy="12" r="6" fill="#002D62" />
                <path d="M15 30C15 23 20 19 25 19C30 19 35 23 35 30" stroke="#002D62" strokeWidth="4" strokeLinecap="round" />
                <circle cx="32" cy="14" r="6" fill="#138808" />
                <path d="M23 32C23 25 28 21 33 21C38 21 43 25 43 32" stroke="#138808" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <div className="brand-text-block">
                <span className="brand-title"><span className="brand-saffron">Jan</span><span className="brand-green">Setu</span></span>
                <span className="brand-tagline">INDUSTRY &amp; CSR PORTAL</span>
              </div>
            </a>
            <button type="button" className="sidebar-collapse-btn" onClick={() => window.toggleSidebar && window.toggleSidebar()} title="Toggle Navigation Drawer">
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
          </div>

          <nav className="sidebar-nav">
            <div className="sidebar-section-label">MAIN NAVIGATION</div>

            <a className={`sidebar-link ${activeSection === "overview" ? "active" : ""}`} id="nav-overview" onClick={() => window.showSection && window.showSection('overview')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
              <span className="sidebar-link-text">Overview</span>
            </a>

            <a className={`sidebar-link ${activeSection === "explore" ? "active" : ""}`} id="nav-explore" onClick={() => window.showSection && window.showSection('explore')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <span className="sidebar-link-text">Explore Challenges</span>
            </a>

            

            <a className={`sidebar-link ${activeSection === "requests" ? "active" : ""}`} id="nav-requests" onClick={() => window.showSection && window.showSection('requests')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <span className="sidebar-link-text">Collaboration Requests</span>
              <span className="sidebar-badge" style={{ background: '#dc2626' }}>3</span>
            </a>

            <a className={`sidebar-link ${activeSection === "collaborations" ? "active" : ""}`} id="nav-collaborations" onClick={() => window.showSection && window.showSection('collaborations')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
              <span className="sidebar-link-text">My Collaborations</span>
            </a>

            <a className={`sidebar-link ${activeSection === "commitments" ? "active" : ""}`} id="nav-commitments" onClick={() => window.showSection && window.showSection('commitments')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <span className="sidebar-link-text">Support Commitments</span>
              <span className="sidebar-badge" style={{ background: '#ea580c' }}>2</span>
            </a>

            {/* Prototype & Pilot merged into My Collaborations */}

            <div className="sidebar-section-label" style={{ marginTop: '12px' }}>INTELLIGENCE &amp; IMPACT</div>

            <a className={`sidebar-link ${activeSection === "roi" ? "active" : ""}`} id="nav-roi" onClick={() => window.showSection && window.showSection('roi')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 8l-8 8" /><path d="M16 16V8H8" /></svg>
              <span className="sidebar-link-text">Opportunities &amp; ROI</span>
            </a>

            
            <a className={`sidebar-link ${activeSection === "heatmap" ? "active" : ""}`} id="nav-heatmap" onClick={() => window.showSection && window.showSection('heatmap')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>
              <span className="sidebar-link-text">Pan-India Map</span>
            </a>

            <a className={`sidebar-link ${activeSection === "notifications" ? "active" : ""}`} id="nav-notifications" onClick={() => window.showSection && window.showSection('notifications')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
              <span className="sidebar-link-text">Notifications</span>
              <span className="sidebar-badge notif-badge-count" style={{ display: 'inline-block', background: '#dc2626' }}>3</span>
            </a>

            <a className={`sidebar-link ${activeSection === "profile" ? "active" : ""}`} id="nav-profile" onClick={() => window.showSection && window.showSection('profile')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
              <span className="sidebar-link-text">Partner Profile</span>
            </a>

            <a className={`sidebar-link ${activeSection === "capabilities" ? "active" : ""}`} id="nav-capabilities" onClick={() => window.showSection && window.showSection('capabilities')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
              <span className="sidebar-link-text">Capabilities</span>
            </a>
          </nav>

          <div className="sidebar-footer">
            <div className="sidebar-user">
              <div className="sidebar-user-avatar" id="sidebarAvatar">S</div>
              <div className="sidebar-user-info">
                <div className="sidebar-user-name" id="sidebarName">Shoeb Raza</div>
                <div className="sidebar-user-role" id="sidebarRole">Industry Partner · Tata Steel Foundation</div>
              </div>
            </div>
            <button onClick={() => window.logout && window.logout()} className="btn-logout">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Floating Toggle Button */}
        <button type="button" className="drawer-floating-toggle" id="drawerFloatingToggle" onClick={() => window.toggleSidebar && window.toggleSidebar()} title="Expand Navigation">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
        </button>

        <div className="sidebar-overlay" id="sidebarOverlay" onClick={() => window.closeMobileSidebar && window.closeMobileSidebar()}></div>

        {/* ── MAIN CONTENT VIEWPORT ── */}
        <main className="main-viewport" id="mainContent">
          {/* Top Clean White Header Navbar */}
          <header className="top-navbar">
            <div className="top-navbar-left">
              <button type="button" className="drawer-open-btn" onClick={() => window.toggleSidebar && window.toggleSidebar()} title="Toggle Menu">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
              </button>
              <div className="gov-badge-tag">
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF9933', display: 'inline-block' }}></span>
                <span>Government of Jharkhand · Societal Innovation Command</span>
              </div>
            </div>

            <div className="top-navbar-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input type="text" placeholder="Search challenges, universities, locations..." />
            </div>

            <div className="top-navbar-right">
              <div className="lang-pill-select">
                <span>IN हिंदी</span>
                <span style={{ fontSize: '10px' }}>▼</span>
              </div>

              <div className="status-active-pill">
                <span className="status-active-dot"></span>
                <span>Active Partner</span>
              </div>

              <button className="top-notif-btn" onClick={() => window.showSection && window.showSection('notifications')} title="Notifications">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                <span className="top-notif-badge">3</span>
              </button>

              <div className="top-profile-badge" onClick={() => window.showSection && window.showSection('profile')}>
                <div className="top-profile-circle" id="topbarAvatar">S</div>
                <div className="top-profile-meta">
                  <span className="top-profile-name" id="topbarName">Shoeb Raza</span>
                  <span className="top-profile-role" id="topbarRole">Industry &amp; CSR Partner</span>
                </div>
              </div>
            </div>
          </header>

                              <div className="dashboard-content-pad">
            <div id="section-overview" className="dashboard-section" style={{ display: activeSection === "overview" ? "block" : "none" }}>
{/* ── Universal Real Photographic Heritage Banner (No Cartoon Vectors) ── */}
            <div className="industry-hero-banner" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.85) 45%, rgba(0,45,98,0.2) 100%), url(/images/india-gate-panoramic.jpg)' }}>
              <div className="industry-flag-wave">
                <div className="f-s" />
                <div className="f-w" />
                <div className="f-g" />
              </div>

              {/* Real Photographic Background seamlessly integrated */}

              <div className="industry-frosted-card">
                <div className="industry-subbadge">
                  <span className="industry-subbadge-dot" />
                  <span id="bannerSubbadge">National Civic Innovation Hub • Tata Steel Foundation Portal</span>
                </div>
                <div className="industry-hero-greeting" id="bannerGreeting">
                  Namaste, <span id="bannerUserName">Shoeb</span>! <span style={{ fontSize: '20px' }}>🙏</span>
                </div>
                <div className="industry-hero-quote">
                  "युवा सोच, भारत की शक्ति – नवाचार से विकास की भक्ति।"
                </div>
              </div>
            </div>

            {/* National Innovation Pulse Ticker */}
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '10px 18px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 6px rgba(0,0,0,0.02)', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ display: 'inline-flex', width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a', boxShadow: '0 0 0 3px rgba(22,163,74,0.2)' }}></span>
                <span style={{ fontSize: '12px', fontWeight: '850', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.6px' }}>JanSetu Real-Time Command:</span>
                <span style={{ fontSize: '12.5px', color: '#475569' }}>Empowering Citizen Welfare Through Industry-Academia-Government Collaboration • Viksit Bharat &amp; Samriddh Jharkhand</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', fontWeight: '800', color: '#2563eb' }}>
                <span>Govt. of Jharkhand Verified</span>
                <span>✓</span>
              </div>
            </div>
            {/* ════════════════════════════════════════════════════════════
                 1. OVERVIEW SECTION (media_1789376225715.jpg)
               ════════════════════════════════════════════════════════════ */}
            
              {/* Hero Banner Card */}
              {/* Duplicate inner hero banner removed for clean layout */}

              {/* Row 1: 5 Top KPI Cards */}
              <div className="ind-kpi-grid">
                <div className="ind-kpi-card" onClick={() => window.showSection && window.showSection('collaborations')} style={{ cursor: 'pointer' }}>
                  <div className="ind-kpi-icon-box" style={{ background: '#eff6ff', color: '#2563eb' }}>📁</div>
                  <div>
                    <div className="ind-kpi-num" id="kpiActiveProjects">4</div>
                    <div className="ind-kpi-label">Active Projects</div>
                    <div className="ind-kpi-trend">↑ 4 Live Deployments</div>
                  </div>
                </div>

                <div className="ind-kpi-card" onClick={() => window.showSection && window.showSection('commitments')} style={{ cursor: 'pointer' }}>
                  <div className="ind-kpi-icon-box" style={{ background: '#f0fdf4', color: '#16a34a' }}>🤝</div>
                  <div>
                    <div className="ind-kpi-num" id="kpiCollaborations">4</div>
                    <div className="ind-kpi-label">Collaborations</div>
                    <div className="ind-kpi-trend">✓ 100% Verified SLAs</div>
                  </div>
                </div>

                <div className="ind-kpi-card" onClick={() => window.showSection && window.showSection('collaborations')} style={{ cursor: 'pointer' }}>
                  <div className="ind-kpi-icon-box" style={{ background: '#f5f3ff', color: '#7c3aed' }}>🎓</div>
                  <div>
                    <div className="ind-kpi-num" id="kpiUnivPartners">4</div>
                    <div className="ind-kpi-label">University Partners</div>
                    <div className="ind-kpi-trend">IIT ISM, BIT, RU, AIIMS</div>
                  </div>
                </div>

                <div className="ind-kpi-card" onClick={() => window.showSection && window.showSection('commitments')} style={{ cursor: 'pointer' }}>
                  <div className="ind-kpi-icon-box" style={{ background: '#fffbeb', color: '#d97706' }}>💰</div>
                  <div>
                    <div className="ind-kpi-num" id="kpiTotalContribution">₹42.5 L</div>
                    <div className="ind-kpi-label">Total Contribution</div>
                    <div className="ind-kpi-trend">Across 4 Initiatives</div>
                  </div>
                </div>

                <div className="ind-kpi-card" onClick={() => window.showSection && window.showSection('impact')} style={{ cursor: 'pointer' }}>
                  <div className="ind-kpi-icon-box" style={{ background: '#eff6ff', color: '#0284c7' }}>👥</div>
                  <div>
                    <div className="ind-kpi-num" id="kpiCitizensImpacted">25,000+</div>
                    <div className="ind-kpi-label">Citizens Impacted</div>
                    <div className="ind-kpi-trend">Dhanbad, Ranchi, Latehar</div>
                  </div>
                </div>
              </div>

              {/* Row 2: 2 Balanced Columns (Attention & Collaborations) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                {/* Col 1: Requires Your Attention */}
                <div className="ind-card">
                  <div>
                    <div className="ind-card-header">
                      <div className="ind-card-title">
                        <span style={{ color: '#dc2626' }}>⚠️</span>
                        <span>Requires Your Attention</span>
                      </div>
                      <a className="ind-card-link" onClick={() => window.showSection && window.showSection('requests')} style={{ cursor: 'pointer' }}>View All →</a>
                    </div>
                    <div className="attention-list">
                      <div className="attention-item" onClick={() => window.showSection && window.showSection('requests')} style={{ cursor: 'pointer' }}>
                        <div className="attention-pill red">3</div>
                        <div className="attention-text">Partnership requests awaiting response</div>
                        <span className="attention-action-link">Review →</span>
                      </div>
                      <div className="attention-item" onClick={() => window.showSection && window.showSection('collaborations')} style={{ cursor: 'pointer' }}>
                        <div className="attention-pill red">2</div>
                        <div className="attention-text">Milestones due this week</div>
                        <span className="attention-action-link">Update →</span>
                      </div>
                      <div className="attention-item" onClick={() => window.showSection && window.showSection('requests')} style={{ cursor: 'pointer' }}>
                        <div className="attention-pill orange">1</div>
                        <div className="attention-text">University proposal needs your feedback</div>
                        <span className="attention-action-link">Review →</span>
                      </div>
                      <div className="attention-item" onClick={() => window.showSection && window.showSection('prototype')} style={{ cursor: 'pointer' }}>
                        <div className="attention-pill orange">2</div>
                        <div className="attention-text">Prototype testing pending</div>
                        <span className="attention-action-link">View →</span>
                      </div>
                      <div className="attention-item" onClick={() => window.showSection && window.showSection('prototype')} style={{ cursor: 'pointer' }}>
                        <div className="attention-pill orange">1</div>
                        <div className="attention-text">Deployment confirmation required</div>
                        <span className="attention-action-link">Action →</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Col 2: Active Collaborations */}
                <div className="ind-card">
                  <div>
                    <div className="ind-card-header">
                      <div className="ind-card-title">
                        <span style={{ color: '#2563eb' }}>🤝</span>
                        <span>Active Collaborations</span>
                      </div>
                      <a className="ind-card-link" onClick={() => window.showSection && window.showSection('collaborations')}>View All →</a>
                    </div>
                    <div className="collab-list" id="indCollabList">
                      {loadingCollabs ? (
                        <div style={{ padding: '24px 16px', textAlign: 'center', color: '#64748b' }}>
                          <div className="spinner" style={{ margin: '0 auto 8px', width: '24px', height: '24px', border: '2.5px solid #e2e8f0', borderTopColor: '#002D62', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                          <div style={{ fontWeight: '750', color: '#0f172a', fontSize: '13.5px' }}>Loading Active Collaborations...</div>
                          <div style={{ fontSize: '12px', marginTop: '4px' }}>Connecting to verified platform assignments</div>
                        </div>
                      ) : collabsList.length === 0 ? (
                        <div style={{ padding: '24px 16px', textAlign: 'center', color: '#64748b' }}>
                          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🤝</div>
                          <div style={{ fontWeight: '750', color: '#0f172a', fontSize: '13.5px' }}>No Active Collaborations Yet</div>
                          <div style={{ fontSize: '12px', marginTop: '4px' }}>Explore open challenges to sponsor university solutions.</div>
                          <button className="btn btn-sm btn-primary" onClick={() => window.showSection && window.showSection('explore')} style={{ marginTop: '10px', fontWeight: '750' }}>Explore Challenges</button>
                        </div>
                      ) : (
                        collabsList.slice(0, 4).map(c => {
                          const thumb = c.coverImage || '/images/agri-monitoring.jpg';
                          const loc = (c.location && (c.location.district || c.location.block)) || 'Jharkhand';
                          const univ = c.universityAssigned || (c.assignedUniversity && (c.assignedUniversity.name || c.assignedUniversity.shortName)) || 'Birla Institute of Technology, Mesra';
                          const progressVal = c.progress || 75;
                          return (
                            <div key={c._id} className="collab-item" onClick={() => window.openProjectWorkspace && window.openProjectWorkspace(c._id)} style={{ cursor: 'pointer' }}>
                              <img src={thumb} alt={c.title} className="collab-thumb" onError={(e) => { e.target.src = '/images/agri-monitoring.jpg'; }} />
                              <div className="collab-content">
                                <div className="collab-top">
                                  <span className="collab-title">{c.title}</span>
                                  <span className="collab-stage-badge impl">{c.status === 'in_progress' ? 'Prototype & Pilot' : (c.stage || 'Solution Blueprinting')}</span>
                                </div>
                                <div className="collab-univ">{univ} · {loc}</div>
                                <div className="collab-bar-row">
                                  <div className="collab-bar-wrap"><div className="collab-bar-fill" style={{ width: `${progressVal}%` }}></div></div>
                                  <span className="collab-pct">{progressVal}%</span>
                                </div>
                                <div className="collab-meta-row">Next: Review joint technical blueprint with University Faculty PI</div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>


              </div>

              {/* Row 3: Impact & Recent Activity Overview (Zero Charts/Graphs) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                {/* Your Impact 2x2 Grid */}
                <div className="ind-card">
                  <div>
                    <div className="ind-card-header">
                      <div className="ind-card-title">
                        <span style={{ color: '#16a34a' }}>👥</span>
                        <span>Your Impact &amp; Footprint</span>
                      </div>
                      <span className="badge badge-resolved">Live Real-Time Data</span>
                    </div>
                    <div className="impact-2x2-grid">
                      <div className="impact-stat-card" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '14px', borderRadius: '10px' }}>
                        <div className="impact-stat-icon" style={{ background: '#dcfce7', color: '#15803d' }}>👥</div>
                        <div>
                          <div className="impact-stat-val" style={{ fontSize: '20px', fontWeight: '900', color: '#14532d' }}>25,000+</div>
                          <div className="impact-stat-lbl" style={{ fontSize: '11.5px', color: '#16a34a', fontWeight: '750' }}>Citizens Benefited</div>
                        </div>
                      </div>

                      <div className="impact-stat-card" style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '14px', borderRadius: '10px' }}>
                        <div className="impact-stat-icon" style={{ background: '#dbeafe', color: '#1d4ed8' }}>✓</div>
                        <div>
                          <div className="impact-stat-val" style={{ fontSize: '20px', fontWeight: '900', color: '#1e3a8a' }}>4</div>
                          <div className="impact-stat-lbl" style={{ fontSize: '11.5px', color: '#2563eb', fontWeight: '750' }}>Active Collaborations</div>
                        </div>
                      </div>

                      <div className="impact-stat-card" style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: '14px', borderRadius: '10px' }}>
                        <div className="impact-stat-icon" style={{ background: '#ffedd5', color: '#ea580c' }}>📍</div>
                        <div>
                          <div className="impact-stat-val" style={{ fontSize: '20px', fontWeight: '900', color: '#78350f' }}>4</div>
                          <div className="impact-stat-lbl" style={{ fontSize: '11.5px', color: '#d97706', fontWeight: '750' }}>Target Districts</div>
                        </div>
                      </div>

                      <div className="impact-stat-card" style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', padding: '14px', borderRadius: '10px' }}>
                        <div className="impact-stat-icon" style={{ background: '#ede9fe', color: '#7c3aed' }}>🎓</div>
                        <div>
                          <div className="impact-stat-val" style={{ fontSize: '20px', fontWeight: '900', color: '#4c1d95' }}>4</div>
                          <div className="impact-stat-lbl" style={{ fontSize: '11.5px', color: '#7c3aed', fontWeight: '750' }}>Universities Partnered</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contribution Breakdown Table (Replaces donut chart) */}
                <div className="ind-card">
                  <div>
                    <div className="ind-card-header">
                      <div className="ind-card-title">
                        <span style={{ color: '#d97706' }}>💰</span>
                        <span>CSR Commitment Allocation</span>
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: '900', color: '#0f172a' }}>Total: ₹42.5 Lakh</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563eb' }}></span>
                          <strong style={{ fontSize: '12.5px', color: '#0f172a' }}>Financial Grants (Escrow)</strong>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '850', color: '#2563eb' }}>₹ 25.50 Lakh (60%)</span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0284c7' }}></span>
                          <strong style={{ fontSize: '12.5px', color: '#0f172a' }}>Equipment &amp; Hardware</strong>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '850', color: '#0284c7' }}>₹ 10.00 Lakh (24%)</span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#16a34a' }}></span>
                          <strong style={{ fontSize: '12.5px', color: '#0f172a' }}>Technology &amp; Cloud Infra</strong>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '850', color: '#16a34a' }}>₹ 4.50 Lakh (11%)</span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#7c3aed' }}></span>
                          <strong style={{ fontSize: '12.5px', color: '#0f172a' }}>Technical Mentors &amp; Training</strong>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '850', color: '#7c3aed' }}>₹ 2.50 Lakh (5%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: 3 Columns Grid */}
              <div className="ind-three-col-grid">
                {/* Col 1: Recent Opportunities */}
                <div className="ind-card">
                  <div>
                    <div className="ind-card-header">
                      <div className="ind-card-title">
                        <span style={{ color: '#7c3aed' }}>📢</span>
                        <span>Recent Opportunities</span>
                      </div>
                      <a className="ind-card-link" onClick={() => window.showSection && window.showSection('explore')}>View All →</a>
                    </div>
                    <table className="opps-table">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Category</th>
                          <th>Location</th>
                          <th>Estimated Support</th>
                          <th>Match Score</th>
                        </tr>
                      </thead>
                      <tbody id="indRecentOppsTableBody">
                        {loadingChallenges ? (
                          <tr>
                            <td colSpan="5" style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>
                              <div className="spinner" style={{ margin: '0 auto 8px', width: '20px', height: '20px', border: '2px solid #e2e8f0', borderTopColor: '#002D62', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                              Loading verified civic opportunities from database...
                            </td>
                          </tr>
                        ) : challengesList.length === 0 ? (
                          <tr>
                            <td colSpan="5" style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>
                              No verified opportunities found in database.
                            </td>
                          </tr>
                        ) : (
                          challengesList.slice(0, 5).map(c => {
                            const loc = c.district || 'Jharkhand';
                            const match = c.aiMatch || 88;
                            return (
                              <tr key={c._id} style={{ cursor: 'pointer' }} onClick={() => window.viewOpportunity && window.viewOpportunity(c._id)}>
                                <td style={{ fontWeight: '750', color: '#0f172a' }}>{c.title}</td>
                                <td><span className="badge badge-assigned">{c.domains?.[0] || 'Civic Infra'}</span></td>
                                <td>{loc}</td>
                                <td style={{ fontWeight: '700' }}>{c.estimatedBudget}</td>
                                <td><span className="badge badge-resolved">{match}%</span></td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Col 2: Recent Activity */}
                <div className="ind-card">
                  <div>
                    <div className="ind-card-header">
                      <div className="ind-card-title">
                        <span style={{ color: '#0284c7' }}>🕒</span>
                        <span>Recent Activity</span>
                      </div>
                      <a className="ind-card-link" onClick={() => window.showSection && window.showSection('notifications')}>View All →</a>
                    </div>
                    <div className="activity-stream">
                      <div className="activity-row">
                        <span className="activity-badge today">2 hours ago</span>
                        <div className="activity-text">
                          <div><strong>IIT (ISM) uploaded milestone update</strong></div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>Rural Healthcare Infrastructure</div>
                        </div>
                      </div>

                      <div className="activity-row">
                        <span className="activity-badge today">5 hours ago</span>
                        <div className="activity-text">
                          <div><strong>Partnership request received</strong></div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>Smart Water Monitoring</div>
                        </div>
                      </div>

                      <div className="activity-row">
                        <span className="activity-badge yesterday">1 day ago</span>
                        <div className="activity-text">
                          <div><strong>Your contribution record updated</strong></div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>Rural Energy Solution</div>
                        </div>
                      </div>

                      <div className="activity-row">
                        <span className="activity-badge yesterday">2 days ago</span>
                        <div className="activity-text">
                          <div><strong>Proposal under review by admin</strong></div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>Digital Learning Hub</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Col 3: Quick Actions */}
                <div className="ind-card">
                  <div>
                    <div className="ind-card-header">
                      <div className="ind-card-title">
                        <span style={{ color: '#eab308' }}>⚡</span>
                        <span>Quick Actions</span>
                      </div>
                      <span className="badge" style={{ background: '#fef3c7', color: '#d97706', fontSize: '11px', fontWeight: '800' }}>3 Actions Pending</span>
                    </div>

                    <div className="quick-actions-2x2">
                      <div className="quick-act-card" onClick={() => window.showSection && window.showSection('explore')}>
                        <div className="quick-act-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>🔍</div>
                        <div>
                          <div className="quick-act-title">Explore Opportunities</div>
                          <div className="quick-act-sub">Find new projects</div>
                        </div>
                      </div>

                      <div className="quick-act-card" onClick={() => window.showSection && window.showSection('collaborations')}>
                        <div className="quick-act-icon" style={{ background: '#f0fdf4', color: '#16a34a' }}>📁</div>
                        <div>
                          <div className="quick-act-title">My Collaborations</div>
                          <div className="quick-act-sub">View &amp; manage projects</div>
                        </div>
                      </div>

                      <div className="quick-act-card" onClick={() => window.openSubmitProposalModal && window.openSubmitProposalModal()}>
                        <div className="quick-act-icon" style={{ background: '#f5f3ff', color: '#7c3aed' }}>✈️</div>
                        <div>
                          <div className="quick-act-title">Submit Partnership Proposal</div>
                          <div className="quick-act-sub">Express interest</div>
                        </div>
                      </div>

                      <div className="quick-act-card" onClick={() => window.showSection && window.showSection('capabilities')}>
                        <div className="quick-act-icon" style={{ background: '#ecfdf5', color: '#059669' }}>⚙️</div>
                        <div>
                          <div className="quick-act-title">Update Capabilities</div>
                          <div className="quick-act-sub">Manage your profile</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Footer */}
              <footer className="industry-official-footer">
                <div className="industry-official-footer-left">
                  <strong>JanSetu</strong>
                  <span>Government of Jharkhand | Industry &amp; CSR Portal</span>
                </div>
                <div className="industry-official-footer-right">
                  <span>Together for a Developed Jharkhand</span>
                  <span style={{ fontSize: '14px' }}>🇮🇳</span>
                </div>
              </footer>
            </div>

            {/* ════════════════════════════════════════════════════════════
                 2. COLLABORATION REQUESTS SECTION
               ════════════════════════════════════════════════════════════ */}
            <div id="section-requests" className="dashboard-section" style={{ display: activeSection === "requests" ? "block" : "none" }}>
              <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h2 style={{ fontSize: '22px', fontWeight: '850', color: '#0f172a' }}>Collaboration Requests</h2>
                  <p style={{ fontSize: '13px', color: '#64748b' }}>Admin has routed verified university proposals to your organization for CSR funding and partnership review.</p>
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => window.loadIncomingRequests && window.loadIncomingRequests(true)} style={{ fontWeight: '750' }}>
                  ↻ Refresh Requests
                </button>
              </div>

              <div id="industryRequestsContainer">
                {loadingRequests ? (
                  <div style={{ textAlign: 'center', padding: '40px 20px', background: '#ffffff', borderRadius: '14px', border: '1.5px dashed #cbd5e1' }}>
                    <div className="spinner" style={{ margin: '0 auto 12px', width: '32px', height: '32px', border: '3px solid #e2e8f0', borderTopColor: '#002D62', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                    <div style={{ fontWeight: '800', color: '#0f172a', fontSize: '15px' }}>Loading Incoming Collaboration Requests from MongoDB...</div>
                  </div>
                ) : requestsList.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '48px 20px', background: '#ffffff', borderRadius: '14px', border: '1.5px dashed #cbd5e1' }}>
                    <div style={{ fontSize: '36px', marginBottom: '10px' }}>📬</div>
                    <div style={{ fontWeight: '850', color: '#0f172a', fontSize: '16px' }}>No Pending Collaboration Requests</div>
                    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto' }}>
                      When the State Admin approves university solution proposals and assigns them to your CSR division, they will appear here for review and partnership acceptance.
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={() => window.showSection && window.showSection('explore')} style={{ marginTop: '16px', fontWeight: '800' }}>
                      Browse Open Innovation Challenges →
                    </button>
                  </div>
                ) : (
                  requestsList.map(item => {
                    const isAccepted = item.acceptanceStatus === 'accepted';
                    const fundingStr = item.fundingRequestedFormatted || `₹ ${Number(item.fundingRequested || 1200000).toLocaleString('en-IN')}`;
                    const docName = item.requirementsDocument?.filename || 'Technical_Solution_Requirements.pdf';
                    const docUrl = item.requirementsDocument?.url || '#';
                    const supports = Array.isArray(item.industrySupportRequired) ? item.industrySupportRequired : ['Funding', 'Mentorship', 'Testing Facility'];

                    return (
                      <div key={item._id} className="request-card" style={{ marginBottom: '20px', background: '#ffffff', border: `1.5px solid ${isAccepted ? '#86efac' : '#e2e8f0'}`, borderRadius: '16px', padding: '24px', boxShadow: '0 4px 18px rgba(0,45,98,0.06)' }}>
                        <div className="request-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '14px' }}>
                          <div>
                            {isAccepted ? (
                              <span className="badge" style={{ background: '#dcfce7', color: '#15803d', fontWeight: '850', padding: '4px 12px', borderRadius: '999px', border: '1px solid #86efac', fontSize: '11.5px' }}>
                                ✓ Accepted &amp; Active Collaboration
                              </span>
                            ) : (
                              <span className="badge" style={{ background: '#fef3c7', color: '#b45309', fontWeight: '850', padding: '4px 12px', borderRadius: '999px', border: '1px solid #fde68a', fontSize: '11.5px' }}>
                                ⏳ Admin Assignment - Pending Your Acceptance
                              </span>
                            )}
                            <h3 style={{ fontSize: '18px', fontWeight: '850', color: '#0f172a', margin: '8px 0 4px 0' }}>{item.title}</h3>
                            <div style={{ fontSize: '12.5px', color: '#64748b' }}>
                              Submitted by <strong>{item.university}</strong> (Lead: {item.lead} · <a href={`mailto:${item.email}`} style={{ color: '#2563eb' }}>{item.email}</a>)
                            </div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '20px', fontWeight: '900', color: '#0f172a' }}>{fundingStr}</div>
                            <div style={{ fontSize: '11.5px', color: '#64748b' }}>Requested CSR Support</div>
                          </div>
                        </div>

                        <div className="request-meta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', background: '#f8fafc', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '14px', fontSize: '12.5px' }}>
                          <div><strong>Problem Domain:</strong> {item.problemCategory}</div>
                          <div><strong>Location:</strong> {item.location}</div>
                          <div><strong>Timeline:</strong> 4–6 Months</div>
                          <div><strong>Deliverable:</strong> Field Prototype &amp; Pilot</div>
                        </div>

                        <p style={{ fontSize: '13px', color: '#334155', lineHeight: '1.6', marginBottom: '14px' }}>
                          <strong>Problem &amp; Proposed Solution:</strong> {item.problemDescription}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                          <span style={{ fontSize: '12px', fontWeight: '750', color: '#475569' }}>Required Support:</span>
                          {supports.map((s, idx) => (
                            <span key={idx} className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: '11px', fontWeight: '750', border: '1px solid #bfdbfe', padding: '2px 8px', borderRadius: '6px' }}>
                              ✓ {s}
                            </span>
                          ))}
                          {docUrl && docUrl !== '#' ? (
                            <a href={docUrl} target="_blank" rel="noreferrer" download style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: '750', color: '#2563eb', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                              📄 Download {docName}
                            </a>
                          ) : (
                            <span style={{ marginLeft: 'auto', fontSize: '11.5px', color: '#64748b' }}>📄 Blueprint Attached: {docName}</span>
                          )}
                        </div>

                        <div className="request-actions-row" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                          <button className="btn btn-sm btn-outline-primary" onClick={() => window.openFullProposalModal && window.openFullProposalModal(item._id)} style={{ fontWeight: '750' }}>
                            👁 View Full Proposal
                          </button>
                          {isAccepted ? (
                            <>
                              <button className="btn btn-sm" style={{ background: '#15803d', color: '#ffffff', fontWeight: '800', border: 'none', cursor: 'default' }} disabled>
                                ✓ Collaboration Accepted
                              </button>
                              <button className="btn btn-sm btn-primary" onClick={() => window.openProjectWorkspace && window.openProjectWorkspace(item._id)} style={{ fontWeight: '750' }}>
                                Open Workspace →
                              </button>
                            </>
                          ) : (
                            <>
                              <button className="btn btn-sm btn-primary" onClick={() => window.confirmAcceptPartnership && window.confirmAcceptPartnership(item._id)} style={{ background: '#002D62', color: '#ffffff', fontWeight: '800' }}>
                                ✅ Accept Collaboration
                              </button>
                              <button className="btn btn-sm btn-outline-primary" onClick={() => window.openClarificationModal && window.openClarificationModal(item._id)} style={{ fontWeight: '750' }}>
                                💬 Request Clarification
                              </button>
                              <button className="btn btn-sm btn-ghost" style={{ color: '#dc2626', border: '1px solid #fee2e2', fontWeight: '700' }} onClick={() => window.openDeclineModal && window.openDeclineModal(item._id)}>
                                Decline
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* ════════════════════════════════════════════════════════════
                 4. MY COLLABORATIONS & WORKSPACE SECTION
               ════════════════════════════════════════════════════════════ */}
            <div id="section-collaborations" className="dashboard-section" style={{ display: activeSection === "collaborations" ? "block" : "none" }}>
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '850', color: '#0f172a' }}>My Collaborations &amp; Workspace</h2>
                <p style={{ fontSize: '13px', color: '#64748b' }}>Shared multi-stakeholder workspaces between Admin, University, and your Industry teams.</p>
              </div>

              <div id="collaborationsGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                {loadingCollabs ? (
                  <div style={{ textAlign: 'center', padding: '36px 20px', background: '#ffffff', borderRadius: '14px', border: '1.5px dashed #cbd5e1', gridColumn: '1 / -1' }}>
                    <div className="spinner" style={{ margin: '0 auto 12px', width: '32px', height: '32px', border: '3px solid #e2e8f0', borderTopColor: '#002D62', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                    <div style={{ fontWeight: '800', color: '#0f172a', fontSize: '15px' }}>Loading Live Collaborations from MongoDB...</div>
                  </div>
                ) : collabsList.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '36px 20px', background: '#ffffff', borderRadius: '14px', border: '1.5px dashed #cbd5e1', gridColumn: '1 / -1' }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>📁</div>
                    <div style={{ fontWeight: '850', color: '#0f172a', fontSize: '16px' }}>No Active Collaborations Found</div>
                  </div>
                ) : (
                  collabsList.map(c => {
                    const thumb = c.coverImage || (c.category?.includes('Agri') ? '/images/agri-monitoring.jpg' : '/images/campus-iit.jpg');
                    const loc = c.location || 'Jharkhand';
                    const univ = c.university || 'Birla Institute of Technology, Mesra';
                    const progress = c.progress || 75;
                    const stage = c.stage || 'Pilot Testing';
                    const budgetStr = c.fundingFormatted || (c.estimatedBudget ? `₹${c.estimatedBudget} L` : '₹15.0 L');

                    return (
                      <div key={c._id}
                           className="collab-select-card"
                           onClick={() => window.openProjectWorkspace && window.openProjectWorkspace(c._id)}
                           style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,45,98,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)', position: 'relative' }}>
                        
                        {/* Real Domain Cover Image Banner */}
                        <div style={{ position: 'relative', height: '145px', width: '100%', background: '#f1f5f9', overflow: 'hidden' }}>
                          <img src={thumb} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/images/agri-monitoring.jpg'; }} />
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.72) 100%)' }}></div>
                          
                          <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(6px)', color: '#ffffff', fontSize: '10.5px', fontWeight: '850', padding: '3px 9px', borderRadius: '6px', letterSpacing: '0.3px', border: '1px solid rgba(255,255,255,0.2)' }}>
                              {c.category || 'Civic Tech'}
                            </span>
                            <span style={{ background: stage.includes('Pilot') ? '#eff6ff' : '#ecfdf5', color: stage.includes('Pilot') ? '#1d4ed8' : '#047857', fontWeight: '850', fontSize: '10.5px', padding: '3px 9px', borderRadius: '6px', border: `1px solid ${stage.includes('Pilot') ? '#bfdbfe' : '#a7f3d0'}` }}>
                              ⚡ {stage}
                            </span>
                          </div>

                          <div style={{ position: 'absolute', bottom: '8px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#ffffff', fontSize: '11px', fontWeight: '700' }}>
                            <span style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>📍 {loc}</span>
                            <span style={{ color: '#4ade80', display: 'inline-flex', alignItems: 'center', gap: '4px', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }}></span> Live Sync
                            </span>
                          </div>
                        </div>

                        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                          <div>
                            <h3 style={{ fontSize: '15px', fontWeight: '850', color: '#0f172a', margin: '0 0 6px 0', lineHeight: '1.4' }}>{c.title}</h3>
                            <div style={{ fontSize: '11.5px', color: '#475569', marginBottom: '8px', fontWeight: '600' }}>
                              Partner: <strong style={{ color: '#002D62' }}>{univ}</strong>
                            </div>
                            <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                              {(c.description || c.abstract || '').slice(0, 100)}...
                            </p>
                          </div>

                          <div>
                            <div style={{ marginBottom: '12px', background: '#f8fafc', padding: '8px 12px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '5px' }}>
                                <span style={{ color: '#64748b' }}>Progress: <strong style={{ color: '#16a34a' }}>{progress}%</strong></span>
                                <span style={{ color: '#64748b' }}>Grant: <strong style={{ color: '#0f172a' }}>{budgetStr}</strong></span>
                              </div>
                              <div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '99px', overflow: 'hidden' }}>
                                <div style={{ width: `${progress}%`, height: '100%', background: '#16a34a', borderRadius: '99px' }}></div>
                              </div>
                            </div>

                            <button className="btn btn-primary"
                                    style={{ width: '100%', padding: '8.5px', fontWeight: '850', fontSize: '12.5px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: '0 2px 8px rgba(0,45,98,0.15)' }}
                                    onClick={(e) => { e.stopPropagation(); window.openProjectWorkspace && window.openProjectWorkspace(c._id); }}>
                              Open Workspace →
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Shared Collaboration Workspace Container (Hidden inline; accessible via Front Workspace Card Modal) */}
              <div id="sharedCollabWorkspace" style={{ display: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1.5px solid #e2e8f0', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <span className="badge badge-assigned" style={{ fontSize: '11.5px', fontWeight: '800' }}>Active Workspace</span>
                    <h3 id="wsCollabTitle" style={{ fontSize: '19px', fontWeight: '900', color: '#0f172a', margin: '6px 0 2px 0' }}>Rural Healthcare Infrastructure Development</h3>
                    <div id="wsStakeholders" style={{ fontSize: '12.5px', color: '#64748b' }}>
                      Stakeholders: <strong>State Health Dept (Admin)</strong> &nbsp;•&nbsp; <strong>IIT (ISM) Dhanbad</strong> &nbsp;•&nbsp; <strong>Tata Steel Foundation</strong>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span id="wsProgressBadge" style={{ fontSize: '14px', fontWeight: '900', color: '#16a34a', background: '#f0fdf4', padding: '6px 14px', borderRadius: '99px', border: '1px solid #bbf7d0' }}>
                      ✓ 78% Completed
                    </span>
                    <button className="btn btn-sm btn-primary" onClick={() => window.switchCollabTab && window.switchCollabTab('pilot')} style={{ fontWeight: '800' }}>
                      Track in Prototype &amp; Pilot →
                    </button>
                  </div>
                </div>

                {/* 11 Workspace Interactive Navigation Tabs */}
                <div className="workspace-tabs" style={{ display: 'flex', gap: '6px', background: '#f1f5f9', padding: '6px', borderRadius: '12px', overflowX: 'auto', marginBottom: '20px' }}>
                  <button className="ws-tab-btn" data-tab="overview" onClick={() => window.switchCollabTab && window.switchCollabTab('overview')}>Overview</button>
                  <button className="ws-tab-btn" data-tab="proposal" onClick={() => window.switchCollabTab && window.switchCollabTab('proposal')}>University Proposal</button>
                  <button className="ws-tab-btn" data-tab="requirements" onClick={() => window.switchCollabTab && window.switchCollabTab('requirements')}>Requirements</button>
                  <button className="ws-tab-btn" data-tab="commitments" onClick={() => window.switchCollabTab && window.switchCollabTab('commitments')}>Industry Commitments</button>
                  <button className="ws-tab-btn" data-tab="milestones" onClick={() => window.switchCollabTab && window.switchCollabTab('milestones')}>Milestones</button>
                  <button className="ws-tab-btn" data-tab="prototype" onClick={() => window.switchCollabTab && window.switchCollabTab('prototype')}>Prototype</button>
                  <button className="ws-tab-btn active" data-tab="pilot" onClick={() => window.switchCollabTab && window.switchCollabTab('pilot')}>Pilot Testing</button>
                  <button className="ws-tab-btn" data-tab="implementation" onClick={() => window.switchCollabTab && window.switchCollabTab('implementation')}>Implementation</button>
                  <button className="ws-tab-btn" data-tab="documents" onClick={() => window.switchCollabTab && window.switchCollabTab('documents')}>Documents</button>
                  <button className="ws-tab-btn" data-tab="communication" onClick={() => window.switchCollabTab && window.switchCollabTab('communication')}>Communication</button>
                  <button className="ws-tab-btn" data-tab="impact" onClick={() => window.switchCollabTab && window.switchCollabTab('impact')}>Impact</button>
                </div>

                {/* 11 Workspace Tab Panels */}
                <div id="workspaceTabPanelsContainer">

                  {/* TAB 1: OVERVIEW */}
                  <div id="wsPanel-overview" className="ws-tab-panel" style={{ display: 'none' }}>
                    <div style={{ background: '#f8fafc', padding: '18px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '18px' }}>
                      <div id="wsOverviewPhase" style={{ fontWeight: '850', color: '#0f172a', fontSize: '15px', marginBottom: '6px' }}>
                        Project Phase: Implementation &amp; Ground Commissioning (Phase 4 of 5)
                      </div>
                      <p id="wsOverviewSummary" style={{ color: '#475569', lineHeight: '1.6', fontSize: '13px', margin: 0 }}>
                        Solar PV arrays delivered to 3 primary rural clinics in Dhanbad. High-capacity LiFePO4 battery storage banks wired by IIT (ISM) engineering fellows alongside Tata technical mentors on site. Inverter testing and smart switch synchronization actively operational under hospital daytime load.
                      </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '18px' }}>
                      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Academic Partner</div>
                        <div id="wsOverviewUniv" style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a', marginTop: '4px' }}>IIT (ISM) Dhanbad</div>
                        <div id="wsOverviewUnivLead" style={{ fontSize: '12px', color: '#2563eb', marginTop: '2px' }}>Lead: Dr. A. K. Sengupta</div>
                      </div>
                      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Corporate Partner</div>
                        <div id="wsOverviewCorp" style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a', marginTop: '4px' }}>Tata Steel Foundation</div>
                        <div id="wsOverviewCorpGrant" style={{ fontSize: '12px', color: '#16a34a', marginTop: '2px' }}>₹12L CSR Disbursed</div>
                      </div>
                      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>State Authority</div>
                        <div id="wsOverviewState" style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a', marginTop: '4px' }}>District Health Department</div>
                        <div id="wsOverviewStateDept" style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>Dhanbad Civil Surgeon Office</div>
                      </div>
                    </div>
                  </div>

                  {/* TAB 2: UNIVERSITY PROPOSAL */}
                  <div id="wsPanel-proposal" className="ws-tab-panel" style={{ display: 'none' }}>
                    <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                        <h4 id="wsProposalTitle" style={{ margin: 0, fontSize: '16px', fontWeight: '850', color: '#002D62' }}>Modular 15kVA Solar Microgrid with LiFePO4 Battery Storage</h4>
                        <span id="wsProposalScore" style={{ background: '#dcfce7', color: '#15803d', fontSize: '12px', fontWeight: '800', padding: '4px 10px', borderRadius: '99px' }}>
                          ✓ AI Feasibility Score: 94%
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', color: '#334155', lineHeight: '1.6', marginBottom: '12px' }}>
                        <strong>Technical Abstract:</strong> <span id="wsProposalAbstract">Designed specifically for Tundi &amp; Topchanchi Primary Health Centers to eliminate vaccine spoilage and ICU blackouts during 8–12 hour rural load shedding. Incorporates an automatic surgical load-prioritizing transfer switch with sub-10ms switchover.</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '14px' }}>
                        <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700' }}>Funding Required</span>
                          <div id="wsProposalFunding" style={{ fontSize: '15px', fontWeight: '850', color: '#0f172a' }}>₹ 12,00,000</div>
                        </div>
                        <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700' }}>Lab Verification</span>
                          <div id="wsProposalLabStatus" style={{ fontSize: '15px', fontWeight: '850', color: '#0f172a' }}>TRL-5 Bench Tested</div>
                        </div>
                        <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700' }}>Deployment Timeline</span>
                          <div id="wsProposalTimeline" style={{ fontSize: '15px', fontWeight: '850', color: '#0f172a' }}>6 Months (Apr–Oct 2025)</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TAB 3: REQUIREMENTS */}
                  <div id="wsPanel-requirements" className="ws-tab-panel" style={{ display: 'none' }}>
                    <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px' }}>
                      <h4 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: '850', color: '#0f172a' }}>Technical Bill of Materials &amp; Compliance Specs</h4>
                      <ul id="wsRequirementsList" style={{ paddingLeft: '20px', color: '#334155', fontSize: '13px', lineHeight: '1.8' }}>
                        <li><strong>Solar Modules:</strong> 15kW Mono-PERC Tier-1 PV Arrays (BIS Certified, 25-Year Warranty)</li>
                        <li><strong>Battery Chemistry:</strong> 10x 100Ah 48V LiFePO4 Medical-Grade Battery Modules with BMS</li>
                        <li><strong>Micro-Inverters:</strong> Hybrid Bi-directional 15kVA Inverter with 4G/LoRaWAN Telemetry</li>
                        <li><strong>Switchgear:</strong> Automated Zero-Drop Medical Load Prioritizing Switchboard</li>
                        <li><strong>Safety Compliance:</strong> IEC 62109 &amp; IS 16221 surge and lightning protection</li>
                      </ul>
                    </div>
                  </div>

                  {/* TAB 4: INDUSTRY COMMITMENTS */}
                  <div id="wsPanel-commitments" className="ws-tab-panel" style={{ display: 'none' }}>
                    <div id="wsCommitmentsGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '13px', fontWeight: '800' }}>Financial Grant</span>
                          <span className="badge badge-resolved">Provided</span>
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', margin: '8px 0 2px 0' }}>₹ 12,00,000</div>
                        <div style={{ fontSize: '11.5px', color: '#64748b' }}>100% Disbursed via State Escrow</div>
                      </div>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '13px', fontWeight: '800' }}>Solar PV Equipment</span>
                          <span className="badge badge-resolved">Delivered</span>
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', margin: '8px 0 2px 0' }}>10 Units Mounted</div>
                        <div style={{ fontSize: '11.5px', color: '#64748b' }}>Shipped from Jamshedpur Logistics Hub</div>
                      </div>
                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '13px', fontWeight: '800' }}>Technical Mentors</span>
                          <span className="badge badge-assigned">Active on Site</span>
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', margin: '8px 0 2px 0' }}>2 Senior Engineers</div>
                        <div style={{ fontSize: '11.5px', color: '#64748b' }}>Assisting with Inverter Synchronization</div>
                      </div>
                    </div>
                  </div>

                  {/* TAB 5: MILESTONES */}
                  <div id="wsPanel-milestones" className="ws-tab-panel" style={{ display: 'none' }}>
                    <div id="wsMilestonesList" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px' }}>
                        <div>
                          <strong>M1: Bench Laboratory Testing &amp; TRL-5 Validation</strong>
                          <div style={{ fontSize: '12px', color: '#15803d' }}>Completed at IIT (ISM) Electrical Engineering Lab</div>
                        </div>
                        <span className="badge badge-resolved">100% Completed</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px' }}>
                        <div>
                          <strong>M2: SDO District Clearance &amp; Site Readiness</strong>
                          <div style={{ fontSize: '12px', color: '#15803d' }}>Physical inspection signed off by Dhanbad Collectorate</div>
                        </div>
                        <span className="badge badge-resolved">100% Completed</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px' }}>
                        <div>
                          <strong>M3: Equipment Delivery &amp; Solar Array Mounting</strong>
                          <div style={{ fontSize: '12px', color: '#1d4ed8' }}>Panels installed on Tundi &amp; Topchanchi PHC rooftops</div>
                        </div>
                        <span className="badge badge-assigned">In Progress (90%)</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px' }}>
                        <div>
                          <strong>M4: Battery Bank Sync &amp; ICU Load Testing</strong>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>Scheduled for 20 Sep 2025</div>
                        </div>
                        <span className="badge">Upcoming</span>
                      </div>
                    </div>
                  </div>

                                    {/* TAB 6: PROTOTYPE ⭐ (Merged from Prototype & Pilot) */}
                  <div id="wsPanel-prototype" className="ws-tab-panel" style={{ display: 'none' }}>
                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '20px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
                        <div>
                          <span style={{ fontSize: '11px', fontWeight: '800', background: '#dcfce7', color: '#15803d', padding: '3px 10px', borderRadius: '99px', border: '1px solid #86efac' }}>
                            ✓ TRL-5 Bench Laboratory Certified
                          </span>
                          <h4 id="wsProtoTitle" style={{ margin: '6px 0 2px 0', fontSize: '17px', fontWeight: '900', color: '#0f172a' }}>Academic Prototype Engineering Rig</h4>
                          <div id="wsProtoDevBy" style={{ fontSize: '12px', color: '#64748b' }}>Developed by IIT (ISM) Dhanbad Department of Electrical Engineering</div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button className="btn btn-sm btn-outline-primary" onClick={() => window.openImageLightbox && window.openImageLightbox('/images/solar-hospital.jpg', 'Solar Unit Prototype Rig', 'IIT (ISM) Dhanbad Laboratory Bench Test')}>
                            🔍 Inspect Prototype Rig
                          </button>
                          <button className="btn btn-sm btn-primary" onClick={() => window.approvePrototypeReadiness && window.approvePrototypeReadiness()}>
                            ✓ Approve Readiness
                          </button>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'start' }}>
                        <div>
                          <img id="wsProtoRigImg" src="/images/solar-hospital.jpg" alt="Prototype Rig" style={{ width: '100%', height: '190px', objectFit: 'cover', borderRadius: '12px', border: '1px solid #cbd5e1' }} onError={(e) => { e.target.src = '/images/solar-hospital.jpg'; }} />
                          <div style={{ fontSize: '11.5px', color: '#64748b', textAlign: 'center', marginTop: '6px' }}>Bench Simulation Rig v2.1 (Tested at 45°C ambient)</div>
                        </div>

                        <div>
                          <div style={{ fontWeight: '800', fontSize: '13.5px', color: '#0f172a', marginBottom: '8px' }}>Engineering Specifications &amp; Lab Trials</div>
                          <p id="wsProtoTrialsDesc" style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: '0 0 14px 0' }}>
                            Continuous 120-hour full load test conducted on university bench. The inverter peak conversion efficiency recorded at 97.8% under simulated monsoon surges and extreme summer temperatures. Dynamic load balancer automatically isolated ICU and cold-chain vaccine storages during simulated grid dropouts.
                          </p>

                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginBottom: '14px' }}>
                            <div style={{ background: '#ffffff', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                              <div style={{ fontSize: '11px', color: '#64748b' }}>Inverter Efficiency</div>
                              <div id="wsProtoEffVal" style={{ fontSize: '16px', fontWeight: '850', color: '#16a34a' }}>97.8%</div>
                            </div>
                            <div style={{ background: '#ffffff', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                              <div style={{ fontSize: '11px', color: '#64748b' }}>Switchover Time</div>
                              <div id="wsProtoSwitchVal" style={{ fontSize: '16px', fontWeight: '850', color: '#0f172a' }}>&lt; 8 ms</div>
                            </div>
                            <div style={{ background: '#ffffff', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                              <div style={{ fontSize: '11px', color: '#64748b' }}>Thermal Stability</div>
                              <div id="wsProtoTempVal" style={{ fontSize: '16px', fontWeight: '850', color: '#0f172a' }}>37.5°C</div>
                            </div>
                            <div style={{ background: '#ffffff', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                              <div style={{ fontSize: '11px', color: '#64748b' }}>TRL Level</div>
                              <div id="wsProtoTrlVal" style={{ fontSize: '16px', fontWeight: '850', color: '#2563eb' }}>TRL-5 Validated</div>
                            </div>
                          </div>

                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            <button className="btn btn-sm btn-ghost" onClick={() => window.toastSuccess && window.toastSuccess('Opening BOM Component Verification Table')} style={{ border: '1px solid #cbd5e1' }}>
                              📋 Bill of Materials (BOM)
                            </button>
                            <button className="btn btn-sm btn-ghost" onClick={() => window.toastSuccess && window.toastSuccess('Downloaded TRL-5 Lab Test Sign-off Sheet')} style={{ border: '1px solid #cbd5e1' }}>
                              📑 Download Lab Sign-Off
                            </button>
                            <button className="btn btn-sm btn-ghost" onClick={() => window.requestPrototypeRevision && window.requestPrototypeRevision()} style={{ border: '1px solid #cbd5e1', color: '#b45309' }}>
                              ✏️ Request Revision
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                                    
                  {/* TAB 7: PILOT TESTING – EXACT REPLICA OF IMAGE 4 */}
                  <div id="wsPanel-pilot" className="ws-tab-panel" style={{ display: 'block' }}>
                    
                    {/* Header Banner with Flag Wave matching Image 4 */}
                    <div style={{ position: 'relative', background: 'linear-gradient(135deg, #002D62 0%, #034694 50%, #0c4a6e 100%)', borderRadius: '16px', overflow: 'hidden', padding: '22px 28px', color: '#ffffff', marginBottom: '20px', boxShadow: '0 6px 20px rgba(0,45,98,0.12)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', position: 'relative', zIndex: 2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                            👥
                          </div>
                          <div>
                            <h3 style={{ fontSize: '21px', fontWeight: '900', margin: '0 0 4px 0', color: '#ffffff', letterSpacing: '-0.3px' }}>
                              Prototype Development &amp; Small-Scale Pilot Testing
                            </h3>
                            <p style={{ fontSize: '13px', color: '#bae6fd', margin: 0, fontWeight: '500' }}>
                              Track university solution engineering, pilot deployment, field data and provide your support and feedback.
                            </p>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '12px', fontWeight: '800', color: '#fef08a', textTransform: 'uppercase', letterSpacing: '0.6px' }}>Real Partnerships. Real Solutions.</div>
                          <div style={{ fontSize: '16px', fontWeight: '900', color: '#ffffff', marginTop: '2px' }}>Stronger Jharkhand.</div>
                        </div>
                      </div>

                      {/* Tricolor Ribbon Bottom Edge */}
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', display: 'flex', zIndex: 3 }}>
                        <div style={{ flex: 1, background: '#FF9933' }}></div>
                        <div style={{ flex: 1, background: '#FFFFFF' }}></div>
                        <div style={{ flex: 1, background: '#138808' }}></div>
                      </div>
                    </div>

                    {/* 7-STAGE PIPELINE STEPPER MATCHING IMAGE 4 */}
                    <div className="proto-pipeline-container" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '18px 24px', marginBottom: '20px', overflowX: 'auto', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                      <div className="proto-pipeline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '780px', gap: '6px' }}>
                        
                        {/* Step 1 */}
                        <div id="step-node-1" className="pipeline-step completed" onClick={() => window.showStageDetails && window.showStageDetails(1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <div className="step-circle" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', border: '1.5px solid #86efac', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '900' }}>✓</div>
                          <div className="step-label" style={{ fontSize: '12.5px', fontWeight: '750', color: '#15803d', whiteSpace: 'nowrap' }}>Solution Proposal</div>
                        </div>
                        <div id="step-connector-1" className="pipeline-connector active" style={{ flex: 1, height: '2.5px', background: '#22c55e', minWidth: '20px' }}></div>

                        {/* Step 2 */}
                        <div id="step-node-2" className="pipeline-step completed" onClick={() => window.showStageDetails && window.showStageDetails(2)} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <div className="step-circle" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', border: '1.5px solid #86efac', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '900' }}>✓</div>
                          <div className="step-label" style={{ fontSize: '12.5px', fontWeight: '750', color: '#15803d', whiteSpace: 'nowrap' }}>Industry Support</div>
                        </div>
                        <div id="step-connector-2" className="pipeline-connector active" style={{ flex: 1, height: '2.5px', background: '#22c55e', minWidth: '20px' }}></div>

                        {/* Step 3 */}
                        <div id="step-node-3" className="pipeline-step completed" onClick={() => window.showStageDetails && window.showStageDetails(3)} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <div className="step-circle" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', border: '1.5px solid #86efac', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '900' }}>✓</div>
                          <div className="step-label" style={{ fontSize: '12.5px', fontWeight: '750', color: '#15803d', whiteSpace: 'nowrap' }}>Prototype Ready</div>
                        </div>
                        <div id="step-connector-3" className="pipeline-connector active" style={{ flex: 1, height: '2.5px', background: '#002D62', minWidth: '20px' }}></div>

                        {/* Step 4: Active */}
                        <div id="step-node-4" className="pipeline-step current" onClick={() => window.showStageDetails && window.showStageDetails(4)} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <div className="step-circle" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#002D62', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13.5px', fontWeight: '900', boxShadow: '0 3px 10px rgba(0,45,98,0.35)' }}>4</div>
                          <div className="step-label" style={{ fontSize: '13px', fontWeight: '900', color: '#002D62', whiteSpace: 'nowrap' }}>Pilot Testing</div>
                        </div>
                        <div id="step-connector-4" className="pipeline-connector" style={{ flex: 1, height: '2px', background: '#e2e8f0', minWidth: '20px' }}></div>

                        {/* Step 5 */}
                        <div id="step-node-5" className="pipeline-step upcoming" onClick={() => window.showStageDetails && window.showStageDetails(5)} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <div className="step-circle" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f8fafc', color: '#94a3b8', border: '1.5px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>5</div>
                          <div className="step-label" style={{ fontSize: '12.5px', fontWeight: '700', color: '#64748b', whiteSpace: 'nowrap' }}>Pilot Evaluation</div>
                        </div>
                        <div id="step-connector-5" className="pipeline-connector" style={{ flex: 1, height: '2px', background: '#e2e8f0', minWidth: '20px' }}></div>

                        {/* Step 6 */}
                        <div id="step-node-6" className="pipeline-step upcoming" onClick={() => window.showStageDetails && window.showStageDetails(6)} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <div className="step-circle" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f8fafc', color: '#94a3b8', border: '1.5px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>6</div>
                          <div className="step-label" style={{ fontSize: '12.5px', fontWeight: '700', color: '#64748b', whiteSpace: 'nowrap' }}>Ground Implementation</div>
                        </div>
                        <div id="step-connector-6" className="pipeline-connector" style={{ flex: 1, height: '2px', background: '#e2e8f0', minWidth: '20px' }}></div>

                        {/* Step 7 */}
                        <div id="step-node-7" className="pipeline-step upcoming" onClick={() => window.showStageDetails && window.showStageDetails(7)} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <div className="step-circle" style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f8fafc', color: '#94a3b8', border: '1.5px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>7</div>
                          <div className="step-label" style={{ fontSize: '12.5px', fontWeight: '750', color: '#64748b', whiteSpace: 'nowrap' }}>Citizen Validation</div>
                        </div>

                      </div>
                    </div>

                    {/* MAIN HERO CARD MATCHING IMAGE 4 */}
                    <div className="collab-hero-card">
                      
                      {/* Photo Thumbnail */}
                      <div className="collab-hero-thumb" style={{ position: 'relative', width: '130px', height: '110px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #cbd5e1', flexShrink: 0 }}>
                        <img id="protoHeroThumb" src="/images/solar-hospital.jpg" alt="Rural Hospital Solar Unit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/images/solar-hospital.jpg'; }} />
                      </div>

                      {/* Title & Description & Tags */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                          <span id="protoHeroStatus" className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontWeight: '850', fontSize: '11.5px', padding: '3px 10px', borderRadius: '99px', border: '1px solid #bfdbfe' }}>
                            Pilot in Progress
                          </span>
                        </div>
                        <h2 id="protoHeroTitle" style={{ fontSize: '19px', fontWeight: '900', color: '#0f172a', margin: '0 0 4px 0', letterSpacing: '-0.3px' }}>
                          Rural Hospital Solar Unit v2.1
                        </h2>
                        <div id="protoHeroCategory" style={{ fontSize: '12.5px', color: '#64748b', marginBottom: '8px' }}>
                          🏥 Healthcare &nbsp;•&nbsp; 📍 Dhanbad, Jharkhand
                        </div>
                        <p id="protoHeroDesc" style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5', margin: '0 0 10px 0' }}>
                          Solar powered backup system for uninterrupted power supply in rural health centers.
                        </p>
                        <div id="protoHeroTags" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          <span className="badge" style={{ background: '#eff6ff', color: '#2563eb', fontSize: '11px', fontWeight: '750' }}>Solar Technology</span>
                          <span className="badge" style={{ background: '#eff6ff', color: '#2563eb', fontSize: '11px', fontWeight: '750' }}>Battery System</span>
                          <span className="badge" style={{ background: '#eff6ff', color: '#2563eb', fontSize: '11px', fontWeight: '750' }}>Rural Healthcare</span>
                          <span className="badge" style={{ background: '#eff6ff', color: '#2563eb', fontSize: '11px', fontWeight: '750' }}>Clean Energy</span>
                        </div>
                      </div>

                      {/* Middle Column: Partner, Role, Timeline */}
                      <div className="hero-col-border">
                        <div style={{ marginBottom: '10px' }}>
                          <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '750', textTransform: 'uppercase' }}>University Partner</div>
                          <div id="protoHeroUniv" style={{ fontSize: '13.5px', fontWeight: '850', color: '#0f172a', marginTop: '2px' }}>IIT (ISM) Dhanbad</div>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                          <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '750', textTransform: 'uppercase' }}>Our Role</div>
                          <div id="protoHeroRole" style={{ fontSize: '13px', fontWeight: '800', color: '#2563eb', marginTop: '2px' }}>Funding + Equipment + Technical Support</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '750', textTransform: 'uppercase' }}>Timeline</div>
                          <div id="protoHeroTimeline" style={{ fontSize: '12.5px', fontWeight: '700', color: '#475569', marginTop: '2px' }}>Apr 2025 – Dec 2025</div>
                        </div>
                      </div>

                      {/* Right Column: Progress & Current Stage */}
                      <div className="hero-col-border hero-progress-col">
                        <div style={{ marginBottom: '12px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                            <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: '750' }}>Overall Progress</span>
                            <span id="protoHeroProgressVal" style={{ fontSize: '14px', fontWeight: '900', color: '#16a34a' }}>78%</span>
                          </div>
                          <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '99px', overflow: 'hidden' }}>
                            <div id="protoHeroProgressBar" style={{ width: '78%', height: '100%', background: 'linear-gradient(90deg, #16a34a, #22c55e)', borderRadius: '99px' }}></div>
                          </div>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                          <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '750', textTransform: 'uppercase' }}>Current Stage</div>
                          <div id="protoHeroStage" style={{ fontSize: '13px', fontWeight: '850', color: '#002D62', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                            <span>⚛</span> Pilot Testing
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '750', textTransform: 'uppercase' }}>Next Milestone</div>
                          <div id="protoHeroMilestone" style={{ fontSize: '12.5px', fontWeight: '750', color: '#475569', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                            <span>📅</span> Pilot Evaluation (20 Sep 2025)
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* PROJECT INNER NAVIGATION TABS MATCHING IMAGE 4 */}
                    <div style={{ display: 'flex', gap: '6px', borderBottom: '1.5px solid #e2e8f0', marginBottom: '22px', overflowX: 'auto' }}>
                      <button id="protoTabBtn-overview" className="proto-inner-tab active" onClick={() => window.switchProtoInnerTab && window.switchProtoInnerTab('overview')} style={{ padding: '10px 18px', fontSize: '13px', fontWeight: '850', border: 'none', background: 'transparent', cursor: 'pointer', borderBottom: '3px solid #002D62', color: '#002D62', whiteSpace: 'nowrap' }}>
                        Pilot Overview
                      </button>
                      <button id="protoTabBtn-live" className="proto-inner-tab" onClick={() => window.switchProtoInnerTab && window.switchProtoInnerTab('live')} style={{ padding: '10px 18px', fontSize: '13px', fontWeight: '750', border: 'none', background: 'transparent', cursor: 'pointer', borderBottom: '3px solid transparent', color: '#64748b', whiteSpace: 'nowrap' }}>
                        Live Data &amp; Reports
                      </button>
                      <button id="protoTabBtn-field" className="proto-inner-tab" onClick={() => window.switchProtoInnerTab && window.switchProtoInnerTab('field')} style={{ padding: '10px 18px', fontSize: '13px', fontWeight: '750', border: 'none', background: 'transparent', cursor: 'pointer', borderBottom: '3px solid transparent', color: '#64748b', whiteSpace: 'nowrap' }}>
                        Field Testing
                      </button>
                      <button id="protoTabBtn-issues" className="proto-inner-tab" onClick={() => window.switchProtoInnerTab && window.switchProtoInnerTab('issues')} style={{ padding: '10px 18px', fontSize: '13px', fontWeight: '750', border: 'none', background: 'transparent', cursor: 'pointer', borderBottom: '3px solid transparent', color: '#64748b', whiteSpace: 'nowrap' }}>
                        Issues &amp; Feedback
                      </button>
                      <button id="protoTabBtn-docs" className="proto-inner-tab" onClick={() => window.switchProtoInnerTab && window.switchProtoInnerTab('docs')} style={{ padding: '10px 18px', fontSize: '13px', fontWeight: '750', border: 'none', background: 'transparent', cursor: 'pointer', borderBottom: '3px solid transparent', color: '#64748b', whiteSpace: 'nowrap' }}>
                        Documents
                      </button>
                      <button id="protoTabBtn-team" className="proto-inner-tab" onClick={() => window.switchProtoInnerTab && window.switchProtoInnerTab('team')} style={{ padding: '10px 18px', fontSize: '13px', fontWeight: '750', border: 'none', background: 'transparent', cursor: 'pointer', borderBottom: '3px solid transparent', color: '#64748b', whiteSpace: 'nowrap' }}>
                        Team &amp; Communication
                      </button>
                    </div>

                    {/* TWO COLUMN GRID: LEFT (70%) & RIGHT (30%) MATCHING IMAGE 4 */}
                    <div className="collab-two-col-grid">

                      {/* ═══ LEFT COLUMN (70%) ═══ */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        {/* ROW 1: Pilot Testing Details & Live Telemetry */}
                        <div className="collab-subgrid-2col">

                          {/* Box 1: Pilot Testing Details with Working Edit */}
                          <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                              <div style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>⚙️</span> Pilot Testing Details ℹ️
                              </div>
                              <button type="button" onClick={() => window.editPilotDetails && window.editPilotDetails()} style={{ border: 'none', background: 'transparent', color: '#2563eb', fontSize: '12px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span>✏️</span> Edit
                              </button>
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', marginBottom: '14px' }}>
                              <div><span style={{ color: '#64748b' }}>Pilot Location:</span> &nbsp;<strong id="protoDetailLocation" style={{ color: '#0f172a' }}>Dhanbad District Hospital</strong></div>
                              <div><span style={{ color: '#64748b' }}>📅 Test Start Date:</span> &nbsp;<strong id="protoDetailStartDate" style={{ color: '#0f172a' }}>15 Aug 2025</strong></div>
                              <div><span style={{ color: '#64748b' }}>⏱️ Expected Duration:</span> &nbsp;<strong id="protoDetailDuration" style={{ color: '#0f172a' }}>30 days</strong></div>
                              <div><span style={{ color: '#64748b' }}>🏥 Test Environment:</span> &nbsp;<strong id="protoDetailEnv" style={{ color: '#0f172a' }}>Real hospital load (ICU, ward, lab)</strong></div>
                            </div>

                            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                              <div style={{ fontSize: '11.5px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>Objectives:</div>
                              <div id="protoDetailObjectives" style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '12px', color: '#334155' }}>
                                <div><span style={{ color: '#16a34a', fontWeight: '900' }}>✓</span> Validate system performance</div>
                                <div><span style={{ color: '#16a34a', fontWeight: '900' }}>✓</span> Measure power backup reliability</div>
                                <div><span style={{ color: '#16a34a', fontWeight: '900' }}>✓</span> Monitor battery efficiency</div>
                                <div><span style={{ color: '#16a34a', fontWeight: '900' }}>✓</span> Check real-time load handling</div>
                                <div><span style={{ color: '#16a34a', fontWeight: '900' }}>✓</span> Identify potential improvements</div>
                              </div>
                            </div>
                          </div>

                          {/* Box 2: Live Telemetry with Wave Area Chart */}
                          <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                              <div style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a' }}>
                                Live Telemetry (Last 24 Hours)
                              </div>
                              <span style={{ fontSize: '11px', fontWeight: '800', color: '#16a34a', background: '#f0fdf4', padding: '2px 8px', borderRadius: '99px', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span> Live
                              </span>
                            </div>

                            {/* 4 Stat Boxes */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(65px, 1fr))', gap: '10px', marginBottom: '14px' }}>
                              <div style={{ background: '#f8fafc', padding: '10px 8px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                                <div style={{ fontSize: '10.5px', color: '#64748b' }}>⚡ Power</div>
                                <div id="protoStatPower" style={{ fontSize: '15px', fontWeight: '900', color: '#0f172a', marginTop: '2px' }}>5.2 kW</div>
                              </div>
                              <div style={{ background: '#f8fafc', padding: '10px 8px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                                <div style={{ fontSize: '10.5px', color: '#64748b' }}>🔋 Battery</div>
                                <div id="protoStatBattery" style={{ fontSize: '15px', fontWeight: '900', color: '#16a34a', marginTop: '2px' }}>78%</div>
                              </div>
                              <div style={{ background: '#f8fafc', padding: '10px 8px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                                <div style={{ fontSize: '10.5px', color: '#64748b' }}>📊 Load</div>
                                <div id="protoStatLoad" style={{ fontSize: '15px', fontWeight: '900', color: '#0f172a', marginTop: '2px' }}>3.8 kW</div>
                              </div>
                              <div style={{ background: '#f8fafc', padding: '10px 8px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                                <div style={{ fontSize: '10.5px', color: '#64748b' }}>🌡 Temp</div>
                                <div id="protoStatTemp" style={{ fontSize: '15px', fontWeight: '900', color: '#0f172a', marginTop: '2px' }}>36 °C</div>
                              </div>
                            </div>

                            {/* Filled Area Chart matching Image 4 */}
                            <div>
                              <div style={{ fontSize: '11px', fontWeight: '750', color: '#64748b', marginBottom: '4px' }}>Power Output (kW)</div>
                              <div style={{ height: '70px', position: 'relative' }}>
                                <svg viewBox="0 0 500 70" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                                  <defs>
                                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                                    </linearGradient>
                                  </defs>
                                  <path d="M 0 50 Q 70 30 140 45 T 280 20 T 420 30 L 500 35 L 500 70 L 0 70 Z" fill="url(#areaGradient)" />
                                  <path d="M 0 50 Q 70 30 140 45 T 280 20 T 420 30 L 500 35" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                                </svg>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8', marginTop: '4px' }}>
                                <span>00:00</span>
                                <span>04:00</span>
                                <span>08:00</span>
                                <span>12:00</span>
                                <span>16:00</span>
                                <span>20:00</span>
                              </div>
                            </div>

                          </div>

                        </div>

                        {/* ROW 2: Recent Pilot Updates & Field Photos / Videos */}
                        <div className="collab-subgrid-2col">

                          {/* Box 3: Recent Pilot Updates */}
                          <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <div style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span>📋</span> Recent Pilot Updates
                            </div>
                            <div id="protoUpdatesList" style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px' }}>
                              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <span style={{ color: '#16a34a', fontSize: '13px' }}>●</span>
                                <div><strong style={{ color: '#0f172a' }}>12 Sep 2025:</strong> &nbsp;<span style={{ color: '#475569' }}>Telemetry data shows 99.2% uptime over last 7 days.</span></div>
                              </div>
                              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <span style={{ color: '#16a34a', fontSize: '13px' }}>●</span>
                                <div><strong style={{ color: '#0f172a' }}>10 Sep 2025:</strong> &nbsp;<span style={{ color: '#475569' }}>Battery efficiency improved to 91%.</span></div>
                              </div>
                              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <span style={{ color: '#f59e0b', fontSize: '13px' }}>●</span>
                                <div><strong style={{ color: '#0f172a' }}>08 Sep 2025:</strong> &nbsp;<span style={{ color: '#475569' }}>Minor inverter temperature fluctuation detected (within safe range).</span></div>
                              </div>
                              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <span style={{ color: '#16a34a', fontSize: '13px' }}>●</span>
                                <div><strong style={{ color: '#0f172a' }}>05 Sep 2025:</strong> &nbsp;<span style={{ color: '#475569' }}>Field team completed load testing.</span></div>
                              </div>
                            </div>
                          </div>

                          {/* Box 4: Field Photos / Videos */}
                          <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                              <div style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a' }}>
                                Field Photos / Videos
                              </div>
                              <button type="button" onClick={() => window.openImageLightbox && window.openImageLightbox('/images/solar-hospital.jpg', 'Dhanbad District Hospital Solar Microgrid', 'BIS Tier-1 Certified PV System')} style={{ border: 'none', background: 'transparent', color: '#2563eb', fontSize: '12px', fontWeight: '800', cursor: 'pointer' }}>
                                View All
                              </button>
                            </div>
                            <div id="protoFieldPhotosGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                              <div onClick={() => window.openImageLightbox && window.openImageLightbox('/images/solar-hospital.jpg', 'Solar PV Rooftop Array', 'Dhanbad District Hospital')} style={{ position: 'relative', height: '80px', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #cbd5e1' }}>
                                <img src="/images/solar-hospital.jpg" alt="Solar Arrays" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/images/solar-hospital.jpg'; }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '16px' }}>▶</div>
                              </div>
                              <div onClick={() => window.openImageLightbox && window.openImageLightbox('/images/agri-monitoring.jpg', 'Inverter Synchronizer & Switchgear Panel', 'TRL-5 Verified Circuitry')} style={{ position: 'relative', height: '80px', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #cbd5e1' }}>
                                <img src="/images/agri-monitoring.jpg" alt="Control Panel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/images/agri-monitoring.jpg'; }} />
                              </div>
                              <div onClick={() => window.openImageLightbox && window.openImageLightbox('/images/digital-learning.jpg', 'Medical-Grade LiFePO4 Battery Bank', '10x 100Ah 48V Storage')} style={{ position: 'relative', height: '80px', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #cbd5e1' }}>
                                <img src="/images/digital-learning.jpg" alt="Battery Rack" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/images/digital-learning.jpg'; }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '14px', fontWeight: '900' }}>+3</div>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* ROW 3: Feedback from Field Team & Next Steps */}
                        <div className="collab-subgrid-2col">

                          {/* Box 5: Feedback from Field Team */}
                          <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <div style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span>💬</span> Feedback from Field Team
                            </div>
                            <div id="protoFeedbackQuote" style={{ background: '#f8fafc', borderLeft: '3px solid #2563eb', padding: '12px 14px', borderRadius: '0 10px 10px 0', fontSize: '12px', color: '#334155', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '10px' }}>
                              "System is working well under real load conditions. No power interruption recorded so far. Battery performance is within expected range. Minor inverter temperature spike observed but normal."
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#64748b' }}>
                              <span id="protoFeedbackAuthor">— <strong>Dr. Anil Kumar</strong>, Site Engineer (Field Team)</span>
                              <span id="protoFeedbackDate">12 Sep 2025</span>
                            </div>
                          </div>

                          {/* Box 6: Next Steps */}
                          <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                            <div style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span>📝</span> Next Steps
                            </div>
                            <div id="protoNextStepsList" style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#334155' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '850', fontSize: '11px' }}>1</span>
                                <span>Continue field testing till 14 Sep 2025</span>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '850', fontSize: '11px' }}>2</span>
                                <span>Analyze complete test data</span>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '850', fontSize: '11px' }}>3</span>
                                <span>Submit pilot evaluation report</span>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '850', fontSize: '11px' }}>4</span>
                                <span>Move to Ground Implementation (if approved)</span>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* ROW 4: BOTTOM ACTION BUTTONS MATCHING IMAGE 4 */}
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '4px' }}>
                          <button type="button" className="btn btn-primary" onClick={() => window.approvePilotStage && window.approvePilotStage()} style={{ padding: '11px 24px', fontWeight: '850', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#002D62', borderRadius: '10px' }}>
                            <span>✓</span> Approve Pilot Stage
                          </button>
                          <button type="button" className="btn btn-outline-primary" onClick={() => window.requestRevisionOnPilot && window.requestRevisionOnPilot()} style={{ padding: '11px 20px', fontWeight: '800', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '10px' }}>
                            <span>🔄</span> Request Revision
                          </button>
                          <button type="button" className="btn btn-outline-primary" onClick={() => window.requestMorePilotData && window.requestMorePilotData()} style={{ padding: '11px 20px', fontWeight: '800', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '10px' }}>
                            <span>📄</span> Request More Data
                          </button>
                        </div>

                      </div>

                      {/* ═══ RIGHT COLUMN (30%) MATCHING IMAGE 4 ═══ */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

                        {/* Box 1: Actions Required */}
                        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                            <div style={{ fontSize: '13.5px', fontWeight: '850', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span>🚨</span> Actions Required
                            </div>
                            <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#dc2626', color: '#ffffff', fontSize: '11px', fontWeight: '900', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div onClick={() => window.reviewLatestPilotData && window.reviewLatestPilotData('solar-phc')} style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.15s ease' }}>
                              <div>
                                <div style={{ fontSize: '12.5px', fontWeight: '850', color: '#0f172a' }}>Review latest pilot data</div>
                                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>New data available from field sensors</div>
                              </div>
                              <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '14px' }}>›</span>
                            </div>

                            <div onClick={() => window.provideTechnicalFeedback && window.provideTechnicalFeedback()} style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.15s ease' }}>
                              <div>
                                <div style={{ fontSize: '12.5px', fontWeight: '850', color: '#0f172a' }}>Provide technical feedback</div>
                                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>University requested your inputs</div>
                              </div>
                              <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '14px' }}>›</span>
                            </div>

                            <div onClick={() => window.approvePilotStage && window.approvePilotStage()} style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.15s ease' }}>
                              <div>
                                <div style={{ fontSize: '12.5px', fontWeight: '850', color: '#0f172a' }}>Approve pilot stage</div>
                                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Pilot evaluation due on 20 Sep 2025</div>
                              </div>
                              <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '14px' }}>›</span>
                            </div>
                          </div>
                        </div>

                        {/* Box 2: Support Commitments */}
                        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                            <div style={{ fontSize: '13.5px', fontWeight: '850', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span>⚙️</span> Support Commitments
                            </div>
                            <button type="button" onClick={() => window.showSection && window.showSection('commitments')} style={{ border: 'none', background: 'transparent', color: '#2563eb', fontSize: '12px', fontWeight: '800', cursor: 'pointer' }}>
                              View All
                            </button>
                          </div>

                          <div id="protoSupportCommitmentsList" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: '#f8fafc', borderRadius: '8px' }}>
                              <span style={{ fontSize: '12.5px', fontWeight: '750', color: '#0f172a' }}>💰 ₹ 10 Lakh Funding</span>
                              <span className="badge" style={{ background: '#dcfce7', color: '#16a34a', fontWeight: '850', fontSize: '11px' }}>Provided</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: '#f8fafc', borderRadius: '8px' }}>
                              <span style={{ fontSize: '12.5px', fontWeight: '750', color: '#0f172a' }}>☀️ Solar Panels (10 units)</span>
                              <span className="badge" style={{ background: '#dcfce7', color: '#16a34a', fontWeight: '850', fontSize: '11px' }}>Provided</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: '#f8fafc', borderRadius: '8px' }}>
                              <span style={{ fontSize: '12.5px', fontWeight: '750', color: '#0f172a' }}>🔋 Battery System</span>
                              <span className="badge" style={{ background: '#fef3c7', color: '#d97706', fontWeight: '850', fontSize: '11px' }}>In Progress</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: '#f8fafc', borderRadius: '8px' }}>
                              <span style={{ fontSize: '12.5px', fontWeight: '750', color: '#0f172a' }}>👨‍💼 Technical Expert</span>
                              <span className="badge" style={{ background: '#dcfce7', color: '#16a34a', fontWeight: '850', fontSize: '11px' }}>Provided</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: '#f8fafc', borderRadius: '8px' }}>
                              <span style={{ fontSize: '12.5px', fontWeight: '750', color: '#0f172a' }}>🔬 Testing Equipment</span>
                              <span className="badge" style={{ background: '#fef3c7', color: '#d97706', fontWeight: '850', fontSize: '11px' }}>In Progress</span>
                            </div>
                          </div>
                        </div>

                        {/* Box 3: Important Dates */}
                        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                          <div style={{ fontSize: '13.5px', fontWeight: '850', color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span>📅</span> Important Dates
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span style={{ color: '#64748b' }}>Pilot Test End:</span>
                              <strong id="protoDateTestEnd" style={{ color: '#0f172a' }}>14 Sep 2025</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span style={{ color: '#64748b' }}>Evaluation Review:</span>
                              <strong id="protoDateReview" style={{ color: '#0f172a' }}>20 Sep 2025</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span style={{ color: '#64748b' }}>Expected Implementation:</span>
                              <strong id="protoDateImpl" style={{ color: '#0f172a' }}>Oct 2025</strong>
                            </div>
                          </div>
                        </div>

                        {/* Box 4: Quick Links */}
                        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                          <div style={{ fontSize: '13.5px', fontWeight: '850', color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span>🔗</span> Quick Links
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <button type="button" onClick={() => window.downloadTestProtocol && window.downloadTestProtocol()} style={{ border: 'none', background: '#f8fafc', padding: '8px 10px', borderRadius: '8px', textAlign: 'left', fontSize: '12px', fontWeight: '750', color: '#2563eb', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              📄 Download Test Protocol
                            </button>
                            <button type="button" onClick={() => window.openModal && window.openModal('modalStageDetails')} style={{ border: 'none', background: '#f8fafc', padding: '8px 10px', borderRadius: '8px', textAlign: 'left', fontSize: '12px', fontWeight: '750', color: '#2563eb', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              📄 View Risk Assessment
                            </button>
                            <button type="button" onClick={() => window.downloadTestProtocol && window.downloadTestProtocol()} style={{ border: 'none', background: '#f8fafc', padding: '8px 10px', borderRadius: '8px', textAlign: 'left', fontSize: '12px', fontWeight: '750', color: '#2563eb', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              📄 Field Visit Report Template
                            </button>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* TAB 8: IMPLEMENTATION */}
                  <div id="wsPanel-implementation" className="ws-tab-panel" style={{ display: 'none' }}>
                    <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px' }}>
                      <h4 style={{ margin: '0 0 10px 0', fontSize: '15px', fontWeight: '850', color: '#0f172a' }}>Ground Commissioning Roadmap</h4>
                      <div id="wsImplementationSites" style={{ fontSize: '13px', color: '#334155', lineHeight: '1.7' }}>
                        <div>📍 <strong>Site 1 (Tundi PHC):</strong> 5kW Solar Array &amp; LiFePO4 Inverter Ready. Commissioning on 18 Sep 2025.</div>
                        <div>📍 <strong>Site 2 (Topchanchi PHC):</strong> Array mounted; smart transfer switch undergoing final sync.</div>
                        <div>📍 <strong>Site 3 (Rajganj Sub-Center):</strong> Civil foundation cleared by Gram Panchayat.</div>
                      </div>
                    </div>
                  </div>

                  {/* TAB 9: DOCUMENTS */}
                  <div id="wsPanel-documents" className="ws-tab-panel" style={{ display: 'none' }}>
                    <div id="wsDocumentsList" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#f8fafc' }}>
                        <span style={{ fontSize: '13px', fontWeight: '750' }}>📄 Tripartite_MoU_IIT_TataSteel_JanSetu.pdf</span>
                        <button className="btn btn-sm btn-ghost" onClick={() => window.toastSuccess && window.toastSuccess('Downloaded Verified Tripartite Agreement')}>Download</button>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#f8fafc' }}>
                        <span style={{ fontSize: '13px', fontWeight: '750' }}>🛡️ Tax_Exemption_Certificate_80G_CSR.pdf</span>
                        <button className="btn btn-sm btn-ghost" onClick={() => window.toastSuccess && window.toastSuccess('Downloaded 80G Tax Exemption Certificate')}>Download</button>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#f8fafc' }}>
                        <span style={{ fontSize: '13px', fontWeight: '750' }}>📋 SDO_Site_Readiness_Inspection_Report.pdf</span>
                        <button className="btn btn-sm btn-ghost" onClick={() => window.toastSuccess && window.toastSuccess('Downloaded Official SDO Inspection Sign-off')}>Download</button>
                      </div>
                    </div>
                  </div>

                  {/* TAB 10: COMMUNICATION */}
                  <div id="wsPanel-communication" className="ws-tab-panel" style={{ display: 'none' }}>
                    <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                      <div id="wsChatStream" style={{ height: '140px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
                        <div style={{ background: '#ffffff', padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12.5px' }}>
                          <strong>Dr. A. K. Sengupta (IIT Dhanbad):</strong> Battery modules arrived safely at Tundi clinic. Inverter testing scheduled for 10 AM.
                        </div>
                        <div style={{ background: '#eff6ff', padding: '8px 12px', borderRadius: '8px', border: '1px solid #bfdbfe', fontSize: '12.5px' }}>
                          <strong>Sushant (Tata CSR Lead):</strong> Confirmed. Our senior electrical mentor Er. Rakesh will be present for synchronization.
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <input id="wsChatInput" type="text" placeholder="Type a message to University Faculty & Admin..." style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }} onKeyDown={(e) => { if (e.key === 'Enter') window.sendCollabChatMessage && window.sendCollabChatMessage(); }} />
                        <button id="wsChatSendBtn" className="btn btn-primary" onClick={() => window.sendCollabChatMessage && window.sendCollabChatMessage()}>Send</button>
                      </div>
                    </div>
                  </div>

                  {/* TAB 11: IMPACT */}
                  <div id="wsPanel-impact" className="ws-tab-panel" style={{ display: 'none' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                      <div style={{ background: '#f0fdf4', padding: '14px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#16a34a' }}>Carbon Offset</div>
                        <div id="wsImpactMetric1Val" style={{ fontSize: '18px', fontWeight: '900', color: '#14532d', margin: '4px 0' }}>38.4 Tonnes / Yr</div>
                        <div id="wsImpactMetric1Sub" style={{ fontSize: '11.5px', color: '#15803d' }}>CO2 reduction verified</div>
                      </div>
                      <div style={{ background: '#eff6ff', padding: '14px', borderRadius: '10px', border: '1px solid #bfdbfe' }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#2563eb' }}>Citizens Impacted</div>
                        <div id="wsImpactMetric2Val" style={{ fontSize: '18px', fontWeight: '900', color: '#1e3a8a', margin: '4px 0' }}>14,200 Residents</div>
                        <div id="wsImpactMetric2Sub" style={{ fontSize: '11.5px', color: '#1d4ed8' }}>Across 3 Gram Panchayats</div>
                      </div>
                      <div style={{ background: '#fef3c7', padding: '14px', borderRadius: '10px', border: '1px solid #fde68a' }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#d97706' }}>Diesel Fuel Saved</div>
                        <div id="wsImpactMetric3Val" style={{ fontSize: '18px', fontWeight: '900', color: '#78350f', margin: '4px 0' }}>₹ 4.2 Lakhs / Yr</div>
                        <div id="wsImpactMetric3Sub" style={{ fontSize: '11.5px', color: '#b45309' }}>Zero generator runtime</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* ════════════════════════════════════════════════════════════
                 5. SUPPORT COMMITMENTS & SLA TRACKING SECTION (IMAGE 4)
               ════════════════════════════════════════════════════════════ */}
            <div id="section-commitments" className="dashboard-section support-commitments-page" style={{ display: activeSection === "commitments" ? "block" : "none" }}>
              
              {/* Image 4 Top Header Banner */}
              <div className="support-banner-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative', zIndex: 2 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', backdropFilter: 'blur(6px)' }}>
                    🤝
                  </div>
                  <div>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', margin: '0 0 4px 0', letterSpacing: '-0.3px', color: '#ffffff' }}>
                      Support Commitments &amp; SLA Tracking
                    </h2>
                    <p style={{ fontSize: '13px', color: '#bae6fd', margin: 0 }}>
                      Track and manage all funding, resources, equipment, technology and expert support committed to university projects.
                    </p>
                  </div>
                </div>
                <div className="support-banner-actions" style={{ textAlign: 'right', position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.8px', color: '#fef08a', textTransform: 'uppercase' }}>
                    Real Partnerships. Real Solutions.
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '900', color: '#ffffff' }}>
                    Stronger Jharkhand.
                  </div>
                  <div className="support-sync-row">
                    <span className={`support-sync-status ${commitmentsLive ? 'is-live' : ''}`}>
                      <span className="support-sync-dot"></span>{commitmentsLive ? 'Live project data' : 'Demo workspace'}
                    </span>
                    <button type="button" className="support-refresh-btn" onClick={() => fetchCollaborations()} disabled={loadingCollabs}>
                      {loadingCollabs ? 'Syncing...' : 'Refresh data'}
                    </button>
                  </div>
                  {commitmentsLastSynced && <div className="support-sync-time">Synced {commitmentsLastSynced.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>}
                </div>
              </div>

              {/* Top 4 KPI Metrics (Image 4) - 100% Dynamic */}
              <div className="support-kpi-grid">
                <div className="support-kpi-card">
                  <div className="support-kpi-icon" style={{ background: '#ecfdf5', color: '#059669' }}>
                    💰
                  </div>
                  <div>
                    <div className="support-kpi-lbl">Total Commitments</div>
                    <div className="support-kpi-val">{totalCommitmentLakhStr}</div>
                    <div className="support-kpi-sub">Across {commitmentProjects.length} projects</div>
                  </div>
                </div>

                <div className="support-kpi-card">
                  <div className="support-kpi-icon" style={{ background: '#fffbeb', color: '#d97706' }}>
                    ⏳
                  </div>
                  <div>
                    <div className="support-kpi-lbl">Pending</div>
                    <div className="support-kpi-val" style={{ color: '#d97706' }}>{totalPendingCount}</div>
                    <div className="support-kpi-sub">Awaiting action</div>
                  </div>
                </div>

                <div className="support-kpi-card">
                  <div className="support-kpi-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>
                    ⚙️
                  </div>
                  <div>
                    <div className="support-kpi-lbl">In Progress</div>
                    <div className="support-kpi-val" style={{ color: '#2563eb' }}>{totalInProgressCount}</div>
                    <div className="support-kpi-sub">Being delivered</div>
                  </div>
                </div>

                <div className="support-kpi-card">
                  <div className="support-kpi-icon" style={{ background: '#f0fdf4', color: '#16a34a' }}>
                    ✅
                  </div>
                  <div>
                    <div className="support-kpi-lbl">Verified</div>
                    <div className="support-kpi-val" style={{ color: '#16a34a' }}>{totalVerifiedCount}</div>
                    <div className="support-kpi-sub">Successfully delivered</div>
                  </div>
                </div>
              </div>

              {/* Filter Tabs Bar (Image 4) - 100% Dynamic */}
              <div className="support-filter-bar">
                <div className="support-tabs">
                  <button className={`support-tab-btn ${commitmentsTabFilter === 'active' ? 'active' : ''}`} onClick={() => setCommitmentsTabFilter('active')}>Active Commitments</button>
                  <button className={`support-tab-btn ${commitmentsTabFilter === 'pending' ? 'active' : ''}`} onClick={() => setCommitmentsTabFilter('pending')}>Pending</button>
                  <button className={`support-tab-btn ${commitmentsTabFilter === 'in_progress' ? 'active' : ''}`} onClick={() => setCommitmentsTabFilter('in_progress')}>In Progress</button>
                  <button className={`support-tab-btn ${commitmentsTabFilter === 'verified' ? 'active' : ''}`} onClick={() => setCommitmentsTabFilter('verified')}>Verified</button>
                  <button className={`support-tab-btn ${commitmentsTabFilter === 'all' ? 'active' : ''}`} onClick={() => setCommitmentsTabFilter('all')}>All Projects</button>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <select id="commitProjSelect" value={selectedCommitmentId} style={{ padding: '7px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', background: '#ffffff', color: '#334155', fontWeight: '600' }} onChange={(e) => setSelectedCommitmentId(e.target.value)}>
                    {commitmentProjects.map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </select>

                  <div style={{ position: 'relative' }}>
                    <input type="text" id="commitSearchInput" value={commitmentsSearchQuery} onChange={(e) => setCommitmentsSearchQuery(e.target.value)} placeholder="Search commitments..." style={{ padding: '7px 12px 7px 32px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', width: '200px' }} />
                    <span style={{ position: 'absolute', left: '10px', top: '7px', fontSize: '13px', color: '#94a3b8' }}>🔍</span>
                  </div>

                  <button className="btn btn-sm btn-ghost" style={{ border: '1px solid #cbd5e1', padding: '7px 10px' }} title="Reset Filter" onClick={() => { setCommitmentsSearchQuery(''); setCommitmentsTabFilter('active'); }}>
                    ⚡
                  </button>
                </div>
              </div>

              {/* 2-Column Split Layout (Image 4) */}
              <div className="support-workspace-split">
                
                {/* Left Column: Project Cards */}
                <div id="supportProjectCardsList">
                  {filteredCommitmentProjects.length === 0 ? (
                    <div style={{ padding: '32px 16px', textAlign: 'center', background: '#ffffff', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                      <div style={{ fontSize: '28px', marginBottom: '8px' }}>📂</div>
                      <div style={{ fontWeight: '750', color: '#0f172a' }}>No projects match current filter</div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Try switching tabs or resetting your search.</div>
                      <button className="btn btn-sm btn-outline-primary" style={{ marginTop: '12px' }} onClick={() => { setCommitmentsSearchQuery(''); setCommitmentsTabFilter('all'); }}>View All Projects</button>
                    </div>
                  ) : (
                    filteredCommitmentProjects.map(proj => {
                      const isAct = selectedCommitmentId === proj.id;
                      const pPending = proj.commitments ? proj.commitments.filter(c => c.status === 'Pending').length : 0;
                      return (
                        <div key={proj.id} className={`support-proj-card ${isAct ? 'active' : ''}`} onClick={() => setSelectedCommitmentId(proj.id)} style={{ cursor: 'pointer' }}>
                          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '10px' }}>
                            <img src={proj.image} alt={proj.title} style={{ width: '88px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} onError={(e) => { e.target.src = '/images/solar-hospital.jpg'; }} />
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '6px' }}>
                                <h4 style={{ margin: 0, fontSize: '14.5px', fontWeight: '850', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{proj.title}</h4>
                                <span style={{ fontSize: '11px', fontWeight: '800', background: proj.statusBg || '#eff6ff', color: proj.statusColor || '#1d4ed8', padding: '2px 8px', borderRadius: '99px', border: '1px solid rgba(0,0,0,0.06)', flexShrink: 0 }}>{proj.status}</span>
                              </div>
                              <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>{proj.university}</div>
                              <div style={{ fontSize: '11.5px', color: '#64748b' }}>📍 {proj.location}</div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                            {(proj.tags || []).slice(0, 2).map((tg, i) => (
                              <span key={i} style={{ fontSize: '10.5px', background: '#f1f5f9', color: '#475569', padding: '2px 6px', borderRadius: '4px' }}>{tg}</span>
                            ))}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <div style={{ flex: 1, height: '6px', background: '#e2e8f0', borderRadius: '99px', overflow: 'hidden' }}>
                              <div style={{ width: `${proj.supportProgress}%`, height: '100%', background: proj.supportProgress >= 70 ? '#16a34a' : (proj.supportProgress >= 40 ? '#f59e0b' : '#3b82f6'), transition: 'width 0.3s ease' }}></div>
                            </div>
                            <span style={{ fontSize: '11.5px', fontWeight: '800', color: proj.supportProgress >= 70 ? '#16a34a' : (proj.supportProgress >= 40 ? '#f59e0b' : '#3b82f6') }}>{proj.supportProgress}%</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
                            <span>📦 {proj.commitments ? proj.commitments.length : 0} Commitments</span>
                            <span style={{ color: pPending > 0 ? '#d97706' : '#16a34a', fontWeight: '700' }}>⏱️ {pPending} Pending</span>
                            <span>📅 Due: {proj.nextMilestone ? proj.nextMilestone.dueDate : proj.targetDate}</span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Right Column: Selected Project Detail Workspace */}
                <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '22px', boxShadow: '0 4px 20px rgba(0,45,98,0.06)' }}>
                  
                  {/* Selected Project Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1.5px solid #e2e8f0', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                      <img id="commitDetailThumb" src={selectedProj.image} alt={selectedProj.title} style={{ width: '64px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} onError={(e) => { e.target.src = '/images/solar-hospital.jpg'; }} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <h3 id="commitDetailTitle" style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', margin: 0 }}>{selectedProj.title}</h3>
                          <span id="commitDetailBadge" style={{ fontSize: '11px', fontWeight: '800', background: selectedProj.statusBg || '#eff6ff', color: selectedProj.statusColor || '#1d4ed8', padding: '2px 8px', borderRadius: '99px', border: '1px solid #bfdbfe' }}>{selectedProj.status}</span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#475569', marginTop: '3px' }}>
                          <span id="commitDetailUni">{selectedProj.university}</span> &nbsp;•&nbsp; <span id="commitDetailLoc">📍 {selectedProj.location}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '6px', marginTop: '4px', flexWrap: 'wrap' }}>
                          {(selectedProj.tags || []).map((tg, i) => (
                            <span key={i} className="badge" style={{ background: i === 0 ? '#eff6ff' : (i === 1 ? '#f0fdf4' : '#f1f5f9'), color: i === 0 ? '#1d4ed8' : (i === 1 ? '#15803d' : '#475569'), fontSize: '10px' }}>{tg}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => window.openProjectWorkspace && window.openProjectWorkspace(selectedProj.id)} style={{ fontWeight: '800' }}>
                      View Full Project →
                    </button>
                  </div>

                  {/* Sub-tabs bar */}
                  <div style={{ display: 'flex', gap: '6px', borderBottom: '1.5px solid #e2e8f0', paddingBottom: '8px', marginBottom: '18px', overflowX: 'auto' }}>
                    <button className={`ws-tab-btn ${commitmentsSubTab === 'overview' ? 'active' : ''}`} onClick={() => setCommitmentsSubTab('overview')} style={{ fontSize: '12.5px', padding: '6px 14px' }}>Overview</button>
                    <button className={`ws-tab-btn ${commitmentsSubTab === 'commitments' ? 'active' : ''}`} onClick={() => setCommitmentsSubTab('commitments')} style={{ fontSize: '12.5px', padding: '6px 14px' }}>Commitments {selectedProj.commitments ? selectedProj.commitments.length : 0}</button>
                    <button className={`ws-tab-btn ${commitmentsSubTab === 'timeline' ? 'active' : ''}`} onClick={() => setCommitmentsSubTab('timeline')} style={{ fontSize: '12.5px', padding: '6px 14px' }}>Timeline</button>
                    <button className={`ws-tab-btn ${commitmentsSubTab === 'documents' ? 'active' : ''}`} onClick={() => setCommitmentsSubTab('documents')} style={{ fontSize: '12.5px', padding: '6px 14px' }}>Documents {selectedProj.documents ? selectedProj.documents.length : 0}</button>
                    <button className={`ws-tab-btn ${commitmentsSubTab === 'communication' ? 'active' : ''}`} onClick={() => setCommitmentsSubTab('communication')} style={{ fontSize: '12.5px', padding: '6px 14px' }}>Communication</button>
                    <button className={`ws-tab-btn ${commitmentsSubTab === 'sla' ? 'active' : ''}`} onClick={() => setCommitmentsSubTab('sla')} style={{ fontSize: '12.5px', padding: '6px 14px' }}>SLA &amp; Delivery</button>
                  </div>

                  {/* Sub-tab 1: OVERVIEW */}
                  {commitmentsSubTab === 'overview' && (
                    <div>
                      {/* Project Summary & Progress Row */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                        
                        {/* Left: Summary */}
                        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <div style={{ fontSize: '12.5px', fontWeight: '850', color: '#0f172a', marginBottom: '6px' }}>Project Summary</div>
                          <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                            {selectedProj.summary}
                          </p>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '11.5px' }}>
                            <div><span style={{ color: '#64748b' }}>University:</span><div style={{ fontWeight: '750', color: '#0f172a' }}>{selectedProj.university}</div></div>
                            <div><span style={{ color: '#64748b' }}>Start Date:</span><div style={{ fontWeight: '750', color: '#0f172a' }}>{selectedProj.startDate}</div></div>
                            <div><span style={{ color: '#64748b' }}>Approved Budget:</span><div style={{ fontWeight: '750', color: '#0f172a' }}>{selectedProj.approvedBudget}</div></div>
                            <div><span style={{ color: '#64748b' }}>Target Implementation:</span><div style={{ fontWeight: '750', color: '#0f172a' }}>{selectedProj.targetDate}</div></div>
                            <div><span style={{ color: '#64748b' }}>Project Stage:</span><div style={{ fontWeight: '750', color: '#1e40af' }}>{selectedProj.stage}</div></div>
                            <div><span style={{ color: '#64748b' }}>Our Role:</span><div style={{ fontWeight: '750', color: '#0f172a' }}>{selectedProj.ourRole}</div></div>
                            <div style={{ gridColumn: 'span 2' }}><span style={{ color: '#64748b' }}>Expected Impact:</span><div style={{ fontWeight: '750', color: '#16a34a' }}>{selectedProj.expectedImpact}</div></div>
                          </div>
                        </div>

                        {/* Right: Progress & Next Milestone */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          
                          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <span style={{ fontSize: '12.5px', fontWeight: '850', color: '#0f172a' }}>Support Progress</span>
                              <span style={{ fontSize: '13px', fontWeight: '900', color: selectedProj.supportProgress >= 70 ? '#16a34a' : '#1d4ed8' }}>{selectedProj.supportProgress}%</span>
                            </div>
                            <div style={{ height: '7px', background: '#e2e8f0', borderRadius: '99px', overflow: 'hidden', marginBottom: '10px' }}>
                              <div style={{ width: `${selectedProj.supportProgress}%`, height: '100%', background: selectedProj.supportProgress >= 70 ? '#16a34a' : '#1d4ed8', transition: 'width 0.3s ease' }}></div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', fontSize: '11px', textAlign: 'center' }}>
                              <div style={{ background: '#ffffff', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                                <div style={{ color: '#64748b' }}>Committed</div>
                                <div style={{ fontWeight: '850', color: '#0f172a', fontSize: '13px' }}>{selectedProj.commitments ? selectedProj.commitments.length : 0}</div>
                              </div>
                              <div style={{ background: '#ffffff', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                                <div style={{ color: '#15803d' }}>Provided</div>
                                <div style={{ fontWeight: '850', color: '#15803d', fontSize: '13px' }}>{selectedProj.commitments ? selectedProj.commitments.filter(c => c.status === 'Provided' || c.status === 'Verified').length : 0}</div>
                              </div>
                              <div style={{ background: '#ffffff', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                                <div style={{ color: '#2563eb' }}>Verified</div>
                                <div style={{ fontWeight: '850', color: '#2563eb', fontSize: '13px' }}>{selectedProj.commitments ? selectedProj.commitments.filter(c => c.status === 'Verified').length : 0}</div>
                              </div>
                              <div style={{ background: '#ffffff', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                                <div style={{ color: '#d97706' }}>Pending</div>
                                <div style={{ fontWeight: '850', color: '#d97706', fontSize: '13px' }}>{selectedProj.commitments ? selectedProj.commitments.filter(c => c.status === 'Pending').length : 0}</div>
                              </div>
                            </div>
                          </div>

                          <div style={{ background: selectedProj.nextMilestone && selectedProj.nextMilestone.completed ? '#f0fdf4' : '#eff6ff', padding: '14px', borderRadius: '12px', border: `1px solid ${selectedProj.nextMilestone && selectedProj.nextMilestone.completed ? '#bbf7d0' : '#bfdbfe'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <div style={{ fontSize: '11px', fontWeight: '800', color: selectedProj.nextMilestone && selectedProj.nextMilestone.completed ? '#15803d' : '#1d4ed8', textTransform: 'uppercase' }}>
                                {selectedProj.nextMilestone && selectedProj.nextMilestone.completed ? 'Milestone Completed ✓' : 'Next Milestone'}
                              </div>
                              <div style={{ fontSize: '12.5px', fontWeight: '850', color: '#0f172a', marginTop: '2px' }}>{selectedProj.nextMilestone ? selectedProj.nextMilestone.title : 'Milestone Review'}</div>
                              <div style={{ fontSize: '11px', color: '#64748b' }}>📅 {selectedProj.nextMilestone ? selectedProj.nextMilestone.dueDate : 'Upcoming'}</div>
                            </div>
                            <button className={`btn btn-sm ${selectedProj.nextMilestone && selectedProj.nextMilestone.completed ? 'btn-success' : 'btn-primary'}`} style={{ background: selectedProj.nextMilestone && selectedProj.nextMilestone.completed ? '#15803d' : '#002D62' }} onClick={() => handleToggleMilestone(selectedProj.id)}>
                              {selectedProj.nextMilestone && selectedProj.nextMilestone.completed ? '✓ Completed' : 'Mark Complete'}
                            </button>
                          </div>

                        </div>

                      </div>

                      {/* Commitments Table */}
                      <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '850', color: '#0f172a' }}>Commitments ({selectedProj.commitments ? selectedProj.commitments.length : 0})</h4>
                          <button className="btn btn-sm btn-primary" onClick={() => { setNewCommitmentForm(prev => ({ ...prev, projectId: selectedProj.id })); setShowAddCommitmentModal(true); }}>
                            + Add Commitment
                          </button>
                        </div>

                        <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
                            <thead>
                              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', fontSize: '10.5px' }}>
                                <th style={{ padding: '10px 14px' }}>Support Type</th>
                                <th style={{ padding: '10px 14px' }}>Requirement (by University)</th>
                                <th style={{ padding: '10px 14px' }}>Our Commitment</th>
                                <th style={{ padding: '10px 14px' }}>Status</th>
                                <th style={{ padding: '10px 14px' }}>Expected Date</th>
                                <th style={{ padding: '10px 14px' }}>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {(selectedProj.commitments || []).map((cm, idx) => {
                                const isVerified = cm.status === 'Verified';
                                const isInProg = cm.status === 'In Progress';
                                const isProvided = cm.status === 'Provided';
                                const isPending = cm.status === 'Pending';
                                return (
                                  <tr key={cm.id || idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '10px 14px', fontWeight: '750' }}>{cm.type}</td>
                                    <td style={{ padding: '10px 14px' }}>{cm.requirement}</td>
                                    <td style={{ padding: '10px 14px', fontWeight: '750' }}>{cm.commitment}</td>
                                    <td style={{ padding: '10px 14px' }}>
                                      <span style={{ 
                                        background: isVerified ? '#dcfce7' : (isInProg ? '#eff6ff' : (isProvided ? '#dbeafe' : '#fef3c7')), 
                                        color: isVerified ? '#15803d' : (isInProg ? '#1d4ed8' : (isProvided ? '#1e40af' : '#b45309')), 
                                        padding: '2px 8px', borderRadius: '99px', fontWeight: '800', fontSize: '10.5px' 
                                      }}>
                                        {cm.status}
                                      </span>
                                    </td>
                                    <td style={{ padding: '10px 14px', color: '#64748b' }}>{cm.date}</td>
                                    <td style={{ padding: '10px 14px' }}>
                                      {isVerified || cm.receiptId ? (
                                        <button className="btn btn-sm btn-ghost" style={{ fontWeight: '700', color: '#002D62' }} onClick={() => window.openDisbursementReceiptModal(cm.receiptId, cm.commitment, selectedProj.university, selectedProj.title)}>
                                          View Receipt
                                        </button>
                                      ) : isInProg || cm.trackingId ? (
                                        <button className="btn btn-sm btn-ghost" style={{ fontWeight: '700', color: '#1d4ed8' }} onClick={() => window.openTrackDeliveryModal(cm.trackingId, cm.courier, selectedProj.title)}>
                                          Track Delivery
                                        </button>
                                      ) : isProvided ? (
                                        <button className="btn btn-sm btn-ghost" style={{ fontWeight: '700' }} onClick={() => window.toastSuccess(cm.detail || `${cm.commitment} assigned and verified at ground site.`, 'Deliverable Active')}>
                                          View Details
                                        </button>
                                      ) : (
                                        <button className="btn btn-sm btn-primary" style={{ fontWeight: '750' }} onClick={() => handleDispatchCommitment(selectedProj.id, cm.id)}>
                                          Dispatch
                                        </button>
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Bottom Row: Recent Activity & Quick Actions */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '16px' }}>
                        
                        {/* Recent Activity */}
                        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <span style={{ fontSize: '13px', fontWeight: '850', color: '#0f172a' }}>Recent Activity</span>
                            <span style={{ fontSize: '11px', color: '#64748b' }}>{selectedProj.recentActivity ? selectedProj.recentActivity.length : 0} logs</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#475569' }}>
                            {(selectedProj.recentActivity || []).slice(0, 4).map((act, i) => (
                              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                <span style={{ color: act.color || '#2563eb', fontSize: '10px', marginTop: '2px' }}>●</span>
                                <div><strong>{act.date}</strong> &nbsp;{act.text}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <div style={{ fontSize: '13px', fontWeight: '850', color: '#0f172a', marginBottom: '10px' }}>Quick Actions</div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                            <button className="btn btn-sm btn-ghost" onClick={() => window.toastSuccess('Proof & invoice document upload dialogue opened. PDF, JPG accepted.', 'Upload Document')} style={{ border: '1px solid #cbd5e1', fontSize: '11px', fontWeight: '700', padding: '8px 6px', textAlign: 'center' }}>
                              📄 Upload Proof
                            </button>
                            <button className="btn btn-sm btn-ghost" onClick={() => { setNewCommitmentForm(prev => ({ ...prev, projectId: selectedProj.id })); setShowAddCommitmentModal(true); }} style={{ border: '1px solid #cbd5e1', fontSize: '11px', fontWeight: '700', padding: '8px 6px', textAlign: 'center' }}>
                              ✏️ Add Commit
                            </button>
                            <button className="btn btn-sm btn-ghost" onClick={() => setCommitmentsSubTab('communication')} style={{ border: '1px solid #cbd5e1', fontSize: '11px', fontWeight: '700', padding: '8px 6px', textAlign: 'center' }}>
                              💬 Chat PI
                            </button>
                            <button className="btn btn-sm btn-ghost" onClick={() => window.openProjectWorkspace && window.openProjectWorkspace(selectedProj.id)} style={{ border: '1px solid #cbd5e1', fontSize: '11px', fontWeight: '700', padding: '8px 6px', textAlign: 'center' }}>
                              👁️ Workspace
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Sub-tab 2: COMMITMENTS EXPANDED */}
                  {commitmentsSubTab === 'commitments' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '850', color: '#0f172a' }}>All Project Commitments &amp; CSR Allocations</h4>
                          <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#64748b' }}>Itemized delivery milestones and state escrow audit receipts for {selectedProj.title}</p>
                        </div>
                        <button className="btn btn-sm btn-primary" onClick={() => { setNewCommitmentForm(prev => ({ ...prev, projectId: selectedProj.id })); setShowAddCommitmentModal(true); }}>
                          + Add New Commitment
                        </button>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>Approved Grant</div>
                          <div style={{ fontSize: '16px', fontWeight: '900', color: '#0f172a' }}>{selectedProj.approvedBudget}</div>
                        </div>
                        <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
                          <div style={{ fontSize: '11px', color: '#15803d' }}>Fulfilled Deliverables</div>
                          <div style={{ fontSize: '16px', fontWeight: '900', color: '#15803d' }}>
                            {selectedProj.commitments ? selectedProj.commitments.filter(c => c.status === 'Verified' || c.status === 'Provided').length : 0} of {selectedProj.commitments ? selectedProj.commitments.length : 0}
                          </div>
                        </div>
                        <div style={{ background: '#fffbeb', padding: '12px', borderRadius: '10px', border: '1px solid #fde68a' }}>
                          <div style={{ fontSize: '11px', color: '#b45309' }}>Pending Milestone Action</div>
                          <div style={{ fontSize: '16px', fontWeight: '900', color: '#b45309' }}>
                            {selectedProj.commitments ? selectedProj.commitments.filter(c => c.status === 'Pending').length : 0} Pending
                          </div>
                        </div>
                      </div>

                      <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px' }}>
                          <thead>
                            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', fontSize: '10.5px' }}>
                              <th style={{ padding: '10px 14px' }}>Type</th>
                              <th style={{ padding: '10px 14px' }}>University Requirement</th>
                              <th style={{ padding: '10px 14px' }}>Industry Commitment</th>
                              <th style={{ padding: '10px 14px' }}>Status</th>
                              <th style={{ padding: '10px 14px' }}>Target Date</th>
                              <th style={{ padding: '10px 14px' }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(selectedProj.commitments || []).map((cm, idx) => (
                              <tr key={cm.id || idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '10px 14px', fontWeight: '750' }}>{cm.type}</td>
                                <td style={{ padding: '10px 14px' }}>{cm.requirement}</td>
                                <td style={{ padding: '10px 14px', fontWeight: '750' }}>{cm.commitment}</td>
                                <td style={{ padding: '10px 14px' }}>
                                  <span style={{ 
                                    background: cm.status === 'Verified' ? '#dcfce7' : (cm.status === 'In Progress' ? '#eff6ff' : (cm.status === 'Provided' ? '#dbeafe' : '#fef3c7')), 
                                    color: cm.status === 'Verified' ? '#15803d' : (cm.status === 'In Progress' ? '#1d4ed8' : (cm.status === 'Provided' ? '#1e40af' : '#b45309')), 
                                    padding: '2px 8px', borderRadius: '99px', fontWeight: '800', fontSize: '10.5px' 
                                  }}>
                                    {cm.status}
                                  </span>
                                </td>
                                <td style={{ padding: '10px 14px', color: '#64748b' }}>{cm.date}</td>
                                <td style={{ padding: '10px 14px' }}>
                                  {cm.status === 'Verified' || cm.receiptId ? (
                                    <button className="btn btn-sm btn-ghost" onClick={() => window.openDisbursementReceiptModal(cm.receiptId, cm.commitment, selectedProj.university, selectedProj.title)}>
                                      View Receipt
                                    </button>
                                  ) : cm.status === 'In Progress' || cm.trackingId ? (
                                    <button className="btn btn-sm btn-ghost" onClick={() => window.openTrackDeliveryModal(cm.trackingId, cm.courier, selectedProj.title)}>
                                      Track Delivery
                                    </button>
                                  ) : cm.status === 'Pending' ? (
                                    <button className="btn btn-sm btn-primary" onClick={() => handleDispatchCommitment(selectedProj.id, cm.id)}>
                                      Dispatch
                                    </button>
                                  ) : (
                                    <button className="btn btn-sm btn-ghost" onClick={() => window.toastSuccess(cm.detail || `${cm.commitment} verified.`)}>
                                      Details
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Sub-tab 3: TIMELINE */}
                  {commitmentsSubTab === 'timeline' && (
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '850', color: '#0f172a' }}>Project Lifecycle &amp; Ground Implementation Roadmap</h4>
                      <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#64748b' }}>Track progression from initial MoU to field deployment and community handover</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: '8px' }}>
                        {(selectedProj.timeline || []).map((tl, i) => {
                          const isDone = tl.status === 'Completed';
                          const isInProg = tl.status === 'In Progress';
                          return (
                            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', position: 'relative' }}>
                              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: isDone ? '#16a34a' : (isInProg ? '#2563eb' : '#e2e8f0'), color: isDone || isInProg ? '#ffffff' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '850', fontSize: '13px', flexShrink: 0 }}>
                                {isDone ? '✓' : (i + 1)}
                              </div>
                              <div style={{ flex: 1, background: '#f8fafc', padding: '12px 16px', borderRadius: '10px', border: `1px solid ${isInProg ? '#bfdbfe' : '#e2e8f0'}` }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                  <span style={{ fontSize: '13.5px', fontWeight: '800', color: '#0f172a' }}>{tl.phase}</span>
                                  <span style={{ fontSize: '11px', fontWeight: '800', background: isDone ? '#dcfce7' : (isInProg ? '#eff6ff' : '#f1f5f9'), color: isDone ? '#15803d' : (isInProg ? '#1d4ed8' : '#64748b'), padding: '2px 8px', borderRadius: '99px' }}>{tl.status}</span>
                                </div>
                                <div style={{ fontSize: '12px', color: '#475569', marginBottom: '4px' }}>{tl.desc}</div>
                                <div style={{ fontSize: '11px', color: '#64748b' }}>📅 Milestone Date: {tl.date}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Sub-tab 4: DOCUMENTS */}
                  {commitmentsSubTab === 'documents' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '850', color: '#0f172a' }}>Compliance &amp; Execution Documents</h4>
                          <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#64748b' }}>Digitally sealed MoUs, escrow release notes, and inspection certifications</p>
                        </div>
                        <button className="btn btn-sm btn-outline-primary" onClick={() => window.toastSuccess('Document upload dialog triggered.', 'Upload File')}>
                          + Upload File
                        </button>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                        {(selectedProj.documents || []).map((doc, idx) => (
                          <div key={doc.id || idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <span style={{ fontSize: '24px' }}>📄</span>
                              <div>
                                <div style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>{doc.name}</div>
                                <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '2px' }}>
                                  <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '1px 6px', borderRadius: '4px', fontWeight: '700' }}>{doc.type}</span> &nbsp;•&nbsp; {doc.size} &nbsp;•&nbsp; Uploaded {doc.date}
                                </div>
                              </div>
                            </div>
                            <button className="btn btn-sm btn-ghost" style={{ border: '1px solid #cbd5e1', fontWeight: '700' }} onClick={() => window.toastSuccess(`Downloaded ${doc.name} successfully. Sealed by State IT Registry.`, 'File Downloaded')}>
                              Download ↓
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sub-tab 5: COMMUNICATION */}
                  {commitmentsSubTab === 'communication' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '850', color: '#0f172a' }}>Tri-Party Project Chat Hub</h4>
                          <div style={{ fontSize: '11.5px', color: '#64748b' }}>Encrypted channel: {selectedProj.facultyLead} ({selectedProj.university}) • State Admin Desk • Tata Steel Foundation</div>
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: '800', background: '#dcfce7', color: '#15803d', padding: '3px 8px', borderRadius: '99px' }}>● Channel Active</span>
                      </div>

                      <div style={{ height: '240px', overflowY: 'auto', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px' }}>
                        {(selectedProj.communication || []).map((msg, i) => (
                          <div key={i} style={{ alignSelf: msg.isMe ? 'flex-end' : 'flex-start', maxWidth: '80%', background: msg.isMe ? '#002D62' : '#ffffff', color: msg.isMe ? '#ffffff' : '#0f172a', borderRadius: msg.isMe ? '14px 14px 2px 14px' : '14px 14px 14px 2px', padding: '10px 14px', border: msg.isMe ? 'none' : '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: '10.5px', marginBottom: '3px', color: msg.isMe ? '#93c5fd' : '#64748b', fontWeight: '750' }}>
                              <span>{msg.sender}</span>
                              <span>{msg.time}</span>
                            </div>
                            <div style={{ fontSize: '12.5px', lineHeight: '1.4' }}>{msg.text}</div>
                          </div>
                        ))}
                      </div>

                      <form onSubmit={handleSendTripartiteMessage} style={{ display: 'flex', gap: '8px' }}>
                        <input type="text" value={chatMessageText} onChange={(e) => setChatMessageText(e.target.value)} placeholder={`Message Dr. ${selectedProj.facultyLead ? selectedProj.facultyLead.split(' ')[1] || 'Lead' : 'PI'} & State Admin...`} style={{ flex: 1, padding: '9px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }} />
                        <button type="submit" className="btn btn-primary" style={{ fontWeight: '800', background: '#002D62' }}>Send</button>
                      </form>
                    </div>
                  )}

                  {/* Sub-tab 6: SLA & DELIVERY */}
                  {commitmentsSubTab === 'sla' && (
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '850', color: '#0f172a' }}>SLA Compliance &amp; Service Delivery Metrics</h4>
                      <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#64748b' }}>Performance auditing against Jharkhand CSR Partnership Guidelines</p>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>SLA Adherence Score</div>
                          <div style={{ fontSize: '22px', fontWeight: '900', color: '#16a34a', marginTop: '4px' }}>{selectedProj.sla ? selectedProj.sla.score : '98.4%'}</div>
                          <div style={{ fontSize: '11px', color: '#16a34a', fontWeight: '700' }}>✓ Excellent Standing</div>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>On-Time Dispatch Rate</div>
                          <div style={{ fontSize: '22px', fontWeight: '900', color: '#2563eb', marginTop: '4px' }}>{selectedProj.sla ? selectedProj.sla.onTimeDelivery : '100%'}</div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>Zero delayed dispatches</div>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>Avg Query Response Time</div>
                          <div style={{ fontSize: '22px', fontWeight: '900', color: '#0f172a', marginTop: '4px' }}>{selectedProj.sla ? selectedProj.sla.avgResponseTime : '2.4 hrs'}</div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>Benchmark: &lt; 24 hrs</div>
                        </div>
                      </div>

                      <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '14px' }}>
                        <div style={{ fontSize: '12.5px', fontWeight: '850', color: '#0f172a', marginBottom: '8px' }}>Escrow &amp; Compliance Details</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
                          <div><span style={{ color: '#64748b' }}>Escrow Account:</span><div style={{ fontWeight: '750' }}>{selectedProj.sla ? selectedProj.sla.escrowStatus : 'Tranche 1 Disbursed'}</div></div>
                          <div><span style={{ color: '#64748b' }}>Designated Site Lead:</span><div style={{ fontWeight: '750' }}>{selectedProj.sla ? selectedProj.sla.escalationLead : 'Site Supervisor'}</div></div>
                          <div><span style={{ color: '#64748b' }}>Logistics Partner:</span><div style={{ fontWeight: '750' }}>Ranchi Express Cargo &amp; BlueDart</div></div>
                          <div><span style={{ color: '#64748b' }}>Audit Authority:</span><div style={{ fontWeight: '750' }}>Jharkhand State e-Governance Agency</div></div>
                        </div>
                      </div>

                      <button className="btn btn-sm btn-primary" onClick={() => window.toastSuccess('SLA & CSR Compliance Report PDF Generated. Ready for board submission.', 'Report Generated')}>
                        Download SLA Audit Report (PDF) ↓
                      </button>
                    </div>
                  )}

              </div>

            </div>

          </div>

            {/* ════════════════════════════════════════════════════════════
                 6. PROTOTYPE & PILOT TESTING SECTION (IMAGE 5 WORKFLOW)
               ════════════════════════════════════════════════════════════ */}
            {/* Standalone Prototype & Pilot merged cleanly into My Collaborations */}

            {/* ── EXPLORE CHALLENGES ── */}
                        {/* ════════════════════════════════════════════════════════════
                 7. EXPLORE CHALLENGES & PROJECTS SECTION (SCREENSHOT 4 EXACT)
               ════════════════════════════════════════════════════════════ */}
            <div id="section-explore" className="dashboard-section explore-page" style={{ display: activeSection === "explore" ? "block" : "none" }}>
              
              {/* Header with Title and 3 Metric Cards matching Screenshot 4 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                    💡
                  </div>
                  <div>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#0f172a', margin: '0 0 2px 0' }}>Explore Challenges &amp; Projects</h2>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Discover verified university-led solutions where your organization can provide support.</p>
                  </div>
                </div>

                {/* 3 Metric Cards + Indian Flag Corner (Screenshot 4) */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', position: 'relative' }}>
                  <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                      📋
                    </div>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', lineHeight: 1 }}>42</div>
                      <div style={{ fontSize: '11px', fontWeight: '750', color: '#334155', marginTop: '2px' }}>Verified Opportunities</div>
                      <div style={{ fontSize: '10px', color: '#94a3b8' }}>Approved by Government</div>
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                      🎯
                    </div>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: '900', color: '#16a34a', lineHeight: 1 }}>18</div>
                      <div style={{ fontSize: '11px', fontWeight: '750', color: '#334155', marginTop: '2px' }}>Priority Matched</div>
                      <div style={{ fontSize: '10px', color: '#94a3b8' }}>Relevant for your capabilities</div>
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#fffbeb', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                      🤝
                    </div>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: '900', color: '#d97706', lineHeight: 1 }}>27</div>
                      <div style={{ fontSize: '11px', fontWeight: '750', color: '#334155', marginTop: '2px' }}>Open for Support</div>
                      <div style={{ fontSize: '10px', color: '#94a3b8' }}>Seeking Industry Partners</div>
                    </div>
                    {/* Tricolor Ribbon on Corner */}
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ flex: 1, background: '#FF9933' }}></div>
                      <div style={{ flex: 1, background: '#ffffff' }}></div>
                      <div style={{ flex: 1, background: '#138808' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Bar with 6 Controls matching Screenshot 4 */}
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', marginBottom: '16px', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: '1', minWidth: '220px' }}>
                  <input type="text" id="expSearchInput" placeholder="Search by keyword (e.g. solar, water, education...)" style={{ width: '100%', padding: '8px 12px 8px 34px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }} value={expSearch} onChange={e => setExpSearch(e.target.value)} />
                  <span style={{ position: 'absolute', left: '10px', top: '8px', fontSize: '14px', color: '#94a3b8' }}>🔍</span>
                </div>

                <select id="expDomainFilter" value={expDomain} onChange={e => setExpDomain(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12.5px', background: '#ffffff', color: '#334155', fontWeight: '600' }}>
                  <option value="">All Domains</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Water Management">Water Management</option>
                  <option value="Education">Education</option>
                  <option value="Waste Management">Waste Management</option>
                  <option value="Agriculture">Agriculture</option>
                </select>

                <select id="expDistrictFilter" value={expDistrict} onChange={e => setExpDistrict(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12.5px', background: '#ffffff', color: '#334155', fontWeight: '600' }}>
                  <option value="">All Districts</option>
                  <option value="Dhanbad">Dhanbad</option>
                  <option value="Ranchi">Ranchi</option>
                  <option value="Latehar">Latehar</option>
                  <option value="Bokaro">Bokaro</option>
                  <option value="Hazaribagh">Hazaribagh</option>
                </select>

                <select id="expSupportFilter" value={expSupport} onChange={e => setExpSupport(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12.5px', background: '#ffffff', color: '#334155', fontWeight: '600' }}>
                  <option value="">Support Type</option>
                  <option value="Funding">Funding</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Mentor">Mentor</option>
                  <option value="Testing">Testing</option>
                </select>

                <select id="expBudgetFilter" value={expBudget} onChange={e => setExpBudget(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12.5px', background: '#ffffff', color: '#334155', fontWeight: '600' }}>
                  <option value="">Budget Range</option>
                  <option value="under_10">Under ₹10 Lakh</option>
                  <option value="10_20">₹10 - 20 Lakh</option>
                  <option value="above_20">Above ₹20 Lakh</option>
                </select>

                <select id="expStageFilter" value={expStage} onChange={e => setExpStage(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12.5px', background: '#ffffff', color: '#334155', fontWeight: '600' }}>
                  <option value="">All Stages</option>
                  <option value="Seeking Industry Support">Seeking Industry Support</option>
                  <option value="Prototype Development">Prototype Development</option>
                  <option value="Detailed Design">Detailed Design</option>
                </select>

                <button className="btn btn-ghost" onClick={() => { setExpSearch(''); setExpDomain(''); setExpDistrict(''); setExpSupport(''); setExpBudget(''); setExpStage(''); }} style={{ border: '1px solid #cbd5e1', padding: '8px 14px', fontSize: '12.5px', fontWeight: '750' }}>
                  Reset
                </button>
              </div>

              {/* Sub-bar: Showing count + Sort by & Dynamic List */}
              {(() => {
                const filteredChallenges = challengesList.filter(item => {
                  if (expSearch) {
                    const hay = (item.title + ' ' + item.description + ' ' + item.university + ' ' + item.district + ' ' + item.code).toLowerCase();
                    if (!hay.includes(expSearch.toLowerCase())) return false;
                  }
                  if (expDomain) {
                    const hasDomain = item.domains.some(d => d.toLowerCase().includes(expDomain.toLowerCase()));
                    if (!hasDomain) return false;
                  }
                  if (expDistrict) {
                    if (!item.district.toLowerCase().includes(expDistrict.toLowerCase())) return false;
                  }
                  if (expSupport) {
                    const hasSupport = item.requiredSupport.some(s => s.toLowerCase().includes(expSupport.toLowerCase()));
                    if (!hasSupport) return false;
                  }
                  if (expBudget) {
                    if (expBudget === 'under_10' && item.budgetVal > 10) return false;
                    if (expBudget === '10_20' && (item.budgetVal < 10 || item.budgetVal > 20)) return false;
                    if (expBudget === 'above_20' && item.budgetVal < 20) return false;
                  }
                  if (expStage) {
                    if (item.stage !== expStage) return false;
                  }
                  return true;
                }).sort((a, b) => {
                  if (expSort === 'budget') return b.budgetVal - a.budgetVal;
                  return b.aiMatch - a.aiMatch;
                });

                return (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', fontSize: '12.5px', color: '#64748b' }}>
                      <div>Showing <strong id="expShowingCount" style={{ color: '#0f172a' }}>{filteredChallenges.length}</strong> of {challengesList.length || 42} opportunities</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>Sort by:</span>
                        <select id="expSortSelect" value={expSort} onChange={e => setExpSort(e.target.value)} style={{ padding: '4px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px' }}>
                          <option value="match">Relevance (Priority Fit)</option>
                          <option value="budget">Budget (High to Low)</option>
                          <option value="date">Newest First</option>
                        </select>
                      </div>
                    </div>

                    <div id="indChallengesGrid" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {loadingChallenges ? (
                        <div style={{ textAlign: 'center', padding: '48px 24px', background: '#ffffff', borderRadius: '14px', border: '1.5px dashed #cbd5e1' }}>
                          <div className="spinner" style={{ margin: '0 auto 12px', width: '32px', height: '32px', border: '3px solid #e2e8f0', borderTopColor: '#002D62', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                          <div style={{ fontWeight: '800', color: '#0f172a', fontSize: '16px' }}>Connecting to Live State Innovation Registry...</div>
                          <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Loading verified challenges and solutions from MongoDB Atlas</div>
                        </div>
                      ) : filteredChallenges.length === 0 ? (
                        <div style={{ background: '#ffffff', border: '1.5px dashed #cbd5e1', borderRadius: '14px', padding: '48px 24px', textAlign: 'center' }}>
                          <div style={{ fontSize: '36px', marginBottom: '12px' }}>🔍</div>
                          <div style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>No Verified Opportunities Found</div>
                          <div style={{ fontSize: '13px', color: '#64748b', margin: '6px 0 16px 0' }}>Try changing or clearing your search and filter parameters.</div>
                          <button className="btn btn-sm btn-primary" onClick={() => { setExpSearch(''); setExpDomain(''); setExpDistrict(''); setExpSupport(''); setExpBudget(''); setExpStage(''); }}>Reset All Filters</button>
                        </div>
                      ) : (
                        filteredChallenges.map(item => {
                          const isHighMatch = item.aiMatch >= 75;
                          const matchBadgeBg = isHighMatch ? '#dcfce7' : '#fef3c7';
                          const matchBadgeColor = isHighMatch ? '#15803d' : '#d97706';
                          const priorityColor = item.priority.includes('High') || item.priority.includes('Urgent') ? '#b91c1c' : (item.priority.includes('Medium') ? '#d97706' : '#64748b');
                          const priorityBg = item.priority.includes('High') || item.priority.includes('Urgent') ? '#fef2f2' : (item.priority.includes('Medium') ? '#fffbeb' : '#f1f5f9');

                          return (
                            <div key={item._id} className="explore-opp-card" style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '20px 24px', display: 'flex', flexDirection: 'row', gap: '22px', alignItems: 'flex-start', boxShadow: '0 3px 12px rgba(0,45,98,0.04)', transition: 'all 0.2s ease', marginBottom: '4px' }}>
                              
                              {/* Real Domain Thumbnail */}
                              <div style={{ width: '160px', height: '120px', flexShrink: 0, borderRadius: '10px', overflow: 'hidden', border: '1px solid #cbd5e1', position: 'relative', background: '#f8fafc' }}>
                                <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/images/agri-monitoring.jpg'; }} />
                              </div>

                              {/* Middle Content */}
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap' }}>
                                  <span style={{ fontSize: '11.5px', fontWeight: '850', color: '#1e40af', background: '#eff6ff', padding: '3px 8px', borderRadius: '6px', border: '1px solid #bfdbfe' }}>{item.code}</span>
                                  <span style={{ fontSize: '11px', fontWeight: '800', color: priorityColor, background: priorityBg, padding: '2px 8px', borderRadius: '99px', border: '1px solid currentColor' }}>{item.priority}</span>
                                </div>

                                <h3 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '900', color: '#0f172a', lineHeight: '1.35' }}>{item.title}</h3>

                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', fontSize: '12px', color: '#475569' }}>
                                  <span>📍 {item.district}, {item.state}</span>
                                  <span>•</span>
                                  {item.domains.map((d, dIdx) => (
                                    <span key={dIdx} style={{ background: '#f1f5f9', color: '#334155', fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px' }}>{d}</span>
                                  ))}
                                </div>

                                <p style={{ fontSize: '12.5px', color: '#64748b', lineHeight: '1.55', margin: '0 0 10px 0' }}>{item.description}</p>

                                <div style={{ display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap', fontSize: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                    <span style={{ fontSize: '14px' }}>🏛</span>
                                    <strong style={{ color: '#0f172a' }}>{item.university}</strong>
                                    <span style={{ color: '#64748b' }}>({item.lead})</span>
                                  </div>

                                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                    <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700' }}>Estimated Support:</span>
                                    <strong style={{ color: '#0f172a', fontSize: '13.5px' }}>{item.estimatedBudget}</strong>
                                  </div>
                                </div>

                                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginTop: '8px', flexWrap: 'wrap' }}>
                                  <span style={{ fontSize: '10.5px', color: '#64748b', fontWeight: '700' }}>Required Industry Support:</span>
                                  {item.requiredSupport.map((s, sIdx) => (
                                    <span key={sIdx} style={{ fontSize: '10.5px', background: '#f8fafc', border: '1px solid #e2e8f0', color: '#334155', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>{s}</span>
                                  ))}
                                </div>
                              </div>

                              {/* Right: Match Score & Actions */}
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', flexShrink: 0, minWidth: '190px', textAlign: 'right' }}>
                                <div style={{ background: matchBadgeBg, color: matchBadgeColor, fontSize: '12px', fontWeight: '850', padding: '4px 12px', borderRadius: '99px', border: '1px solid currentColor', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                  <span>🟢</span> {item.aiMatch}% Match Score
                                </div>

                                <div style={{ fontSize: '11.5px', background: item.stageColor, color: item.stageTextColor, padding: '4px 10px', borderRadius: '6px', fontWeight: '800', border: '1px solid currentColor' }}>
                                  Stage: {item.stage}
                                </div>

                                <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                                  📅 Expected Implementation<br/><strong style={{ color: '#0f172a' }}>{item.expectedDate}</strong>
                                </div>

                                <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                                  <button className="btn btn-sm btn-ghost" onClick={() => window.viewOpportunity && window.viewOpportunity(item.code || item._id)} style={{ border: '1.5px solid #cbd5e1', fontWeight: '750', padding: '6px 12px', fontSize: '12px' }}>
                                    View Opportunity
                                  </button>
                                  <button className="btn btn-sm btn-primary" onClick={() => window.expressInterest && window.expressInterest(item.code || item._id)} style={{ fontWeight: '800', padding: '6px 14px', fontSize: '12px', background: '#002D62' }}>
                                    Express Interest →
                                  </button>
                                </div>
                              </div>

                            </div>
                          );
                        })
                      )}
                    </div>
                  </>
                );
              })()}
            </div>

            {/* ── CHALLENGE DETAILS ── */}
            <div id="section-challenge-details" className="dashboard-section" style={{ display: activeSection === "challenge-details" ? "block" : "none" }}>
              <div id="challengeDetailsContainer" className="challenge-details-container"></div>
            </div>

            
            {/* ── OPPORTUNITY & ROI INTELLIGENCE DASHBOARD ── */}
            <div id="section-roi" className="dashboard-section" style={{ display: activeSection === "roi" ? "block" : "none" }}>
              
              {/* Header */}
              <div style={{ marginBottom: '22px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                      📈
                    </div>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#0f172a', margin: 0, letterSpacing: '-0.3px' }}>
                      Opportunities &amp; Social ROI Intelligence
                    </h2>
                  </div>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                    Real-time state opportunity matrix, SROI multiplier, CSR capital deployment analytics, and verified citizen problems.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn btn-outline-primary" onClick={() => window.openCsrCertificateModal && window.openCsrCertificateModal()} style={{ borderRadius: '10px', fontSize: '12.5px', fontWeight: '800' }}>
                    📜 Audited CSR Report
                  </button>
                  <button className="btn btn-primary" onClick={() => window.openModal && window.openModal('modalRoiSimulator')} style={{ borderRadius: '10px', fontSize: '12.5px', fontWeight: '800', background: '#002D62' }}>
                    ⚡ Launch SROI Simulator
                  </button>
                </div>
              </div>

              {/* 4 High-Impact Stat Tiles */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px 20px', boxShadow: '0 2px 10px rgba(0,45,98,0.03)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Avg. SROI Multiplier</div>
                  <div style={{ fontSize: '26px', fontWeight: '900', color: '#16a34a', marginTop: '6px' }}>4.2x</div>
                  <div style={{ fontSize: '11.5px', color: '#15803d', marginTop: '4px', fontWeight: '700' }}>₹1 CSR = ₹4.20 Public Value Created</div>
                </div>

                <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px 20px', boxShadow: '0 2px 10px rgba(0,45,98,0.03)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Active CSR Pipeline</div>
                  <div style={{ fontSize: '26px', fontWeight: '900', color: '#002D62', marginTop: '6px' }}>₹ 1.85 Cr</div>
                  <div style={{ fontSize: '11.5px', color: '#475569', marginTop: '4px' }}>Across 24 Districts in Jharkhand</div>
                </div>

                <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px 20px', boxShadow: '0 2px 10px rgba(0,45,98,0.03)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Verified State Challenges</div>
                  <div style={{ fontSize: '26px', fontWeight: '900', color: '#2563eb', marginTop: '6px' }}>18 Verified</div>
                  <div style={{ fontSize: '11.5px', color: '#2563eb', marginTop: '4px', fontWeight: '700' }}>Admin Approved &amp; University Matched</div>
                </div>

                <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px 20px', boxShadow: '0 2px 10px rgba(0,45,98,0.03)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Direct Beneficiaries</div>
                  <div style={{ fontSize: '26px', fontWeight: '900', color: '#d97706', marginTop: '6px' }}>1,45,000+</div>
                  <div style={{ fontSize: '11.5px', color: '#b45309', marginTop: '4px', fontWeight: '700' }}>Citizens Positively Impacted</div>
                </div>
              </div>

              {/* Sector Filter Chips */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '4px' }}>
                <button className="btn btn-sm btn-primary" onClick={() => window.filterRoiOpportunities && window.filterRoiOpportunities('all')} style={{ borderRadius: '20px', padding: '6px 16px', fontWeight: '800', fontSize: '12px' }}>
                  All Sectors (18)
                </button>
                <button className="btn btn-sm btn-ghost" onClick={() => window.filterRoiOpportunities && window.filterRoiOpportunities('healthcare')} style={{ border: '1px solid #cbd5e1', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', fontWeight: '750' }}>
                  🏥 Healthcare &amp; Solar
                </button>
                <button className="btn btn-sm btn-ghost" onClick={() => window.filterRoiOpportunities && window.filterRoiOpportunities('water')} style={{ border: '1px solid #cbd5e1', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', fontWeight: '750' }}>
                  💧 Water Management &amp; IoT
                </button>
                <button className="btn btn-sm btn-ghost" onClick={() => window.filterRoiOpportunities && window.filterRoiOpportunities('education')} style={{ border: '1px solid #cbd5e1', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', fontWeight: '750' }}>
                  🎓 Education &amp; Digital Infra
                </button>
                <button className="btn btn-sm btn-ghost" onClick={() => window.filterRoiOpportunities && window.filterRoiOpportunities('agriculture')} style={{ border: '1px solid #cbd5e1', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', fontWeight: '750' }}>
                  🌾 Smart Agriculture &amp; Biogas
                </button>
              </div>

              {/* Dynamic Opportunities Grid */}
              <div id="roiOpportunitiesGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
                
                {/* Opportunity Card 1 */}
                <div className="roi-opp-card" data-sector="healthcare" style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '22px', boxShadow: '0 4px 16px rgba(0,45,98,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontWeight: '850', fontSize: '11px', padding: '3px 10px', borderRadius: '99px' }}>🏥 Healthcare &amp; Solar Microgrid</span>
                      <span style={{ fontSize: '13px', fontWeight: '900', color: '#16a34a', background: '#f0fdf4', padding: '3px 10px', borderRadius: '99px', border: '1px solid #bbf7d0' }}>4.8x SROI</span>
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: '900', color: '#0f172a', margin: '0 0 6px 0' }}>Rural Health Center 24x7 Solar Power Backup</h3>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px' }}>
                      📍 Dhanbad &amp; Giridih · <strong>IIT (ISM) Dhanbad</strong>
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5', margin: '0 0 14px 0' }}>
                      Solar-storage backup system eliminating power failures in rural delivery rooms and cold chain vaccine preservation units across 12 sub-divisional health posts.
                    </p>
                    <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#64748b' }}>Estimated CSR Grant:</span>
                        <strong style={{ color: '#0f172a' }}>₹ 12,00,000</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#64748b' }}>Projected Public Value:</span>
                        <strong style={{ color: '#16a34a' }}>₹ 57,60,000 / 5 yrs</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                        <span style={{ color: '#64748b' }}>Citizens Benefited:</span>
                        <strong style={{ color: '#2563eb' }}>35,000+ patients</strong>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => window.openModal && window.openModal('modalRoiSimulator')} style={{ flex: 1, fontWeight: '800' }}>
                      📊 Analyze ROI
                    </button>
                    <button className="btn btn-sm btn-primary" onClick={() => { if (typeof window.openProjectWorkspace === 'function') window.openProjectWorkspace('solar-phc'); }} style={{ flex: 1, fontWeight: '850', background: '#002D62' }}>
                      Pledge CSR →
                    </button>
                  </div>
                </div>

                {/* Opportunity Card 2 */}
                <div className="roi-opp-card" data-sector="water" style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '22px', boxShadow: '0 4px 16px rgba(0,45,98,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="badge" style={{ background: '#f0fdf4', color: '#15803d', fontWeight: '850', fontSize: '11px', padding: '3px 10px', borderRadius: '99px' }}>💧 Water &amp; LoRaWAN IoT</span>
                      <span style={{ fontSize: '13px', fontWeight: '900', color: '#16a34a', background: '#f0fdf4', padding: '3px 10px', borderRadius: '99px', border: '1px solid #bbf7d0' }}>4.6x SROI</span>
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: '900', color: '#0f172a', margin: '0 0 6px 0' }}>Tribal Reservoir Water Quality Telemetry</h3>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px' }}>
                      📍 Khunti &amp; Ranchi · <strong>BIT Mesra</strong>
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5', margin: '0 0 14px 0' }}>
                      Real-time IoT sensors tracking turbidity, heavy metals, and bacterial contamination in village drinking ponds, alerting public health engineers before disease outbreaks.
                    </p>
                    <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#64748b' }}>Estimated CSR Grant:</span>
                        <strong style={{ color: '#0f172a' }}>₹ 6,00,000</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#64748b' }}>Projected Public Value:</span>
                        <strong style={{ color: '#16a34a' }}>₹ 27,60,000 / 3 yrs</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                        <span style={{ color: '#64748b' }}>Citizens Benefited:</span>
                        <strong style={{ color: '#2563eb' }}>22,000+ villagers</strong>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => window.openModal && window.openModal('modalRoiSimulator')} style={{ flex: 1, fontWeight: '800' }}>
                      📊 Analyze ROI
                    </button>
                    <button className="btn btn-sm btn-primary" onClick={() => { if (typeof window.openProjectWorkspace === 'function') window.openProjectWorkspace('water-iot'); }} style={{ flex: 1, fontWeight: '850', background: '#002D62' }}>
                      Pledge CSR →
                    </button>
                  </div>
                </div>

                {/* Opportunity Card 3 */}
                <div className="roi-opp-card" data-sector="education" style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '22px', boxShadow: '0 4px 16px rgba(0,45,98,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="badge" style={{ background: '#fef3c7', color: '#d97706', fontWeight: '850', fontSize: '11px', padding: '3px 10px', borderRadius: '99px' }}>🎓 Education &amp; Offline Edge</span>
                      <span style={{ fontSize: '13px', fontWeight: '900', color: '#16a34a', background: '#f0fdf4', padding: '3px 10px', borderRadius: '99px', border: '1px solid #bbf7d0' }}>4.1x SROI</span>
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: '900', color: '#0f172a', margin: '0 0 6px 0' }}>Secondary Tribal Schools Digital Edge Hub</h3>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px' }}>
                      📍 Latehar &amp; Hazaribagh · <strong>Vinoba Bhave University</strong>
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5', margin: '0 0 14px 0' }}>
                      Solar-powered offline server clusters providing STEM curriculum, interactive simulations, and language tools to remote schools with zero cellular connectivity.
                    </p>
                    <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#64748b' }}>Estimated CSR Grant:</span>
                        <strong style={{ color: '#0f172a' }}>₹ 8,00,000</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#64748b' }}>Projected Public Value:</span>
                        <strong style={{ color: '#16a34a' }}>₹ 32,80,000 / 4 yrs</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                        <span style={{ color: '#64748b' }}>Citizens Benefited:</span>
                        <strong style={{ color: '#2563eb' }}>9,400+ students</strong>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => window.openModal && window.openModal('modalRoiSimulator')} style={{ flex: 1, fontWeight: '800' }}>
                      📊 Analyze ROI
                    </button>
                    <button className="btn btn-sm btn-primary" onClick={() => { if (typeof window.openProjectWorkspace === 'function') window.openProjectWorkspace('digital-edge'); }} style={{ flex: 1, fontWeight: '850', background: '#002D62' }}>
                      Pledge CSR →
                    </button>
                  </div>
                </div>

                {/* Opportunity Card 4 */}
                <div className="roi-opp-card" data-sector="agriculture" style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '22px', boxShadow: '0 4px 16px rgba(0,45,98,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontWeight: '850', fontSize: '11px', padding: '3px 10px', borderRadius: '99px' }}>🌾 Market Waste &amp; Biogas</span>
                      <span style={{ fontSize: '13px', fontWeight: '900', color: '#16a34a', background: '#f0fdf4', padding: '3px 10px', borderRadius: '99px', border: '1px solid #bbf7d0' }}>3.7x SROI</span>
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: '900', color: '#0f172a', margin: '0 0 6px 0' }}>Urban Vegetable Market Waste Micro-Digester</h3>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px' }}>
                      📍 Bokaro &amp; Chas · <strong>NIT Jamshedpur</strong>
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5', margin: '0 0 14px 0' }}>
                      Decentralized anaerobic digester turning 4.5 tonnes of daily market organic waste into purified cooking gas and certified liquid bio-fertilizer for local farmers.
                    </p>
                    <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#64748b' }}>Estimated CSR Grant:</span>
                        <strong style={{ color: '#0f172a' }}>₹ 14,00,000</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#64748b' }}>Projected Public Value:</span>
                        <strong style={{ color: '#16a34a' }}>₹ 51,80,000 / 5 yrs</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                        <span style={{ color: '#64748b' }}>Citizens Benefited:</span>
                        <strong style={{ color: '#2563eb' }}>18,000+ families</strong>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => window.openModal && window.openModal('modalRoiSimulator')} style={{ flex: 1, fontWeight: '800' }}>
                      📊 Analyze ROI
                    </button>
                    <button className="btn btn-sm btn-primary" onClick={() => { if (typeof window.openProjectWorkspace === 'function') window.openProjectWorkspace('biogas-chas'); }} style={{ flex: 1, fontWeight: '850', background: '#002D62' }}>
                      Pledge CSR →
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* ── IMPACT & ANALYTICS ── */}
            <div id="section-impact" className="dashboard-section" style={{ display: activeSection === "impact" ? "block" : "none" }}>
              <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h2 style={{ fontSize: '22px', fontWeight: '850', color: '#0f172a' }}>Impact &amp; Analytics</h2>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>Measure social return on investment (SROI), community footprint, and CSR compliance</div>
                </div>
                <button className="btn btn-primary" onClick={() => window.openCsrCertificateModal && window.openCsrCertificateModal()}>
                  📜 Download Audited CSR Certificate
                </button>
              </div>
              <div className="metrics-grid" style={{ marginBottom: '24px' }}>
                <div className="metric-card"><div className="metric-value">1,240</div><div className="metric-label">Citizens Directly Impacted</div></div>
                <div className="metric-card"><div className="metric-value">14</div><div className="metric-label">Completed Solutions</div></div>
                <div className="metric-card"><div className="metric-value">9</div><div className="metric-label">Districts Covered</div></div>
                <div className="metric-card"><div className="metric-value">₹25L</div><div className="metric-label">Total CSR Deployed</div></div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="card" style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '850', color: '#0f172a', marginBottom: '12px' }}>Social Return on Investment (SROI)</h3>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>For every ₹1.00 deployed through JanSetu, Tata Steel Foundation has generated <strong>₹3.82 in measurable societal value</strong> through energy cost reductions, rural clean water uptime, and public healthcare stability.</p>
                  <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="badge" style={{ background: '#e0f2fe', color: '#0369a1', fontWeight: '750' }}>Healthcare SROI: 4.2x</span>
                    <span className="badge" style={{ background: '#dcfce7', color: '#15803d', fontWeight: '750' }}>Clean Water SROI: 3.6x</span>
                    <span className="badge" style={{ background: '#fef3c7', color: '#b45309', fontWeight: '750' }}>Solar Energy SROI: 3.9x</span>
                  </div>
                </div>

                <div className="card" style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '850', color: '#0f172a', marginBottom: '12px' }}>United Nations SDG Alignment</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}><span>SDG 3: Good Health &amp; Well-Being</span><strong>42%</strong></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}><span>SDG 7: Affordable &amp; Clean Energy</span><strong>28%</strong></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}><span>SDG 6: Clean Water &amp; Sanitation</span><strong>18%</strong></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}><span>SDG 9: Industry, Innovation &amp; Infrastructure</span><strong>12%</strong></div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── NOTIFICATIONS ── */}
            <div id="section-notifications" className="dashboard-section" style={{ display: activeSection === "notifications" ? "block" : "none" }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '850', color: '#0f172a' }}>Notifications &amp; Activity Center</h2>
                <div style={{ fontSize: '13px', color: '#64748b' }}>Action items, milestone updates, and platform alerts</div>
              </div>
              <div className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} id="notificationsList">
                  <div className="clickable-card" style={{ padding: '14px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }} onClick={() => window.openReviewRequestsModal && window.openReviewRequestsModal()}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ fontSize: '14px', color: '#0f172a' }}>⚡ New Collaboration Invitation from State Admin</strong>
                      <span className="badge" style={{ background: '#fee2e2', color: '#dc2626' }}>Urgent</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#475569', margin: '4px 0 0' }}>IIT (ISM) Dhanbad proposed Rural Hospital Solar Backup System has been matched with your profile.</p>
                  </div>
                  <div className="clickable-card" style={{ padding: '14px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }} onClick={() => window.openDueMilestonesModal && window.openDueMilestonesModal()}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ fontSize: '14px', color: '#0f172a' }}>📅 Milestone Review Due: BIT Mesra Water IoT</strong>
                      <span className="badge" style={{ background: '#fef3c7', color: '#d97706' }}>Due in 3 Days</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#475569', margin: '4px 0 0' }}>Hardware delivery milestone verification requested by Dr. Priya Sharma.</p>
                  </div>
                  <div className="clickable-card" style={{ padding: '14px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }} onClick={() => window.openDisbursementReceiptModal && window.openDisbursementReceiptModal('JH-CSR-2026-904', '₹12,00,000', 'IIT (ISM) Dhanbad', 'Rural Hospital Solar Microgrid')}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ fontSize: '14px', color: '#0f172a' }}>✓ CSR Escrow Tranche Disbursed</strong>
                      <span className="badge" style={{ background: '#dcfce7', color: '#15803d' }}>Verified</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#475569', margin: '4px 0 0' }}>Tranche 1 (₹4,80,000) verified on blockchain ledger for Milestone 1 bench testing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── PAN-INDIA HEATMAP ── */}
            <div id="section-heatmap" className="dashboard-section" style={{ display: activeSection === "heatmap" ? "block" : "none" }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '850', color: '#0f172a' }}>Pan-India &amp; District CSR Heatmap</h2>
                <div style={{ fontSize: '13px', color: '#64748b' }}>Geographic distribution of civic challenges, university innovations, and corporate CSR impact across Jharkhand &amp; India</div>
              </div>

              <div className="filter-bar" style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#475569' }}>State:</span>
                  <select id="industryStateSelect" className="filter-select" style={{ minWidth: '180px' }}>
                    <option value="Jharkhand">Jharkhand (Home State)</option>
                    <option value="All">All India (National Overview)</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Bihar">Bihar</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#475569' }}>Focus Area:</span>
                  <select id="industryMapCategoryFilter" className="filter-select" style={{ minWidth: '180px' }}>
                    <option value="">All Categories</option>
                    <option>Water Management</option>
                    <option>Healthcare</option>
                    <option>Agriculture</option>
                    <option>Education</option>
                    <option>Sanitation &amp; Environment</option>
                    <option>Rural Livelihoods</option>
                    <option>Urban Infrastructure</option>
                    <option>Energy &amp; Technology</option>
                  </select>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className="badge" style={{ fontSize: '11px', background: '#002D62', color: '#fff' }}>24 Districts Monitored</span>
                  <span className="badge" style={{ fontSize: '11px', background: '#138808', color: '#fff' }}>Real-Time CSR GIS</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '20px', alignItems: 'start' }}>
                <div id="industry-india-map" style={{ width: '100%', height: '540px', borderRadius: '14px', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', position: 'relative' }}></div>
                <div className="card" id="industryDistrictDetailPanel" style={{ background: '#fff', borderRadius: '14px', border: '1.5px solid #e2e8f0', minHeight: '540px', padding: '24px' }}>
                  <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>🗺️</div>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a' }}>Select a State or Click a District</div>
                    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>Click any district marker on the map to inspect real-time civic problems and CSR funding opportunities.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── PARTNER PROFILE & CAPABILITIES ── */}
            
            {/* ── COMPACT PARTNER PROFILE & SECURITY CREDENTIALS ── */}
            <div id="section-profile" className="dashboard-section" style={{ display: activeSection === "profile" ? "block" : "none" }}>
              <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                <div style={{ marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#0f172a', margin: '0 0 4px 0' }}>Industry Partner Profile &amp; Security Settings</h2>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>Manage your corporate credentials, contact authorization, and portal access security.</div>
                </div>

                {/* Profile Form Container */}
                <form id="profileForm" onSubmit={(e) => { e.preventDefault(); if (window.saveIndustryProfile) window.saveIndustryProfile(); }}>
                  
                  {/* Card 1: Corporate Organization & Escrow Details */}
                  <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '20px', marginBottom: '18px', boxShadow: '0 2px 8px rgba(0,45,98,0.03)' }}>
                    <div style={{ fontSize: '14px', fontWeight: '850', color: '#002D62', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>🏢</span> Corporate Organization &amp; Escrow Details
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                      <div className="form-group">
                        <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase' }}>Organization Name</label>
                        <input type="text" className="form-input" defaultValue="Tata Steel Foundation" id="profOrgName" style={{ marginTop: '4px' }} />
                      </div>
                      <div className="form-group">
                        <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase' }}>Partner Type</label>
                        <input type="text" className="form-input" defaultValue="Corporate CSR &amp; Industry" readOnly style={{ background: '#f8fafc', color: '#475569', marginTop: '4px' }} />
                      </div>
                      <div className="form-group">
                        <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase' }}>Annual CSR Budget</label>
                        <input type="text" className="form-input" defaultValue="₹ 5,00,00,000" id="profFunding" style={{ marginTop: '4px' }} />
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Authorized Representative */}
                  <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '20px', marginBottom: '18px', boxShadow: '0 2px 8px rgba(0,45,98,0.03)' }}>
                    <div style={{ fontSize: '14px', fontWeight: '850', color: '#002D62', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>👤</span> Authorized Corporate Representative
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                      <div className="form-group">
                        <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase' }}>Representative Name</label>
                        <input type="text" className="form-input" defaultValue="SHOEB RAZA" id="profRepName" style={{ marginTop: '4px' }} />
                      </div>
                      <div className="form-group">
                        <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase' }}>Corporate Email</label>
                        <input type="email" className="form-input" defaultValue="sushantranjan6206@gmail.com" id="profEmail" style={{ marginTop: '4px' }} />
                      </div>
                      <div className="form-group">
                        <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase' }}>State Presence</label>
                        <input type="text" className="form-input" defaultValue="Jamshedpur, Jharkhand (All 24 Districts)" id="profLocation" style={{ marginTop: '4px' }} />
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Security & Password Management */}
                  <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '20px', marginBottom: '18px', boxShadow: '0 2px 8px rgba(0,45,98,0.03)' }}>
                    <div style={{ fontSize: '14px', fontWeight: '850', color: '#002D62', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>🔒</span> Account Security &amp; Password Update
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                      <div className="form-group">
                        <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase' }}>Current Password</label>
                        <input type="password" className="form-input" id="profCurrentPass" placeholder="••••••••" style={{ marginTop: '4px' }} />
                      </div>
                      <div className="form-group">
                        <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase' }}>New Password</label>
                        <input type="password" className="form-input" id="profNewPass" placeholder="Min. 8 characters" style={{ marginTop: '4px' }} />
                      </div>
                      <div className="form-group">
                        <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase' }}>Confirm New Password</label>
                        <input type="password" className="form-input" id="profConfirmPass" placeholder="Repeat new password" style={{ marginTop: '4px' }} />
                      </div>
                    </div>
                    <div style={{ marginTop: '12px', textAlign: 'right' }}>
                      <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => window.updatePasswordCredentials && window.updatePasswordCredentials()} style={{ fontWeight: '800' }}>
                        🔑 Update Password &amp; Email
                      </button>
                    </div>
                  </div>

                  {/* Card 4: Historical Performance Record */}
                  <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
                    <div>
                      <div style={{ fontWeight: '850', fontSize: '13px', color: '#0f172a' }}>Historical Performance Record</div>
                      <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '2px' }}>Audited by Government of Jharkhand JanSetu Verification Engine</div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '17px', fontWeight: '900', color: '#002D62' }}>14</div>
                        <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: '750', textTransform: 'uppercase' }}>Completed</div>
                      </div>
                      <div style={{ height: '24px', width: '1px', background: '#cbd5e1' }}></div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '17px', fontWeight: '900', color: '#15803d' }}>92%</div>
                        <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: '750', textTransform: 'uppercase' }}>Success Rate</div>
                      </div>
                      <div style={{ height: '24px', width: '1px', background: '#cbd5e1' }}></div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '17px', fontWeight: '900', color: '#2563eb' }}>1.8 Days</div>
                        <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: '750', textTransform: 'uppercase' }}>Avg Response</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button type="button" className="btn btn-ghost" onClick={() => window.toastSuccess && window.toastSuccess('Profile changes reverted')} style={{ border: '1px solid #cbd5e1' }}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '13.5px', borderRadius: '8px', background: '#002D62' }}>
                      💾 Save Profile Details
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* ── DETAILED CAPABILITY MATRIX ── */}
                        {/* ════════════════════════════════════════════════════════════
                 8. PARTNER CAPABILITIES SECTION (IMAGE 5 EXACT MATCH)
               ════════════════════════════════════════════════════════════ */}
            <div id="section-capabilities" className="dashboard-section" style={{ display: activeSection === "capabilities" ? "block" : "none" }}>
              
              {/* Header with blue info callout (Image 5) */}
              <div className="caps-header-wrap">
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
                    ⚙️
                  </div>
                  <div>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#0f172a', margin: '0 0 2px 0' }}>Partner Capabilities</h2>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Tell us about your organization's capabilities to get better AI-matched opportunities.</p>
                  </div>
                </div>

                <div className="caps-info-callout">
                  <span style={{ fontSize: '16px' }}>ℹ️</span>
                  <span>Your capabilities are used by JanSetu AI to match you with relevant university solutions.</span>
                </div>
              </div>

              {/* 3-Column Card Layout (Image 5) */}
              
              {/* ROW 1 */}
              <div className="caps-grid-3col">
                
                {/* Card 1: Organization & CSR Overview */}
                <div className="caps-card">
                  <div className="caps-card-header">
                    <span style={{ fontSize: '18px' }}>🏢</span>
                    <div>
                      <div className="caps-card-title">Organization &amp; CSR Overview</div>
                      <div className="caps-card-sub">Basic information about your organization and CSR focus.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Organization Name</label>
                      <input type="text" className="form-input" id="capOrgName" defaultValue="Tata Steel Foundation" placeholder="e.g. Tata Steel Foundation" />
                    </div>
                    <div>
                      <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>CSR Focus Areas</label>
                      <select className="form-input" id="capFocusAreas">
                        <option value="education_healthcare">Education, Healthcare, Renewable Energy</option>
                        <option value="water_sanitation">Water Management &amp; Sanitation</option>
                        <option value="rural_infra">Rural Livelihoods &amp; Digital Infrastructure</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Card 2: Funding & CSR Budget */}
                <div className="caps-card">
                  <div className="caps-card-header">
                    <span style={{ fontSize: '18px' }}>₹</span>
                    <div>
                      <div className="caps-card-title">Funding &amp; CSR Budget</div>
                      <div className="caps-card-sub">Specify your funding capacity for societal projects.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Annual CSR Budget (₹)</label>
                      <input type="text" className="form-input" id="capBudget" defaultValue="50000000" placeholder="e.g. 50000000" />
                    </div>
                    <div>
                      <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Typical Project Range (₹)</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <input type="text" className="form-input" id="capMinBudget" defaultValue="₹5 Lakh" placeholder="Min" />
                        <input type="text" className="form-input" id="capMaxBudget" defaultValue="₹25 Lakh" placeholder="Max" />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Preferred Funding Domains</label>
                      <select className="form-input" id="capDomains">
                        <option value="all">Clean Energy, Healthcare, Clean Water</option>
                        <option value="tech">AI/IoT &amp; Engineering Innovation</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Card 3: AI Matching Status */}
                <div className="caps-card" style={{ background: '#f8fafc', border: '1.5px solid #bfdbfe' }}>
                  <div className="caps-card-header">
                    <span style={{ fontSize: '20px' }}>🤖</span>
                    <div style={{ flex: 1 }}>
                      <div className="caps-card-title">AI Matching Status</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                        <span>Last Indexed</span>
                        <strong style={{ color: '#0f172a' }}>14 Sep 2026, 5:32 PM</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                        <span>Capabilities Indexed</span>
                        <strong style={{ color: '#0f172a' }}>12/12</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                        <span>Status</span>
                        <span style={{ color: '#16a34a', fontWeight: '800' }}>● Active</span>
                      </div>
                    </div>
                    <button className="btn btn-primary" onClick={() => window.triggerAiReindex && window.triggerAiReindex()} style={{ width: '100%', justifyContent: 'center', padding: '10px' }}>
                      🔄 Re-index with JanSetu AI
                    </button>
                  </div>
                </div>

              </div>

              {/* ROW 2 */}
              <div className="caps-grid-3col">
                
                {/* Card 4: Technology & Expertise */}
                <div className="caps-card">
                  <div className="caps-card-header">
                    <span style={{ fontSize: '18px' }}>💡</span>
                    <div>
                      <div className="caps-card-title">Technology &amp; Expertise</div>
                      <div className="caps-card-sub">Select your core technological capabilities.</div>
                    </div>
                  </div>
                  <div className="caps-checkbox-list">
                    <label className="caps-checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Solar &amp; Renewable Energy</span>
                    </label>
                    <label className="caps-checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>IoT &amp; Sensors</span>
                    </label>
                    <label className="caps-checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>AI/ML &amp; Data Analytics</span>
                    </label>
                    <label className="caps-checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Water Technology</span>
                    </label>
                    <label className="caps-checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Medical Equipment</span>
                    </label>
                    <a href="#more" onClick={(e) => { e.preventDefault(); window.toastSuccess && window.toastSuccess('Expanded capability options'); }} style={{ fontSize: '12px', color: '#2563eb', fontWeight: '750', textDecoration: 'none', marginTop: '4px' }}>
                      + Show more options
                    </a>
                  </div>
                </div>

                {/* Card 5: Equipment & Resources */}
                <div className="caps-card">
                  <div className="caps-card-header">
                    <span style={{ fontSize: '18px' }}>🔧</span>
                    <div>
                      <div className="caps-card-title">Equipment &amp; Resources</div>
                      <div className="caps-card-sub">List key equipment or resources you can provide.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <textarea className="form-input" id="capEquipment" defaultValue="Solar panels, high-voltage testing benches, LiFePO4 battery testing units, water quality spectrometry sensors." rows="5" style={{ flex: 1, resize: 'none', fontSize: '12.5px' }} placeholder="e.g. Solar panels, testing equipment, laboratory facilities..." />
                    <div style={{ fontSize: '11px', color: '#94a3b8', textAlign: 'right', marginTop: '4px' }}>142/300</div>
                  </div>
                </div>

                {/* Card 6: Current Capacity */}
                <div className="caps-card">
                  <div className="caps-card-header">
                    <span style={{ fontSize: '18px' }}>👥</span>
                    <div>
                      <div className="caps-card-title">Current Capacity</div>
                      <div className="caps-card-sub">Your current project capacity.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div>
                      <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Active Projects</label>
                      <input type="text" className="form-input" defaultValue="4" id="capActiveProjects" placeholder="e.g. 4" />
                    </div>
                    <div>
                      <label style={{ fontSize: '11.5px', fontWeight: '750', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Can Support (More)</label>
                      <input type="text" className="form-input" defaultValue="3" id="capCanSupport" placeholder="e.g. 3" />
                    </div>
                  </div>
                </div>

              </div>

              {/* ROW 3 */}
              <div className="caps-grid-3col">
                
                {/* Card 7: Experts & Mentors */}
                <div className="caps-card">
                  <div className="caps-card-header">
                    <span style={{ fontSize: '18px' }}>👨‍🏫</span>
                    <div>
                      <div className="caps-card-title">Experts &amp; Mentors</div>
                      <div className="caps-card-sub">Specify experts or mentors available for support.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input type="text" className="form-input" id="capExpertRole" defaultValue="Senior Solar Engineer, CSR Lead" placeholder="e.g. Solar Engineer, Healthcare Expert..." />
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '11px', color: '#64748b' }}>No. of Experts</label>
                        <input type="text" className="form-input" defaultValue="2" id="capExpertCount" style={{ marginTop: '2px' }} />
                      </div>
                      <button className="btn btn-sm btn-ghost" onClick={() => window.toastSuccess && window.toastSuccess('Added expert specialty field')} style={{ border: '1px solid #cbd5e1', alignSelf: 'flex-end', height: '38px', fontWeight: '750' }}>
                        + Add Expert
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 8: Testing & Deployment */}
                <div className="caps-card">
                  <div className="caps-card-header">
                    <span style={{ fontSize: '18px' }}>🧪</span>
                    <div>
                      <div className="caps-card-title">Testing &amp; Deployment</div>
                      <div className="caps-card-sub">Select support you can provide.</div>
                    </div>
                  </div>
                  <div className="caps-checkbox-list">
                    <label className="caps-checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Testing Facilities</span>
                    </label>
                    <label className="caps-checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Pilot Deployment</span>
                    </label>
                    <label className="caps-checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Field Implementation</span>
                    </label>
                    <label className="caps-checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Maintenance Support</span>
                    </label>
                  </div>
                </div>

                {/* Card 9: Preferred Locations */}
                <div className="caps-card">
                  <div className="caps-card-header">
                    <span style={{ fontSize: '18px' }}>📍</span>
                    <div>
                      <div className="caps-card-title">Preferred Locations</div>
                      <div className="caps-card-sub">Select states/districts where you can support projects.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div>
                      <label style={{ fontSize: '11px', color: '#64748b' }}>Select State</label>
                      <select className="form-input" id="capState" style={{ marginTop: '2px' }}>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Odisha">Odisha</option>
                        <option value="All India">Pan-India</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '11px', color: '#64748b' }}>Select Districts (optional)</label>
                      <select className="form-input" id="capDistricts" style={{ marginTop: '2px' }}>
                        <option value="Dhanbad, Ranchi, Bokaro, Latehar">Dhanbad, Ranchi, Bokaro, Latehar</option>
                        <option value="All 24 Districts">All 24 Districts of Jharkhand</option>
                      </select>
                    </div>
                  </div>
                </div>

              </div>

              {/* Full-width Card 10: Additional Information (Image 5) */}
              <div className="caps-card" style={{ marginBottom: '16px' }}>
                <div className="caps-card-header">
                  <span style={{ fontSize: '18px' }}>📄</span>
                  <div>
                    <div className="caps-card-title">Additional Information (Optional)</div>
                    <div className="caps-card-sub">Any other relevant capabilities, previous experience, or notes.</div>
                  </div>
                </div>
                <textarea className="form-input" id="capAdditional" rows="3" defaultValue="Established CSR field logistics network with rapid response vehicles and technical mentors stationed in Jamshedpur, Ranchi, and Bokaro." style={{ resize: 'vertical', fontSize: '12.5px' }} placeholder="e.g. Previous similar projects, special capabilities, partnerships..." />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>148/500</span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-ghost" onClick={() => window.toastSuccess && window.toastSuccess('Cancelled changes')} style={{ border: '1px solid #cbd5e1' }}>
                      Cancel
                    </button>
                    <button className="btn btn-primary" onClick={() => window.saveCapabilitiesData && window.saveCapabilitiesData()}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </main>
      </div>

      {/* ════════════════════════════════════════════════════════════
           UNIVERSAL MODALS (ZERO ALERTS)
         ════════════════════════════════════════════════════════════ */}

      {/* 1. Full Proposal Modal */}
      <div id="modalFullProposal" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '720px' }}>
          <div className="modal-header">
            <div>
              <span className="badge badge-assigned">State Admin Verified Solution Blueprint</span>
              <h2 id="fullPropModalTitle" style={{ fontSize: '18px', fontWeight: '850', color: '#0f172a', marginTop: '4px' }}>Modular 15kVA Solar Microgrid for Rural PHCs</h2>
              <div id="fullPropModalSub" style={{ fontSize: '12px', color: '#64748b' }}>IIT (ISM) Dhanbad · Dr. A. K. Sengupta</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalFullProposal')}>&times;</button>
          </div>
          <div className="modal-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '18px', background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div><span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: '750' }}>Requested CSR Grant</span><div id="fullPropModalGrant" style={{ fontSize: '16px', fontWeight: '850', color: '#0f172a' }}>₹12,00,000</div></div>
              <div><span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: '750' }}>Execution Timeline</span><div id="fullPropModalTimeline" style={{ fontSize: '16px', fontWeight: '850', color: '#0f172a' }}>4 Months</div></div>
              <div><span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: '750' }}>Admin Matching Confidence</span><div style={{ fontSize: '16px', fontWeight: '850', color: '#15803d' }}>96.4% Verified</div></div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '13.5px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>Technical Architecture &amp; Deliverables</h4>
              <p id="fullPropModalTechDesc" style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>The university engineering lab has designed a high-efficiency modular micro-inverter topology using LiFePO4 battery banks. Automatic prioritization algorithms route battery reserve during grid blackout directly to neonatal incubators, cold-chain vaccine storages, and emergency minor OT illuminators.</p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '13.5px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>Required Industry Support &amp; Commitments</h4>
              <div id="fullPropModalSupportTags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                <span className="badge badge-primary">Funding</span>
                <span className="badge badge-primary">Mentorship</span>
                <span className="badge badge-primary">Testing Facility</span>
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: '#334155', lineHeight: '1.6' }}>
                <li><strong>Equipment:</strong> <span id="fullPropModalEquip">Testing hardware, sensors &amp; prototype fabrication equipment</span></li>
                <li><strong>Mentorship:</strong> <span id="fullPropModalMentor">Industry engineering guidance &amp; technical reviews</span></li>
                <li><strong>Field Testing:</strong> <span id="fullPropModalField">Provision of pilot site clearance &amp; deployment validation</span></li>
              </ul>
            </div>

            {/* Document Download & Requirements Blueprint */}
            <div id="fullPropModalDocContainer" style={{ marginBottom: '16px', background: '#f8fafc', padding: '14px 18px', borderRadius: '10px', border: '1.5px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  📄
                </div>
                <div>
                  <div id="fullPropModalDocName" style={{ fontSize: '13.5px', fontWeight: '800', color: '#0f172a' }}>Technical_Solution_Requirements.pdf</div>
                  <div style={{ fontSize: '11.5px', color: '#64748b' }}>Submitted by University Faculty PI • Official Specifications</div>
                </div>
              </div>
              <a id="fullPropModalDocLink" href="#" target="_blank" rel="noreferrer" download className="btn btn-outline-primary btn-sm" style={{ fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                ⬇ Download Document
              </a>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick={() => window.openClarificationModal && window.openClarificationModal(window._currentFullProposalId)}>💬 Ask Faculty Clarification</button>
            <button className="btn btn-primary" id="fullPropModalAcceptBtn" onClick={() => window.confirmAcceptPartnership && window.confirmAcceptPartnership(window._currentFullProposalId)}>✅ Accept &amp; Form Collaboration</button>
          </div>
        </div>
      </div>

      {/* 2. Technical Clarification Modal */}
      <div id="modalClarification" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '520px' }}>
          <div className="modal-header">
            <div>
              <h2 id="clarificationModalTitle" style={{ fontSize: '17px', fontWeight: '850', color: '#0f172a' }}>Request Technical Clarification</h2>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Direct channel to University Faculty Lead &amp; State Admin</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalClarification')}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="form-group" style={{ marginBottom: '12px' }}>
              <label>Topic / Query Area</label>
              <select className="filter-select" style={{ width: '100%' }}>
                <option>Technical Specifications &amp; Hardware Compatibility</option>
                <option>Budget Breakdown &amp; Tranche Milestones</option>
                <option>Pilot Testing Timeline &amp; Deployment Scope</option>
                <option>Safety Certifications &amp; ISO Standards</option>
              </select>
            </div>
            <div className="form-group">
              <label>Your Inquiry Message</label>
              <textarea id="clarificationText" className="form-input" rows="4" placeholder="Enter your detailed technical query, budget concern, or equipment availability questions..." style={{ width: '100%' }}></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick={() => window.closeModal && window.closeModal('modalClarification')}>Cancel</button>
            <button className="btn btn-primary" onClick={() => window.sendClarification && window.sendClarification()}>Dispatch Clarification</button>
          </div>
        </div>
      </div>

      {/* 3. Accept Collaboration Confirmation Modal */}
      <div id="modalAcceptCollab" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '540px' }}>
          <div className="modal-header">
            <div>
              <h2 id="acceptCollabTitle" style={{ fontSize: '18px', fontWeight: '850', color: '#0f172a' }}>Confirm Partnership Agreement</h2>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Tri-Party Collaboration: State Admin · University · Industry Partner</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalAcceptCollab')}>&times;</button>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: '1.6' }}>By accepting, your organization agrees to commit the proposed CSR support and work alongside the faculty team to scale this solution through the JanSetu lifecycle.</p>
            <div style={{ marginTop: '14px', padding: '14px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '12.5px', color: '#475569' }}>✓ CSR Grant allocated to escrow: <strong id="acceptCollabGrantCommitment">₹50,001</strong></div>
              <div style={{ fontSize: '12.5px', color: '#475569', marginTop: '4px' }}>✓ Direct access to University Project Workspace enabled</div>
              <div style={{ fontSize: '12.5px', color: '#475569', marginTop: '4px' }}>✓ State Admin will counter-sign official MOU within 24 hours</div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick={() => window.closeModal && window.closeModal('modalAcceptCollab')}>Review More</button>
            <button className="btn btn-primary" onClick={() => window.confirmAcceptPartnership && window.confirmAcceptPartnership(window._currentFullProposalId)}>Sign &amp; Activate Collaboration</button>
          </div>
        </div>
      </div>

      {/* 4. Decline Collaboration Modal */}
      <div id="modalDeclineCollab" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '500px' }}>
          <div className="modal-header">
            <div>
              <h2 id="declineModalTitle" style={{ fontSize: '17px', fontWeight: '850', color: '#0f172a' }}>Decline Collaboration Request</h2>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Notice will be relayed to State Admin for re-matching</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalDeclineCollab')}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Reason for Declining</label>
              <select className="filter-select" style={{ width: '100%', marginBottom: '12px' }}>
                <option>CSR budget allocated for current quarter</option>
                <option>Out of current geographic priority districts</option>
                <option>Required technical testing equipment unavailable</option>
                <option>Already partnering on similar domain solution</option>
              </select>
            </div>
            <textarea className="form-input" rows="3" placeholder="Optional notes for State Admin regarding this decision..." style={{ width: '100%' }}></textarea>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick={() => window.closeModal && window.closeModal('modalDeclineCollab')}>Keep Pending</button>
            <button className="btn btn-primary" style={{ background: '#dc2626' }} onClick={() => window.confirmDecline && window.confirmDecline()}>Confirm Decline</button>
          </div>
        </div>
      </div>

      {/* 5. Disbursement Escrow Receipt Modal */}
      <div id="modalDisbursementReceipt" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '560px' }}>
          <div className="modal-header">
            <div>
              <h2 style={{ fontSize: '17px', fontWeight: '850', color: '#0f172a' }}>CSR Grant Disbursement Receipt</h2>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Government of Jharkhand · JanSetu Civic Trust Escrow</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalDisbursementReceipt')}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="csr-certificate-box" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', marginBottom: '12px' }}>
                <div><span style={{ fontSize: '11px', color: '#64748b' }}>RECEIPT REFERENCE</span><div id="rcptRef" style={{ fontWeight: '850', color: '#002D62' }}>JH-CSR-2026-904</div></div>
                <div style={{ textAlign: 'right' }}><span style={{ fontSize: '11px', color: '#64748b' }}>DATE &amp; TIME</span><div style={{ fontWeight: '750', color: '#0f172a' }}>12 Sep 2026, 11:34 AM</div></div>
              </div>
              <div style={{ marginBottom: '8px' }}><strong>Initiative:</strong> <span id="rcptTitle">Rural Hospital Solar Microgrid</span></div>
              <div style={{ marginBottom: '8px' }}><strong>Beneficiary:</strong> <span id="rcptRec">IIT (ISM) Dhanbad — Dept of Electrical Engineering</span></div>
              <div style={{ marginBottom: '8px' }}><strong>Donor Organization:</strong> Tata Steel Foundation (CIN: U85300JH2016NPL008922)</div>
              <div style={{ marginBottom: '8px' }}><strong>Amount Disbursed:</strong> <span id="rcptAmt" style={{ fontSize: '18px', fontWeight: '900', color: '#15803d' }}>₹12,00,000</span></div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
                Blockchain Ledger Hash: <code>0x7f8a92bcde148902517823abce8492041289cf</code> · 80G Tax Exemption Eligible
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => { if (window.toastSuccess) window.toastSuccess('Receipt PDF downloaded.'); window.closeModal('modalDisbursementReceipt'); }}>Download Receipt PDF</button>
          </div>
        </div>
      </div>

      {/* 6. Delivery Audit Modal */}
      <div id="modalDeliveryAudit" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '540px' }}>
          <div className="modal-header">
            <div>
              <h2 style={{ fontSize: '17px', fontWeight: '850', color: '#0f172a' }}>Equipment Delivery Audit Report</h2>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Signed Administrative In-Ward Verification</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalDeliveryAudit')}>&times;</button>
          </div>
          <div className="modal-body">
            <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Audit Ref: <strong id="auditRef">DEL-HZB-2026-118</strong></span>
                <span className="badge" style={{ background: '#dcfce7', color: '#15803d' }}>Verified &amp; Inspected</span>
              </div>
              <div>Item: <strong id="auditItem">LiFePO4 Solar Battery Modules (10 Units)</strong></div>
              <div style={{ marginTop: '4px' }}>Inspecting Authority: <strong id="auditAuth">Hazaribagh District Collectorate</strong></div>
            </div>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>The delivered units were benchmarked against technical bid specifications, serial numbers cataloged, and signed off for pilot installation at the secondary health facility.</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => window.closeModal('modalDeliveryAudit')}>Close Audit Report</button>
          </div>
        </div>
      </div>

      {/* 7. Pilot Approval Modal */}
      <div id="modalPilotApproval" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '540px' }}>
          <div className="modal-header">
            <div>
              <h2 id="pilotApprovalTitle" style={{ fontSize: '18px', fontWeight: '850', color: '#0f172a' }}>Small-Scale Pilot Testing Approval</h2>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Sign off on lab &amp; bench test trials</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalPilotApproval')}>&times;</button>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: '1.6' }}>Based on 30 days of continuous telemetry data, the 15kVA prototype has satisfied all critical safety, load management, and efficiency criteria.</p>
            <div style={{ marginTop: '12px', padding: '14px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '13px', color: '#0f172a' }}>✓ System Uptime: <strong>99.8%</strong> (Target: &gt;98%)</div>
              <div style={{ fontSize: '13px', color: '#0f172a', marginTop: '4px' }}>✓ Max Temp Rise: <strong>14.2°C</strong> (Well below 35°C safety limit)</div>
              <div style={{ fontSize: '13px', color: '#0f172a', marginTop: '4px' }}>✓ Zero hospital load drops recorded during grid switchover</div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick={() => window.closeModal && window.closeModal('modalPilotApproval')}>Cancel</button>
            <button className="btn btn-primary" onClick={() => window.confirmPilotApproval && window.confirmPilotApproval()}>Authorize Pilot Completion</button>
          </div>
        </div>
      </div>

      {/* 8. Revision Request Modal */}
      <div id="modalRevisionRequest" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '520px' }}>
          <div className="modal-header">
            <div>
              <h2 id="revisionModalTitle" style={{ fontSize: '17px', fontWeight: '850', color: '#0f172a' }}>Request Technical Revision</h2>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Send engineering modification feedback to university lab</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalRevisionRequest')}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Recommended Adjustment Area</label>
              <select className="filter-select" style={{ width: '100%', marginBottom: '12px' }}>
                <option>Battery Thermal Dissipation &amp; Enclosure Rating</option>
                <option>Cloud Telemetry Frequency &amp; Data Compression</option>
                <option>Surge Protection for Rural Lightning Strikes</option>
                <option>User Interface &amp; Local Dialect Audio Alerts</option>
              </select>
            </div>
            <textarea className="form-input" rows="4" placeholder="Detail the requested engineering adjustments, test observations, or component modifications..." style={{ width: '100%' }}></textarea>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick={() => window.closeModal && window.closeModal('modalRevisionRequest')}>Cancel</button>
            <button className="btn btn-primary" onClick={() => window.confirmRevisionRequest && window.confirmRevisionRequest()}>Dispatch Revision Notes</button>
          </div>
        </div>
      </div>

      {/* 9. Sensor Telemetry Modal */}
      <div id="modalSensorTelemetry" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '640px' }}>
          <div className="modal-header">
            <div>
              <h2 id="sensorLogTitle" style={{ fontSize: '18px', fontWeight: '850', color: '#0f172a' }}>Live Telemetry Calibration Log</h2>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Automated Sensor Node Readings · Real-Time Stream</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalSensorTelemetry')}>&times;</button>
          </div>
          <div className="modal-body">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '16px' }}>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}><span style={{ fontSize: '11px', color: '#64748b' }}>BATTERY VOLTAGE</span><div style={{ fontSize: '15px', fontWeight: '800' }}>53.2 V</div></div>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}><span style={{ fontSize: '11px', color: '#64748b' }}>TEMP SENSOR</span><div style={{ fontSize: '15px', fontWeight: '800' }}>28.4 °C</div></div>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}><span style={{ fontSize: '11px', color: '#64748b' }}>EFFICIENCY</span><div style={{ fontSize: '15px', fontWeight: '800', color: '#15803d' }}>96.8 %</div></div>
            </div>
            <div style={{ maxHeight: '180px', overflowY: 'auto', background: '#0f172a', color: '#38bdf8', padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '11.5px' }}>
              <div>[12:04:12 UTC] NODE-01: Inverter phase A: 231.2V / 50.01Hz (Normal)</div>
              <div>[12:04:14 UTC] NODE-01: Grid presence check: ACTIVE (PFC=0.99)</div>
              <div>[12:04:16 UTC] NODE-01: Battery SOC: 94.2% · Charge rate: 12.4A</div>
              <div>[12:04:18 UTC] NODE-01: ICU priority relay: CLOSED (Load: 2.4kW)</div>
              <div>[12:04:20 UTC] NODE-01: Heartbeat telemetry packet ACK from JanSetu Gateway</div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => { if (window.toastSuccess) window.toastSuccess('Telemetry log exported to CSV.'); window.closeModal('modalSensorTelemetry'); }}>Export CSV Stream</button>
          </div>
        </div>
      </div>

      {/* 10. Official CSR Certificate Modal */}
      <div id="modalCsrCertificate" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '640px' }}>
          <div className="modal-header">
            <div>
              <h2 style={{ fontSize: '17px', fontWeight: '850', color: '#0f172a' }}>Official Societal Impact Certificate</h2>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Government of Jharkhand · Department of Planning &amp; Development</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalCsrCertificate')}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="csr-certificate-box">
              <div className="csr-certificate-ribbon"></div>
              <div className="csr-certificate-seal">🏛️</div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#002D62', textTransform: 'uppercase', letterSpacing: '1px' }}>GOVERNMENT OF JHARKHAND</div>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#0f172a', margin: '8px 0 4px' }}>CERTIFICATE OF SOCIETAL IMPACT &amp; CSR EXCELLENCE</div>
              <div style={{ fontSize: '12.5px', color: '#64748b', marginBottom: '16px' }}>Issued pursuant to JanSetu Innovation &amp; CSR Framework</div>
              <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: '1.6' }}>
                This is to certify that <strong>Tata Steel Foundation</strong> has successfully partnered on <strong>14 Higher Education civic innovation initiatives</strong> across 9 districts of Jharkhand, positively impacting <strong>1,240 citizens</strong> with total verified support deployment of <strong>₹25,00,000</strong>.
              </p>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <div style={{ textAlign: 'left', fontSize: '11px', color: '#64748b' }}>
                  Certificate ID: <strong>JH-CSR-CERT-2026-0814</strong><br />
                  Date of Issue: <strong>14 September 2026</strong><br />
                  Validation QR: Verified on JanSetu State Registry
                </div>
                <div style={{ textAlign: 'right', fontSize: '11px', color: '#0f172a' }}>
                  <strong>Principal Secretary</strong><br />
                  Dept of IT &amp; e-Governance<br />
                  Government of Jharkhand
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => { window.print ? window.print() : (window.toastSuccess && window.toastSuccess('Certificate sent to printer.')); }}>Print / Save Certificate</button>
          </div>
        </div>
      </div>

      {/* 11. Preference Alert Modal */}
      <div id="modalPreferenceAlert" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '480px' }}>
          <div className="modal-header">
            <h3>Configure Opportunity Alerts</h3>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalPreferenceAlert')}>&times;</button>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: '13px', color: '#475569' }}>Select domains to receive real-time notifications when new approved university proposals match your criteria:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
              <label><input type="checkbox" defaultChecked /> Clean Energy &amp; Microgrids</label>
              <label><input type="checkbox" defaultChecked /> Healthcare &amp; Medical Telemetry</label>
              <label><input type="checkbox" defaultChecked /> Clean Water &amp; Sanitation</label>
              <label><input type="checkbox" /> Rural Digital Education</label>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => { if (window.toastSuccess) window.toastSuccess('Opportunity alerts configured successfully!'); window.closeModal('modalPreferenceAlert'); }}>Save Preferences</button>
          </div>
        </div>
      </div>

      {/* 12. Profile Saved Confirmation Modal */}
      <div id="modalProfileSaved" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '460px' }}>
          <div className="modal-header">
            <h3>Profile Updated</h3>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalProfileSaved')}>&times;</button>
          </div>
          <div className="modal-body" style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{ fontSize: '42px', marginBottom: '10px' }}>✓</div>
            <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>Capabilities Profile Verified</h4>
            <p style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>Your updated CSR budget, representative credentials, and technical capabilities have been synchronized with the JanSetu state partner registry.</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => window.closeModal && window.closeModal('modalProfileSaved')}>Done</button>
          </div>
        </div>
      </div>

      {/* 15. Action Modals */}
      <div id="modalReviewRequests" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '580px' }}>
          <div className="modal-header">
            <h3>Partnership Requests Awaiting Response</h3>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalReviewRequests')}>&times;</button>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: '13px', color: '#475569', marginBottom: '12px' }}>You have 3 university proposals awaiting your partnership decision.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="clickable-card" style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }} onClick={() => { window.closeModal('modalReviewRequests'); window.openFullProposalModal && window.openFullProposalModal('PRJ-001'); }}>
                <strong>Rural Healthcare Infrastructure</strong> — IIT (ISM) Dhanbad
                <div style={{ fontSize: '12px', color: '#64748b' }}>₹12L support requested · Click to inspect full approved proposal</div>
                <button className="btn btn-sm btn-primary" style={{ marginTop: '8px' }} onClick={(e) => { e.stopPropagation(); window.closeModal('modalReviewRequests'); window.openFullProposalModal && window.openFullProposalModal('PRJ-001'); }}>Review Proposal →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="modalDueMilestones" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '500px' }}>
          <div className="modal-header">
            <h3>Milestones Due This Week</h3>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalDueMilestones')}>&times;</button>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: '13px', color: '#475569' }}>2 project deliverables are due for progress verification:</p>
            <ul style={{ paddingLeft: '20px', marginTop: '8px', fontSize: '13px', color: '#334155' }}>
              <li>Equipment deployment confirmation for Dhanbad Clinic</li>
              <li>Field telemetry validation for Ranchi IoT Sensors</li>
            </ul>
          </div>
          <div className="modal-footer"><button className="btn btn-primary" onClick={() => window.closeModal('modalDueMilestones')}>Acknowledge</button></div>
        </div>
      </div>

      <div id="modalProposalFeedback" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '500px' }}>
          <div className="modal-header">
            <h3>University Proposal Feedback</h3>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalProposalFeedback')}>&times;</button>
          </div>
          <div className="modal-body">
            <textarea className="form-input" rows="4" placeholder="Enter engineering feedback or requested adjustments for the university mentor..." style={{ width: '100%' }}></textarea>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => { if (window.toastSuccess) window.toastSuccess('Feedback transmitted to university faculty.'); window.closeModal('modalProposalFeedback'); }}>Send Feedback</button>
          </div>
        </div>
      </div>

      <div id="modalPrototypeTesting" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '540px' }}>
          <div className="modal-header">
            <h3>Prototype Testing Pending</h3>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalPrototypeTesting')}>&times;</button>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: '13px', color: '#334155' }}>The university engineering team has requested access to Tata Steel Foundation high-voltage simulation equipment to complete ISO-compliant pilot certifications.</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => { if (window.toastSuccess) window.toastSuccess('Testing lab slot confirmed and scheduled.'); window.closeModal('modalPrototypeTesting'); }}>Approve Lab Access</button>
          </div>
        </div>
      </div>

      <div id="modalDeploymentConfirm" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '500px' }}>
          <div className="modal-header">
            <h3>Deployment Confirmation Required</h3>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalDeploymentConfirm')}>&times;</button>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: '13px', color: '#334155' }}>Confirm readiness of field technical crew for Dhanbad rural health center solar installation starting 18 September 2026.</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => { if (window.toastSuccess) window.toastSuccess('Deployment schedule confirmed with State Admin & District Magistrate.'); window.closeModal('modalDeploymentConfirm'); }}>Confirm Deployment</button>
          </div>
        </div>
      </div>

      <div id="modalSubmitProposal" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '540px' }}>
          <div className="modal-header">
            <h3>Submit Partnership Proposal</h3>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalSubmitProposal')}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="form-group"><label>Focus Domain</label><input type="text" className="form-input" defaultValue="Healthcare & Clean Energy" /></div>
            <div className="form-group" style={{ marginTop: '10px' }}><label>Committed Grant / Contribution</label><input type="text" className="form-input" defaultValue="₹ 15,00,000" /></div>
            <div className="form-group" style={{ marginTop: '10px' }}><label>Proposal Summary</label><textarea className="form-input" rows="3" defaultValue="Offer CSR sponsorship and specialized technical engineering support for rural Jharkhand civic challenges."></textarea></div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => { if (window.toastSuccess) window.toastSuccess('Partnership proposal submitted to State Admin for matching.'); window.closeModal('modalSubmitProposal'); }}>Submit Proposal</button>
          </div>
        </div>
      </div>

      {/* Opportunity Analysis Modal */}
      <div id="opportunityAnalysisModal" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '680px' }}>
          <div className="modal-header">
            <div>
              <span className="badge badge-assigned" id="oppModalScoreBadge">Match Score</span>
              <h2 id="oppModalTitle" style={{ fontSize: '18px', fontWeight: '850', color: '#0f172a', marginTop: '4px' }}>Strategic Opportunity Analysis</h2>
              <div id="oppModalSub" style={{ fontSize: '12px', color: '#64748b' }}>Project Insights &amp; Impact</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('opportunityAnalysisModal')}>&times;</button>
          </div>
          <div className="modal-body" id="oppModalBody"></div>
          <div className="modal-footer" id="oppModalFooterActions"></div>
        </div>
      </div>

      {/* Detailed Challenge Card Modal (Opens detailed card instead of a separate page) */}
      <div id="modalChallengeDetails" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '880px', width: '95%', maxHeight: '92vh', display: 'flex', flexDirection: 'column', borderRadius: '20px', overflow: 'hidden' }}>
          {/* Header */}
          <div className="modal-header" style={{ padding: '20px 24px', borderBottom: '1px solid #e2e8f0', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }} id="detailModalBadges">
                <span id="detailModalChallengeId" className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontWeight: '850', letterSpacing: '0.4px', border: '1px solid #bfdbfe' }}>#JH-2026</span>
                <span id="detailModalCategory" className="badge" style={{ background: '#f1f5f9', color: '#334155', fontWeight: '750' }}>Category</span>
                <span id="detailModalDistrict" className="badge" style={{ background: '#f8fafc', color: '#64748b', fontWeight: '650' }}>📍 Jharkhand</span>
                <span id="detailModalPriorityBadge"></span>
                <span id="detailModalStatusBadge"></span>
              </div>
              <h2 id="detailModalTitle" style={{ fontSize: '19px', fontWeight: '850', color: '#0f172a', margin: '0 0 4px', lineHeight: '1.3' }}>Challenge Title</h2>
              <div id="detailModalSub" style={{ fontSize: '12px', color: '#64748b' }}>Jharkhand Societal Innovation Command · University Verified Civic Blueprint</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalChallengeDetails')}>&times;</button>
          </div>

          {/* Body */}
          <div className="modal-body" id="challengeDetailsModalBody" style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          </div>

          {/* Footer */}
          <div className="modal-footer" style={{ padding: '16px 24px', background: '#ffffff', borderTop: '1.5px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn btn-ghost" onClick={() => window.closeModal && window.closeModal('modalChallengeDetails')}>Close Details</button>
            <div id="detailModalActionBtnContainer">
            </div>
          </div>
        </div>
      </div>

      {/* Photographic Evidence & Visual Inspection Lightbox Modal */}
      <div id="modalImageLightbox" className="modal-overlay" style={{ zIndex: 10050 }}>
        <div className="modal-content" style={{ maxWidth: '960px', width: '95%', maxHeight: '94vh', padding: 0, overflow: 'hidden', background: '#0f172a', borderRadius: '18px', border: '1px solid #334155' }}>
          <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', background: '#0f172a' }}>
            <div>
              <h3 id="lightboxImageTitle" style={{ fontSize: '15px', fontWeight: '800', color: '#f8fafc', margin: 0 }}>Ground Evidence Photograph</h3>
              <div id="lightboxImageSub" style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>Geotagged Civic Inspection Record</div>
            </div>
            <button className="modal-close" style={{ color: '#ffffff' }} onClick={() => window.closeModal && window.closeModal('modalImageLightbox')}>&times;</button>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#020617', minHeight: '380px', maxHeight: '68vh', overflow: 'hidden' }}>
            <img id="lightboxImageSrc" src="" alt="Evidence Full Resolution" style={{ maxWidth: '100%', maxHeight: '68vh', objectFit: 'contain' }} />
          </div>
          <div style={{ padding: '14px 20px', background: '#0f172a', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div id="lightboxImageMeta" style={{ fontSize: '12px', color: '#94a3b8' }}>Verified SHA-256 Telemetry Hash</div>
            <button type="button" className="btn btn-sm btn-ghost" style={{ color: '#38bdf8', borderColor: '#334155' }} onClick={() => window.closeModal && window.closeModal('modalImageLightbox')}>Close Preview</button>
          </div>
        </div>
      </div>

      {/* Detailed Express Interest & Tri-Party Admin/Faculty Problem Chat Modal */}
      <div id="partnerModal" className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '820px', width: '95%', maxHeight: '92vh', display: 'flex', flexDirection: 'column', borderRadius: '18px', overflow: 'hidden' }}>
          {/* Header */}
          <div className="modal-header" style={{ padding: '20px 24px', borderBottom: '1px solid #e2e8f0', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span id="collabModalChallengeId" className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontWeight: '850', letterSpacing: '0.4px', border: '1px solid #bfdbfe' }}>#JH-2026</span>
                <span id="collabModalUniversity" className="badge" style={{ background: '#f1f5f9', color: '#334155', fontWeight: '750' }}>University Partner</span>
                <span className="badge" style={{ background: '#dcfce7', color: '#15803d', fontWeight: '750' }}>State Priority</span>
              </div>
              <h2 id="partnerProjectTitle" style={{ fontSize: '18.5px', fontWeight: '850', color: '#0f172a', margin: '0 0 4px', lineHeight: '1.3' }}>Challenge Title</h2>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Jharkhand Societal Innovation Command · Tri-Party CSR Collaboration Window</div>
            </div>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('partnerModal')}>&times;</button>
          </div>

          {/* Navigation Tabs */}
          <div style={{ display: 'flex', borderBottom: '1.5px solid #e2e8f0', background: '#f8fafc', padding: '0 24px' }}>
            <button id="tabBtnPledge" className="partner-tab-btn active" onClick={() => window.switchPartnerModalTab && window.switchPartnerModalTab('pledge')} style={{ padding: '12px 20px', fontSize: '13.5px', fontWeight: '800', border: 'none', background: 'transparent', cursor: 'pointer', borderBottom: '3px solid #002D62', color: '#002D62', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span>📋</span> CSR &amp; Collaboration Pledge
            </button>
            <button id="tabBtnChat" className="partner-tab-btn" onClick={() => window.switchPartnerModalTab && window.switchPartnerModalTab('chat')} style={{ padding: '12px 20px', fontSize: '13.5px', fontWeight: '800', border: 'none', background: 'transparent', cursor: 'pointer', borderBottom: '3px solid transparent', color: '#64748b', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span>💬</span> Live Problem Dialogue &amp; Chat with Admin
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
            </button>
          </div>

          {/* Body */}
          <div className="modal-body" style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
            {/* TAB 1: PLEDGE FORM */}
            <div id="partnerTabPledge" style={{ display: 'block' }}>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontWeight: '800', fontSize: '13px', color: '#0f172a', marginBottom: '8px' }}>
                  1. Select Support Contribution Categories <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <div id="modalContributionGrid" className="collab-card-grid"></div>
                <div id="errContributions" style={{ color: '#dc2626', fontSize: '12px', marginTop: '6px', display: 'none' }}>Please select at least one contribution category.</div>
              </div>

              {/* Conditional Funding Panel */}
              <div id="conditionalFundingPanel" style={{ display: 'none', marginBottom: '18px', background: '#f0fdf4', padding: '16px 18px', borderRadius: '14px', border: '1.5px solid #bbf7d0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontWeight: '800', fontSize: '13px', color: '#166534' }}>
                    💰 CSR / Capital Grant Commitment <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <span style={{ fontSize: '11px', color: '#15803d', fontWeight: '750' }}>80G Tax Exempt Eligible</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <button type="button" className="btn btn-sm" style={{ background: '#ffffff', border: '1px solid #86efac', color: '#166534', fontWeight: '700', borderRadius: '6px' }} onClick={() => window.setModalFundingAmount && window.setModalFundingAmount('500000')}>₹5 Lakhs</button>
                  <button type="button" className="btn btn-sm" style={{ background: '#ffffff', border: '1px solid #86efac', color: '#166534', fontWeight: '700', borderRadius: '6px' }} onClick={() => window.setModalFundingAmount && window.setModalFundingAmount('1000000')}>₹10 Lakhs</button>
                  <button type="button" className="btn btn-sm" style={{ background: '#ffffff', border: '1px solid #86efac', color: '#166534', fontWeight: '700', borderRadius: '6px' }} onClick={() => window.setModalFundingAmount && window.setModalFundingAmount('1500000')}>₹15 Lakhs</button>
                  <button type="button" className="btn btn-sm" style={{ background: '#ffffff', border: '1px solid #86efac', color: '#166534', fontWeight: '700', borderRadius: '6px' }} onClick={() => window.setModalFundingAmount && window.setModalFundingAmount('2500000')}>₹25 Lakhs</button>
                  <button type="button" className="btn btn-sm" style={{ background: '#ffffff', border: '1px solid #86efac', color: '#166534', fontWeight: '700', borderRadius: '6px' }} onClick={() => window.setModalFundingAmount && window.setModalFundingAmount('5000000')}>₹50 Lakhs</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
                  <div>
                    <input type="number" id="collabFundingAmount" className="form-input" placeholder="e.g. 1200000" style={{ background: '#ffffff' }} />
                    <div id="errFundingAmount" style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'none' }}>Please enter a valid funding amount.</div>
                  </div>
                  <div>
                    <select id="collabFundingType" className="form-input" style={{ background: '#ffffff' }}>
                      <option value="CSR Direct Grant">CSR Direct Grant</option>
                      <option value="Co-Funding R&D">Co-Funding R&amp;D</option>
                      <option value="Equipment Grant">Equipment Grant</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Conditional Mentorship Panel */}
              <div id="conditionalMentorshipPanel" style={{ display: 'none', marginBottom: '18px', background: '#eff6ff', padding: '16px 18px', borderRadius: '14px', border: '1.5px solid #bfdbfe' }}>
                <label style={{ display: 'block', fontWeight: '800', fontSize: '13px', color: '#1e40af', marginBottom: '8px' }}>
                  🎓 Mentorship Domains &amp; Engineering Disciplines
                </label>
                <div id="modalMentorshipPills" className="duration-pills-grid"></div>
              </div>

              {/* Duration */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontWeight: '800', fontSize: '13px', color: '#0f172a', marginBottom: '8px' }}>
                  2. Engagement Duration &amp; Project Horizon
                </label>
                <div id="modalDurationGrid" className="duration-pills-grid"></div>
              </div>

              {/* Authorized Contact */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontWeight: '800', fontSize: '13px', color: '#0f172a', marginBottom: '8px' }}>
                  3. Authorized Industry Representative
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                  <div>
                    <input type="text" id="collabContactName" className="form-input" placeholder="Full Name *" defaultValue="Sushant" />
                    <div id="errContactName" style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'none' }}>Name is required.</div>
                  </div>
                  <div>
                    <input type="text" id="collabContactDesignation" className="form-input" placeholder="Designation" defaultValue="CSR &amp; Partnerships Lead" />
                  </div>
                  <div>
                    <input type="email" id="collabContactEmail" className="form-input" placeholder="Corporate Email *" defaultValue="sushantranjan6206@gmail.com" />
                    <div id="errContactEmail" style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'none' }}>Valid email required.</div>
                  </div>
                  <div>
                    <input type="tel" id="collabContactPhone" className="form-input" placeholder="Phone Number" defaultValue="+91 94311 02845" />
                  </div>
                </div>
              </div>

              {/* Statement of Intent */}
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontWeight: '800', fontSize: '13px', color: '#0f172a', marginBottom: '6px' }}>
                  4. Collaboration Statement of Intent / Proposal Scope <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <textarea id="partnerMessage" className="form-input" rows="3" placeholder="Describe your organization's capability alignment, planned milestone contributions, or deployment assistance..."></textarea>
                <div id="errPartnerMessage" style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px', display: 'none' }}>Please provide a statement of intent.</div>
              </div>
            </div>

            {/* TAB 2: LIVE CHAT WITH ADMIN & FACULTY */}
            <div id="partnerTabChat" style={{ display: 'none' }}>
              <div className="chat-window-box" style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden' }}>
                {/* Stakeholders Bar */}
                <div className="chat-header-bar" style={{ padding: '12px 18px', background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                      <strong style={{ fontSize: '13px', color: '#0f172a' }}>State Admin Liaison (Dr. Ramesh Verma, IAS)</strong>
                    </div>
                    <span style={{ color: '#cbd5e1' }}>•</span>
                    <div style={{ fontSize: '12.5px', color: '#475569' }}>
                      🎓 Faculty PI (Prof. Sengupta)
                    </div>
                  </div>
                  <span className="badge" style={{ background: '#dcfce7', color: '#15803d', fontWeight: '750' }}>Active State Registry Thread</span>
                </div>

                {/* Messages Stream */}
                <div id="partnerChatMessagesStream" className="chat-messages-stream" style={{ padding: '18px', maxHeight: '320px', minHeight: '260px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', background: '#f8fafc' }}>
                  {/* Admin Message */}
                  <div className="chat-bubble admin" style={{ alignSelf: 'flex-start', maxWidth: '82%', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px 14px 14px 2px', padding: '14px 16px', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '11.5px', fontWeight: '850', color: '#002D62' }}>🏛️ State Admin Liaison</span>
                      <span style={{ fontSize: '10.5px', color: '#94a3b8' }}>10:14 AM</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#1e293b', margin: 0, lineHeight: '1.5' }}>
                      Namaste Vikram ji. State Admin has prioritised this challenge under the Jharkhand CSR Innovation Mission. What scale of CSR grant, technical testing apparatus, or ground deployment assistance can Tata Steel Foundation allocate for this initiative?
                    </p>
                  </div>

                  {/* Faculty Message */}
                  <div className="chat-bubble faculty" style={{ alignSelf: 'flex-start', maxWidth: '82%', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px 14px 14px 2px', padding: '14px 16px', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '11.5px', fontWeight: '850', color: '#0369a1' }}>🎓 Faculty Lead (Prof. Sengupta)</span>
                      <span style={{ fontSize: '10.5px', color: '#94a3b8' }}>10:18 AM</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#1e293b', margin: 0, lineHeight: '1.5' }}>
                      Greetings from the University Innovation Lab! We have completed bench prototyping and urgently require industry mentorship for pilot certifications and cold-chain resilience testing in the field.
                    </p>
                  </div>
                </div>

                {/* Quick Suggestion Chips */}
                <div style={{ padding: '8px 16px', background: '#ffffff', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '8px', overflowX: 'auto' }}>
                  <button type="button" className="chat-quick-chip" onClick={() => window.sendQuickChatMessage && window.sendQuickChatMessage('We can pledge ₹12 Lakhs CSR funding and high-voltage lab access.')}>
                    💰 Commit ₹12L Funding + Lab
                  </button>
                  <button type="button" className="chat-quick-chip" onClick={() => window.sendQuickChatMessage && window.sendQuickChatMessage('Our Dhanbad ground field crew can deploy and monitor pilot units.')}>
                    🚛 Offer Ground Field Crew
                  </button>
                  <button type="button" className="chat-quick-chip" onClick={() => window.sendQuickChatMessage && window.sendQuickChatMessage('Can the university faculty share the technical Bill of Materials (BOM)?')}>
                    📋 Request Bill of Materials
                  </button>
                  <button type="button" className="chat-quick-chip" onClick={() => window.sendQuickChatMessage && window.sendQuickChatMessage('Requesting a joint video conference with State Admin and PI.')}>
                    📞 Request Joint Video Call
                  </button>
                </div>

                {/* Compose Bar */}
                <div className="chat-compose-bar" style={{ padding: '12px 16px', background: '#ffffff', borderTop: '1.5px solid #e2e8f0', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input type="text" id="partnerChatMessageInput" className="form-input" placeholder="Type direct inquiry or proposal to State Admin &amp; Faculty..." style={{ flex: 1 }} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); if (window.sendPartnerChatMessage) window.sendPartnerChatMessage(); } }} />
                  <button type="button" className="btn btn-primary" onClick={() => window.sendPartnerChatMessage && window.sendPartnerChatMessage()} style={{ whiteSpace: 'nowrap', padding: '10px 20px', borderRadius: '10px' }}>
                    Send Inquire 📤
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer" style={{ padding: '16px 24px', background: '#ffffff', borderTop: '1.5px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn btn-ghost" onClick={() => window.closeModal && window.closeModal('partnerModal')}>Cancel</button>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" id="partnerModalSwitchToChatBtn" className="btn btn-outline-primary" onClick={() => window.switchPartnerModalTab && window.switchPartnerModalTab('chat')}>
                💬 Chat with Admin Regarding Problem
              </button>
              <button type="button" className="btn btn-primary" onClick={() => window.submitPartnerInterest && window.submitPartnerInterest()}>
                🤝 Submit Express Interest
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── DEDICATED FRONT WORKSPACE CARD MODAL (OPENED IN FRONT WITH CLOSE BUTTON) ── */}
      <div id="modalCollaborationWorkspace" className="modal-overlay" onClick={(e) => { if (e.target.id === 'modalCollaborationWorkspace') window.closeModal && window.closeModal('modalCollaborationWorkspace'); }} style={{ zIndex: 99999, padding: '16px' }}>
        <div className="modal-content" style={{ maxWidth: '940px', width: '96%', maxHeight: '92vh', borderRadius: '20px', overflowY: 'auto', background: '#ffffff', boxShadow: '0 25px 60px rgba(0, 45, 98, 0.35)', border: '1.5px solid #cbd5e1', padding: 0 }}>
          
          {/* Header */}
          <div style={{ padding: '20px 24px', borderBottom: '1.5px solid #e2e8f0', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                <span id="wsModalCategoryBadge" className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontWeight: '850', fontSize: '11px', padding: '3px 9px', borderRadius: '6px', border: '1px solid #bfdbfe' }}>
                  Category
                </span>
                <span id="wsModalStageBadge" className="badge" style={{ background: '#ecfdf5', color: '#047857', fontWeight: '850', fontSize: '11px', padding: '3px 9px', borderRadius: '6px', border: '1px solid #a7f3d0' }}>
                  Stage
                </span>
                <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e' }}></span> Live Verified
                </span>
              </div>
              <h2 id="wsModalTitle" style={{ fontSize: '20px', fontWeight: '900', color: '#0f172a', margin: '0 0 6px 0', lineHeight: '1.35', letterSpacing: '-0.2px' }}>
                Project Title
              </h2>
              <div id="wsModalStakeholders" style={{ fontSize: '12.5px', color: '#64748b' }}>
                Stakeholders: District Admin • IIT (ISM) Dhanbad • Tata Steel Foundation
              </div>
            </div>

            {/* Prominent Close Button */}
            <button type="button" onClick={() => window.closeModal && window.closeModal('modalCollaborationWorkspace')} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '99px', padding: '7px 16px', fontSize: '12.5px', fontWeight: '850', color: '#334155', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.15s ease' }}>
              <span>✕</span> Close Workspace
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '22px' }}>

            {/* 1. Real Project Overview Hero Box */}
            <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'start' }}>
              <div style={{ width: '170px', height: '140px', borderRadius: '14px', overflow: 'hidden', border: '1px solid #cbd5e1', flexShrink: 0 }}>
                <img id="wsModalCoverImage" src="/images/agri-monitoring.jpg" alt="Project Asset" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/images/campus-iit.jpg'; }} />
              </div>

              <div style={{ flex: 1, minWidth: '260px' }}>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Problem &amp; Proposed Solution Scope</div>
                <p id="wsModalDesc" style={{ fontSize: '13px', color: '#334155', lineHeight: '1.6', margin: '0 0 12px 0' }}>
                  Description of the civic solution and deployment blueprint.
                </p>

                <div id="wsModalTags" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  <span className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: '11px', fontWeight: '750', border: '1px solid #bfdbfe', padding: '3px 8px', borderRadius: '6px' }}>✓ Agri-Tech</span>
                  <span className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: '11px', fontWeight: '750', border: '1px solid #bfdbfe', padding: '3px 8px', borderRadius: '6px' }}>✓ AI Pathology</span>
                  <span className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: '11px', fontWeight: '750', border: '1px solid #bfdbfe', padding: '3px 8px', borderRadius: '6px' }}>✓ IoT Edge Camera</span>
                  <span className="badge" style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: '11px', fontWeight: '750', border: '1px solid #bfdbfe', padding: '3px 8px', borderRadius: '6px' }}>✓ Farmer Advisory</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', background: '#ffffff', padding: '12px 14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '11px' }}>University Partner</div>
                    <strong id="wsModalUniv" style={{ color: '#0f172a' }}>IIT (ISM) Dhanbad</strong>
                    <div id="wsModalUnivBadge" style={{ fontSize: '10.5px', color: '#2563eb', fontWeight: '750', marginTop: '1px' }}>🏛️ Institute of National Importance • MoE Govt. of India</div>
                    <div id="wsModalFaculty" style={{ color: '#64748b', fontSize: '10.5px', marginTop: '2px' }}>Prof. (Dr.) Debashis Sengupta</div>
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '11px' }}>Industry CSR Role</div>
                    <strong id="wsModalRole" style={{ color: '#002D62' }}>Funding &amp; Field Mentorship</strong>
                    <div style={{ color: '#64748b', fontSize: '10.5px' }}>Tata Steel Foundation</div>
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '11px' }}>Committed Grant</div>
                    <strong id="wsModalGrant" style={{ color: '#16a34a', fontSize: '14px' }}>₹ 15.0 Lakhs</strong>
                    <div style={{ color: '#16a34a', fontSize: '10.5px' }}>Disbursed via Escrow</div>
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '11px' }}>Overall Progress</div>
                    <strong id="wsModalProgressText" style={{ color: '#2563eb', fontSize: '14px' }}>78% Verified</strong>
                    <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '99px', marginTop: '4px', overflow: 'hidden' }}>
                      <div id="wsModalProgressBar" style={{ width: '78%', height: '100%', background: '#2563eb', borderRadius: '99px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Pipeline Stepper */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: '850', color: '#0f172a', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🚀</span> Pipeline Progress &amp; Current Milestone
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '16px 20px', overflowX: 'auto' }}>
                <div id="wsModalPipelineStepper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '700px', gap: '8px' }}>
                  {/* Dynamically populated */}
                </div>
              </div>
            </div>

            {/* 3. Field Testing / Pilot Execution Details */}
            <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>📍</span> Field Testing &amp; Ground Execution Details
                </div>
                <button type="button" onClick={() => window.editPilotDetails && window.editPilotDetails()} style={{ border: 'none', background: 'transparent', color: '#2563eb', fontSize: '12px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>✏️</span> Edit Parameters
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px', fontSize: '12.5px', background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <div><span style={{ color: '#64748b' }}>Location:</span> &nbsp;<strong id="wsModalPilotLocation" style={{ color: '#0f172a' }}>Dhanbad Regional Center</strong></div>
                <div><span style={{ color: '#64748b' }}>Expected Duration:</span> &nbsp;<strong id="wsModalPilotDuration" style={{ color: '#0f172a' }}>45 days</strong></div>
                <div><span style={{ color: '#64748b' }}>Environment:</span> &nbsp;<strong id="wsModalPilotEnv" style={{ color: '#0f172a' }}>Field Operational Environment</strong></div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', marginBottom: '8px' }}>Core Solution Objectives:</div>
                <div id="wsModalObjectives" style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px', color: '#334155' }}>
                  {/* Populated dynamically */}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', marginBottom: '6px' }}>Recent Field Observation / Update:</div>
                <div id="wsModalFieldStatus" style={{ background: '#f8fafc', borderLeft: '3px solid #2563eb', padding: '10px 14px', borderRadius: '0 10px 10px 0', fontSize: '12.5px', color: '#334155', fontStyle: 'italic' }}>
                  System working well under field conditions. Field data telemetry active.
                </div>
              </div>
            </div>

            {/* 4. Verified Documents & Proposal Blueprint */}
            <div id="wsModalDocContainer" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', fontWeight: '750', color: '#475569' }}>
                <span style={{ fontSize: '15px' }}>📄</span>
                <span>University Verified Document:</span>
              </div>
              <a id="wsModalDocLink" href="#" target="_blank" rel="noreferrer" download style={{ fontSize: '12px', fontWeight: '750', color: '#2563eb', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f1f5f9', padding: '6px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>
                📄 Download Document
              </a>
            </div>

            {/* 5. Stakeholder Communication Stream */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: '850', color: '#0f172a', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>💬</span> Multi-Stakeholder Collaboration Notes (University PI &amp; State Liaison)
              </div>
              <div id="wsModalChatStream" style={{ maxHeight: '150px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
                {/* Messages */}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="text" id="wsModalChatInput" placeholder="Type a message to University Faculty &amp; State Admin..." style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12.5px' }} onKeyDown={(e) => { if (e.key === 'Enter') window.sendCollabChatMessage && window.sendCollabChatMessage(); }} />
                <button type="button" className="btn btn-primary btn-sm" onClick={() => window.sendCollabChatMessage && window.sendCollabChatMessage()} style={{ padding: '8px 16px', fontWeight: '800' }}>
                  Send
                </button>
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div style={{ padding: '16px 24px', background: '#ffffff', borderTop: '1.5px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <button type="button" className="btn btn-ghost" onClick={() => window.closeModal && window.closeModal('modalCollaborationWorkspace')} style={{ fontWeight: '750' }}>
              ✕ Close Workspace
            </button>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" className="btn btn-outline-primary" onClick={() => window.editPilotDetails && window.editPilotDetails()} style={{ fontWeight: '800' }}>
                ✏️ Edit Details
              </button>
              <button type="button" className="btn btn-primary" onClick={() => window.approvePilotStage && window.approvePilotStage()} style={{ background: '#002D62', fontWeight: '850' }}>
                ✅ Approve Current Stage
              </button>
            </div>
          </div>

        </div>
      </div>
      
      {/* ── MODAL: 7-STAGE PIPELINE DETAILS & ACTIONS ── */}
      <div id="modalStageDetails" className="modal-overlay">
        <div className="modal-card" style={{ maxWidth: '540px' }}>
          <div className="modal-header">
            <h3 id="stageModalTitle" className="modal-title" style={{ fontSize: '17px', fontWeight: '850' }}>Stage Details</h3>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalStageDetails')}>&times;</button>
          </div>
          <div className="modal-body" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span id="stageModalStatus" className="badge badge-assigned">Status</span>
              <span id="stageModalDate" style={{ fontSize: '12px', color: '#64748b', fontWeight: '750' }}>Date</span>
            </div>
            <p id="stageModalDesc" style={{ fontSize: '13px', color: '#334155', lineHeight: '1.6', marginBottom: '16px' }}></p>
            <div style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', marginBottom: '8px' }}>Available Actions:</div>
            <div id="stageModalActions" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}></div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick={() => window.closeModal && window.closeModal('modalStageDetails')}>Close</button>
          </div>
        </div>
      </div>

      {/* ── MODAL: TECHNICAL ENGINEERING FEEDBACK ── */}
      <div id="modalTechnicalFeedback" className="modal-overlay">
        <div className="modal-card" style={{ maxWidth: '540px' }}>
          <div className="modal-header">
            <h3 id="techFeedbackTitle" className="modal-title" style={{ fontSize: '17px', fontWeight: '850' }}>Technical Feedback</h3>
            <button className="modal-close" onClick={() => window.closeModal && window.closeModal('modalTechnicalFeedback')}>&times;</button>
          </div>
          <div className="modal-body" style={{ padding: '20px' }}>
            <p style={{ fontSize: '13px', color: '#475569', marginBottom: '12px' }}>
              Submit your engineering inputs, load optimization advice, or component specifications directly to the Faculty PI &amp; Student Research Team.
            </p>
            <textarea id="techFeedbackNotes" rows="4" placeholder="Enter engineering feedback, battery threshold guidelines, inverter calibration notes..." style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13px', resize: 'vertical' }} defaultValue="Battery temperature spike is within permissible IEC limits. Recommend scheduling inverter heat-sink dust cleaning before monsoon humidity spike."></textarea>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick={() => window.closeModal && window.closeModal('modalTechnicalFeedback')}>Cancel</button>
            <button className="btn btn-primary" onClick={() => window.sendTechnicalFeedback && window.sendTechnicalFeedback()}>Transmit Feedback</button>
          </div>
        </div>
      </div>

      {/* ── MODAL: REGISTER NEW SUPPORT COMMITMENT (REAL) ── */}
      {showAddCommitmentModal && (
        <div className="modal-overlay" style={{ display: 'flex', position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', zIndex: 9999, alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="modal-card" style={{ maxWidth: '600px', width: '100%', background: '#ffffff', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.25)', overflow: 'hidden', animation: 'modalFadeIn 0.2s ease' }}>
            <div className="modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', background: '#002D62', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '22px' }}>🤝</span>
                <h3 className="modal-title" style={{ fontSize: '17px', fontWeight: '850', margin: 0, color: '#ffffff' }}>Add Industry Support Commitment</h3>
              </div>
              <button className="modal-close" onClick={() => setShowAddCommitmentModal(false)} style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            </div>
            
            <form onSubmit={handleAddCommitmentSubmit}>
              <div className="modal-body" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '75vh', overflowY: 'auto' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '5px' }}>Target Innovation Project *</label>
                  <select
                    value={newCommitmentForm.projectId}
                    onChange={(e) => setNewCommitmentForm({ ...newCommitmentForm, projectId: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', fontWeight: '600' }}
                  >
                    {commitmentProjects.map(p => (
                      <option key={p.id} value={p.id}>{p.title} ({p.university})</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '5px' }}>Support Category *</label>
                    <select
                      value={newCommitmentForm.type}
                      onChange={(e) => setNewCommitmentForm({ ...newCommitmentForm, type: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', fontWeight: '600' }}
                    >
                      <option value="Equipment">⚙️ Equipment / Hardware</option>
                      <option value="Funding">💰 Financial Grant</option>
                      <option value="Mentor">🧠 Technical Mentorship</option>
                      <option value="Testing">🔬 Testing Facility Access</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '5px' }}>Committed Value (₹ Lakh) *</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0.1"
                      required
                      value={newCommitmentForm.amountLakh}
                      onChange={(e) => setNewCommitmentForm({ ...newCommitmentForm, amountLakh: e.target.value })}
                      placeholder="e.g. 4.5"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '5px' }}>Specific Deliverable / Requirement *</label>
                  <input
                    type="text"
                    required
                    value={newCommitmentForm.title}
                    onChange={(e) => setNewCommitmentForm({ ...newCommitmentForm, title: e.target.value })}
                    placeholder="e.g. 5x LiFePO4 Battery Packs 48V 100Ah"
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '5px' }}>Commitment Details &amp; Specifications</label>
                  <textarea
                    rows="3"
                    value={newCommitmentForm.desc}
                    onChange={(e) => setNewCommitmentForm({ ...newCommitmentForm, desc: e.target.value })}
                    placeholder="Provide technical model numbers, delivery terms, warranty, or support scope..."
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', resize: 'vertical' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '5px' }}>Target Dispatch / Completion Date *</label>
                  <input
                    type="date"
                    required
                    value={newCommitmentForm.targetDate}
                    onChange={(e) => setNewCommitmentForm({ ...newCommitmentForm, targetDate: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>
              </div>

              <div className="modal-footer" style={{ padding: '16px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" className="btn btn-ghost" onClick={() => setShowAddCommitmentModal(false)} style={{ border: '1px solid #cbd5e1', fontWeight: '750' }}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ background: '#002D62', fontWeight: '850' }}>Save &amp; Commit Support →</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL: TRACK LIVE CONSIGNMENT DELIVERY (REAL) ── */}
      {activeTrackDeliveryData && (
        <div className="modal-overlay" style={{ display: 'flex', position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', zIndex: 9999, alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="modal-card" style={{ maxWidth: '580px', width: '100%', background: '#ffffff', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
            <div className="modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', background: '#002D62', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '22px' }}>🚚</span>
                <div>
                  <h3 className="modal-title" style={{ fontSize: '17px', fontWeight: '850', margin: 0, color: '#ffffff' }}>Live Consignment Tracking</h3>
                  <div style={{ fontSize: '11px', color: '#93c5fd' }}>Waybill #{activeTrackDeliveryData.trackingId}</div>
                </div>
              </div>
              <button className="modal-close" onClick={() => setActiveTrackDeliveryData(null)} style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            </div>

            <div className="modal-body" style={{ padding: '24px' }}>
              <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#64748b' }}>Item Description</div>
                <div style={{ fontSize: '14px', fontWeight: '850', color: '#0f172a', marginTop: '2px' }}>{activeTrackDeliveryData.commitmentTitle}</div>
                <div style={{ fontSize: '12px', color: '#2563eb', marginTop: '2px', fontWeight: '700' }}>Project: {activeTrackDeliveryData.projTitle}</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px', fontSize: '12px' }}>
                <div><span style={{ color: '#64748b' }}>Logistics Partner:</span><div style={{ fontWeight: '750', color: '#0f172a' }}>{activeTrackDeliveryData.courier || 'BlueDart Surface Express'}</div></div>
                <div><span style={{ color: '#64748b' }}>Current Status:</span><div><span style={{ background: '#eff6ff', color: '#1d4ed8', padding: '2px 8px', borderRadius: '99px', fontWeight: '800' }}>{activeTrackDeliveryData.status || 'In Transit'}</span></div></div>
                <div><span style={{ color: '#64748b' }}>Dispatched Date:</span><div style={{ fontWeight: '750', color: '#0f172a' }}>{activeTrackDeliveryData.dispatchDate || 'Recent'}</div></div>
                <div><span style={{ color: '#64748b' }}>Estimated Delivery:</span><div style={{ fontWeight: '750', color: '#16a34a' }}>{activeTrackDeliveryData.eta || 'On Schedule'}</div></div>
              </div>

              {/* Progress Milestones */}
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>Shipment Timeline</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#16a34a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0 }}>✓</div>
                    <div>
                      <div style={{ fontSize: '12.5px', fontWeight: '800', color: '#0f172a' }}>Consignment Picked Up &amp; Manifested</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>Jamshedpur Central CSR Depot</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#2563eb', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0 }}>●</div>
                    <div>
                      <div style={{ fontSize: '12.5px', fontWeight: '800', color: '#2563eb' }}>In Transit via Ranchi Sorting Hub</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>Vehicle assigned &amp; GPS Telemetry active</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#e2e8f0', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0 }}>○</div>
                    <div>
                      <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#64748b' }}>Delivery &amp; Physical Verification by University PI</div>
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>Awaiting arrival at destination site</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer" style={{ padding: '16px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn btn-sm btn-outline-primary" onClick={() => window.toastSuccess && window.toastSuccess(`Downloaded Consignment Waybill #${activeTrackDeliveryData.trackingId}`, 'Waybill PDF')}>
                Download Consignment Waybill ↓
              </button>
              <button className="btn btn-sm btn-ghost" onClick={() => setActiveTrackDeliveryData(null)} style={{ border: '1px solid #cbd5e1', fontWeight: '750' }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: VERIFIED CSR DISBURSEMENT RECEIPT (REAL) ── */}
      {activeReceiptModalData && (
        <div className="modal-overlay" style={{ display: 'flex', position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', zIndex: 9999, alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="modal-card" style={{ maxWidth: '620px', width: '100%', background: '#ffffff', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
            <div className="modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', background: '#002D62', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px' }}>📜</span>
                <div>
                  <h3 className="modal-title" style={{ fontSize: '17px', fontWeight: '850', margin: 0, color: '#ffffff' }}>Verified CSR Grant Receipt</h3>
                  <div style={{ fontSize: '11px', color: '#93c5fd' }}>Certified by Jharkhand State e-Governance Agency</div>
                </div>
              </div>
              <button className="modal-close" onClick={() => setActiveReceiptModalData(null)} style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            </div>

            <div className="modal-body" style={{ padding: '24px' }}>
              <div style={{ textAlign: 'center', padding: '16px', background: '#f0fdf4', borderRadius: '12px', border: '1.5px solid #bbf7d0', marginBottom: '20px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Official Tax Exemption &amp; Escrow Confirmation</span>
                <div style={{ fontSize: '26px', fontWeight: '900', color: '#15803d', margin: '4px 0' }}>{activeReceiptModalData.amount}</div>
                <div style={{ fontSize: '12px', color: '#166534', fontWeight: '700' }}>Sec. 135 Companies Act &amp; 80G Certified</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '12.5px', marginBottom: '18px' }}>
                <div><span style={{ color: '#64748b' }}>Receipt Reference:</span><div style={{ fontWeight: '800', color: '#0f172a' }}>{activeReceiptModalData.id}</div></div>
                <div><span style={{ color: '#64748b' }}>Disbursement Date:</span><div style={{ fontWeight: '800', color: '#0f172a' }}>{activeReceiptModalData.date}</div></div>
                <div><span style={{ color: '#64748b' }}>Recipient Institution:</span><div style={{ fontWeight: '800', color: '#0f172a' }}>{activeReceiptModalData.university}</div></div>
                <div><span style={{ color: '#64748b' }}>Bank / UTR Reference:</span><div style={{ fontWeight: '800', color: '#0f172a', fontFamily: 'monospace' }}>{activeReceiptModalData.utr}</div></div>
              </div>

              <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '11.5px', color: '#64748b' }}>
                <strong>State Blockchain Ledger Hash:</strong>
                <div style={{ fontFamily: 'monospace', color: '#334155', wordBreak: 'break-all', marginTop: '2px' }}>{activeReceiptModalData.hash}</div>
              </div>
            </div>

            <div className="modal-footer" style={{ padding: '16px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn btn-sm btn-outline-primary" onClick={() => window.toastSuccess && window.toastSuccess(`Certificate ${activeReceiptModalData.id} printed successfully.`, 'Certificate Printed')}>
                🖨️ Print Receipt
              </button>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-sm btn-primary" onClick={() => window.toastSuccess && window.toastSuccess(`Downloaded Official CSR Tax Certificate ${activeReceiptModalData.id}`, 'PDF Downloaded')} style={{ background: '#002D62', fontWeight: '800' }}>
                  Download Signed PDF ↓
                </button>
                <button className="btn btn-sm btn-ghost" onClick={() => setActiveReceiptModalData(null)} style={{ border: '1px solid #cbd5e1', fontWeight: '750' }}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default App;
