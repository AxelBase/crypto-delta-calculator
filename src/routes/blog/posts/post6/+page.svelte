<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Error Handling and Rate Limit Resilience | Crypto Delta Blog</title>
  <meta name="description" content="Discover how the Crypto Price Change Calculator manages API errors, rate limits, and invalid inputs to maintain a smooth user experience." />
  <meta property="og:title" content="Error Handling and Rate Limit Resilience | Crypto Delta Blog" />
  <meta property="og:description" content="Discover how the Crypto Price Change Calculator manages API errors, rate limits, and invalid inputs to maintain a smooth user experience." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Error Handling and Rate Limit Resilience</p>
  </div>

  <article class="prose">
    <h1>Error Handling and Rate Limit Resilience</h1>
   
    <p class="post-meta">Published: December 19, 2025</p>
   
    <p>Working with live external APIs introduces potential points of failure. The Crypto Price Change Calculator implements comprehensive error handling to ensure reliability even when network conditions or API limits interfere with normal operation.</p>
   
    <p>All API calls to CoinGecko are wrapped in try-catch blocks with detailed console logging for traceability. When requests fail due to network issues, timeouts, or HTTP errors, meaningful messages display to users rather than cryptic failures.</p>
   
    <p>Rate limiting is specifically detected: responses with status 429 trigger targeted messaging advising users to wait before retrying. This respects CoinGecko's public endpoint limits while keeping users informed.</p>
   
    <p>Loading states with animated spinners appear during data fetches, preventing interaction until complete. If loading fails, dedicated error alerts replace spinners, explaining the issue and suggesting refresh attempts.</p>
   
    <p>Input validation occurs at multiple levels. Browser-native required attributes catch empty fields, while client-side checks prevent calculation with invalid numbers or zero old values. Clear red alerts explain exactly what needs correction.</p>
   
    <p>A prominent warning system highlights potentially mistaken results, such as percentage drops exceeding 50 percent. This orange alert encourages double-checking inputs without blocking functionality.</p>
   
    <p>The application degrades gracefully: if live data cannot load, core percentage calculations remain available using manually entered values. Dropdowns show loading or error placeholders, but inputs stay usable.</p>
   
    <p>All interactive elements include try-catch wrappers to prevent unhandled exceptions from crashing the interface. Console logs provide detailed traces for any issues that reach catch blocks.</p>
   
    <p>These measures combine to create a resilient experience suitable for real-world use, where internet connectivity and API availability can vary.</p>
   
    <h2>Key Resilience Features</h2>
    <ul>
      <li>Specific rate limit detection and messaging</li>
      <li>Clear user-facing error alerts</li>
      <li>Graceful degradation without live data</li>
      <li>Comprehensive input validation</li>
      <li>Warning system for large drops</li>
    </ul>
   
    <h2>FAQ</h2>
    <details>
      <summary>What should I do if I see a rate limit message?</summary>
      <p>Wait a minute or two, then click Refresh Live Data again.</p>
    </details>
    <details>
      <summary>Can I still calculate without live data?</summary>
      <p>Yes, enter amounts manually and submit—the percentage works independently.</p>
    </details>
    <details>
      <summary>Why the 50 percent drop warning?</summary>
      <p>It helps catch common input mistakes that would produce extreme results.</p>
    </details>
   
    <p class="italic-note">Robust error handling ensures the tool remains useful under imperfect conditions.</p>
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