'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { companyInfo } from '@/data/company';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import styles from './Contact.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Quotation Request', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }
      setStatus('success');
      setForm({ name: '', email: '', subject: 'Quotation Request', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

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
                <p>info@glomech.in</p>
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
            {status === 'success' ? (
              <div className={styles.successBox}>
                <CheckCircle size={52} className={styles.successIcon} />
                <h3>Message Sent!</h3>
                <p>
                  Thank you for your enquiry. We&apos;ve sent a confirmation to <strong>{form.email || 'your email'}</strong> and
                  our team will respond within 24 business hours.
                </p>
                <button className="btn-accent" onClick={() => setStatus('idle')}>Send Another Message</button>
              </div>
            ) : (
              <>
                <div className={styles.formHeader}>
                  <MessageSquare className={styles.formIcon} />
                  <h3>Send us a Message</h3>
                  <p>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label htmlFor="cp-name">Full Name</label>
                      <input id="cp-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className={styles.group}>
                      <label htmlFor="cp-email">Email Address</label>
                      <input id="cp-email" name="email" type="email" placeholder="email@company.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="cp-subject">Subject</label>
                    <select id="cp-subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option>Quotation Request</option>
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                      <option>Careers</option>
                    </select>
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="cp-message">Project Details</label>
                    <textarea id="cp-message" name="message" rows={5} placeholder="Describe your project requirements..." value={form.message} onChange={handleChange} required />
                  </div>

                  {status === 'error' && (
                    <div className={styles.errorBox}>
                      <AlertCircle size={16} /> {errorMsg}
                    </div>
                  )}

                  <button type="submit" className="btn-accent" style={{ width: '100%', justifyContent: 'center', height: '56px' }} disabled={status === 'loading'}>
                    {status === 'loading'
                      ? <><Loader size={18} className={styles.spin} /> Sending…</>
                      : <>Submit Request <Send size={16} /></>
                    }
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
