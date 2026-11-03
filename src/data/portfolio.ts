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
  summary: string;
  summaryEn: string;
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
    summary: "Sistem manajemen restoran terintegrasi untuk pesanan QR, absensi, dan kalkulasi gaji otomatis.",
    summaryEn: "An integrated restaurant-management system for QR ordering, attendance, and automated payroll.",
    stack: ["Laravel", "Repository Pattern", "Vue.js"], github: "https://github.com/username/seroeni-restaurant", demo: "https://demo.seroeni.com", tone: "restaurant",
  },
  {
    number: "02", title: "e-Surat Warga Portal", role: "Web Developer",
    problem: "Proses pengajuan surat administratif di tingkat warga masih memerlukan kehadiran fisik dan pembuatan dokumen manual yang memakan waktu.",
    problemEn: "Resident administrative letter requests still required in-person visits and time-consuming manual document creation.",
    solution: "Portal administrasi surat warga dengan Fonnte WhatsApp API, notifikasi status real-time, penjadwalan otomatis, dan pembuatan PDF dokumen resmi.",
    solutionEn: "A resident-letter administration portal with the Fonnte WhatsApp API, real-time status notifications, automated scheduling, and official PDF generation.",
    outcome: "Waktu pemrosesan dokumen warga menjadi lebih cepat dan terkoordinasi secara digital.",
    outcomeEn: "Faster document processing with better digital coordination for residents.",
    summary: "Portal administrasi warga dengan notifikasi WhatsApp, surat PDF, dan manajemen dokumen.",
    summaryEn: "A resident administration portal with WhatsApp notifications, PDF letters, and document management.",
    stack: ["Laravel", "Fonnte API", "Tailwind"], github: "https://github.com/username/e-surat-warga", tone: "civic",
  },
  {
    number: "03", title: "Interactive Developer Portfolio", role: "Frontend Developer & Designer",
    problem: "Portofolio web generik sering kali terasa kaku dan tidak mempresentasikan identitas teknis secara autentik.",
    problemEn: "Generic web portfolios often feel rigid and do not authentically present a developer's technical identity.",
    solution: "Portofolio dark editorial menggunakan Vue 3, Tailwind CSS, dan motion interaktif untuk menyajikan karya secara sinematik.",
    solutionEn: "A dark editorial portfolio using Vue 3, Tailwind CSS, and interactive motion to present work cinematically.",
    outcome: "Pengalaman penjelajahan yang cepat, responsif, dan bernilai estetika tinggi.",
    outcomeEn: "A fast, responsive, and visually considered browsing experience.",
    summary: "Portofolio dark editorial dengan gerak halus, layout responsif, dan penekanan pada karya.",
    summaryEn: "A dark editorial portfolio with restrained motion, responsive layouts, and work-first presentation.",
    stack: ["Vue.js 3", "Tailwind CSS", "GSAP"], github: "https://github.com/username/portfolio", demo: "https://aliimran.dev", tone: "portfolio",
  },
  {
    number: "04", title: "Gesture Blur (Foto-Kita-Blur)", role: "Computer Vision Developer",
    problem: "Penerapan efek visual real-time melalui kontrol gestur tangan membutuhkan deteksi yang responsif dan stabil.",
    problemEn: "Real-time visual effects controlled by hand gestures require responsive and stable detection.",
    solution: "Aplikasi pemrosesan citra yang mendeteksi gestur tangan lalu menerapkan filter blur secara langsung.",
    solutionEn: "An image-processing app that detects hand gestures and applies a blur filter in real time.",
    outcome: "Interaksi tanpa sentuh yang ringan untuk eksplorasi pemrosesan citra berbasis kamera.",
    outcomeEn: "A lightweight touchless interaction for exploring camera-based image processing.",
    summary: "Aplikasi pemrosesan citra real-time untuk mendeteksi gestur tangan dan menerapkan efek blur otomatis.",
    summaryEn: "A real-time image-processing app for hand-gesture detection and automatic blur effects.",
    stack: ["Python", "OpenCV", "MediaPipe"], github: "https://github.com/username/foto-kita-blur", tone: "vision",
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
