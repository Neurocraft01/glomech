'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Clock } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    num: '01',
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Precision Engineering",
    description: "State-of-the-art machinery ensuring every cut and weld meets exact specifications with zero tolerance for error."
  },
  {
    num: '02',
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: "On-Time Delivery",
    description: "Optimized production workflows and project tracking to deliver your structures when you need them."
  },
  {
    num: '03',
    icon: <Award size={28} strokeWidth={1.5} />,
    title: "Certified Quality",
    description: "Rigorous NDT testing, third-party inspections, and quality standards that meet domestic and export requirements."
  },
  {
    num: '04',
    icon: <Clock size={28} strokeWidth={1.5} />,
    title: "24/7 Operations",
    description: "Round-the-clock manufacturing capability to handle high-volume structural projects without delay."
  }
];

export default function Features() {
  return (
    <section className={styles.wrapper}>
      {/* Left side: label + headline */}
      <div className={styles.header}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="overline">Why Glomech</span>
          <h2 className={styles.title}>Built on a foundation of engineering excellence</h2>
          <p className={styles.desc}>
            Every project we deliver reflects our commitment to quality, safety, and customer satisfaction.
          </p>
          <a href="/about" className={`btn-primary ${styles.cta}`}>
            Learn More About Us
          </a>
        </motion.div>
      </div>

      {/* Right side: feature list */}
      <div className={styles.list}>
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={styles.item}
          >
            <div className={styles.numCol}>
              <span className={styles.num}>{f.num}</span>
              {i < features.length - 1 && <div className={styles.connector} />}
            </div>
            <div className={styles.itemBody}>
              <div className={styles.iconWrap}>{f.icon}</div>
              <div>
                <h3 className={styles.itemTitle}>{f.title}</h3>
                <p className={styles.itemDesc}>{f.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
