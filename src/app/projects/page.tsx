'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { companyInfo } from '@/data/company';
import { ExternalLink, CheckCircle2, Trophy } from 'lucide-react';
import styles from './Projects.module.css';

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Our Projects" 
        subtitle="A track record of excellence in delivering complex industrial structures."
      />
      
      <section className={styles.projectList}>
        <div className="section-title">
          <span className="badge">Track Record</span>
          <h2>Major Project Deliveries</h2>
        </div>
        <div className={styles.grid}>
          {companyInfo.projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.projectCard}
            >
              <div className={styles.cardHeader}>
                <Trophy className={styles.icon} />
                <span className={styles.tag}>Successful Completion</span>
              </div>
              <h3>{project}</h3>
              <p>Delivered with precision and met all critical inspection standards including NDT and specialized painting.</p>
              <div className={styles.footer}>
                <span className={styles.status}><CheckCircle2 size={16} /> Verified Quality</span>
                <ExternalLink size={18} className={styles.linkIcon} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.milestones}>
        <div className={styles.milestoneGrid}>
          {companyInfo.milestones.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.milestoneCard}
            >
              <span className={styles.year}>{item.year}</span>
              <h4>{item.production} Delivered</h4>
              <p>{item.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
