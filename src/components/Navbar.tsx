'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <nav className={`${styles.nav} ${scrolled || !isHome ? styles.solid : ''} ${isOpen ? styles.menuOpen : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Glomech Engineering Logo"
            width={180}
            height={56}
            className={styles.logoImg}
            priority
          />
        </Link>

        <div className={styles.links}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="tel:9405441872" className={styles.phoneLink}>
            <Phone size={15} />
            <span>9405441872</span>
          </a>
          <Link href="/contact" className={styles.contactBtn}>
            Get Quote
          </Link>
          <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className={styles.drawerLink}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className={styles.drawerCta}>
          Get a Quote →
        </Link>
        <div className={styles.drawerContact}>
          <a href="tel:9405441872">📞 9405441872</a>
          <a href="tel:9960041872">📞 9960041872</a>
        </div>
      </div>
    </nav>
  );
}
