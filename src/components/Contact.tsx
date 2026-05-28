'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { companyInfo } from '@/data/company';
import styles from './Contact.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Heavy Fabrication', message: '' });
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
      setForm({ name: '', email: '', subject: 'Heavy Fabrication', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className="badge">Contact Us</span>
          <h2>Get in Touch</h2>
          <p className={styles.lead}>Ready to start your next industrial project? Reach out to our experts today.</p>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <div className={styles.icon}><MapPin size={20} /></div>
              <div>
                <h4>Factory Address</h4>
                <p>{companyInfo.address.factory}</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.icon}><Phone size={20} /></div>
              <div>
                <h4>Call Us</h4>
                {companyInfo.contact.phones.map(p => <p key={p}>{p}</p>)}
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.icon}><Mail size={20} /></div>
              <div>
                <h4>Email Us</h4>
                <p>{companyInfo.contact.email}</p>
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.icon}><Clock size={20} /></div>
              <div>
                <h4>Working Hours</h4>
                <p>Open 24 Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formWrapper}>
          {status === 'success' ? (
            <div className={styles.successBox}>
              <CheckCircle size={48} className={styles.successIcon} />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We&apos;ve sent a confirmation to your email and will get back to you within 24 hours.</p>
              <button className="btn-accent" onClick={() => setStatus('idle')}>Send Another</button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="cs-name">Full Name</label>
                <input id="cs-name" name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cs-email">Email Address</label>
                <input id="cs-email" name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cs-subject">Project Type</label>
                <select id="cs-subject" name="subject" value={form.subject} onChange={handleChange}>
                  <option>Heavy Fabrication</option>
                  <option>Industrial Shed</option>
                  <option>Piping Works</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cs-message">Message</label>
                <textarea id="cs-message" name="message" placeholder="Tell us about your project requirements..." rows={4} value={form.message} onChange={handleChange} required />
              </div>

              {status === 'error' && (
                <div className={styles.errorBox}>
                  <AlertCircle size={16} /> {errorMsg}
                </div>
              )}

              <button type="submit" className="btn-accent" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'loading'}>
                {status === 'loading' ? <><Loader size={18} className={styles.spin} /> Sending…</> : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
