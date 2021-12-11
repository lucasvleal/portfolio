import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animateScroll } from 'react-scroll';

import { Container } from './styles';

export default function ScrollToTop() {
    const handleScrollToTop = useCallback(() => {
        animateScroll.scrollToTop();
    }, []);

    return (
        <Container onClick={handleScrollToTop}>
          <FontAwesomeIcon icon="arrow-up" />
        </Container>
    )
}