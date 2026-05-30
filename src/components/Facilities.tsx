'use client';
import { motion } from 'framer-motion';
import { companyInfo } from '@/data/company';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Facilities.module.css';

export default function Facilities() {
  return (
    <section id="facilities" className={styles.facilities}>
      <div className={styles.container}>
        {/* Content side */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="overline">Infrastructure</span>
          <h2 className={styles.headline}>40,000 sq.ft. of precision manufacturing</h2>
          <p className={styles.desc}>
            Our factory combines cutting-edge machinery with experienced craftsmen — enabling us to handle projects ranging from 5 kg components to 100+ ton structures.
          </p>

          <div className={styles.eqGrid}>
            {companyInfo.facilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={styles.eqItem}
              >
                <div className={styles.dot} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <div className={styles.areaCards}>
            {[
              { label: 'Total Area', val: '40,000 sq.ft.' },
              { label: 'Shaded Area', val: '15,000 sq.ft.' },
              { label: 'Crane Capacity', val: '13 M.T.' },
            ].map((c, i) => (
              <div key={i} className={styles.areaCard}>
                <span className={styles.areaVal}>{c.val}</span>
                <span className={styles.areaLabel}>{c.label}</span>
              </div>
            ))}
          </div>

          <Link href="/facilities" className="btn-primary">
            Full Facility Details <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Image side */}
        <motion.div
          className={styles.imageGrid}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.imgMain}>
            <Image src="/welding.png" alt="Welding Facility" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imgOverlay} />
          </div>
          <div className={styles.imgSub}>
            <Image src="/hydra_crane.jpeg" alt="Products" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imgOverlay} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
