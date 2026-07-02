import { motion } from "framer-motion";

export default function Reception() {
  return (
    <section className="reception" id="reception">
      <div className="reception-background">
        <img src="/hero.jpg" alt="Reception" />
      </div>

      <div className="reception-overlay"></div>

      <motion.div
        className="reception-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <p className="eyebrow">Reception</p>

        <h2>
          An Evening
          <br />
          of Celebration
        </h2>

        <p className="reception-copy">
          As the celebrations continue, we invite you to join us for an
          unforgettable evening filled with love, laughter, music and
          togetherness as we begin our new chapter.
        </p>

        <div className="reception-details">

          <div className="detail">
            <h4>Date</h4>
            <p>22 January 2027</p>
          </div>

          <div className="detail">
            <h4>Time</h4>
            <p>7:00 PM onwards</p>
          </div>

          <div className="detail">
            <h4>Venue</h4>
            <p>
              Cherish Ballrooms
              <br />
              Imperial Club of India
              <br />
              Delhi
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}