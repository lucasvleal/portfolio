import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0 10px 10px 0;

    background: black;
    color: white;
    border: 0.5px solid rgba(255,255,255,0.2);
    height: 40px;
    width: 40px;

    &:hover {
        cursor: pointer;
    }
`;