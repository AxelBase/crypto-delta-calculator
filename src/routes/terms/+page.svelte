<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Crypto Price Change Calculator</title>
  <meta name="description" content="Review the terms of use for the Crypto Price Change Calculator, a free client-side tool providing cryptocurrency delta calculations with live data." />
  <meta property="og:title" content="Terms and Conditions | Crypto Price Change Calculator" />
  <meta property="og:description" content="Review the terms of use for the Crypto Price Change Calculator, a free client-side tool providing cryptocurrency delta calculations with live data." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 19, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Crypto Price Change Calculator</strong> ("the Tool"), you agree to these Terms and Conditions. If you do not agree, please refrain from using the Tool. We reserve the right to update these terms at any time, with changes effective upon posting.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool is a free, client-side web application for calculating percentage changes in cryptocurrency amounts, enhanced by live market data from CoinGecko's public API. All features, including inputs, calculations, and conversions, operate entirely in your browser.</p>

    <h2>3. Use of the Tool</h2>
    <p>You may use the Tool for personal, non-commercial purposes. Permitted activities include entering cryptocurrency amounts, viewing live conversions, and copying results. You agree not to:</p>
    <ul>
      <li>Use automated scripts to overload or scrape the Tool.</li>
      <li>Attempt to reverse-engineer or modify the code beyond fair use.</li>
      <li>Use the Tool for illegal activities or to spread misinformation.</li>
      <li>Overuse API calls in a manner violating CoinGecko's terms.</li>
    </ul>
    <p>The Tool is provided <strong>"as is"</strong> without warranties of accuracy or uptime.</p>

    <h2>4. Live Data Disclaimer</h2>
    <p>Market data is sourced from CoinGecko's public API. We do not guarantee its timeliness, accuracy, or availability. Prices may vary across exchanges, and the Tool is for informational purposes only—not financial advice.</p>

    <h2>5. No Financial Advice</h2>
    <p><em>The Tool does not provide investment, trading, or financial recommendations.</em> Calculations are mathematical estimates based on public data. Cryptocurrency markets are volatile; use at your own risk. Consult professionals for decisions.</p>

    <h2>6. Intellectual Property</h2>
    <p>The Tool's code, design, and content are open-source where applicable or owned by us. You may fork or remix per license terms, but commercial redistribution requires permission.</p>

    <h2>7. Limitation of Liability</h2>
    <p>We are not liable for damages arising from use, including data loss, inaccurate results, or API downtime. Maximum liability is limited to $0 as a free service.</p>

    <h2>8. Third-Party Services</h2>
    <p>The Tool relies on CoinGecko for data. Your use of their API is subject to their terms; we are not responsible for their service.</p>

    <h2>9. Termination</h2>
    <p>We may restrict access if terms are violated.</p>

    <h2>10. Governing Law</h2>
    <p>These terms are governed by general internet usage laws applicable to static web tools.</p>

    <p class="italic-note">Thank you for using the <strong>Crypto Price Change Calculator</strong> responsibly.</p>
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