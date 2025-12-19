<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Deploying as a Static Site on GitHub Pages | Crypto Delta Blog</title>
  <meta name="description" content="Explore why the Crypto Price Change Calculator's live features work perfectly when deployed as a static site on platforms like GitHub Pages." />
  <meta property="og:title" content="Deploying as a Static Site on GitHub Pages | Crypto Delta Blog" />
  <meta property="og:description" content="Explore why the Crypto Price Change Calculator's live features work perfectly when deployed as a static site on platforms like GitHub Pages." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Deploying as a Static Site on GitHub Pages</p>
  </div>

  <article class="prose">
    <h1>Deploying as a Static Site on GitHub Pages</h1>
   
    <p class="post-meta">Published: December 19, 2025</p>
   
    <p>One of the strengths of the Crypto Price Change Calculator is its ability to deliver live, dynamic functionality while remaining a completely static site. This design choice enables easy deployment on free hosting platforms like GitHub Pages without any server requirements.</p>
   
    <p>Static sites consist purely of HTML, CSS, and JavaScript files served directly to visitors. Traditional dynamic features requiring databases or backend processing would not work in this environment. However, the calculator's live data comes exclusively from client-side API calls executed in the user's browser.</p>
   
    <p>All interactions with CoinGecko occur via native fetch requests after the page loads. This means rankings, prices, and conversions update dynamically on the client device, not during site build time. GitHub Pages serves the static bundle, and the browser handles all real-time behavior.</p>
   
    <p>Base path handling through SvelteKit ensures internal links work correctly whether deployed at a repository root or subdirectory. The application builds with the static adapter, producing a fully self-contained output ready for any static host.</p>
   
    <p>No environment variables, server secrets, or backend services are needed. This simplifies deployment to a simple git push, with GitHub automatically building and publishing the site.</p>
   
    <p>The absence of server-side logic enhances privacy and security: no user data ever leaves the browser except the necessary public API requests for market information. Performance benefits from edge caching of static assets worldwide.</p>
   
    <p>Live features remain fully functional post-deployment. Page loads trigger fresh API calls, the refresh button works identically, and all reactive updates occur instantly in the browser.</p>
   
    <p>This architecture proves that sophisticated, real-time applications can thrive in static environments when designed around client-side data fetching. It combines the reliability and low cost of static hosting with the richness of live market data.</p>
   
    <p>Users worldwide access the same up-to-date experience regardless of hosting location, limited only by their internet connection for API calls.</p>
   
    <h2>Benefits of Static Deployment</h2>
    <ul>
      <li>Free and instant hosting via GitHub Pages</li>
      <li>Full live functionality through client-side API calls</li>
      <li>Excellent performance and global caching</li>
      <li>Enhanced privacy with no server data collection</li>
      <li>Simple deployment and maintenance</li>
    </ul>
   
    <h2>FAQ</h2>
    <details>
      <summary>Do live prices update on GitHub Pages?</summary>
      <p>Yes, every page visit or refresh fetches current data in the browser.</p>
    </details>
    <details>
      <summary>Is any backend required?</summary>
      <p>No, everything runs client-side after static files load.</p>
    </details>
    <details>
      <summary>Why choose static over dynamic hosting?</summary>
      <p>It reduces costs, complexity, and points of failure while maintaining rich features.</p>
    </details>
   
    <p class="italic-note">Static deployment proves modern web applications can be both powerful and simple to host.</p>
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