import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5C3XMX5M');`,
          }}
        /> */}
        {/* <!-- Preconnect and DNS Prefetch --> */}
        {/* <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Tektur:wght@800&display=swap"
          rel="stylesheet"
        /> */}

        {/* <!-- Preloading Font Files --> */}
        <link
          rel="preload"
          as="font"
          href="https://fonts.gstatic.com/s/readexpro/v21/SLXnc1bJ7HE5YDoGPuzj_dh8uc7wUy8ZQQyX2KY8TL0kGZN6blTC4USmgQ.woff"
          type="font/woff"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="https://fonts.gstatic.com/s/readexpro/v21/SLXYc1bJ7HE5YDoGPuzj_dh8uc7wUy8ZQQyX2Iw1ZEzehiB9Q1U.woff2"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="https://fonts.gstatic.com/s/readexpro/v21/SLXYc1bJ7HE5YDoGPuzj_dh8uc7wUy8ZQQyX2IwwZEzehiB9.woff2"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="https://fonts.gstatic.com/s/readexpro/v21/SLXnc1bJ7HE5YDoGPuzj_dh8uc7wUy8ZQQyX2KY8TL0kGZN6blTC00SmgQ.woff"
          type="font/woff"
          crossorigin="anonymous"
        />

        {/* <!-- Preloading Hero Images --> */}

        {typeof window !== "undefined" && window.innerWidth < 420 ? (
          <>
            <link
              rel="preload"
              as="image"
              href="/images/hero/hero-bg-phone.webp"
              type="image/webp"
            />
            <link
              rel="preload"
              as="image"
              href="/images/hero/hero_small.webp"
              type="image/webp"
            />
          </>
        ) : (
          <>
            <link
              rel="preload"
              as="image"
              href="/images/hero/hero-bg.webp"
              type="image/webp"
            />
            <link
              rel="preload"
              as="image"
              href="/images/hero/hero_big.webp"
              type="image/webp"
            />
          </>
        )}

        {/* <!-- Load Google Fonts --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap"
          rel="stylesheet"
        />

        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet"/> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5C3XMX5M"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        /> */}
      </body>
    </Html>
  );
}
