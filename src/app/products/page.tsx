'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { companyInfo } from '@/data/company';
import { CheckCircle, Settings, Layers, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import styles from './Products.module.css';

const productDetails = [
  {
    name: "Structural Fabrication",
    image: "/product_structural.png",
    description: "Heavy and light structural steel fabrication including columns, beams, trusses, and frameworks. Manufactured as per client drawings and international standards such as IS, AISC, and BS.",
    specs: ["IS 2062 / IS 808 compliant", "All thickness ranges", "MIG & SAW welding", "NDT testing available"],
    applications: "Industrial buildings, warehouses, power plants, refineries"
  },
  {
    name: "Pipe Rack & Material Handling",
    image: "/product_piperack.png",
    description: "Custom fabricated pipe racks, pipe supports, and material handling structures for process plants. Engineered for heavy load-bearing with full traceability and third-party inspection.",
    specs: ["Multi-tier configurations", "Hot-dip galvanizing available", "Seismic-rated designs", "Modular construction"],
    applications: "Oil & gas, petrochemical, fertilizer, and chemical plants"
  },
  {
    name: "Base Frames",
    image: "/product_baseframe.png",
    description: "Precision-machined and fabricated equipment base frames for pumps, compressors, motors, and other rotating machinery. Aligned and leveled to exact tolerances.",
    specs: ["Precision machining", "Grouting pockets", "All sizes & loads", "Vibration-dampening design"],
    applications: "Pump sets, compressors, gearboxes, generators"
  },
  {
    name: "Welded Gratings",
    image: "/product_grating.png",
    description: "Industrial welded steel gratings for flooring, walkways, drainage covers, and safety platforms. Available in serrated and plain bearing bar profiles for enhanced grip.",
    specs: ["Serrated & plain bar", "Various bar spacings", "Galvanized/painted", "Custom cutting available"],
    applications: "Platforms, walkways, drainage, stair treads"
  },
  {
    name: "Staircase & Hand Railings",
    image: "/product_staircase.png",
    description: "Industrial staircases and safety hand railings fabricated to IS 3696 standards. Designed for heavy-duty industrial environments with all surface finishing options.",
    specs: ["IS 3696 compliant", "Open & closed riser", "All handrail profiles", "Non-slip nosing"],
    applications: "Industrial facilities, mezzanines, process plant access"
  },
  {
    name: "Ducting & Storage Tanks",
    image: "/product_tank.png",
    description: "Custom fabricated industrial ducting systems and storage tanks for gases, liquids, and bulk materials. Designed for pressure and flow requirements with full weld testing.",
    specs: ["Pressure tested", "Various capacities", "Insulation-ready", "ASME/IS standards"],
    applications: "Dust collection, ventilation, liquid storage, gas handling"
  },
  {
    name: "Chimney & Skids",
    image: "/product_chimney.png",
    description: "Self-supporting industrial chimneys and fully skid-mounted process packages. Designed for thermal expansion, wind loads, and seismic requirements.",
    specs: ["Wind load designed", "Thermal insulation", "Skid-mounted packages", "Complete assembly"],
    applications: "Boilers, furnaces, DG sets, process skids"
  },
  {
    name: "Casing & Hoppers",
    image: "/product_hopper.png",
    description: "Heavy-duty steel hoppers, bins, and equipment casings for bulk material handling. Fabricated with wear-resistant liners and reinforced discharge sections.",
    specs: ["Wear liner options", "Various slopes", "Vibrator mounting pads", "Dust-tight construction"],
    applications: "Cement, mining, aggregate, grain handling"
  },
  {
    name: "Industrial Sheds",
    image: "/product_shed.png",
    description: "Pre-engineered and custom fabricated industrial shed structures. Complete portal frame structures with purlins, girts, crane beams, and all secondary members.",
    specs: ["Portal frame design", "Crane beam integration", "Sheeting-ready", "Large span capability"],
    applications: "Manufacturing plants, warehouses, workshops, storage"
  },
  {
    name: "Safety Ladders & Walkways",
    image: "/product_ladder.png",
    description: "Industrial safety caged ladders, fixed access ladders, and walkway systems compliant with factory safety regulations. Designed for safe access at height.",
    specs: ["IS factory act compliant", "Cage protection", "Grating walkways", "Safety harness anchors"],
    applications: "Rooftop access, tank access, elevated equipment"
  },
];

interface ProductDetail {
  name: string;
  image: string;
  description: string;
  specs: string[];
  applications: string;
}

export default function ProductsPage() {
  const [selected, setSelected] = useState<ProductDetail | null>(null);

  return (
    <main>
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
          <p>Precision-engineered steel structures manufactured to your exact drawings and international standards.</p>
        </div>
        <div className={styles.grid}>
          {productDetails.map((product, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={styles.productCard}
              onClick={() => setSelected(product)}
            >
              <div className={styles.cardImage}>
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                <div className={styles.cardImageOverlay} />
              </div>
              <div className={styles.cardBody}>
                <h3>{product.name}</h3>
                <p>{product.description.slice(0, 90)}…</p>
                <button className={styles.viewBtn}>
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Popup Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.92, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 32 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelected(null)} aria-label="Close">
                <X size={20} />
              </button>
              <div className={styles.modalImage}>
                <Image src={selected.image} alt={selected.name} fill style={{ objectFit: 'cover' }} />
                <div className={styles.modalImageOverlay} />
                <div className={styles.modalImageBadge}>
                  <span className="badge-dark">Product Details</span>
                </div>
              </div>
              <div className={styles.modalBody}>
                <h2>{selected.name}</h2>
                <p className={styles.modalDesc}>{selected.description}</p>

                <div className={styles.modalSpecs}>
                  <h4>Key Specifications</h4>
                  <ul>
                    {selected.specs.map((s, i) => (
                      <li key={i}>
                        <CheckCircle size={15} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.modalApplications}>
                  <h4>Applications</h4>
                  <p>{selected.applications}</p>
                </div>

                <a href="/contact" className="btn-accent" style={{ marginTop: '8px' }}>
                  Request a Quote <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </main>
  );
}
