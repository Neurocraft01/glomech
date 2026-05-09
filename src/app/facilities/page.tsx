'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { companyInfo } from '@/data/company';
import { Ruler, Shield, Zap, Hammer } from 'lucide-react';
import styles from './Facilities.module.css';

export default function FacilitiesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <PageHeader 
        title="Our Facilities" 
        subtitle="Modern infrastructure designed for precision and scale."
        image="/welding.png"
      />
      
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          {[
            { val: "40,000", label: "SQ. FT. TOTAL AREA" },
            { val: "15,000", label: "SQ. FT. SHADED AREA" },
            { val: "13 M.T.", label: "HYDRA CRANE CAPACITY" }
          ].map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.statBox}
            >
              <h2>{s.val}</h2>
              <p>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.equipment}>
        <div className="section-title">
          <span className="badge">Machinery</span>
          <h2>Advanced Equipment</h2>
        </div>
        <div className={styles.eqGrid}>
          {companyInfo.facilities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={styles.eqItem}
            >
              <div className={styles.dot}></div>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.quality}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.qText}
          >
            <span className="badge">Reliability</span>
            <h2>Quality Assurance</h2>
            <p>Our facility is equipped with specialized testing kits to ensure every product meets the highest standards.</p>
            <ul className={styles.qList}>
              <li><Shield size={18} /> Raw Material Inspection with Certifications</li>
              <li><Shield size={18} /> Ultrasonic Testing & Dimensional Inspections</li>
              <li><Shield size={18} /> Primer Coating & Adhesion Testing</li>
              <li><Shield size={18} /> Third-party Quality Assurance</li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.features}
          >
            <div className={styles.fCard}>
              <Ruler />
              <h4>Precision Testing</h4>
              <p>Equipped with DFT Meters and Paint testing kits for accurate measurements.</p>
            </div>
            <div className={styles.fCard}>
              <Zap />
              <h4>24/7 Operations</h4>
              <p>Capable of round-the-clock manufacturing for critical projects.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
