import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-line"></div>

      <motion.div
        className="footer-gallery"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="family-photo family-left">
          <img src="/gallery6.jpg" alt="Indian Family" />
        </div>

        <div className="family-photo family-right">
          <img src="/gallery7.jpg" alt="Brazilian Family" />
        </div>

      </motion.div>

      <p className="footer-credit">
        Made with ❤️ for our friends & family
      </p>

    </footer>
  );
}