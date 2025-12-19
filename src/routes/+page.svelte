<script>
    import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { fade, fly, slide } from 'svelte/transition';
  import { 
    topCryptos, oldAmount, newAmount, oldCrypto, newCrypto, 
    percentageChange, error, warning, copyResult, loadData, 
    prices, tableData, tableSettings, sortDir, fiatCurrencies, 
    loading, loadError 
  } from '../lib/calculator.store.js';

  let formSubmitted = false;

  onMount(async () => {
    try { 
      await loadData(); 
    } catch (e) { 
      console.error('Error in onMount:', e); 
    }
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (get(newCrypto) === '') newCrypto.set(get(oldCrypto));
    formSubmitted = true;
  }

  function toggleSort() {
    sortDir.update(dir => dir === 'desc' ? 'asc' : 'desc');
  }

  function swap(index) {
    tableSettings.update(settings => {
      settings[index].swapped = !settings[index].swapped;
      return [...settings];
    });
  }

  function refreshData() {
    loadData();
  }
</script>

<svelte:head>
  <title>Crypto Price Change Calculator | Live Delta Tool</title>
  <meta name="description" content="Free client-side calculator for cryptocurrency percentage changes with live CoinGecko data. Supports top 10 cryptos, cross-asset USD normalization, interactive conversion table, and satoshi precision." />
  <meta name="keywords" content="crypto price calculator, percentage change crypto, bitcoin delta tool, live crypto prices, coingecko api tool, cryptocurrency converter" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Crypto Price Change Calculator | Real-Time Delta Insights" />
  <meta property="og:description" content="Compute accurate crypto percentage changes using live market data. Features top 10 rankings, multi-fiat table, and precision for small amounts." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{base}/" />
  <meta property="og:image" content="{base}/og-image.jpg" /> <!-- Assume you add an OG image -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Crypto Price Change Calculator" />
  <meta name="twitter:description" content="Instant crypto deltas with live prices – client-side, private, and precise." />
</svelte:head>

<div class="container py-5 mt-5">
  <div class="row justify-content-center mb-5" in:fade={{ duration: 800 }}>
    <div class="col-lg-6">
      <div class="text-center mb-5" in:fly={{ y: -20, duration: 800 }}>
        <h1 class="display-4 fw-800" style="color: var(--color-accent); letter-spacing: -2px;">Crypto Delta</h1>
        <p class="text-muted">Calculate market shifts with bubbly precision.</p>
      </div>

      <div class="glass-card p-4 p-md-5 mb-4" in:fly={{ y: 40, duration: 1000 }}>
        <form on:submit={handleSubmit}>
          <div class="mb-4">
            <label for="oldAmount" class="form-label fw-bold small text-uppercase tracking-wider">Starting Investment</label>
            <div class="input-group bubbly-group">
              <input type="number" class="form-control" id="oldAmount" bind:value={$oldAmount} step="any" min="0" required />
              <select bind:value={$oldCrypto} class="form-select" style="max-width: 130px;" aria-label="Select starting cryptocurrency">
                {#if $loading}
                  <option>...</option>
                {:else}
                  {#each $topCryptos as crypto}
                    <option value={crypto.id}>{crypto.symbol.toUpperCase()}</option>
                  {/each}
                {/if}
              </select>
            </div>
            {#if $oldCrypto && $prices[$oldCrypto] && !$loading}
              <small class="ps-3 text-muted">≈ {($oldAmount * $prices[$oldCrypto].usd).toLocaleString()} USD</small>
            {/if}
          </div>

          <div class="mb-4">
            <label for="newAmount" class="form-label fw-bold small text-uppercase tracking-wider">New Portfolio Value</label>
            <div class="input-group bubbly-group">
              <input type="number" class="form-control" id="newAmount" bind:value={$newAmount} step="any" min="0" required />
              <select bind:value={$newCrypto} class="form-select" style="max-width: 130px;" aria-label="Select target cryptocurrency">
                <option value="">Same</option>
                {#each $topCryptos as crypto}
                  <option value={crypto.id}>{crypto.symbol.toUpperCase()}</option>
                {/each}
              </select>
            </div>
            {#if $newCrypto && $prices[$newCrypto] && !$loading}
               <small class="ps-3 text-muted">≈ {($newAmount * $prices[$newCrypto].usd).toLocaleString()} USD</small>
            {/if}
          </div>

          <button type="submit" class="btn btn-primary w-100 py-3 mb-3 shadow-sm">Calculate Change</button>
        </form>

        {#if formSubmitted}
          {#if $error}
            <div class="alert alert-danger bubbly-alert mt-2" transition:slide>{$error}</div>
          {/if}
          {#if $percentageChange && !$error}
            <div class="alert glass-card border-0 d-flex justify-content-between align-items-center mt-3" transition:fade>
              <div class="d-flex flex-column">
                <span class="small text-muted">Resulting Change</span>
                <span class="fs-3 fw-bold {$percentageChange.startsWith('-') ? 'text-danger' : 'text-success'}">
                  {$percentageChange}
                </span>
              </div>
              <button class="btn btn-outline-secondary btn-sm rounded-pill px-3" on:click={copyResult}>Copy</button>
            </div>
          {/if}
        {/if}
        
        <button class="btn btn-link w-100 mt-3 text-decoration-none small" style="color: var(--color-accent);" on:click={refreshData}>
          <i class="bi bi-arrow-clockwise"></i> Refresh Live Data
        </button>
      </div>
    </div>
  </div>

  <div class="row mb-5" in:fade={{ delay: 400 }}>
    <div class="col-12">
      <div class="glass-card p-4">
        <div class="d-flex justify-content-between align-items-center mb-4 px-2">
          <h2 class="h4 fw-bold mb-0">Live Market <span class="text-muted fw-normal" style="font-size: 0.9rem;">(Top 10)</span></h2>
          <button class="btn btn-primary btn-sm px-3" on:click={refreshData} aria-label="Sync market data">
            <i class="bi bi-lightning-charge-fill"></i> Sync
          </button>
        </div>

        {#if $loading}
          <div class="text-center py-5">
            <div class="spinner-border" style="color: var(--color-accent);" role="status"></div>
            <p class="mt-2 text-muted">Fetching prices...</p>
          </div>
        {:else if $loadError}
          <div class="alert alert-warning bubbly-alert">{$loadError}</div>
        {:else}
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead>
                <tr class="text-muted small text-uppercase">
                  <th class="border-0 ps-4">Crypto</th>
                  <th class="border-0">Conversion</th>
                  <th class="border-0 text-center">Currency</th>
                  <th class="border-0 text-center">Swap</th>
                  <th class="border-0 text-end pe-4">
                    Value 
                    <button class="btn btn-link p-0 text-decoration-none" on:click={toggleSort} style="color: var(--color-accent);" aria-label="Sort table">
                      {$sortDir === 'desc' ? '↓' : '↑'}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {#each $tableData as row (row.index)}
                  <tr transition:fade>
                    <td class="ps-4 fw-bold text-gradient">{row.name}</td>
                    <td class="font-monospace small">{row.left} = {row.right}</td>
                    <td>
                      <select class="form-select form-select-sm mx-auto" style="max-width: 90px; border-radius: 12px !important;" bind:value={$tableSettings[row.index].fiat} aria-label="Select fiat currency">
                        {#each fiatCurrencies as f}
                          <option value={f}>{f.toUpperCase()}</option>
                        {/each}
                      </select>
                    </td>
                    <td class="text-center">
                      <button 
                        class="btn btn-sm btn-outline-accent" 
                        on:click={() => swap(row.index)}
                        aria-label="Swap conversion order"
                      >
                        <i class="bi bi-arrow-left-right"></i>
                      </button>
                    </td>
                    <td class="text-end pe-4 fw-bold font-monospace">
                      {row.value.toFixed(row.swapped ? 8 : 2)}
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {/if}
      </div>
    </div>
  </div>

<div class="row g-4 mb-5" in:fade={{ delay: 600 }}>
  <div class="col-md-4" id="about">
    <div class="glass-card p-4 h-100 shadow-lg border-0">
      <h3 class="h5 fw-bold mb-3" style="color: var(--color-accent);">
        <i class="bi bi-info-circle-fill me-2"></i>About the Crypto Price Change Calculator
      </h3>
      <p class="small text-muted lh-lg mb-0">
        Launched in late 2025, the Crypto Price Change Calculator is a sophisticated, fully client-side web utility engineered for precision in cryptocurrency analysis. It empowers users to compute accurate percentage changes between any two holdings from the live top 10 by market cap (Bitcoin currently ~$87,000 USD as of December 19, 2025). 
        <br><br>
        Featuring automatic USD normalization for cross-asset comparisons, an interactive multi-fiat conversion table (USD/EUR/GBP with per-row swapping and sorting), satoshi-level precision, real-time previews, and robust warnings, it delivers professional insights without any data collection. 
        <br><br>
        Built as a stateless static site with SvelteKit and deployed on GitHub Pages, all dynamic features run seamlessly in your browser via CoinGecko's public API – ensuring speed, privacy, and global accessibility.
      </p>
    </div>
  </div>

  <div class="col-md-4" id="how-to-use">
    <div class="glass-card p-4 h-100 shadow-lg border-0">
      <h3 class="h5 fw-bold mb-3" style="color: var(--color-accent);">
        <i class="bi bi-controller me-2"></i>How to Use
      </h3>
      <p class="small text-muted lh-lg mb-0">
        Enter your <strong>Old Amount</strong> and <strong>New Amount</strong> with full decimal precision (e.g., 0.0000025 BTC). Select cryptocurrencies from the live top 10 dropdowns – the new defaults to the old for convenience.
        <br><br>
        Instant USD previews update as you type. Click <strong>Calculate</strong> for the percentage delta (auto-converted to USD if different coins). Results include warnings for >50% drops and a copy button.
        <br><br>
        Below, explore the <strong>Live Conversion Table</strong>: switch fiats per row, click <strong>Swap</strong> to reverse direction (up to 8 decimals), and sort by value. Hit <strong>Refresh Live Data</strong> anytime for fresh market rates.
        <br><br>
        Perfect for portfolio tracking, trade evaluation, or sat-stacking analysis – all client-side, private, and lightning-fast.
      </p>
    </div>
  </div>

  <div class="col-md-4" id="faq">
    <div class="glass-card p-4 h-100 shadow-lg border-0">
      <h3 class="h5 fw-bold mb-3" style="color: var(--color-accent);">
        <i class="bi bi-patch-question-fill me-2"></i>FAQ Highlights
      </h3>
      <p class="small text-muted lh-lg mb-0">
        <strong>Data source:</strong> CoinGecko public API – reliable aggregated prices.<br><br>
        <strong>Update frequency:</strong> On page load or manual refresh.<br><br>
        <strong>Cross-coin accuracy:</strong> USD normalization ensures true value-based percentages.<br><br>
        <strong>Offline capable:</strong> Core calculations work without internet; live features need connection.<br><br>
        <strong>Precision:</strong> Unlimited decimals for satoshis and micro-holdings.<br><br>
        <strong>Privacy:</strong> Zero tracking, cookies, or data collection.<br><br>
        <strong>Deployment:</strong> Static on GitHub Pages – live features fully functional via client-side API calls.<br><br>
        <strong>Not financial advice:</strong> Informational tool only.
      </p>
    </div>
  </div>
</div>

</div>
<style>
  .fw-800 { font-weight: 800; }
  .tracking-wider { letter-spacing: 0.08em; }
  
  .bubbly-group {
    background: var(--input-bg);
    border-radius: 50px;
    padding: 4px;
    border: 1px solid var(--glass-border);
  }

  .bubbly-alert {
    border-radius: 20px !important;
    border: none;
    box-shadow: var(--glass-shadow);
  }

  .btn-outline-accent {
    color: var(--color-accent);
    border-color: var(--color-accent);
    border-radius: 12px !important;
  }

  .btn-outline-accent:hover {
    background-color: var(--color-accent);
    color: white;
  }

  .table-hover tbody tr:hover {
    background-color: rgba(247, 94, 37, 0.03);
    transition: background-color 0.2s ease;
  }

  .text-gradient {
    background: linear-gradient(135deg, var(--color-accent), #ff8c5f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  :global([data-bs-theme="dark"]) .table-hover tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
</style>