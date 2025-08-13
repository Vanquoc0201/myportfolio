'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/custom/SectionHeading';
import ContactForm from '@/components/custom/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react'; 
import { contactInfo } from '@/lib/data'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-16"
    >
      <SectionHeading title="Contact Me" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div variants={itemVariants} className="bg-card text-card-foreground p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I'm always open to new opportunities.
          </p>

          <div className="space-y-4">
            {contactInfo.email && (
              <div className="flex items-center text-foreground">
                <Mail className="h-6 w-6 mr-3 text-primary" />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>
              </div>
            )}
            {contactInfo.phone && (
              <div className="flex items-center text-foreground">
                <Phone className="h-6 w-6 mr-3 text-primary" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:underline">{contactInfo.phone}</a>
              </div>
            )}
            {contactInfo.location && (
              <div className="flex items-center text-foreground">
                <MapPin className="h-6 w-6 mr-3 text-primary" />
                <span>{contactInfo.location}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6 text-primary text-center lg:text-left">Send a Message</h2>
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
}