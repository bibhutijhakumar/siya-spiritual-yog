import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { CONTACT_INFO, PRACTICE_TIMINGS } from './constants';
import ContactSection from './ContactSection';
import Footer from '../Footer';
const icons = {
  MapPin: MapPin,
  Phone: Phone,
  Mail: Mail,
  Instagram: Instagram,
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-white"> 
      <ContactSection />
      <Footer />
    </div>
  );
}
