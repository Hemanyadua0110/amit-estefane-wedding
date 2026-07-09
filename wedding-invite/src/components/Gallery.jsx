import { motion } from "framer-motion";

const photos = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery5.jpg",
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-title">
        <p className="eyebrow">CHAPTERS</p>

        <h2>
          Moments between
          <br />
          Hello & Forever
        </h2>
      </div>

      <motion.div
        className="gallery-scroll"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {photos.map((photo, index) => (
          <div className="gallery-card" key={index}>
            <img src={photo} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </motion.div>

    </section>
  );
}