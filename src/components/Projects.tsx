'use client';
import { motion } from 'framer-motion';
import { companyInfo } from '@/data/company';
import { Briefcase } from 'lucide-react';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className="section-title">
        <span className="badge">Portfolio</span>
        <h2>Major Projects</h2>
        <p>Trusted by industry leaders for critical infrastructure and mechanical projects.</p>
      </div>

      <div className={styles.grid}>
        {companyInfo.projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={styles.card}
          >
            <div className={styles.iconWrapper}>
              <Briefcase size={24} />
            </div>
            <h3>{project}</h3>
            <div className={styles.tag}>Completed</div>
          </motion.div>
        ))}
      </div>

      <div className={styles.assurance}>
        <div className={styles.assuranceContent}>
          <h3>Quality Assurance</h3>
          <p>We adhere to strict quality standards including Ultrasonic Testing, Dimensional Inspections, and specialized painting processes. Third-party inspections are welcomed for all projects.</p>
        </div>
      </div>
    </section>
  );
}
