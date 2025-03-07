import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <p>Welcome to the About Page!</p>
    </motion.div>
  );
}

export default About;