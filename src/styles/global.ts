import { createGlobalStyle } from 'styled-components';
import { mediaQueries } from '@/constants/mediaQueries';

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

    --foreground-rgb: 0, 0, 0;

    --primary-glow: conic-gradient(
            from 180deg at 50% 50%,
            #16abff33 0deg,
            #0885ff33 55deg,
            #54d6ff33 120deg,
            #0071ff33 160deg,
            transparent 360deg
    );
    --secondary-glow: radial-gradient(
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
    );

    --tile-start-rgb: 239, 245, 249;
    --tile-end-rgb: 228, 232, 233;
    --tile-border: conic-gradient(
            #00000080,
            #00000040,
            #00000030,
            #00000020,
            #00000010,
            #00000010,
            #00000080
    );

    --callout-rgb: 238, 240, 241;
    --callout-border-rgb: 172, 175, 176;
    --card-rgb: 180, 185, 188;
    --card-border-rgb: 131, 134, 135;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: Poppins, sans-serif;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
            to bottom,
            transparent,
            rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  iframe{
    border-radius: 3px;
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  h1{
    padding-top: 30px;
    ${mediaQueries.desktop} {
      padding-top: 86px;
    }
  }

  .hero{
	margin: 150px 0 0 0;
	${mediaQueries.desktop} {
		padding-top: 86px;
	}
  }

  .hero h1{
	padding-top: 0;
  }

  .header-wrapper .logo-container{
	margin-left: 0;
  }

`;
