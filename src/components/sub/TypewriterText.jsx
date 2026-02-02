import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "I am a developer",
  "a researcher",
  "I love animations",
  "A gamer",
];

const TypewriterText = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timeout;

    if (!isDeleting && displayText.length < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 80);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, 40);
    } else if (!isDeleting && displayText === currentText) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && displayText === "") {
      // Move to next text (async)
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <motion.p
      className="text-lg tracking-wider text-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      {displayText}
      {/* <span className="animate-pulse">|</span> */}
      <motion.span
        className="ml-1 text-red-500"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}>
        |
      </motion.span>
    </motion.p>
  );
};

export default TypewriterText;
