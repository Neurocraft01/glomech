'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { companyInfo } from '@/data/company';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our experts for your next fabrication project."
      />
      
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.contactInfo}
          >
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><MapPin /></div>
              <div className={styles.infoText}>
                <h4>Factory Location</h4>
                <p>{companyInfo.address.factory}</p>
                <a href="https://goo.gl/maps/PQ6J+PJP" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><Phone /></div>
              <div className={styles.infoText}>
                <h4>Direct Contact</h4>
                {companyInfo.contact.phones.map(p => <p key={p}>{p}</p>)}
                <p className={styles.manager}>{companyInfo.contact.manager}</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><Mail /></div>
              <div className={styles.infoText}>
                <h4>Email Inquiries</h4>
                <p>{companyInfo.contact.email}</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><Clock /></div>
              <div className={styles.infoText}>
                <h4>Business Hours</h4>
                <p>Available 24/7 for urgent industrial requirements.</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.formContainer}
          >
            <div className={styles.formHeader}>
              <MessageSquare className={styles.formIcon} />
              <h3>Send us a Message</h3>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label>First Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className={styles.group}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Your surname" />
                </div>
              </div>
              <div className={styles.group}>
                <label>Email Address</label>
                <input type="email" placeholder="email@company.com" />
              </div>
              <div className={styles.group}>
                <label>Subject</label>
                <select>
                  <option>Quotation Request</option>
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className={styles.group}>
                <label>Project Details</label>
                <textarea rows={5} placeholder="Describe your project requirements..."></textarea>
              </div>
              <button className="btn-accent" style={{ width: '100%', justifyContent: 'center', height: '56px' }}>
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
