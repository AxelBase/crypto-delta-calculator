import { writable, derived, get } from 'svelte/store';

const apiBase = 'https://api.coingecko.com/api/v3';

async function fetchTop10() {
  try {
    console.log('Starting fetchTop10');
    const res = await fetch(`${apiBase}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`);
    if (!res.ok) {
      if (res.status === 429) throw new Error('Rate limit exceeded. Try again later.');
      throw new Error(`API error: ${res.status}`);
    }
    const data = await res.json();
    console.log('fetchTop10 success:', data.length);
    return data;
  } catch (e) {
    console.error('Error in fetchTop10:', e);
    return [];
  }
}

async function fetchPrices(ids) {
  try {
    console.log('Starting fetchPrices for ids:', ids);
    const res = await fetch(`${apiBase}/simple/price?ids=${ids.join(',')}&vs_currencies=usd,eur,gbp`);
    if (!res.ok) {
      if (res.status === 429) throw new Error('Rate limit exceeded. Try again later.');
      throw new Error(`API error: ${res.status}`);
    }
    const data = await res.json();
    console.log('fetchPrices success:', Object.keys(data));
    return data;
  } catch (e) {
    console.error('Error in fetchPrices:', e);
    return {};
  }
}

export const topCryptos = writable([]);
export const prices = writable({});
export const fiatCurrencies = ['usd', 'eur', 'gbp'];
export const oldAmount = writable(0);
export const newAmount = writable(0);
export const oldCrypto = writable('');
export const newCrypto = writable('');
export const error = writable('');
export const warning = writable('');
export const tableSettings = writable([]);
export const sortDir = writable('desc');
export const loading = writable(true);  // New: loading state
export const loadError = writable('');  // New: specific load error

export const loadData = async () => {
  try {
    loading.set(true);
    console.log('Starting loadData');
    const cryptos = await fetchTop10();
    if (cryptos.length === 0) {
      throw new Error('No top cryptos fetched.');
    }
    const ids = cryptos.map(c => c.id);
    const priceData = await fetchPrices(ids);
    if (Object.keys(priceData).length === 0) {
      throw new Error('No prices fetched.');
    }
    topCryptos.set(cryptos);
    prices.set(priceData);
    tableSettings.set(cryptos.map(() => ({ fiat: 'usd', swapped: false })));
    if (!get(oldCrypto)) oldCrypto.set(cryptos[0].id);
    console.log('loadData success');
  } catch (e) {
    console.error('Error in loadData:', e);
    loadError.set(e.message || 'Failed to load live data. Please try refreshing.');
  } finally {
    loading.set(false);
  }
};

export const oldUsd = derived([oldAmount, oldCrypto, prices], ([$oldAmount, $oldCrypto, $prices]) => {
  try {
    console.log('Computing oldUsd');
    const price = $prices[$oldCrypto]?.usd || 0;
    return $oldAmount * price;
  } catch (e) {
    console.error('Error in oldUsd derived:', e);
    return 0;
  }
});

export const newUsd = derived([newAmount, newCrypto, prices], ([$newAmount, $newCrypto, $prices]) => {
  try {
    console.log('Computing newUsd');
    const price = $prices[$newCrypto]?.usd || 0;
    return $newAmount * price;
  } catch (e) {
    console.error('Error in newUsd derived:', e);
    return 0;
  }
});

export const percentageChange = derived([oldUsd, newUsd], ([$oldUsd, $newUsd]) => {
  try {
    console.log('Computing percentageChange');
    error.set('');
    warning.set('');
    if (isNaN($oldUsd) || isNaN($newUsd)) {
      error.set('Prices must be valid numbers.');
      return '';
    }
    if ($oldUsd === 0) {
      error.set('Old price cannot be zero.');
      return '';
    }
    const change = (($newUsd - $oldUsd) / $oldUsd) * 100;
    const formatted = `${change > 0 ? '+' : ''}${change.toFixed(2)}%`;
    if (change <= -50) {
      warning.set('⚠️ Warning: This represents a significant price drop (>50%). Double-check your inputs.');
    }
    return formatted;
  } catch (e) {
    console.error('Error in percentageChange derived:', e);
    return '';
  }
});

export function copyResult() {
  try {
    console.log('Starting copyResult');
    const currentResult = get(percentageChange);
    const currentError = get(error);
    if (currentResult && !currentError) {
      navigator.clipboard.writeText(currentResult)
        .then(() => console.log('Copied successfully'))
        .catch((err) => console.error('Copy failed:', err));
    }
  } catch (e) {
    console.error('Error in copyResult:', e);
  }
}

export const tableData = derived([topCryptos, prices, tableSettings, sortDir], ([$topCryptos, $prices, $tableSettings, $sortDir]) => {
  try {
    console.log('Computing tableData');
    return $topCryptos.map((crypto, i) => {
      const set = $tableSettings[i];
      const price = $prices[crypto.id]?.[set.fiat] || 0;
      let value = set.swapped ? (1 / price || 0) : price;
      let left = set.swapped ? `1 ${set.fiat.toUpperCase()}` : `1 ${crypto.symbol.toUpperCase()}`;
      let right = set.swapped ? `${value.toFixed(8)} ${crypto.symbol.toUpperCase()}` : `${price.toFixed(2)} ${set.fiat.toUpperCase()}`;
      return { ...crypto, value, left, right, fiat: set.fiat, swapped: set.swapped, index: i };
    }).sort((a, b) => $sortDir === 'desc' ? b.value - a.value : a.value - b.value);
  } catch (e) {
    console.error('Error in tableData derived:', e);
    return [];
  }
});