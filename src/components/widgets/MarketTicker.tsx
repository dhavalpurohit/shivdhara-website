"use client";

export const MarketTicker = () => {
  const tickerUrl =
    "https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=in#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22SENSEX%22%2C%22proName%22%3A%22BSE%3ASENSEX%22%7D%2C%7B%22description%22%3A%22BAJFINANCE%22%2C%22proName%22%3A%22BSE%3ABAJFINANCE%22%7D%2C%7B%22description%22%3A%22SUNPHARMA%22%2C%22proName%22%3A%22BSE%3ASUNPHARMA%22%7D%2C%7B%22description%22%3A%22TATAMOTORS%22%2C%22proName%22%3A%22BSE%3ATATAMOTORS%22%7D%2C%7B%22description%22%3A%22ICICIBANK%22%2C%22proName%22%3A%22BSE%3AICICIBANK%22%7D%2C%7B%22description%22%3A%22TCS%22%2C%22proName%22%3A%22BSE%3ATCS%22%7D%2C%7B%22description%22%3A%22MARUTI%22%2C%22proName%22%3A%22BSE%3AMARUTI%22%7D%2C%7B%22description%22%3A%22RELIANCE%22%2C%22proName%22%3A%22BSE%3ARELIANCE%22%7D%2C%7B%22description%22%3A%22WIPRO%22%2C%22proName%22%3A%22BSE%3AWIPRO%22%7D%2C%7B%22description%22%3A%22SBIN%22%2C%22proName%22%3A%22BSE%3ASBIN%22%7D%2C%7B%22description%22%3A%22HDFCBANK%22%2C%22proName%22%3A%22BSE%3AHDFCBANK%22%7D%2C%7B%22description%22%3A%22AXISBANK%22%2C%22proName%22%3A%22BSE%3AAXISBANK%22%7D%2C%7B%22description%22%3A%22KOTAKBANK%22%2C%22proName%22%3A%22BSE%3AKOTAKBANK%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22shivdharasecurities.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22shivdharasecurities.com%2F%22%7D";

  return (
    <div className="w-full h-[46px] border-b border-[var(--color-border)] bg-white overflow-hidden relative z-40">
      <iframe
        src={tickerUrl}
        width="100%"
        height="46"
        frameBorder="0"
        scrolling="no"
        title="Market Ticker"
        className="w-full h-full"
      />
    </div>
  );
};
