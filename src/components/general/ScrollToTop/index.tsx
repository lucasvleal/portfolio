import React, { useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animateScroll } from 'react-scroll';

import { Container } from './styles';

export default function ScrollToTop() {
    const handleScrollToTop = useCallback(() => {
        animateScroll.scrollToTop();
    }, []);

    const variants = useMemo(() => ({ 
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    }), []);

    return (
        <Container 
            variants ={variants}
            initial="hidden"
            animate="visible"
            transition={{ type: "spring", stiffness: 80 }}
            onClick={handleScrollToTop}
        >
          <FontAwesomeIcon icon="arrow-up" />
        </Container>
    )
}