// index.js

function loadApp(appName) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://clockkit.vercel.app/?app=${appName}`);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    document.body.appendChild(iframe);
}

module.exports = { loadApp };
