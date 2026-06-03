fetch("http://localhost:5000/products")
.then(response => response.json())
.then(products => {

    let html = "";

    products.forEach(product => {

        html += `
        <div class="product">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        </div>
        `;
    });

    document.getElementById("products").innerHTML = html;
});

function addToCart(id) {

    fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(products => {

        const product = products.find(p => p.id === id);

        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        alert("Product Added To Cart");
    });
}
