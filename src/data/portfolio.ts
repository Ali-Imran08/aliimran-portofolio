export type Project = {
  number: string;
  title: string;
  role: string;
  problem: string;
  problemEn: string;
  solution: string;
  solutionEn: string;
  outcome: string;
  outcomeEn: string;
  stack: string[];
  github: string;
  demo?: string;
  tone: string;
};

export const projects: Project[] = [
  {
    number: "01", title: "Seroeni Restaurant System", role: "Full-stack Developer",
    problem: "Alur pemesanan manual dan absensi karyawan yang belum terintegrasi sering menyebabkan keterlambatan rekap operasional restoran.",
    problemEn: "Manual ordering and disconnected employee attendance often delayed restaurant operations reporting.",
    solution: "Aplikasi manajemen restoran Laravel dengan Repository Pattern, pemesanan QR code, clock-in karyawan, kalkulasi gaji otomatis, dan dashboard kasir.",
    solutionEn: "A Laravel restaurant management app with the Repository Pattern, QR ordering, employee clock-ins, automated payroll calculation, and a cashier dashboard.",
    outcome: "Efisiensi alur pemesanan meja dan transparansi perhitungan jam kerja karyawan.",
    outcomeEn: "A more efficient table-ordering flow and clearer employee work-hour calculations.",
    stack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"], github: "https://github.com/username/seroeni-restaurant", demo: "https://demo.seroeni.com", tone: "restaurant",
  },
  {
    number: "02", title: "e-Surat Warga Portal", role: "Web Developer",
    problem: "Proses pengajuan surat administratif di tingkat warga masih memerlukan kehadiran fisik dan pembuatan dokumen manual yang memakan waktu.",
    problemEn: "Resident administrative letter requests still required in-person visits and time-consuming manual document creation.",
    solution: "Portal administrasi surat warga dengan Fonnte WhatsApp API, notifikasi status real-time, penjadwalan otomatis, dan pembuatan PDF dokumen resmi.",
    solutionEn: "A resident-letter administration portal with the Fonnte WhatsApp API, real-time status notifications, automated scheduling, and official PDF generation.",
    outcome: "Waktu pemrosesan dokumen warga menjadi lebih cepat dan terkoordinasi secara digital.",
    outcomeEn: "Faster document processing with better digital coordination for residents.",
    stack: ["Laravel", "Fonnte API", "DomPDF", "Tailwind CSS"], github: "https://github.com/username/e-surat-warga", tone: "civic",
  },
  {
    number: "03", title: "Interactive Developer Portfolio", role: "Frontend Developer & Designer",
    problem: "Portofolio web generik sering kali terasa kaku dan tidak mempresentasikan identitas teknis secara autentik.",
    problemEn: "Generic web portfolios often feel rigid and do not authentically present a developer's technical identity.",
    solution: "Portofolio dark editorial menggunakan Vue 3, Tailwind CSS, dan motion interaktif untuk menyajikan karya secara sinematik.",
    solutionEn: "A dark editorial portfolio using Vue 3, Tailwind CSS, and interactive motion to present work cinematically.",
    outcome: "Pengalaman penjelajahan yang cepat, responsif, dan bernilai estetika tinggi.",
    outcomeEn: "A fast, responsive, and visually considered browsing experience.",
    stack: ["Vue.js 3", "Tailwind CSS", "GSAP / Framer Motion"], github: "https://github.com/username/portfolio", demo: "https://aliimran.dev", tone: "portfolio",
  },
];

export const techStack = [
  { name: "PHP", icon: "php" },
  { name: "Laravel", icon: "laravel" },
  { name: "Vue.js", icon: "vuedotjs" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "MySQL", icon: "mysql" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Pop!_OS", icon: "popos" },
  { name: "Neovim", icon: "neovim" },
  { name: "Git", icon: "git" },
];
