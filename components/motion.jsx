"use client";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// Reveal individual al entrar en viewport.
export function Reveal({ as = "div", children, className, delay = 0, y = 14, ...rest }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

// Grupo con stagger: los hijos <Item> entran escalonados.
export function Stagger({ as = "div", children, className, gap = 0.05, ...rest }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
      {...rest}
    >
      {children}
    </M>
  );
}

export const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Item({ as = "div", children, className, ...rest }) {
  const M = motion[as] || motion.div;
  return (
    <M className={className} variants={itemVariants} {...rest}>
      {children}
    </M>
  );
}
