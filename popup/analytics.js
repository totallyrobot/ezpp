/* eslint-disable */

window._gaq = [];

if (__DEV__) {
  window._gaq.push = (data) => {
    console.log('Analytics event:', JSON.stringify(data, null, 2));
  }
}

const analyticsToggle = document.getElementById('analytics-toggle');

chrome.storage.local.get(['analytics'], ({ analytics }) => {
  const uninitialized = typeof analytics === 'undefined'

  if (uninitialized) {
    // Turn analytics off by default on firefox
    chrome.storage.local.set({
      analytics: !__FIREFOX__,
    })
  }

  // By default don't inject analytics on Firefox. Disables analytics when developing.
  const shouldInjectAnalytics = false

  analyticsToggle.checked = shouldInjectAnalytics;

  if (shouldInjectAnalytics) {
    ;
  }
})