'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { companyInfo } from '@/data/company';
import { Target, Eye, Quote } from 'lucide-react';
import styles from './About.module.css';

const directors = [
  {
    name: "Nilesh Nighot",
    role: "Director",
    credentials: "Mechanical Engineer | 25+ Years Experience in Production & Project Management",
    photo: "/director_nilesh.png",
    message: "Our philosophy at Glomech Engineering is firmly rooted in a customer-first approach, where understanding project requirements in depth is the starting point of every successful execution. With over two decades of experience in production and project management, I strongly believe that timely delivery, clear communication, and dependable performance define long-term partnerships. We emphasize structured planning, efficient coordination, and proactive problem-solving to ensure seamless project flow from initiation to completion. Our systems are designed to deliver not just products, but complete reliability in execution. Looking ahead, we are focused on enhancing our project management practices, improving responsiveness, and building agile operations that can adapt to complex and large-scale industrial requirements.",
    tagline: "Delivering confidence through commitment, coordination, and customer focus.",
    initial: "NN",
  },
  {
    name: "Prashant Galande",
    role: "Director",
    credentials: "B.E. Mechanical, MBA – Production | 15+ Years Experience",
    photo: "/director_prashant_galande.jpeg",
    message: "At Glomech Engineering, we have built our foundation on engineering discipline, process reliability, and a commitment to delivering structurally sound and precision-driven fabrication solutions. My experience in mechanical engineering and Procurement management has shaped a results-oriented approach where quality, planning, and execution go hand in hand. We continuously invest in strengthening our manufacturing systems, enhancing process control, and developing capabilities that align with evolving industrial standards. Our focus remains on delivering consistent quality, ensuring traceability, and maintaining transparency across all stages of execution. As we move forward, we are committed to scaling our operations with a strong emphasis on technology adoption, capacity expansion, and operational excellence—ensuring we remain a dependable partner for clients with demanding project requirements.",
    tagline: "Engineering precision through disciplined execution and continuous improvement.",
    initial: "PG",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="About Us"
        subtitle="Leading the way in heavy structural fabrication since 2022."
      />

      {/* ── Who We Are ── */}
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

      {/* ── Leadership ── */}
      <section className={styles.leadershipSection}>
        {/* Background image */}
        <div className={styles.leadershipBg} />
        <div className={styles.leadershipOverlay} />

        <div className={styles.leadershipInner}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.leadershipHeader}
          >
            <span className="badge-dark">Leadership</span>
            <h2>Driven by expertise.<br />Focused on performance.</h2>
            <p className={styles.leadershipSubtitle}>
              Driven by experience. Focused on performance. Committed to customer success.
            </p>
            <p className={styles.leadershipDesc}>
              At Glomech Engineering Pvt. Ltd., leadership is driven by deep industry expertise, execution discipline, and a clear commitment to customer success. Our directors bring together decades of experience in mechanical engineering, fabrication, production, and project management—ensuring every project is delivered with precision, reliability, and accountability.
            </p>
          </motion.div>

          <div className={styles.directorsGrid}>
            {directors.map((director, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={styles.directorCard}
              >
                {/* Avatar / Photo */}
                <div className={styles.directorAvatar}>
                  <Image
                    src={director.photo}
                    alt={director.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Name & role */}
                <div className={styles.directorMeta}>
                  <h3>{director.name}</h3>
                  <span className={styles.directorRole}>{director.role}</span>
                  <span className={styles.directorCredentials}>{director.credentials}</span>
                </div>

                {/* Message */}
                <div className={styles.directorMessage}>
                  <Quote size={28} className={styles.quoteIcon} />
                  <p>{director.message}</p>
                </div>

                {/* Tagline */}
                <div className={styles.directorTagline}>
                  <span>"{director.tagline}"</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
