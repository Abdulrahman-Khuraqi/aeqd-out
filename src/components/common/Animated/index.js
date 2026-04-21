import { motion } from "framer-motion";

// Define different animations
const animations = {
  title: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  },
  opacity: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  },
  button: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
        opacity: {
          delay: 0.3,
          duration: 0.3,
          ease: [0.6, 0.05, 0.01, 0.9],
        },
      },
    },
  },
  // New basic animations
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  },
  zoomIn: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.5 },
    },
  },
  zoomOut: {
    hidden: { scale: 1.5 },
    visible: {
      scale: 1,
      transition: { duration: 0.5 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 0.6 },
    },
  },
  slideLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
  slideRight: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
  slideUp: {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
  slideDown: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
};

const AnimatedComponent = ({
  animationType = "opacity",
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      variants={animations[animationType]}
      initial="hidden"
      animate="visible"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
