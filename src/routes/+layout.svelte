<script lang="ts">
  import { base } from '$app/paths';
  import { slide, fade } from 'svelte/transition';
  import '../app.css';

  const paypalUsername = 'AxelLab427'; 
  const donationAmounts = [1, 3, 5, 10];
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
    
    <div class="d-flex align-items-center gap-2">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none logo-group">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" style="height: 32px; transition: transform 0.3s;" />
        <span class="fw-extrabold fs-5 d-none d-sm-inline" style="color: var(--color-accent); letter-spacing: -1px;">AxelBase</span>
      </a>

      <button 
        class="btn btn-link text-muted p-2 ms-2 theme-toggle" 
        on:click={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <i class="bi bi-moon-stars-fill fs-5"></i>
      </button>

      <div class="position-relative ms-2" use:clickOutside on:click_outside={closeDropdown}>
        <button class="btn btn-coffee d-flex align-items-center gap-2" on:click={toggleDropdown}>
          <i class="bi bi-cup-hot-fill"></i>
          <span class="d-none d-md-inline">Support</span>
        </button>
        {#if isDropdownOpen}
          <div class="dropdown-menu-custom glass-card p-2" transition:slide>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" rel="noreferrer" on:click={closeDropdown} class="donation-link">
                ${amount}
              </a>
            {/each}
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
    <span>© {new Date().getFullYear()} AxelBase Crypto Calculator</span>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="text-decoration-none text-muted hover-accent">Privacy</a>
      <a href="{base}/terms" class="text-decoration-none text-muted hover-accent">Terms</a>
    </div>
  </div>
</footer>

<style>
  .logo-group:hover img { transform: rotate(15deg) scale(1.2); }
  .btn-coffee { background: #FFDD00; color: #000; font-weight: 700; border-radius: 50px; font-size: 0.85rem; border: none; }
  .btn-coffee:hover { transform: translateY(-2px); background: #FFEA00; }
  
  .nav-link-custom { 
    color: var(--color-text-main); 
    text-decoration: none; 
    font-weight: 600; 
    padding: 8px 15px; 
    border-radius: 20px; 
    transition: 0.3s;
  }
  .nav-link-custom:hover { color: var(--color-accent); background: rgba(247, 94, 37, 0.05); }

  .dropdown-menu-custom { position: absolute; top: 110%; left: 0; min-width: 100px; display: flex; flex-direction: column; gap: 5px; z-index: 1100; }
  .donation-link { text-decoration: none; color: var(--color-accent); padding: 8px; text-align: center; border-radius: 15px; font-weight: 800; }
  .donation-link:hover { background: var(--color-accent); color: white; }
  
  :global([data-bs-theme="dark"]) .theme-toggle i { color: #facc15; }
  .hover-accent:hover { color: var(--color-accent) !important; }
</style>