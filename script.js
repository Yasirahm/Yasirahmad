// Create a function to render the header
function renderHeader() {
    const header = document.createElement("div");
    header.className = "header";
    header.innerHTML = `
        <nav>
            <ul class="nav">
                <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </nav>
    `;
    return header;
}

// Create a function to render a product
function renderProduct(product) {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    `;
    return productDiv;
}

// Create an array of products
const products = [
    { name: "Product 1", price: "$20.00", image: "product1.jpg" },
    { name: "Product 2", price: "$30.00", image: "product2.jpg" },
    { name: "Product 3", price: "$40.00", image: "product3.jpg" },
    { name: "Product 4", price: "$50.00", image: "product4.jpg" },
    { name: "Product 5", price: "$60.00", image: "product5.jpg" },
];

// Create a function to render the product grid
function renderProductGrid() {
    const productGrid = document.createElement("div");
    productGrid.className = "product-grid";
    products.forEach((product) => {
        productGrid.appendChild(renderProduct(product));
    });
    return productGrid;
}

// Render the app
const app = document.getElementById("app");
app.appendChild(renderHeader());
app.appendChild(renderProductGrid());