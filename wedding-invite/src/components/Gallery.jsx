import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="gallery-editorial" id="gallery">
      <motion.div
        className="gallery-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">Our Story</p>

        <h2>Moments We'll Always Remember</h2>
      </motion.div>

      <motion.div
        className="gallery-hero-image image-frame"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img src="/gallery1.jpg" alt="" />
      </motion.div>

      <div className="gallery-quote">
        "Every photograph tells a story,
        <br />
        but ours tells forever."
      </div>

      <div className="gallery-grid">

        <div className="image-frame">
          <img src="/gallery2.jpg" alt="" />
        </div>

        <div className="image-frame gallery-wide">
          <img src="/gallery3.jpg" alt="" />
        </div>

      </div>

      <motion.div
        className="gallery-final image-frame"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img src="/gallery4.jpg" alt="" />
      </motion.div>
    </section>
  );
}