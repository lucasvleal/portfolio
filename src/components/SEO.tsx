import React from "react";

import Head from "next/head";

interface SEOProps {
    title: string;
    description?: string;
    shouldExcludeTitleSuffix?: boolean;
    shouldIndexPage?: boolean;
}

export default function SEO({
    title,
    description,
    shouldExcludeTitleSuffix = false,
    shouldIndexPage = true
}: SEOProps) {
    const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? ` | Lucas Leal` : ''}`;

    return (
        <Head>
            <title>{pageTitle}</title>

            { description && <meta name="description" content={description} /> }
            { !shouldIndexPage && <meta name="robots" content="noindex,nofollow" /> }

            <meta property="image" content="https://www.lucasleal.dev.br/og%20image.png" />
            
            <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
            <meta name="MobileOptimized" content="320" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="referrer" content="no-referrer-when-downgrade" />
            <meta name="google" content="notranslate" />

            <meta property="og:title" content={pageTitle} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={"https://www.lucasleal.dev.br/og%20image.png"} />
            <meta property="og:image:secure_url" content={"https://www.lucasleal.dev.br/og%20image.png"} />
            <meta property="og:image:alt" content="Thumbnail" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@luquinha_txt" />
            <meta name="twitter:creator" content="@luquinha_txt" />
            <meta name="twitter:image" content={"https://www.lucasleal.dev.br/og%20image.png"} />
            <meta name="twitter:image:src" content={"https://www.lucasleal.dev.br/og%20image.png"} />
            <meta name="twitter:image:alt" content="Thumbnail" />
            <meta name="twitter:image:width" content="1200" />
            <meta name="twitter:image:height" content="620" />
        </Head>
    );
}