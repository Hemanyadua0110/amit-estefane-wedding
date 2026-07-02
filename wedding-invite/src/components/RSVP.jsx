import { motion } from "framer-motion";

export default function RSVP() {
  return (
    <section className="rsvp" id="rsvp">
      <div className="rsvp-overlay"></div>

      <motion.div
        className="rsvp-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <p className="eyebrow">RSVP</p>

        <h2>
          We Can't Wait
          <br />
          To Celebrate With You
        </h2>

        <p className="rsvp-copy">
          Your presence will make our celebration even more special.
          Kindly let us know if you'll be joining us as we begin
          this beautiful new chapter together.
        </p>

        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noreferrer"
          className="rsvp-button"
        >
          Confirm Your Presence
        </a>

        <p className="rsvp-signoff">
          With love,
          <br />
          Amit & Estéfane
        </p>
      </motion.div>
    </section>
  );
}