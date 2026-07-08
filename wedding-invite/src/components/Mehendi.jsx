import { motion } from "framer-motion";

export default function Mehendi() {
  return (
    <section className="mehendi">
      {/* Background Blur */}
      <div className="blur-orb blur-gold mehendi-orb" />

      <div className="container mehendi-grid">
        {/* Left Image */}

        <motion.div
          className="mehendi-image image-frame"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1 }}
        >
          <img src="/mehendi.jpg" alt="Mehendi Ceremony" />

          
        </motion.div>

        {/* Right Content */}

        <motion.div
          className="mehendi-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1 }}
        >
          <p className="eyebrow">Wedding Festivities</p>

          <h2 className="heading">
           The Mehendi
            <br />
            Festa
          </h2>

          <div className="section-divider" />

          <p className="mehendi-description">
            An evening filled with vibrant colours, heartfelt laughter,
            beautiful traditions, music that lingers in the air, and the
            warmth of family and friends as we begin our wedding celebrations.
          </p>

          <div className="mehendi-details">
            <div className="detail">
              <span>Time</span>
              <h4>6:00 PM onwards</h4>
            </div>

            <div className="detail">
              <span>Venue</span>
              <h4>Essex Farms</h4>
            </div>

            <div className="detail">
  <span>Date</span>
  <h4>20 January 2027</h4>
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}