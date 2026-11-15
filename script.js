// ========================================
// TECH STORE - COMPLETE ECOMMERCE SYSTEM
// ========================================

const WHATSAPP_NUMBER = "21654081274";

// === EDIT THESE TO MATCH YOUR REAL POLICY ===
const FREE_SHIPPING_MIN = 500;  // DT: free delivery from this subtotal
const SHIPPING_FEE = 8;         // DT: delivery fee below the minimum
const DELIVERY_TIME = "24–72h";
const WARRANTY_MONTHS = 12;
const RETURN_DAYS = 7;
const SHOW_RATINGS = false;     // true only with real customer reviews

// ========================================
// LANGUAGES: EN / FR / AR  (English text -> translation)
// ========================================

const LANGS = ["en", "fr", "ar"];
let L = Math.max(0, LANGS.indexOf(loadStorage("techLang", null) || navigator.language.slice(0, 2)));

const T = Object.fromEntries(`Search products...|Rechercher des produits...|ابحث عن منتج...
Home|Accueil|الرئيسية
Categories|Catégories|الأصناف
Shop|Boutique|المتجر
Special Offers|Offres spéciales|عروض خاصة
THE FUTURE OF TECHNOLOGY|L'AVENIR DE LA TECHNOLOGIE|مستقبل التكنولوجيا
Upgrade Your|Améliorez votre|طوّر
Digital World|univers numérique|عالمك الرقمي
Discover the latest technology, premium electronics and exclusive deals at TECH STORE.|Découvrez les dernières technologies, l'électronique haut de gamme et des offres exclusives chez TECH STORE.|اكتشف أحدث التقنيات والأجهزة الإلكترونية المميزة وعروضًا حصرية في TECH STORE.
SHOP NOW|ACHETER|تسوّق الآن
EXPLORE CATEGORIES|VOIR LES CATÉGORIES|استكشف الأصناف
Fast Delivery|Livraison rapide|توصيل سريع
Warranty Included|Garantie incluse|الضمان مشمول
Customer Support|Assistance client|دعم الزبائن
Chat with us on WhatsApp|Écrivez-nous sur WhatsApp|راسلنا عبر واتساب
BROWSE COLLECTION|PARCOURIR LA COLLECTION|تصفّح المجموعة
Shop By Category|Acheter par catégorie|تسوّق حسب الصنف
Smartphones|Smartphones|الهواتف الذكية
Laptops|Ordinateurs portables|الحواسيب المحمولة
Gaming|Gaming|الألعاب
Accessories|Accessoires|الملحقات
HANDPICKED FOR YOU|SÉLECTIONNÉS POUR VOUS|مختارة لك
Featured Products|Produits en vedette|منتجات مميزة
All|Tout|الكل
Phones|Téléphones|الهواتف
No products found.|Aucun produit trouvé.|لا توجد منتجات.
CURRENT DEALS|OFFRES EN COURS|العروض الحالية
Upgrade Your Setup|Améliorez votre installation|طوّر تجهيزاتك
Save up to|Économisez jusqu'à|وفّر حتى
Discover exclusive deals and amazing technology.|Découvrez des offres exclusives et une technologie exceptionnelle.|اكتشف عروضًا حصرية وتقنيات مذهلة.
EXPLORE DEALS|VOIR LES OFFRES|استكشف العروض
Stay Updated With|Restez informé avec|ابقَ على اطلاع مع
Discover the latest products and exclusive deals.|Découvrez les derniers produits et nos offres exclusives.|اكتشف أحدث المنتجات والعروض الحصرية.
GET DEALS ON WHATSAPP|RECEVOIR LES OFFRES SUR WHATSAPP|احصل على العروض عبر واتساب
Your destination for premium electronics, innovative gadgets and the latest technology.|Votre destination pour l'électronique haut de gamme, les gadgets innovants et les dernières technologies.|وجهتك للأجهزة الإلكترونية المميزة والأدوات المبتكرة وأحدث التقنيات.
Quick Links|Liens rapides|روابط سريعة
Customer Service|Service client|خدمة الزبائن
Shipping & Delivery|Livraison|الشحن والتوصيل
Returns & Warranty|Retours et garantie|الإرجاع والضمان
Ask on WhatsApp|Une question ? WhatsApp|اسأل عبر واتساب
Contact Us|Contact|اتصل بنا
Tunisia|Tunisie|تونس
© 2026 TECH STORE. All Rights Reserved.|© 2026 TECH STORE. Tous droits réservés.|© 2026 TECH STORE. جميع الحقوق محفوظة.
Shopping Cart|Panier|سلة التسوق
Total:|Total :|المجموع:
PROCEED TO CHECKOUT|PASSER LA COMMANDE|إتمام الطلب
Complete Your Order|Finaliser votre commande|أكمل طلبك
Enter your information to confirm your order.|Saisissez vos informations pour confirmer la commande.|أدخل معلوماتك لتأكيد الطلب.
Full Name|Nom complet|الاسم الكامل
Phone Number|Numéro de téléphone|رقم الهاتف
Governorate|Gouvernorat|الولاية
Select Governorate|Choisir le gouvernorat|اختر الولاية
Full Address|Adresse complète|العنوان الكامل
Your delivery address|Votre adresse de livraison|عنوان التوصيل
Order Summary|Récapitulatif|ملخص الطلب
Delivery|Livraison|التوصيل
CONFIRM VIA WHATSAPP|CONFIRMER SUR WHATSAPP|تأكيد عبر واتساب
We confirm every order with you on WhatsApp before shipping.|Nous confirmons chaque commande avec vous sur WhatsApp avant l'expédition.|نؤكد كل طلب معك عبر واتساب قبل الشحن.
FREE DELIVERY OVER {min} · {time} ACROSS TUNISIA|LIVRAISON GRATUITE DÈS {min} · {time} DANS TOUTE LA TUNISIE|توصيل مجاني فوق {min} · {time} في كامل تونس
Delivery across Tunisia in {time}|Livraison partout en Tunisie en {time}|توصيل لكامل تونس خلال {time}
{n}-month warranty on every device|Garantie de {n} mois sur chaque appareil|ضمان {n} شهر على كل جهاز
Delivery across Tunisia in {time}. Free above {min}, otherwise {fee}. We confirm each order with you on WhatsApp before shipping.|Livraison partout en Tunisie en {time}. Gratuite dès {min}, sinon {fee}. Nous confirmons chaque commande avec vous sur WhatsApp avant l'expédition.|توصيل لكامل تونس خلال {time}. مجاني فوق {min}، وإلا {fee}. نؤكد كل طلب معك عبر واتساب قبل الشحن.
Every device comes with a {m}-month warranty. Unused items in their original packaging can be returned within {d} days. Contact us on WhatsApp to start a return.|Chaque appareil est garanti {m} mois. Les articles non utilisés, dans leur emballage d'origine, peuvent être retournés sous {d} jours. Contactez-nous sur WhatsApp pour lancer un retour.|كل جهاز مشمول بضمان {m} شهر. يمكن إرجاع المنتجات غير المستعملة في علبتها الأصلية خلال {d} أيام. راسلنا عبر واتساب لبدء الإرجاع.
Reviews|avis|تقييمات
VIEW DETAILS|VOIR LES DÉTAILS|عرض التفاصيل
Select Color|Choisir la couleur|اختر اللون
ADD TO CART|AJOUTER AU PANIER|أضف إلى السلة
Your cart is empty.|Votre panier est vide.|سلتك فارغة.
FREE|GRATUITE|مجاني
Your shopping cart is empty!|Votre panier est vide !|سلتك فارغة!
Please complete all required fields.|Veuillez remplir tous les champs obligatoires.|يرجى ملء جميع الحقول المطلوبة.
Please enter a valid Tunisian phone number (8 digits).|Veuillez saisir un numéro tunisien valide (8 chiffres).|يرجى إدخال رقم هاتف تونسي صحيح (8 أرقام).
BEST SELLER|MEILLEURE VENTE|الأكثر مبيعًا
NEW|NOUVEAU|جديد
SALE|PROMO|تخفيض
POPULAR|POPULAIRE|رائج
Natural Titanium|Titane naturel|تيتانيوم طبيعي
Black Titanium|Titane noir|تيتانيوم أسود
White Titanium|Titane blanc|تيتانيوم أبيض
Desert Titanium|Titane désert|تيتانيوم صحراوي
Space Black|Noir sidéral|أسود فضائي
Silver|Argent|فضي
Black|Noir|أسود
White|Blanc|أبيض
Titanium|Titane|تيتانيوم
Experience premium performance with the iPhone 16 Pro Max.|Des performances haut de gamme avec l'iPhone 16 Pro Max.|استمتع بأداء متميز مع iPhone 16 Pro Max.
Powerful performance for professional work and creativity.|Des performances puissantes pour le travail professionnel et la créativité.|أداء قوي للعمل الاحترافي والإبداع.
Premium wireless headphones with noise cancellation.|Casque sans fil haut de gamme avec réduction de bruit.|سماعات لاسلكية مميزة بخاصية إلغاء الضوضاء.
Advanced smartwatch designed for everyday performance.|Montre connectée avancée conçue pour un usage quotidien.|ساعة ذكية متطورة مصممة للاستخدام اليومي.
Comfortable wireless gaming controller.|Manette de jeu sans fil confortable.|يد تحكم ألعاب لاسلكية مريحة.
High quality wireless sound for everyday use.|Son sans fil de haute qualité pour tous les jours.|صوت لاسلكي عالي الجودة للاستخدام اليومي.`.split("\n").map(line => {
    const [en, fr, ar] = line.split("|");
    return [en, [fr, ar]];
}));

const GOV = [null, "Tunis|Ariana|Ben Arous|La Manouba|Nabeul|Zaghouan|Bizerte|Béja|Jendouba|Le Kef|Siliana|Sousse|Monastir|Mahdia|Sfax|Kairouan|Kasserine|Sidi Bouzid|Gabès|Médenine|Tataouine|Gafsa|Tozeur|Kébili".split("|"), "تونس|أريانة|بن عروس|منوبة|نابل|زغوان|بنزرت|باجة|جندوبة|الكاف|سليانة|سوسة|المنستير|المهدية|صفاقس|القيروان|القصرين|سيدي بوزيد|قابس|مدنين|تطاوين|قفصة|توزر|قبلي".split("|")];

const t = s => (L && T[s] && T[s][L - 1]) || s;
const tf = (s, o) => t(s).replace(/\{(\w+)\}/g, (m, k) => o[k]);
const catLabel = p => t(p.category[0].toUpperCase() + p.category.slice(1)).toUpperCase();

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

function shippingFee() {
    return cartTotal() >= FREE_SHIPPING_MIN ? 0 : SHIPPING_FEE;
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
                    ${escapeHTML(t(product.badge))}
                </span>

                <img src="${product.images[0]}"
                     alt="${escapeHTML(product.name)}"
                     loading="lazy">

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${escapeHTML(catLabel(product))}
                </span>

                <h3>${escapeHTML(product.name)}</h3>

                ${SHOW_RATINGS ? `<div class="rating">
                    <i class="fa-solid fa-star"></i>
                    ${product.rating}
                    <span>(${product.reviews} ${t("Reviews")})</span>
                </div>` : ""}

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
                        ${t("VIEW DETAILS")}
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
                    ${escapeHTML(catLabel(product))}
                </span>

                <h2>${escapeHTML(product.name)}</h2>

                ${SHOW_RATINGS ? `<div class="rating">
                    <i class="fa-solid fa-star"></i>
                    ${product.rating}
                    (${product.reviews} ${t("Reviews")})
                </div>` : ""}

                <p class="detail-description">
                    ${escapeHTML(t(product.description))}
                </p>

                <div class="price">
                    <strong>${money(product.price)}</strong>
                    <del>${money(product.oldPrice)}</del>
                </div>

                <h4>${t("Select Color")}</h4>

                <div class="color-options">

                    ${product.colors.map((color, index) => `
                        <button class="color-option ${index === 0 ? "active" : ""}"
                                data-color="${escapeHTML(color)}">
                            ${escapeHTML(t(color))}
                        </button>
                    `).join("")}

                </div>

                <button class="checkout-btn detail-add" id="detailAdd">
                    <i class="fa-solid fa-cart-shopping"></i>
                    ${t("ADD TO CART")}
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

    cart = cart.filter(item => getProduct(item.id));
    cart.forEach(item => { item.price = getProduct(item.id).price; });

    let count = 0;

    cart.forEach(item => count += item.quantity);

    $("#cartCount").textContent = count;

    $("#cartTotal").textContent = money(cartTotal());

    const container = $("#cartItems");

    if (!cart.length) {

        container.innerHTML = `
            <p class="empty-cart">${t("Your cart is empty.")}</p>
        `;

        return;

    }

    container.innerHTML = cart.map((item, index) => `

        <div class="cart-item">

            <img src="${item.image}" alt="${escapeHTML(item.name)}">

            <div class="cart-item-info">

                <h4>${escapeHTML(item.name)}</h4>

                <p>${escapeHTML(t(item.color))}</p>

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
                (${escapeHTML(t(item.color))})
                × ${item.quantity}
            </span>

            <strong>${money(item.price * item.quantity)}</strong>

        </div>

    `).join("");

    $("#checkoutShipping").textContent = shippingFee() ? money(shippingFee()) : t("FREE");
    $("#checkoutTotal").textContent = money(cartTotal() + shippingFee());

}

$("#checkoutBtn").addEventListener("click", () => {

    if (!cart.length) {

        alert(t("Your shopping cart is empty!"));

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

        alert(t("Your shopping cart is empty!"));

        closeModal("checkoutModal");

        return;

    }

    const name = $("#customerName").value.trim();

    const phone = $("#customerPhone").value.trim();

    const governorate = $("#customerGovernorate").value;

    const address = $("#customerAddress").value.trim();

    if (!name || !phone || !governorate || !address) {

        alert(t("Please complete all required fields."));

        return;

    }

    if (!/^(\+?216)?[2-9]\d{7}$/.test(phone.replace(/[\s-]/g, ""))) {
        alert(t("Please enter a valid Tunisian phone number (8 digits)."));
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

🚚 Delivery: ${shippingFee() ? money(shippingFee()) : "FREE"}
💰 *TOTAL: ${money(cartTotal() + shippingFee())}*

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
// CONFIG BINDINGS
// ========================================

document.querySelectorAll("[data-wa]").forEach(link => {
    link.href = "https://wa.me/" + WHATSAPP_NUMBER +
        "?text=" + encodeURIComponent(link.dataset.wa);
});

function renderConfigText() {
    const time = L === 2 ? DELIVERY_TIME.replace("h", " ساعة") : DELIVERY_TIME;
    $("#announcementText").textContent = tf("FREE DELIVERY OVER {min} · {time} ACROSS TUNISIA", {min: money(FREE_SHIPPING_MIN), time});
    $("#featDelivery").textContent = tf("Delivery across Tunisia in {time}", {time});
    $("#featWarranty").textContent = tf("{n}-month warranty on every device", {n: WARRANTY_MONTHS});
    $("#offerSave").textContent =
        Math.max(...products.map(p => Math.round((1 - p.price / p.oldPrice) * 100)));
    $("#policyBody").innerHTML = `
        <h2>${t("Shipping & Delivery")}</h2>
        <p>${tf("Delivery across Tunisia in {time}. Free above {min}, otherwise {fee}. We confirm each order with you on WhatsApp before shipping.", {time, min: money(FREE_SHIPPING_MIN), fee: money(SHIPPING_FEE)})}</p>
        <h2>${t("Returns & Warranty")}</h2>
        <p>${tf("Every device comes with a {m}-month warranty. Unused items in their original packaging can be returned within {d} days. Contact us on WhatsApp to start a return.", {m: WARRANTY_MONTHS, d: RETURN_DAYS})}</p>`;
}

function applyLang() {
    const root = document.documentElement;
    root.lang = LANGS[L];
    root.dir = L === 2 ? "rtl" : "ltr";
    $("#langSelect").value = LANGS[L];

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let node; (node = walker.nextNode());) {
        if (node.parentElement.closest("script, #productGrid, #cartItems, #productDetails, #checkoutItems, #policyBody")) continue;
        node.__en ??= node.nodeValue;
        const key = node.__en.trim().replace(/\s+/g, " ");
        if (key in T) {
            node.nodeValue = L ? node.__en.replace(/\S[\s\S]*\S|\S/, () => t(key)) : node.__en;
        }
    }

    document.querySelectorAll("[placeholder]").forEach(el => {
        el.__ph ??= el.placeholder;
        el.placeholder = t(el.__ph);
    });

    document.querySelectorAll("#customerGovernorate option:not([value=''])").forEach((option, i) => {
        option.textContent = L ? GOV[L][i] : option.value;
    });

    renderConfigText();
    applyFilters();
    updateCart();
    renderCheckout();

    if ($("#productModal").classList.contains("show")) openProduct(selectedProduct.id);
}

$("#langSelect").addEventListener("change", event => {
    L = LANGS.indexOf(event.target.value);
    localStorage.setItem("techLang", JSON.stringify(event.target.value));
    applyLang();
});

document.querySelectorAll("[data-open]").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        openModal(link.dataset.open);
    });
});


// ========================================
// INITIALIZATION
// ========================================

document.querySelectorAll("#customerGovernorate option").forEach(o => o.setAttribute("value", o.value));

applyLang();

updateFavorites();
