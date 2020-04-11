import { motion } from "framer-motion";
import styled from "styled-components";

import { grey, lighterGrey } from "styles/colors";

export const ListItem = styled.li`
  display: block;
  position: relative;
  margin: 10px;

  @media (min-width: 600px) {
    margin: 0;
    margin-left: 20px;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  display: block;

  &:hover {
    span {
      color: ${lighterGrey};
    }
  }
`;

export const Bar = styled(motion.div)`
  position: absolute;
  height: 2px;
  background-color: ${grey};
  bottom: 0;
`;
