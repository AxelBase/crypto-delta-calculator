<script lang="ts">
  import { base } from '$app/paths';
  import { slide, fly } from 'svelte/transition';
  import '../app.css';

  const currentYear = new Date().getFullYear();

  let isDropdownOpen = false;

  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }

  function toggleTheme() {
    const current = document.body.dataset.bsTheme;
    document.body.dataset.bsTheme = current === 'dark' ? 'light' : 'dark';
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1050;">
  <nav class="container nav-pill-custom rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none logo-group">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" style="height: 32px; transition: transform 0.3s;" />
        <span class="fw-extrabold fs-5 d-none d-sm-inline" style="color: var(--color-accent); letter-spacing: -1px;">AxelBase</span>
      </a>

      <button
        class="btn btn-link text-muted p-2 theme-toggle"
        on:click={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <i class="bi bi-moon-stars-fill fs-5"></i>
      </button>

      <!-- Buy Me a Coffee Dropdown (from File 1 style + bitcoin) -->
      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <i class="bi bi-cup-hot-fill"></i>
          <span class="d-none d-md-inline fw-semibold">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div 
            class="bmac-dropdown glass-card mt-2 p-2"
            transition:fly={{ y: -10, duration: 250 }}
          >
            <a 
              href="https://buymeacoffee.com/axelbase" 
              target="_blank" 
              rel="noopener" 
              on:click={closeDropdown}
              class="donation-item"
            >
              <span class="amount">$3</span> One Coffee
            </a>
            <a 
              href="https://buymeacoffee.com/axelbase" 
              target="_blank" 
              rel="noopener" 
              on:click={closeDropdown}
              class="donation-item"
            >
              <span class="amount">$5</span> Two Coffees
            </a>
            <a 
              href="https://buymeacoffee.com/axelbase" 
              target="_blank" 
              rel="noopener" 
              on:click={closeDropdown}
              class="donation-item"
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a 
              href="https://buymeacoffee.com/axelbase" 
              target="_blank" 
              rel="noopener" 
              on:click={closeDropdown}
              class="donation-item custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="donation-item custom-amount bitcoin-option"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav d-none d-lg-flex align-items-center gap-2">
      <li><a class="nav-link-custom" href="{base}/">Home</a></li>
      <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
      <li><a class="nav-link-custom" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
      <li><a class="btn btn-primary btn-sm px-3 ms-2" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<slot />

<footer class="releative glass-card rounded-0 border-0 border-top py-2" style="border-radius: 0 !important; z-index: 1000;">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted">
    <span>© {currentYear} AxelBase Crypto Calculator</span>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="text-decoration-none text-muted hover-accent">Privacy</a>
      <a href="{base}/terms" class="text-decoration-none text-muted hover-accent">Terms</a>
    </div>
  </div>
</footer>

<style>
  .logo-group:hover img { transform: rotate(15deg) scale(1.2); }

  /* ── Buy Me a Coffee Button ── */
  .bmac-button {
    background: var(--brand-green, #008f39);
    font-size: 0.92rem;
    transition: all 0.3s ease;
    box-shadow: 0 3px 12px rgba(0, 143, 57, 0.25);
  }

  .bmac-button:hover {
    background: var(--brand-green-hover, #00732f);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 143, 57, 0.35);
  }

  /* ── Dropdown ── */
  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    z-index: 1100;
    overflow: hidden;
    border-radius: 16px;
  }

  .donation-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 18px;
    color: var(--color-text-main);
    text-decoration: none;
    font-size: 0.96rem;
    transition: all 0.2s ease;
  }

  .donation-item:hover {
    background: rgba(247, 94, 37, 0.08);
    color: var(--color-accent);
    padding-left: 24px;
  }

  .amount {
    font-weight: 800;
    color: var(--color-accent);
    min-width: 50px;
    text-align: right;
  }

  .custom-amount {
    font-weight: 700;
    color: var(--color-accent);
    border-top: 1px solid rgba(247, 94, 37, 0.15);
    justify-content: center !important;
    padding: 12px !important;
  }

  .bitcoin-option {
    color: #f7931a !important;
    font-weight: 700;
  }

  .bitcoin-option:hover {
    background: rgba(249, 165, 36, 0.12) !important;
  }

  /* Keep your existing styles */
  .nav-link-custom {
    color: var(--color-text-main);
    text-decoration: none;
    font-weight: 600;
    padding: 8px 15px;
    border-radius: 20px;
    transition: 0.3s;
  }

  .nav-link-custom:hover {
    color: var(--color-accent);
    background: rgba(247, 94, 37, 0.05);
  }

  .hover-accent:hover {
    color: var(--color-accent) !important;
  }
</style>