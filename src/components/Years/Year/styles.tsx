import { motion } from "framer-motion";
import styled from "styled-components";

export const Root = styled(motion.div)`
  padding: 0 1px 0 1px;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;

  @media (min-width: 600px) {
    padding: 0 2px;
  }
`;

export const Bar = styled(motion.div)`
  border-radius: 2px 2px 0 0;
  height: 100%;
`;
