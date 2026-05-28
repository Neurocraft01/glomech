'use client';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { companyInfo } from '@/data/company';
import styles from './Contact.module.css';

export default function Contact() {
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
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className={styles.formGroup}>
              <label>Project Type</label>
              <select>
                <option>Heavy Fabrication</option>
                <option>Industrial Shed</option>
                <option>Piping Works</option>
                <option>Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea placeholder="Tell us about your project requirements..." rows={4}></textarea>
            </div>
            <button type="submit" className="btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
