<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Introduction to the Crypto Price Change Calculator | Crypto Delta Blog</title>
  <meta name="description" content="Learn about the Crypto Price Change Calculator, a client-side tool that computes percentage changes in cryptocurrency holdings using live market data from CoinGecko." />
  <meta property="og:title" content="Introduction to the Crypto Price Change Calculator | Crypto Delta Blog" />
  <meta property="og:description" content="Learn about the Crypto Price Change Calculator, a client-side tool that computes percentage changes in cryptocurrency holdings using live market data from CoinGecko." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Introduction to the Crypto Price Change Calculator</p>
  </div>

  <article class="prose">
    <h1>Introduction to the Crypto Price Change Calculator</h1>
   
    <p class="post-meta">Published: December 19, 2025</p>
   
    <p>The Crypto Price Change Calculator is a lightweight, fully client-side web utility designed to help users quickly determine the percentage change between two cryptocurrency amounts. Whether you are tracking a personal holding or analyzing market movements, this tool provides instant calculations enhanced by real-time price data.</p>
   
    <p>At its core, the calculator allows entry of an old amount and a new amount for any cryptocurrency. Users select from the current top 10 cryptocurrencies by market capitalization, fetched directly from the CoinGecko public API. This ensures the rankings and prices reflect the latest market conditions without requiring any server-side processing.</p>
   
    <p>One key advantage is its ability to handle comparisons across different cryptocurrencies. When the old and new amounts involve different coins, the tool automatically converts both to a common USD equivalent using live prices. This provides an accurate percentage delta based on fiat value rather than direct coin quantities, which would otherwise be misleading.</p>
   
    <p>The interface includes automatic USD conversions displayed below each input field. For example, entering 0.0000025 BTC immediately shows its approximate USD value, helping users contextualize small fractional amounts common in Bitcoin holdings.</p>
   
    <p>Beyond the core calculator, the tool features a dynamic live conversion table showcasing the top 10 cryptocurrencies. This table updates with current prices in USD, EUR, and GBP. Users can switch fiat currencies per row, swap the conversion direction (e.g., 1 BTC to USD or 1 USD to BTC), and sort by value in ascending or descending order.</p>
   
    <p>Error handling is built-in, with warnings for significant price drops over 50 percent and clear messages for invalid inputs or zero old values. A copy button allows quick clipboard access to the percentage result.</p>
   
    <p>All data fetching occurs in the browser via native fetch calls to CoinGecko endpoints. This keeps the application stateless and suitable for static hosting platforms like GitHub Pages, where dynamic updates continue to function seamlessly.</p>
   
    <p>The tool supports precise calculations for satoshi-level amounts, making it useful for micro-holdings or detailed portfolio tracking. Refreshing the page or using the dedicated button pulls fresh data, ensuring users always work with up-to-date market information.</p>
   
    <p>As cryptocurrency markets evolve rapidly, tools like this provide immediate insights without relying on complex platforms. The combination of simple percentage calculations with live multi-currency support makes it valuable for both novice and experienced users monitoring price movements.</p>
   
    <h2>Key Features Overview</h2>
    <ul>
      <li>Live top 10 cryptocurrency selection and rankings</li>
      <li>Cross-crypto percentage changes via USD normalization</li>
      <li>Interactive conversion table with fiat switching and sorting</li>
      <li>Support for fractional amounts and real-time USD previews</li>
      <li>Client-side only operation for privacy and speed</li>
    </ul>
   
    <h2>FAQ</h2>
    <details>
      <summary>What data source powers the live prices?</summary>
      <p>The public CoinGecko API provides all real-time prices, rankings, and conversions directly in the browser.</p>
    </details>
    <details>
      <summary>Does the tool work offline?</summary>
      <p>Calculations work offline, but live data requires an internet connection for initial fetch and refreshes.</p>
    </details>
    <details>
      <summary>Why use USD equivalents for different cryptos?</summary>
      <p>It ensures accurate percentage changes reflect true value shifts rather than coin quantity differences.</p>
    </details>
   
    <p class="italic-note">Explore the other articles for deeper insights into specific features and functionality.</p>
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

  .prose details {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    padding: 1.25rem;
    margin-bottom: 1rem;
    transition: background 0.3s ease;
  }

  .prose details[open] {
    background: rgba(247, 94, 37, 0.08); /* subtle accent tint */
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--color-accent);
    list-style: none;
    padding: 0.5rem 0;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--color-accent);
    font-weight: bold;
    display: inline-block;
    width: 1.2em;
    text-align: center;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 3px solid var(--color-accent);
    color: var(--color-text-muted);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--color-text-muted);
    text-align: center;
    margin-top: 3rem;
    font-size: 1.1rem;
  }
</style>