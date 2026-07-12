'use client';

import React from 'react';
import Script from 'next/script';

function cleanGaId(id: string | undefined): string {
  if (!id) return '';
  const urlMatch = id.match(/googletagmanager\.com\/gtag\/js\?id=([a-zA-Z0-9\-]+)/);
  if (urlMatch) return urlMatch[1];
  const configMatch = id.match(/gtag\(['"]config['"],\s*['"]([a-zA-Z0-9\-]+)['"]/);
  if (configMatch) return configMatch[1];
  return id.replace(/<[^>]*>/g, '').trim();
}

function cleanClarityId(id: string | undefined): string {
  if (!id) return '';
  const urlMatch = id.match(/clarity\.ms\/tag\/([a-zA-Z0-9]+)/);
  if (urlMatch) return urlMatch[1];
  const fnMatchDouble = id.match(/"clarity",\s*"script",\s*"([a-zA-Z0-9]+)"/);
  if (fnMatchDouble) return fnMatchDouble[1];
  const fnMatchSingle = id.match(/'clarity',\s*'script',\s*'([a-zA-Z0-9]+)'/);
  if (fnMatchSingle) return fnMatchSingle[1];
  return id.replace(/<[^>]*>/g, '').trim();
}

export default function AnalyticsScripts() {
  const rawGaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
  const rawClarityId = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();

  const gaId = cleanGaId(rawGaId);
  const clarityId = cleanClarityId(rawClarityId);

  const hasGa = !!(gaId && gaId !== 'undefined' && gaId !== 'null' && gaId !== '');
  const hasClarity = !!(clarityId && clarityId !== 'undefined' && clarityId !== 'null' && clarityId !== '');

  return (
    <>
      {/* Google Analytics 4 */}
      {hasGa ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      ) : null}

      {/* Microsoft Clarity */}
      {hasClarity ? (
        <Script id="microsoft-clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}
    </>
  );
}
