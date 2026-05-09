import Link from 'next/link';
import { companyInfo } from '@/data/company';
import styles from './Footer.module.css';

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products & Services' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/projects', label: 'Major Projects' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>G</span>
            <span className={styles.logoText}>LOMECH</span>
          </div>
          <p className={styles.brandDesc}>
            {companyInfo.tagline}
          </p>
          <div className={styles.cert}>
            <span>GST Registered</span>
            <span className={styles.dot}>·</span>
            <span>ISO Compliant</span>
            <span className={styles.dot}>·</span>
            <span>NDT Certified</span>
          </div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h5>Quick Links</h5>
            {quickLinks.map(l => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>

          <div className={styles.col}>
            <h5>Contact</h5>
            <a href={`tel:${companyInfo.contact.phones[0]}`}>{companyInfo.contact.phones[0]}</a>
            <a href={`tel:${companyInfo.contact.phones[1]}`}>{companyInfo.contact.phones[1]}</a>
            <a href={`mailto:${companyInfo.contact.email}`} className={styles.email}>
              {companyInfo.contact.email}
            </a>
          </div>

          <div className={styles.col}>
            <h5>Location</h5>
            <p className={styles.addr}>{companyInfo.address.factory}</p>
            <p className={styles.addrOffice}>{companyInfo.address.office}</p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        <div className={styles.legal}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
