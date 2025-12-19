<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Introduction to the Crypto Price Change Calculator', description: 'Discover how this client-side tool helps you quickly compute percentage changes in cryptocurrency holdings using live market data.' },
    { href: '/blog/posts/post2', title: 'How Live Price Fetching Works with CoinGecko API', description: 'Explore the client-side integration of CoinGecko’s public API to retrieve real-time prices and top 10 rankings without any backend.' },
    { href: '/blog/posts/post3', title: 'Calculating Percentage Changes Across Different Cryptos', description: 'Learn how the calculator automatically converts amounts to USD equivalents when comparing different cryptocurrencies for accurate delta results.' },
    { href: '/blog/posts/post4', title: 'Understanding the Live Conversion Table', description: 'A deep dive into the dynamic top 10 crypto table, including fiat switching, swapping directions, and live sorting by value.' },
    { href: '/blog/posts/post5', title: 'Handling Small Amounts and Satoshi-Level Precision', description: 'See how the tool supports tiny fractional amounts (e.g., 0.0000025 BTC) with precise live USD conversions and warnings for large drops.' },
    { href: '/blog/posts/post6', title: 'Error Handling and Rate Limit Resilience', description: 'Details on built-in loading states, error messages, and graceful degradation when API calls fail or hit CoinGecko rate limits.' },
    { href: '/blog/posts/post7', title: 'Deploying as a Static Site on GitHub Pages', description: 'Why all dynamic features continue to work perfectly on static hosting platforms like GitHub Pages through browser-based API calls.' },
  ];
</script>

<svelte:head>
  <title>Blog | Crypto Delta Insights</title>
  <meta name="description" content="In-depth articles, technical guides, and updates about the Crypto Price Change Calculator – a live, client-side cryptocurrency delta tool." />
</svelte:head>

<div class="container fade-in blog-index" style="padding-top: 100px;">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: Crypto Delta Insights</h1>
    <p class="subtitle">
      Technical deep dives, usage guides, and feature explanations for the Crypto Price Change Calculator. Powered by live CoinGecko data and fully static deployment.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: var(--color-text-main);
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--color-text-muted);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 30px;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
    box-shadow: var(--glass-shadow);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .post-card .card-body {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }

  .post-description {
    color: var(--color-text-muted);
    flex-grow: 1;
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .read-more {
    color: var(--color-accent);
    font-weight: 600;
    align-self: flex-start;
    transition: transform 0.3s ease;
  }

  .post-card:hover .read-more {
    transform: translateX(8px);
  }
</style>