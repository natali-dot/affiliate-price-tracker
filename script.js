async function handleSearch() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const list = document.getElementById("product-list");
    list.innerHTML = "Loading...";

    // Call Vercel serverless function
    const response = await fetch(`/api/getProducts?query=${query}`);
    const products = await response.json();

    list.innerHTML = "";
    if(products.length === 0){
        list.innerHTML = "<li>No products found.</li>";
    } else {
        products.forEach(p => {
            const li = document.createElement("li");
            li.innerHTML = `${p.name} - ${p.store} - $${p.price.toFixed(2)} 
            <a href="${p.link}" target="_blank">Buy Now</a>`;
            list.appendChild(li);
        });
    }
}
