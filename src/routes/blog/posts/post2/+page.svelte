<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How Live Price Fetching Works with CoinGecko API | Crypto Delta Blog</title>
  <meta name="description" content="Understand how the Crypto Price Change Calculator retrieves real-time cryptocurrency prices and rankings using the CoinGecko public API in a client-side environment." />
  <meta property="og:title" content="How Live Price Fetching Works with CoinGecko API | Crypto Delta Blog" />
  <meta property="og:description" content="Understand how the Crypto Price Change Calculator retrieves real-time cryptocurrency prices and rankings using the CoinGecko public API in a client-side environment." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How Live Price Fetching Works with CoinGecko API</p>
  </div>

  <article class="prose">
    <h1>How Live Price Fetching Works with CoinGecko API</h1>
   
    <p class="post-meta">Published: December 19, 2025</p>
   
    <p>The Crypto Price Change Calculator relies on real-time market data to provide accurate conversions and rankings. This is achieved through direct client-side calls to the CoinGecko public API, eliminating the need for any backend infrastructure.</p>
   
    <p>Upon page load or when the user clicks the Refresh Live Data button, the application initiates two primary API requests. The first fetches the top 10 cryptocurrencies by market capitalization, ordered descending, along with basic metadata like symbols and names. This ensures the dropdown selections and table always reflect current leaders, such as Bitcoin typically holding the top spot around 87,000 USD as of late 2025.</p>
   
    <p>The second request retrieves current prices for these coins in multiple fiat currencies: USD, EUR, and GBP. These endpoints are lightweight and optimized for browser use, returning JSON data that the application parses immediately.</p>
   
    <p>All fetching uses the native browser fetch API, executed asynchronously to avoid blocking the user interface. Loading states with spinners appear while data is retrieved, providing visual feedback during the brief wait.</p>
   
    <p>CoinGecko's public API imposes rate limits of approximately 30 calls per minute for demo usage, varying with global traffic. The calculator makes only two calls per refresh, staying well within limits even under frequent use. In cases of temporary rate limiting or network issues, clear error messages display, encouraging users to retry shortly.</p>
   
    <p>Data from these calls populates reactive stores, automatically updating the UI elements. Dropdown options for cryptocurrency selection draw from the top 10 list, while the conversion table uses the price data for real-time calculations.</p>
   
    <p>This client-side approach ensures privacy, as no user data is transmitted beyond the necessary API requests for public market information. It also enables full functionality on static hosting, where server-side logic is unavailable.</p>
   
    <p>The API responses include precise pricing down to multiple decimal places, supporting accurate conversions for small amounts like satoshis in Bitcoin or tiny fractions of other coins.</p>
   
    <p>By leveraging CoinGecko's reliable and comprehensive endpoints, the tool delivers up-to-date market insights without additional dependencies or complexity.</p>
   
    <h2>Technical Benefits</h2>
    <ul>
      <li>Direct browser-to-API communication for speed</li>
      <li>Automatic handling of API responses and errors</li>
      <li>Support for multiple fiat currencies in one call</li>
      <li>Dynamic rankings that adapt to market shifts</li>
      <li>Minimal bandwidth usage with targeted endpoints</li>
    </ul>
   
    <h2>FAQ</h2>
    <details>
      <summary>How often does the data update?</summary>
      <p>Data refreshes on page load or manual button press; CoinGecko caches values for a few minutes internally.</p>
    </details>
    <details>
      <summary>What happens if the API is unavailable?</summary>
      <p>An error message appears, and core calculations remain functional with last-known or manual entry.</p>
    </details>
    <details>
      <summary>Are API keys required?</summary>
      <p>No, the public endpoints used require no authentication.</p>
    </details>
   
    <p class="italic-note">This integration keeps the tool lightweight yet powerfully connected to live markets.</p>
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