import React from 'react';

import { Link } from './styles';

interface Props {
    url: string;
    title?: string;
    target?: '_blank' | 'regular';
    color?: string;
    bold?: boolean;
}

export default function CustomLink({ url, title, target = '_blank', color = 'black', bold = true }: Props) {
    return (
        <Link 
            target={target} 
            href={url} 
            color={color} 
            bold={bold} 
        >
            {title ? title : url}
        </Link>
    )
}