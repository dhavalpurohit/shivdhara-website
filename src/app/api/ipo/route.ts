export async function GET() {
  try {
    // NSE API blocks requests without valid cookies. We must hit the homepage first to get them.
    const baseResponse = await fetch("https://www.nseindia.com", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      },
    });

    const setCookieHeader = baseResponse.headers.get("set-cookie");
    const cookies = setCookieHeader
      ? setCookieHeader.split(',').map(c => c.split(';')[0]).join('; ')
      : '';

    // Now fetch the IPO data passing the cookies
    const response = await fetch(
      "https://www.nseindia.com/api/ipo-current-issue", // 'ipo-calendar' might return 404, 'ipo-current-issue' is more reliable
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "application/json",
          "Cookie": cookies,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`NSE API error: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("NSE API Fetch Error:", error);
    return Response.json({
      error: "Failed to fetch IPO data",
    });
  }
}
