// Node.js serverless function
import fetch from "node-fetch";

export default async function handler(req, res) {
    const query = req.query.query || "";

    // Example: Hardcoded products for demo
    const products = [
        {name: "iPhone 15", price: 999.99, store: "Amazon", link: "https://www.amazon.com/dp/B09G3HRMVB?tag=YOUR_AFFILIATE_TAG"},
        {name: "Samsung Galaxy S23", price: 899.99, store: "Walmart", link: "https://www.walmart.com/ip/12345678?affp1=YOUR_AFFILIATE_ID"},
        {name: "LEGO Star Wars Set", price: 79.99, store: "eBay", link: "https://www.ebay.com/itm/123456789?campid=YOUR_AFFILIATE_ID"}
    ];

    // Filter results
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    // Sort by price
    filtered.sort((a,b) => a.price - b.price);

    res.status(200).json(filtered);
}
