import React, { useEffect, useState } from 'react';

import { Container, Texts } from './styles';

interface Props { 
    heading?: string;
    texts: string[];
    color?: string;
    size?: number;
}

export default function Typer({ heading, texts, color, size }: Props) {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleType();
        }, typingSpeed);

        return () => clearTimeout(timer);
    });

    const handleType = () => {
        const i = loopNum % texts.length;
        const fullText = texts[i];

        setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
        setTypingSpeed(isDeleting ? 30 : 150);
    
        if (!isDeleting && text === fullText) {          
          setTimeout(() => setIsDeleting(true), 500);          
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);          
        }
    }

    return (
        <Container>
            <Texts customColor={color} customSize={size}>
                {heading}&nbsp;
                <span>{text}</span>
                <span id="cursor"/>
            </Texts>
        </Container>
    )
}