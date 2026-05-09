'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { companyInfo } from '@/data/company';
import { Target, Eye, Users, Award } from 'lucide-react';
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <PageHeader 
        title="About Us" 
        subtitle="Leading the way in heavy structural fabrication since 2022."
      />
      
      <section className={styles.intro}>
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.text}
          >
            <span className="badge">Who We Are</span>
            <h2>Excellence in Engineering</h2>
            <p>{companyInfo.about}</p>
            <p>We take pride in being a reliable partner for industrial and infrastructure fabrication needs, backed by years of experience and a commitment to excellence.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.missionVision}
          >
            <div className={styles.card}>
              <Target className={styles.icon} />
              <h3>Our Mission</h3>
              <p>{companyInfo.mission}</p>
            </div>
            <div className={styles.card}>
              <Eye className={styles.icon} />
              <h3>Our Vision</h3>
              <p>{companyInfo.vision}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="section-title">
          <span className="badge">Our Team</span>
          <h2>The People Behind Glomech</h2>
        </div>
        <div className={styles.teamGrid}>
          {[
            { icon: <Users />, title: "Expert Management", desc: "Experienced leadership proficient in all aspects of fabrication and project management." },
            { icon: <Award />, title: "Certified Welders", desc: "High-quality welders and skilled fitters ensuring precision in every joint." }
          ].map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={styles.teamItem}
            >
              <div className={styles.iconWrapper}>{member.icon}</div>
              <h4>{member.title}</h4>
              <p>{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
