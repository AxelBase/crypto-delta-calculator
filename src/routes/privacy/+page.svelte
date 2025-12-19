<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Crypto Price Change Calculator</title>
  <meta name="description" content="The Crypto Price Change Calculator is a fully client-side tool that collects no personal data, ensuring complete privacy while using live CoinGecko market information." />
  <meta property="og:title" content="Privacy Policy | Crypto Price Change Calculator" />
  <meta property="og:description" content="The Crypto Price Change Calculator is a fully client-side tool that collects no personal data, ensuring complete privacy while using live CoinGecko market information." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 19, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Crypto Price Change Calculator</strong>, a client-side web utility ("we," "us," or "our"). This Privacy Policy explains our data practices for this tool, which enables users to compute cryptocurrency percentage changes with live market data. We prioritize <strong>user privacy</strong> through a <em>no-collection design</em>. All processing occurs in your browser, and <strong>we do not collect, store, or transmit any personal information</strong>. This policy provides full transparency on how your privacy is protected.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The tool operates entirely locally, meaning no data leaves your device except for necessary public API requests. We do not collect:</p>
    <ul>
      <li><strong>Personal Information</strong>: Names, emails, IP addresses, or device details.</li>
      <li><strong>Usage Analytics</strong>: No tracking of visits, clicks, or behavior via cookies or scripts.</li>
      <li><strong>Input Data</strong>: Entered cryptocurrency amounts remain in your browser only.</li>
      <li><strong>Session Data</strong>: No persistent storage or logging of interactions.</li>
    </ul>
    <p><em>All calculations and conversions happen client-side</em>, ensuring your inputs never reach us or third parties beyond public market queries.</p>

    <h2>3. Live Data from CoinGecko</h2>
    <p>The tool fetches real-time cryptocurrency prices and rankings directly from CoinGecko's public API in your browser. These requests retrieve only anonymous market data (e.g., current prices in USD/EUR/GBP). CoinGecko may log basic request details like IP for rate limiting, but we have no control over or access to their practices. Refer to CoinGecko's privacy policy for details on their handling.</p>

    <h2>4. No Cookies or Tracking</h2>
    <p>We <strong>do not use cookies</strong>, local storage for tracking, web beacons, or analytics tools. The application is <em>completely stateless</em> beyond temporary session needs cleared on reload.</p>

    <h2>5. Data Security</h2>
    <p>Since no data is collected or transmitted to us, security risks are minimal. We recommend using updated browsers and secure connections (HTTPS) for API calls. You are responsible for securing your device and any exported results.</p>

    <h2>6. Children's Privacy</h2>
    <p>The tool is not directed at children under 13. We do not knowingly collect data from minors.</p>

    <h2>7. International Compliance</h2>
    <p>Our no-collection approach aligns with global standards like <strong>GDPR</strong> and <strong>CCPA</strong> by default.</p>

    <h2>8. Changes to Policy</h2>
    <p>Updates will be posted here with revised dates. Continued use constitutes acceptance.</p>

    <h2>9. Contact</h2>
    <p>For questions, use the site's navigation or repository issues if open-source.</p>

    <p class="italic-note"><strong>Your privacy is foundational</strong>—enjoy the tool with confidence knowing nothing is collected.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    margin: 0 auto;
    padding-top: 7rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--color-text-muted);
  }
  .breadcrumbs a {
    color: var(--color-accent);
    text-decoration: none;
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
    color: var(--color-text-main);
  }

  .prose {
    line-height: 1.8;
    color: var(--color-text-main);
  }

  .prose .post-meta {
    color: var(--color-text-muted);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 1rem;
  }

  .prose h1,
  .prose h2 {
    color: var(--color-accent);
    font-weight: 700;
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    font-size: 1.8rem;
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 0.5rem;
  }

  .prose p {
    margin-bottom: 1.25rem;
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .prose ul li::marker {
    color: var(--color-accent);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--color-text-muted);
    text-align: center;
    margin-top: 3rem;
    font-size: 1.1rem;
  }
</style>