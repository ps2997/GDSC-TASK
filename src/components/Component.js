import React from "react";
import { motion } from "framer-motion";

const Component = ({ text }) => {
  return (
    <div>
      <div className="body">
        <motion.div>
          {text.body}
        </motion.div>
      </div>
    </div>
  )
};

export default Component;
