import { motion } from "framer-motion";

const photos = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
];

export default function Gallery() {
  return (
  <section className="gallery-section" id="gallery">

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