import React from "react";
import { CardBody, CardContent } from "./styles";
import { AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  src: string;
  delay: number;
}

const Card = ({ title, desc, src, delay }: Props) => {
  return (
    <AnimatePresence>
      <CardBody
        transition={{ delay: 0.25 * delay, duration: 0.3 }}
        initial={{ x: -delay * 400, opacity: 0, scale: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        exit={{ x: -delay * 400, opacity: 0, scale: 0 }}
        viewport={{ once: true }}
      >
        <img src={src} alt="how to use" loading="lazy" />
        <CardContent>
          <h4>{title}</h4>
          <p>{desc}</p>
        </CardContent>
      </CardBody>
    </AnimatePresence>
  );
};

export default Card;
