import { useEffect, useState } from 'react';
import Header from './Components/Header';
import './App.css'
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import DepartmentList from './Components/DepartmentList';
import Cta from './Components/Cta';
import Footer from './Components/Footer';
import Booking from './Components/Booking';
import './Components/Booking.css';

function App() {

  const departments = [
    { id: "radiology", name: "Radiology Department", icon: "🩻", color: "#0d7c7b", colorPale: "#e6f7f7", tagline: "Advanced Diagnostic Imaging", hero: "linear-gradient(135deg, #085f5e 0%, #0d7c7b 60%, #12a8a6 100%)", description: "Our state-of-the-art Radiology Department offers cutting-edge diagnostic imaging services using the latest technology to provide accurate, timely diagnoses.", services: ["Digital X-Ray Imaging", "MRI Scanning (1.5T & 3T)", "CT Scan (64-slice)", "Ultrasound & Doppler Studies", "Fluoroscopy", "Mammography", "Bone Density Scanning (DEXA)", "Interventional Radiology"], stats: [{ label: "Scans/Day", value: "200+" }, { label: "Radiologists", value: "8" }, { label: "Machines", value: "15" }], image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80" },
    { id: "surgical", name: "Surgical Ward", icon: "🏥", color: "#1e40af", colorPale: "#eff6ff", tagline: "Expert Surgical Care", hero: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 60%, #3b82f6 100%)", description: "Our Surgical Ward is staffed by highly skilled surgeons and nurses providing comprehensive pre-operative, intra-operative, and post-operative care.", services: ["General Surgery", "Laparoscopic (Minimally Invasive) Surgery", "Orthopaedic Surgery", "Vascular Surgery", "Neurosurgery", "Plastic & Reconstructive Surgery", "Pre & Post-Op Nursing Care", "Surgical ICU"], stats: [{ label: "Surgeries/Month", value: "300+" }, { label: "Surgeons", value: "20" }, { label: "Beds", value: "60" }], image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80" },
    { id: "theatre", name: "Theatre Department", icon: "⚕️", color: "#6d28d9", colorPale: "#f5f3ff", tagline: "Precision in Every Procedure", hero: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 60%, #8b5cf6 100%)", description: "Our Operating Theatres are equipped with world-class surgical technology, maintaining the highest standards of sterility and patient safety.", services: ["Major Operating Theatres (×6)", "Minor Procedure Rooms (×4)", "Anaesthesia Services", "Cardiac Surgery Theatre", "Neuro-surgery Suite", "Orthopaedic Theatre", "Emergency Theatre (24/7)", "Recovery & PACU Unit"], stats: [{ label: "Theatres", value: "10" }, { label: "Anaesthetists", value: "12" }, { label: "Procedures/Week", value: "150+" }], image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80" },
    { id: "opd", name: "OPD", icon: "🩺", color: "#047857", colorPale: "#ecfdf5", tagline: "Outpatient Care, Redefined", hero: "linear-gradient(135deg, #064e3b 0%, #047857 60%, #10b981 100%)", description: "Our Outpatient Department (OPD) is your first point of contact for non-emergency medical care. We offer expert consultations across all specialties.", services: ["General Medical Consultations", "Specialist Outpatient Clinics", "Wound Dressing & Minor Procedures", "Health Screening & Check-ups", "Chronic Disease Management", "Vaccination & Immunization", "Physiotherapy", "Dietetics & Nutrition Counselling"], stats: [{ label: "Patients/Day", value: "500+" }, { label: "Consultants", value: "35" }, { label: "Specialties", value: "20" }], image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?w=800&q=80" },
    { id: "pharmacy", name: "Pharmacy", icon: "💊", color: "#b45309", colorPale: "#fffbeb", tagline: "Medicines You Can Trust", hero: "linear-gradient(135deg, #92400e 0%, #b45309 60%, #f59e0b 100%)", description: "Our Pharmacy stocks a comprehensive range of medications and health products, staffed by registered pharmacists committed to patient safety and counselling.", services: ["Prescription Dispensing", "Over-the-Counter Medications", "Pharmaceutical Counselling", "Drug Interaction Checking", "Compounding Services", "Chronic Medication Management", "IV Admixture Services", "Home Medication Delivery"], stats: [{ label: "Medications Stocked", value: "5000+" }, { label: "Pharmacists", value: "10" }, { label: "Daily Prescriptions", value: "800+" }], image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80" },
    { id: "pediatrics", name: "Pediatrics", icon: "👶", color: "#be185d", colorPale: "#fdf2f8", tagline: "Caring for Little Lives", hero: "linear-gradient(135deg, #9d174d 0%, #be185d 60%, #ec4899 100%)", description: "Our Pediatrics Department provides specialised medical care for children from newborns to adolescents, in a child-friendly and comforting environment.", services: ["Newborn & Neonatal Care", "Child Growth & Development Monitoring", "Pediatric Immunizations", "Pediatric Surgery", "Child Nutrition Counselling", "Pediatric Emergency Care", "Adolescent Health Services", "Developmental Pediatrics"], stats: [{ label: "Young Patients/Month", value: "1200+" }, { label: "Pediatricians", value: "15" }, { label: "Beds", value: "40" }], image: "https://images.unsplash.com/photo-1597764690523-8de1c3def97e?w=800&q=80" },
    { id: "maternity", name: "Maternity Ward", icon: "🤰", color: "#c2185b", colorPale: "#fce4ec", tagline: "Safe Births, Happy Families", hero: "linear-gradient(135deg, #880e4f 0%, #c2185b 60%, #e91e63 100%)", description: "Our Maternity Ward offers compassionate care through labour, delivery, and postnatal recovery in a safe, supportive, and welcoming environment.", services: ["Labour & Delivery Suite", "Normal Vaginal Delivery", "Caesarean Section", "Epidural & Pain Management", "Postnatal Nursing Care", "Breastfeeding Support & Lactation", "Newborn Resuscitation", "Kangaroo Mother Care"], stats: [{ label: "Births/Month", value: "200+" }, { label: "Midwives", value: "30" }, { label: "Delivery Suites", value: "12" }], image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80" },
    { id: "antenatal", name: "Antenatal Clinic", icon: "🫀", color: "#9c27b0", colorPale: "#f3e5f5", tagline: "Nurturing Life Before Birth", hero: "linear-gradient(135deg, #6a1b9a 0%, #9c27b0 60%, #ce93d8 100%)", description: "Our Antenatal Clinic provides comprehensive prenatal care, monitoring the health of mother and baby throughout every stage of pregnancy.", services: ["Routine Antenatal Visits", "Obstetric Ultrasound Scans", "High-Risk Pregnancy Management", "Gestational Diabetes Screening", "Hypertension in Pregnancy", "Foetal Monitoring (CTG)", "Antenatal Classes & Education", "Nutritional Counselling for Mothers"], stats: [{ label: "Mothers Registered/Month", value: "400+" }, { label: "Obstetricians", value: "10" }, { label: "Scans/Week", value: "300+" }], image: "https://images.unsplash.com/photo-1632053002928-1919051a2d81?w=800&q=80" },
    { id: "adult-medical", name: "Adult Medical Ward", icon: "🏨", color: "#0369a1", colorPale: "#e0f2fe", tagline: "Comprehensive Inpatient Medicine", hero: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 60%, #0ea5e9 100%)", description: "Our Adult Medical Ward provides high-quality inpatient care for adults with a wide range of medical conditions requiring hospitalisation and monitoring.", services: ["General Internal Medicine", "Cardiology Care", "Respiratory Medicine", "Neurology", "Gastroenterology", "Nephrology (Kidney Care)", "Infectious Disease Management", "Diabetes & Endocrine Disorders"], stats: [{ label: "Beds", value: "120" }, { label: "Physicians", value: "25" }, { label: "Avg. Stay (Days)", value: "4.2" }], image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80" },
    { id: "administrative", name: "Administrative Dept.", icon: "🏛️", color: "#374151", colorPale: "#f9fafb", tagline: "Seamless Healthcare Administration", hero: "linear-gradient(135deg, #111827 0%, #374151 60%, #6b7280 100%)", description: "Our Administrative Department ensures smooth hospital operations, patient registration, records management, billing, and overall institutional governance.", services: ["Patient Registration & Admission", "Medical Records Management", "Health Insurance & NHIS Processing", "Billing & Accounts", "HR & Staff Management", "Hospital Card Issuance", "Complaints & Patient Relations", "Quality Assurance & Compliance"], stats: [{ label: "Staff", value: "60+" }, { label: "Records Managed", value: "50,000+" }, { label: "Daily Registrations", value: "100+" }], image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  ];
  const [display, setDisplay] = useState(false);
  const [department, setDepartment] = useState("");

  const C = {
    bg: "#f7fafc",
    bgAlt: "#edf2f7",
    bgCard: "#ffffff",
    bgSection: "#f0f7f7",
    teal: "#0d7c7b",
    tealLight: "#12a8a6",
    tealPale: "#e6f7f7",
    tealDark: "#085f5e",
    navy: "#0f2942",
    navyLight: "#1a3a5c",
    gold: "#b7791f",
    goldLight: "#d4a017",
    goldPale: "#fef9ee",
    text: "#1a202c",
    textSub: "#4a5568",
    textMuted: "#718096",
    border: "#e2e8f0",
    borderDark: "#cbd5e0",
    white: "#ffffff",
    red: "#e53e3e",
    green: "#38a169",
    shadow: "rgba(15,41,66,0.08)",
    shadowMd: "rgba(15,41,66,0.12)",
    shadowLg: "rgba(15,41,66,0.18)",
  };

  function closeModal() {
    setDisplay(false);
  }
  function openModal() {
    setDisplay(true);
  }
  function chooseDepartment(dep) {
    setDepartment(dep)
  };


  return (
    <>
      <Header openModal={openModal} display={display} />
      {display && <Booking closeModal={closeModal} display={display} chooseDepartment={chooseDepartment} department={department} />}
      <HeroSection openModal={openModal} display={display} />
      <Services C={C} />
      <DepartmentList C={C} departments={departments} />
      <Cta C={C} />
      <Footer C={C} departments={departments} />
    </>
  )
}

export default App;
