'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { companyInfo } from '@/data/company';
import { CheckCircle, Settings, Layers, Box } from 'lucide-react';
import styles from './Products.module.css';

export default function ProductsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <PageHeader 
        title="Products & Services" 
        subtitle="Comprehensive fabrication solutions for diverse industrial needs."
        image="/products.png"
      />
      
      <section className={styles.productGrid}>
        <div className="section-title">
          <span className="badge">Our Portfolio</span>
          <h2>Heavy Industrial Products</h2>
        </div>
        <div className={styles.grid}>
          {companyInfo.products.map((product, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={styles.productCard}
            >
              <Box className={styles.icon} />
              <h3>{product}</h3>
              <p>Precision-engineered to meet specific project requirements and international standards.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.serviceText}
          >
            <span className="badge">Added Value</span>
            <h2>Manufacturing Services</h2>
            <p>Beyond fabrication, we provide end-to-end services to ensure your projects are ready for installation.</p>
            <div className={styles.serviceList}>
              {companyInfo.services.map((service, i) => (
                <div key={i} className={styles.serviceItem}>
                  <CheckCircle size={20} className={styles.check} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.capabilities}
          >
            <div className={styles.capCard}>
              <Settings />
              <h4>Custom Manufacturing</h4>
              <p>Manufacturing as per drawings and specific client requirements.</p>
            </div>
            <div className={styles.capCard}>
              <Layers />
              <h4>Surface Treatment</h4>
              <p>Blasting, Painting, Galvanizing, and Powder Coating services.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
