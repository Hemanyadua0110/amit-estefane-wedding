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

<p className="event-description">
  A vibrant pre-wedding celebration where intricate henna designs adorn
  the bride’s hands and feet, surrounded by music, dancing, laughter,
  and joyful family festivities.
</p>

<p className="dress-code">
  <strong>Dress Code:</strong> Vibrant colours — bright & beautiful ✨
</p>
          <div className="mehendi-details">
            <div className="detail">
              <span>Time</span>
              <h4>7:00 PM onwards</h4>
            </div>

            <div className="detail">
              <span>Venue</span>
              <h4>The Queens Hall</h4>
              <br />
              Essex Farms
              <br />
              Aurobindo Marg, New Delhi
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