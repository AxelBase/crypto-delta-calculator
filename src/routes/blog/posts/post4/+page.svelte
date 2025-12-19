<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding the Live Conversion Table | Crypto Delta Blog</title>
  <meta name="description" content="Dive into the interactive live conversion table in the Crypto Price Change Calculator, featuring top 10 cryptocurrencies with customizable fiat views and sorting." />
  <meta property="og:title" content="Understanding the Live Conversion Table | Crypto Delta Blog" />
  <meta property="og:description" content="Dive into the interactive live conversion table in the Crypto Price Change Calculator, featuring top 10 cryptocurrencies with customizable fiat views and sorting." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding the Live Conversion Table</p>
  </div>

  <article class="prose">
    <h1>Understanding the Live Conversion Table</h1>
   
    <p class="post-meta">Published: December 19, 2025</p>
   
    <p>The live conversion table is a central feature of the Crypto Price Change Calculator, providing an at-a-glance view of current exchange rates for the top 10 cryptocurrencies by market capitalization. Positioned below the main calculator, it updates automatically with fresh data from CoinGecko whenever the page loads or the refresh button is used.</p>
   
    <p>Each row represents one cryptocurrency from the current top 10 list, displaying its full name alongside the real-time conversion rate. The table supports three major fiat currencies: USD, EUR, and GBP, allowing users to switch currencies independently for each row via a dropdown menu.</p>
   
    <p>A unique swap button on every row toggles the conversion direction. By default, it shows one unit of the cryptocurrency equivalent in the selected fiat (for example, 1 BTC equals approximately 87,000 USD). Clicking swap reverses this to display how much of the cryptocurrency one unit of fiat buys (for example, 1 USD equals about 0.00001149 BTC).</p>
   
    <p>The value column reflects the active conversion and updates instantly when currency or direction changes. Formatting adjusts dynamically: fiat values show two decimal places for readability, while cryptocurrency amounts in swapped mode use up to eight decimals to accommodate small fractions accurately.</p>
   
    <p>Sorting functionality enhances usability. Clicking the value header arrow toggles between descending and ascending order, instantly reordering rows based on the current conversion value. This helps identify strongest performers or compare relative strengths across different fiat perspectives quickly.</p>
   
    <p>All interactions are reactive and client-side, meaning changes happen without page reloads. The underlying data comes from the same API calls that power the calculator dropdowns, ensuring consistency across the entire application.</p>
   
    <p>Loading states with clear spinners appear while data fetches, and meaningful error messages display if connectivity issues or rate limits prevent updates. This transparency keeps users informed during brief delays.</p>
   
    <p>The table serves multiple purposes: quick reference for current prices, cross-fiat comparisons, and exploration of market rankings as they shift over time. As new cryptocurrencies enter or exit the top 10, the table reflects these changes on the next refresh.</p>
   
    <p>Combined with per-row customization, this flexibility makes the table a powerful companion to the core percentage calculator, offering broader market context in a compact, interactive format.</p>
   
    <h2>Table Features Summary</h2>
    <ul>
      <li>Live top 10 rankings from CoinGecko</li>
      <li>Independent fiat currency selection per row</li>
      <li>Instant swap between crypto-to-fiat and fiat-to-crypto</li>
      <li>Dynamic sorting by conversion value</li>
      <li>Responsive updates without reloads</li>
    </ul>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why can I change currency per row instead of globally?</summary>
      <p>It allows simultaneous comparison across different fiat perspectives in one view.</p>
    </details>
    <details>
      <summary>How precise are the swapped values?</summary>
      <p>Up to eight decimal places, suitable for small cryptocurrency amounts.</p>
    </details>
    <details>
      <summary>Does sorting affect the calculator?</summary>
      <p>No, sorting is visual only and does not change dropdown order or calculations.</p>
    </details>
   
    <p class="italic-note">This interactive table turns raw market data into an accessible, customizable dashboard.</p>
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