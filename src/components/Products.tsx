'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/data/company';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Products.module.css';

// Products ticker for the marquee strip
const allItems = [...companyInfo.products, ...companyInfo.services];

export default function Products() {
  return (
    <div className={styles.wrapper}>
      {/* ── Marquee ticker ── */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeFade} />
        <div className={styles.marqueeTrack}>
          {[...allItems, ...allItems].map((item, i) => (
            <span key={i} className={styles.marqueePill}>
              <span className={styles.marqueeDot} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main split layout ── */}
      <section id="products" className={styles.inner}>
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={styles.imageCol}
        >
          <div className={styles.imageCard}>
            <Image src="/productcover.jpeg" alt="Industrial Products" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageOverlay} />
            <div className={styles.floatBadge}>
              <span className={styles.floatNum}>960 MT</span>
              <span className={styles.floatLabel}>Annual Production</span>
            </div>
          </div>
          {/* second mini card */}
          <div className={styles.imageCardSmall}>
            <Image src="/welding.png" alt="Welding" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageOverlay} />
          </div>
        </motion.div>

        {/* Content side */}
        <div className={styles.contentCol}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="overline">Our Portfolio</span>
            <h2 className={styles.headline}>
              Steel solutions for every industrial challenge
            </h2>
            <p className={styles.desc}>
              From light structural components to heavy prefabricated industrial sheds —
              we manufacture to your exact drawings and specifications.
            </p>
          </motion.div>

          {/* Product grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={styles.productGrid}
          >
            {companyInfo.products.map((p, i) => (
              <div key={i} className={styles.productChip}>
                <CheckCircle2 size={15} className={styles.chipIcon} />
                {p}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/products" className="btn-accent">
              Explore All Products <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
