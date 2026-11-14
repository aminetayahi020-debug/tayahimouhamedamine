// ========================================
// TECH STORE - COMPLETE ECOMMERCE SYSTEM
// ========================================

const WHATSAPP_NUMBER = "21646896506";

const products = [

    {
        id: 1,
        name: "iPhone 16 Pro Max",
        category: "smartphones",
        price: 4299,
        oldPrice: 4599,
        badge: "BEST SELLER",
        rating: 4.9,
        reviews: 120,
        colors: ["Natural Titanium", "Black Titanium", "White Titanium", "Desert Titanium"],
        description: "Experience premium performance with the iPhone 16 Pro Max.",
        images: [
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=700",
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=700"
        ]
    },

    {
        id: 2,
        name: "MacBook Pro M4",
        category: "laptops",
        price: 6899,
        oldPrice: 7299,
        badge: "NEW",
        rating: 4.8,
        reviews: 95,
        colors: ["Space Black", "Silver"],
        description: "Powerful performance for professional work and creativity.",
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700"
        ]
    },

    {
        id: 3,
        name: "Sony WH-1000XM5",
        category: "accessories",
        price: 1099,
        oldPrice: 1299,
        badge: "SALE",
        rating: 4.7,
        reviews: 80,
        colors: ["Black", "Silver"],
        description: "Premium wireless headphones with noise cancellation.",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=700"
        ]
    },

    {
        id: 4,
        name: "Apple Watch Ultra",
        category: "accessories",
        price: 2499,
        oldPrice: 2799,
        badge: "POPULAR",
        rating: 4.9,
        reviews: 150,
        colors: ["Titanium", "Black"],
        description: "Advanced smartwatch designed for everyday performance.",
        images: [
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=700",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
        ]
    },

    {
        id: 5,
        name: "Gaming Controller",
        category: "gaming",
        price: 249,
        oldPrice: 299,
        badge: "SALE",
        rating: 4.8,
        reviews: 65,
        colors: ["Black", "White"],
        description: "Comfortable wireless gaming controller.",
        images: [
            "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=700"
        ]
    },

    {
        id: 6,
        name: "Wireless Headphones",
        category: "accessories",
        price: 399,
        oldPrice: 449,
        badge: "NEW",
        rating: 4.6,
        reviews: 45,
        colors: ["Black", "White"],
        description: "High quality wireless sound for everyday use.",
        images: [
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=700"
        ]
    }

];


// ========================================
// STORAGE
// ========================================

function loadStorage(key, fallback) {

    try {

        const value = JSON.parse(localStorage.getItem(key));

        return value ?? fallback;

    } catch {

        return fallback;

    }

}

let cart = loadStorage("techCart", []);
let favorites = loadStorage("techFavorites", []);


// ========================================
// HELPERS
// ========================================

const $ = selector => document.querySelector(selector);

const money = value =>
    Number(value).toLocaleString("en-US") + " DT";

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);

}

function getProduct(id) {

    return products.find(product => product.id === Number(id));

}

function cartTotal() {

    return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

}

function saveCart() {

    localStorage.setItem("techCart", JSON.stringify(cart));

    updateCart();

}


// ========================================
// PRODUCT DISPLAY
// ========================================

const productGrid = $("#productGrid");

function renderProducts(list = products) {

    productGrid.innerHTML = "";

    $("#noProducts").hidden = list.length !== 0;

    list.forEach(product => {

        const favorite = favorites.includes(product.id);

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image" data-details="${product.id}">

                <span class="product-badge">
                    ${escapeHTML(product.badge)}
                </span>

                <img src="${product.images[0]}"
                     alt="${escapeHTML(product.name)}"
                     loading="lazy">

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${escapeHTML(product.category.toUpperCase())}
                </span>

                <h3>${escapeHTML(product.name)}</h3>

                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    ${product.rating}
                    <span>(${product.reviews} Reviews)</span>
                </div>

                <div class="price">
                    <strong>${money(product.price)}</strong>
                    <del>${money(product.oldPrice)}</del>
                </div>

                <div class="product-actions">

                    <button class="favorite-btn ${favorite ? "active" : ""}"
                            data-favorite="${product.id}"
                            aria-label="Toggle favorite">
                        <i class="fa-${favorite ? "solid" : "regular"} fa-heart"></i>
                    </button>

                    <button class="add-cart"
                            data-details="${product.id}">
                        VIEW DETAILS
                    </button>

                </div>

            </div>

        `;

        productGrid.appendChild(card);

    });

}


// ========================================
// PRODUCT FILTER
// ========================================

let currentFilter = "all";
let currentSearch = "";

function applyFilters() {

    const filtered = products.filter(product => {

        const matchesCategory =
            currentFilter === "all" ||
            product.category === currentFilter;

        const matchesSearch =
            product.name.toLowerCase().includes(currentSearch);

        return matchesCategory && matchesSearch;

    });

    renderProducts(filtered);

}

document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", () => {

        currentFilter = button.dataset.filter;

        document.querySelectorAll(".filter-btn").forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        applyFilters();

    });

});

document.querySelectorAll(".category-card").forEach(button => {

    button.addEventListener("click", () => {

        currentFilter = button.dataset.category;

        document.querySelectorAll(".filter-btn").forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.filter === currentFilter
            );

        });

        applyFilters();

        $("#products").scrollIntoView({behavior: "smooth"});

    });

});


// ========================================
// SEARCH
// ========================================

function searchProducts() {

    currentSearch = $("#searchInput").value.toLowerCase().trim();

    applyFilters();

    $("#products").scrollIntoView({behavior: "smooth"});

}

$("#searchBtn").addEventListener("click", searchProducts);

$("#searchInput").addEventListener("input", () => {

    currentSearch = $("#searchInput").value.toLowerCase().trim();

    applyFilters();

});

$("#searchInput").addEventListener("keydown", event => {

    if (event.key === "Enter") searchProducts();

});


// ========================================
// FAVORITES
// ========================================

function updateFavorites() {

    $("#wishlistCount").textContent = favorites.length;

}

function toggleFavorite(id) {

    id = Number(id);

    if (favorites.includes(id)) {

        favorites = favorites.filter(item => item !== id);

    } else {

        favorites.push(id);

    }

    localStorage.setItem(
        "techFavorites",
        JSON.stringify(favorites)
    );

    updateFavorites();

    applyFilters();

}

productGrid.addEventListener("click", event => {

    const button = event.target.closest("[data-favorite]");

    if (!button) return;

    event.stopPropagation();

    toggleFavorite(button.dataset.favorite);

});

$("#wishlistButton").addEventListener("click", () => {

    const favoriteProducts = products.filter(product =>
        favorites.includes(product.id)
    );

    currentFilter = "all";
    currentSearch = "";

    $("#searchInput").value = "";

    document.querySelectorAll(".filter-btn").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.filter === "all"
        );

    });

    renderProducts(favoriteProducts);

    $("#products").scrollIntoView({behavior: "smooth"});

});


// ========================================
// PRODUCT DETAILS
// ========================================

let selectedProduct = null;
let selectedColor = "";

function openProduct(id) {

    selectedProduct = getProduct(id);

    if (!selectedProduct) return;

    selectedColor = selectedProduct.colors[0];

    const product = selectedProduct;

    $("#productDetails").innerHTML = `

        <div class="product-details">

            <div>

                <div class="detail-image">
                    <img id="mainProductImage"
                         src="${product.images[0]}"
                         alt="${escapeHTML(product.name)}">
                </div>

                <div class="detail-thumbnails">

                    ${product.images.map((image, index) => `
                        <img src="${image}"
                             data-image="${image}"
                             alt="Product view ${index + 1}">
                    `).join("")}

                </div>

            </div>

            <div class="detail-info">

                <span class="section-label">
                    ${escapeHTML(product.category.toUpperCase())}
                </span>

                <h2>${escapeHTML(product.name)}</h2>

                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    ${product.rating}
                    (${product.reviews} Reviews)
                </div>

                <p class="detail-description">
                    ${escapeHTML(product.description)}
                </p>

                <div class="price">
                    <strong>${money(product.price)}</strong>
                    <del>${money(product.oldPrice)}</del>
                </div>

                <h4>Select Color</h4>

                <div class="color-options">

                    ${product.colors.map((color, index) => `
                        <button class="color-option ${index === 0 ? "active" : ""}"
                                data-color="${escapeHTML(color)}">
                            ${escapeHTML(color)}
                        </button>
                    `).join("")}

                </div>

                <button class="checkout-btn detail-add" id="detailAdd">
                    <i class="fa-solid fa-cart-shopping"></i>
                    ADD TO CART
                </button>

            </div>

        </div>

    `;

    openModal("productModal");

}

productGrid.addEventListener("click", event => {

    const button = event.target.closest("[data-details]");

    if (button) {

        openProduct(button.dataset.details);

    }

});

$("#productDetails").addEventListener("click", event => {

    const thumbnail = event.target.closest("[data-image]");

    if (thumbnail) {

        $("#mainProductImage").src = thumbnail.dataset.image;

    }

    const color = event.target.closest("[data-color]");

    if (color) {

        selectedColor = color.dataset.color;

        document.querySelectorAll(".color-option").forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.color === selectedColor
            );

        });

    }

    if (event.target.closest("#detailAdd")) {

        addToCart(selectedProduct.id, selectedColor);

        closeModal("productModal");

        openCart();

    }

});


// ========================================
// CART
// ========================================

function addToCart(id, color) {

    const product = getProduct(id);

    if (!product) return;

    const existing = cart.find(item =>
        item.id === product.id && item.color === color
    );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            color: color,
            quantity: 1

        });

    }

    saveCart();

}

function updateCart() {

    let count = 0;

    cart.forEach(item => count += item.quantity);

    $("#cartCount").textContent = count;

    $("#cartTotal").textContent = money(cartTotal());

    const container = $("#cartItems");

    if (!cart.length) {

        container.innerHTML = `
            <p class="empty-cart">Your cart is empty.</p>
        `;

        return;

    }

    container.innerHTML = cart.map((item, index) => `

        <div class="cart-item">

            <img src="${item.image}" alt="${escapeHTML(item.name)}">

            <div class="cart-item-info">

                <h4>${escapeHTML(item.name)}</h4>

                <p>${escapeHTML(item.color)}</p>

                <p>${money(item.price)}</p>

                <div class="quantity-controls">

                    <button data-quantity="-1" data-index="${index}">
                        -
                    </button>

                    <span>${item.quantity}</span>

                    <button data-quantity="1" data-index="${index}">
                        +
                    </button>

                </div>

            </div>

            <button class="remove-item" data-remove="${index}">
                <i class="fa-solid fa-trash"></i>
            </button>

        </div>

    `).join("");

}

$("#cartItems").addEventListener("click", event => {

    const quantityButton = event.target.closest("[data-quantity]");

    if (quantityButton) {

        const index = Number(quantityButton.dataset.index);

        cart[index].quantity += Number(quantityButton.dataset.quantity);

        if (cart[index].quantity <= 0) {

            cart.splice(index, 1);

        }

        saveCart();

    }

    const removeButton = event.target.closest("[data-remove]");

    if (removeButton) {

        cart.splice(Number(removeButton.dataset.remove), 1);

        saveCart();

    }

});


// ========================================
// CART SIDEBAR
// ========================================

function openCart() {

    $("#cartSidebar").classList.add("show");

    $("#cartOverlay").classList.add("show");

}

function hideCart() {

    $("#cartSidebar").classList.remove("show");

    $("#cartOverlay").classList.remove("show");

}

$("#cartButton").addEventListener("click", openCart);

$("#closeCart").addEventListener("click", hideCart);

$("#cartOverlay").addEventListener("click", hideCart);


// ========================================
// MODALS
// ========================================

function openModal(id) {

    document.getElementById(id).classList.add("show");

    document.body.classList.add("modal-open");

}

function closeModal(id) {

    document.getElementById(id).classList.remove("show");

    if (!document.querySelector(".modal-overlay.show")) {

        document.body.classList.remove("modal-open");

    }

}

document.querySelectorAll("[data-close]").forEach(button => {

    button.addEventListener("click", () => {

        closeModal(button.dataset.close);

    });

});

document.querySelectorAll(".modal-overlay").forEach(overlay => {

    overlay.addEventListener("click", event => {

        if (event.target === overlay) {

            closeModal(overlay.id);

        }

    });

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal-overlay.show").forEach(modal => {

            closeModal(modal.id);

        });

        hideCart();

    }

});


// ========================================
// CHECKOUT
// ========================================

function renderCheckout() {

    const container = $("#checkoutItems");

    container.innerHTML = cart.map(item => `

        <div class="summary-item">

            <span>
                ${escapeHTML(item.name)}
                (${escapeHTML(item.color)})
                × ${item.quantity}
            </span>

            <strong>${money(item.price * item.quantity)}</strong>

        </div>

    `).join("");

    $("#checkoutTotal").textContent = money(cartTotal());

}

$("#checkoutBtn").addEventListener("click", () => {

    if (!cart.length) {

        alert("Your shopping cart is empty!");

        return;

    }

    hideCart();

    renderCheckout();

    openModal("checkoutModal");

});


// ========================================
// WHATSAPP ORDER
// ========================================

$("#checkoutForm").addEventListener("submit", event => {

    event.preventDefault();

    if (!cart.length) {

        alert("Your shopping cart is empty!");

        closeModal("checkoutModal");

        return;

    }

    const name = $("#customerName").value.trim();

    const phone = $("#customerPhone").value.trim();

    const governorate = $("#customerGovernorate").value;

    const address = $("#customerAddress").value.trim();

    if (!name || !phone || !governorate || !address) {

        alert("Please complete all required fields.");

        return;

    }

    const orderNumber = "TS-" + Date.now().toString().slice(-8);

    let message = `
🛒 *NEW ORDER - TECH STORE*

━━━━━━━━━━━━━━━━

📋 Order Number: ${orderNumber}

👤 Customer: ${name}
📞 Phone: ${phone}
📍 Governorate: ${governorate}
🏠 Address: ${address}

━━━━━━━━━━━━━━━━

📦 *ORDER DETAILS*
`;

    cart.forEach((item, index) => {

        message += `

${index + 1}. ${item.name}

🎨 Color: ${item.color}
🔢 Quantity: ${item.quantity}
💰 Unit Price: ${money(item.price)}
💵 Subtotal: ${money(item.price * item.quantity)}

`;

    });

    message += `
━━━━━━━━━━━━━━━━

💰 *TOTAL: ${money(cartTotal())}*

Thank you for choosing TECH STORE!
`;

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

});


// ========================================
// MOBILE MENU
// ========================================

$("#menuToggle").addEventListener("click", () => {

    $("#navigation").classList.toggle("show");

    $("#menuToggle").innerHTML =
        $("#navigation").classList.contains("show")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

});

$("#navigation").querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        $("#navigation").classList.remove("show");

        $("#menuToggle").innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// ========================================
// NEWSLETTER
// ========================================

$("#newsletterForm").addEventListener("submit", event => {

    event.preventDefault();

    alert("Thank you for subscribing to TECH STORE!");

    event.target.reset();

});


// ========================================
// INITIALIZATION
// ========================================

renderProducts();

updateCart();

updateFavorites();
