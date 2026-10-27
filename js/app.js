/**
 * ARAB CHAI CAFE & RESTAURANT - DUBAI
 * Interactive Application & Baristo-Style Customizer Engine
 */

// --- DATA STRUCTURES ---

const DRINKS_DATA = {
  zafran: {
    id: "zafran",
    title: "Special Zafran Karak Chai",
    arabic: "شاي كرك بالزعفران الملكي",
    calories: 145,
    basePrice: 3.50,
    image: "assets/coffee/1.png",
    subtitle: "Aromatic Assam black tea slow-brewed with fresh whole milk, crushed green cardamom & pure saffron threads.",
    tags: ["Pure Saffron", "Crushed Cardamom", "Fresh Whole Milk", "Brewed to Order"]
  },
  kadak: {
    id: "kadak",
    title: "Arab Special Kadak Chai",
    arabic: "شاي كرك مضاعف النكهة",
    calories: 130,
    basePrice: 2.50,
    image: "assets/coffee/2.png",
    subtitle: "The legendary Dubai highway Karak. Extra strong tea decoction, rich condensed milk & warm aromatic spices.",
    tags: ["Extra Strong", "Highway Recipe", "Hot & Rich", "Quick Pick-Me-Up"]
  },
  sulaimani: {
    id: "sulaimani",
    title: "Golden Sulaimani Mint Tea",
    arabic: "شاي سليماني أحمر بالنعناع",
    calories: 45,
    basePrice: 2.00,
    image: "assets/coffee/3.png",
    subtitle: "A crystal clear golden brew infused with freshly crushed mint leaves, lemon juice and fragrant clove-cardamom.",
    tags: ["Digestive", "Fresh Mint", "Lemon Infusion", "Zero Milk"]
  },
  cardamom: {
    id: "cardamom",
    title: "Cardamom Special Chai",
    arabic: "شاي كرك بالهيل الأخضر",
    calories: 135,
    basePrice: 3.00,
    image: "assets/coffee/4.png",
    subtitle: "Double dose of crushed fragrant green cardamom pods steamed into whole milk tea with rich caramel sweetness.",
    tags: ["Green Cardamom", "Rich Aroma", "Caramel Finish", "Cozy Sip"]
  },
  kulhad: {
    id: "kulhad",
    title: "Traditional Kulhad Matka Chai",
    arabic: "شاي كرك في فخار طيني",
    calories: 160,
    basePrice: 5.00,
    image: "assets/coffee/5.png",
    subtitle: "Steaming hot thick spiced Karak served in a natural unglazed earthen clay pot that imparts an unmistakable smoky aroma.",
    tags: ["Clay Pot (Kulhad)", "Smoky Earthy Flavor", "Authentic Heritage", "Instagram Favorite"]
  },
  awar_qalb: {
    id: "awar_qalb",
    title: "Awar Qalb Special Cocktail",
    arabic: "عصير عوار قلب الكلاسيكي",
    calories: 260,
    basePrice: 12.00,
    image: "assets/coffee/6.png",
    subtitle: "The iconic Gulf heartbreaker blend: fresh sweet mango, ripe strawberries, banana & rich vanilla ice cream creaminess.",
    tags: ["Fresh Fruits", "Vanilla Ice Cream", "Dubai Cafeteria Classic", "Refreshing"]
  }
};

const MENU_ITEMS = [
  // Signature Hot Teas
  {
    id: "tea_zafran",
    category: "tea",
    title: "Zafran Special Karak Chai",
    arabic: "شاي كرك بالزعفران",
    price: 3.50,
    calories: 145,
    img: "assets/food/zafran_tea.jpg",
    desc: "Assam black tea simmered with fresh milk, crushed cardamom & pure saffron threads.",
    badge: "Signature"
  },
  {
    id: "tea_kadak",
    category: "tea",
    title: "Arab Special Kadak Chai",
    arabic: "شاي كرك أصلي",
    price: 2.50,
    calories: 130,
    img: "assets/food/karak_chai.jpg",
    desc: "Thick, strong highway-style Karak brewed to perfection every 20 minutes.",
    badge: "Bestseller"
  },
  {
    id: "tea_sulaimani",
    category: "tea",
    title: "Sulaimani Mint Tea",
    arabic: "شاي سليماني بالنعناع",
    price: 2.00,
    calories: 45,
    img: "assets/food/sulaimani.jpg",
    desc: "Light black tea brewed with fresh garden mint leaves, squeeze of lemon & cardamom.",
    badge: "Herbal"
  },
  {
    id: "tea_kulhad",
    category: "tea",
    title: "Matka Kulhad Chai",
    arabic: "كرك فخار طيني",
    price: 5.00,
    calories: 160,
    img: "assets/food/spices.jpg",
    desc: "Served in an authentic unglazed clay cup giving a rich earthy flavor.",
    badge: "Must Try"
  },

  // Porotta Wraps & Rolls
  {
    id: "roll_oman",
    category: "rolls",
    title: "Chips Oman & Cheese Porotta Roll",
    arabic: "رول بطاطس عمان وجبن كرافت",
    price: 6.00,
    calories: 340,
    img: "assets/food/porotta_roll.jpg",
    desc: "The UAE national street icon: hot flaky Kerala porotta, Kraft cream cheese & crushed Chips Oman.",
    badge: "Dubai Legend"
  },
  {
    id: "roll_tikka",
    category: "rolls",
    title: "Chicken Tikka Porotta Wrap",
    arabic: "رول تكة دجاج مشوي",
    price: 8.50,
    calories: 410,
    img: "assets/food/porotta_roll.jpg",
    desc: "Charcoal spiced tender chicken tikka chunks with garlic-mint mayo in fresh porotta.",
    badge: "Chef Special"
  },
  {
    id: "roll_egg",
    category: "rolls",
    title: "Spiced Egg & Cheese Porotta Roll",
    arabic: "رول بيض وجبن مقمر",
    price: 5.00,
    calories: 320,
    img: "assets/food/porotta_roll.jpg",
    desc: "Double egg fluffy omelette layered with cheddar cheese inside a golden crispy porotta.",
    badge: "Breakfast"
  },

  // Cafeteria Burgers & Clubs
  {
    id: "club_special",
    category: "burgers",
    title: "Arab Special Club Sandwich",
    arabic: "كلوب ساندويش سبيشال مع البطاطس",
    price: 18.00,
    calories: 680,
    img: "assets/food/club_sandwich.jpg",
    desc: "Triple-decker toasted club loaded with roasted chicken, egg, cheese, lettuce & golden fries.",
    badge: "Bestseller"
  },
  {
    id: "burger_zinger",
    category: "burgers",
    title: "Zinger Mathafi Burger",
    arabic: "برجر مطافي زنجر حار",
    price: 14.00,
    calories: 590,
    img: "assets/food/zinger_burger.jpg",
    desc: "Crispy fried spicy chicken breast fillet drenched in fiery Mathafi sauce, cheddar & lettuce.",
    badge: "Spicy"
  },
  {
    id: "club_khaleej",
    category: "burgers",
    title: "Khaleej Combo Club",
    arabic: "كلوب خليج مشكل",
    price: 16.00,
    calories: 640,
    img: "assets/food/club_sandwich.jpg",
    desc: "Classic cafeteria double-decker with beef roast, sliced tomato, cheese and hot crispy fries.",
    badge: "Popular"
  },

  // Arabic Shawarma
  {
    id: "shw_classic",
    category: "shawarma",
    title: "Classic Arabic Chicken Shawarma",
    arabic: "شاورما دجاج عربية بالثوم والمخلل",
    price: 7.00,
    calories: 390,
    img: "assets/food/shawarma.jpg",
    desc: "Rotisserie spiced chicken shaved thin into warm saj bread with authentic garlic toum, pickles & fries.",
    badge: "Bestseller"
  },
  {
    id: "shw_mexican",
    category: "shawarma",
    title: "Spicy Mexican Shawarma",
    arabic: "شاورما مكسيكي حار",
    price: 8.50,
    calories: 430,
    img: "assets/food/shawarma.jpg",
    desc: "Juicy shawarma chicken tossed with spicy jalapeños, Mexican salsa sauce, and melted cheddar.",
    badge: "Hot"
  },
  {
    id: "shw_plate",
    category: "shawarma",
    title: "Shawarma Arabic Platter",
    arabic: "صحن شاورما عربي متكامل",
    price: 18.00,
    calories: 720,
    img: "assets/food/shawarma.jpg",
    desc: "Sliced saj shawarma rolls served on a large platter with garlic dip, pickles, tahini & French fries.",
    badge: "Dinner Feast"
  },

  // Fresh Juices & Dubai Specials
  {
    id: "juice_awar_qalb",
    category: "juices",
    title: "Awar Qalb Special Juice",
    arabic: "عصير عوار قلب الشهير",
    price: 12.00,
    calories: 260,
    img: "assets/food/fresh_juice.jpg",
    desc: "Legendary mix of mango, fresh strawberries, banana and a scoop of rich vanilla ice cream.",
    badge: "Famous"
  },
  {
    id: "juice_burj",
    category: "juices",
    title: "Burj Al Arab Cocktail",
    arabic: "كوكتيل برج العرب طبقات",
    price: 14.00,
    calories: 290,
    img: "assets/food/fresh_juice.jpg",
    desc: "Multi-layered avocado purée, alphonso mango juice, pomegranate pearls & honey drizzle.",
    badge: "Special"
  },
  {
    id: "juice_mojito",
    category: "juices",
    title: "Passion Fruit Mint Mojito",
    arabic: "موهيتو باشن فروت بالنعناع",
    price: 10.00,
    calories: 120,
    img: "assets/food/fresh_juice.jpg",
    desc: "Crushed lime, fresh garden mint, sparkling soda and sweet passion fruit nectar.",
    badge: "Refreshing"
  },

  // Quick Bites & Breakfast
  {
    id: "snack_samosa",
    category: "snacks",
    title: "Crispy Samosas (2 pcs)",
    arabic: "سمبوسة مقرمشة خضار أو دجاج",
    price: 3.00,
    calories: 190,
    img: "assets/food/samosa.jpg",
    desc: "Golden fried savory pastry stuffed with spiced potato & peas, served with mint coriander dip.",
    badge: "Hot Snack"
  },
  {
    id: "snack_bun_maska",
    category: "snacks",
    title: "Classic Cafe Bun Maska",
    arabic: "بن مسكة بالزبدة الفاخرة",
    price: 4.00,
    calories: 230,
    img: "assets/food/porotta_roll.jpg",
    desc: "Soft warm toasted bakery bun slathered with rich salted butter — made for dipping into Karak.",
    badge: "Chai Partner"
  }
];

// --- APP STATE ---

let currentDrinkId = "zafran";
let customizerState = {
  drinkId: "zafran",
  size: "regular",     // regular, large (+1.5), kulhad (+2.0), dallah (+15.0)
  sizePrice: 0,
  sweetness: "standard", // standard, strong, less, zero, saffron (+1.5)
  sweetnessPrice: 0,
  snack: "none",       // none, oman (+6.0), samosa (+3.0), bun (+4.0)
  snackPrice: 0
};

let currentDiningMode = "car"; // 'car', 'takeaway', 'dinein'
let cart = [];
let carDetails = {
  model: "",
  plate: ""
};

// --- INITIALIZATION ---

document.addEventListener("DOMContentLoaded", () => {
  renderDrinkScroll();
  updateCustomizerUI();
  renderMenuGrid("all");
  setupEventListeners();
  loadCartFromStorage();
  updateCartUI();
});

// --- CUSTOMIZER FUNCTIONS ---

function selectDrink(drinkId) {
  if (!DRINKS_DATA[drinkId]) return;
  currentDrinkId = drinkId;
  customizerState.drinkId = drinkId;
  
  // Reset step additions if switching drinks
  updateCustomizerUI();
  
  // Highlight active in horizontal scroll
  document.querySelectorAll(".drink-product-item").forEach(el => {
    el.classList.toggle("active", el.dataset.id === drinkId);
  });

  // Trigger subtle cup animation
  const cupImg = document.getElementById("heroCupImg");
  if (cupImg) {
    cupImg.style.transform = "scale(0.85) rotate(-4deg)";
    cupImg.style.opacity = "0.4";
    setTimeout(() => {
      cupImg.src = DRINKS_DATA[drinkId].image;
      cupImg.style.transform = "scale(1) rotate(0deg)";
      cupImg.style.opacity = "1";
    }, 180);
  }
}

function updateCustomizerUI() {
  const drink = DRINKS_DATA[currentDrinkId];
  if (!drink) return;

  // Title, arabic, subtitle
  const titleEl = document.getElementById("heroDrinkTitle");
  const arabicEl = document.getElementById("heroDrinkArabic");
  const subEl = document.getElementById("heroDrinkSubtitle");
  const tagsContainer = document.getElementById("heroTagsList");
  const priceEl = document.getElementById("heroPriceVal");
  const calEl = document.getElementById("heroCaloriesVal");

  if (titleEl) titleEl.textContent = drink.title;
  if (arabicEl) arabicEl.textContent = drink.arabic;
  if (subEl) subEl.textContent = drink.subtitle;

  // Tags
  if (tagsContainer) {
    tagsContainer.innerHTML = drink.tags.map(t => `
      <span class="feature-tag"><i class="ri-check-line"></i> ${t}</span>
    `).join("");
  }

  // Calculate Total hero price
  const totalPrice = drink.basePrice + customizerState.sizePrice + customizerState.sweetnessPrice + customizerState.snackPrice;
  if (priceEl) priceEl.textContent = totalPrice.toFixed(2);
  
  const totalCal = drink.calories + (customizerState.size === "large" ? 60 : 0) + (customizerState.snack === "oman" ? 340 : customizerState.snack === "samosa" ? 190 : 0);
  if (calEl) calEl.textContent = `${totalCal} kcal`;
}

// Option pill selections
function selectSize(sizeKey, extraPrice, btnEl) {
  customizerState.size = sizeKey;
  customizerState.sizePrice = extraPrice;
  btnEl.closest(".options-pill-grid").querySelectorAll(".option-pill-btn").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");
  updateCustomizerUI();
}

function selectSweetness(sweetKey, extraPrice, btnEl) {
  customizerState.sweetness = sweetKey;
  customizerState.sweetnessPrice = extraPrice;
  btnEl.closest(".options-pill-grid").querySelectorAll(".option-pill-btn").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");
  updateCustomizerUI();
}

function selectSnack(snackKey, extraPrice, btnEl) {
  customizerState.snack = snackKey;
  customizerState.snackPrice = extraPrice;
  btnEl.closest(".options-pill-grid").querySelectorAll(".option-pill-btn").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");
  updateCustomizerUI();
}

function addCustomizedHeroToCart() {
  const drink = DRINKS_DATA[currentDrinkId];
  const unitPrice = drink.basePrice + customizerState.sizePrice + customizerState.sweetnessPrice + customizerState.snackPrice;
  
  const sizeNames = {
    regular: "Regular Glass (150ml)",
    large: "Large Cup (250ml)",
    kulhad: "Clay Matka Kulhad",
    dallah: "1L Thermal Dallah Flask"
  };
  
  const sweetNames = {
    standard: "Standard Karak",
    strong: "Extra Kadak / Strong",
    less: "Less Sugar",
    zero: "No Sugar / Sugar Free",
    saffron: "Pure Saffron Strands Extra"
  };
  
  const snackNames = {
    none: "",
    oman: "+ Chips Oman Porotta",
    samosa: "+ Hot Samosa (2pcs)",
    bun: "+ Classic Bun Maska"
  };

  const customizations = [
    sizeNames[customizerState.size],
    sweetNames[customizerState.sweetness],
    snackNames[customizerState.snack]
  ].filter(Boolean).join(" • ");

  const cartItem = {
    cartItemId: Date.now() + Math.random().toString(),
    id: drink.id,
    title: drink.title,
    customizations: customizations,
    price: unitPrice,
    img: drink.image,
    quantity: 1
  };

  addToCart(cartItem);
  showToast(`Added ${drink.title} to order!`);
}

// --- HORIZONTAL DRINK QUICK SELECTOR ---

function renderDrinkScroll() {
  const container = document.getElementById("drinkScrollContainer");
  if (!container) return;

  container.innerHTML = Object.values(DRINKS_DATA).map(drink => `
    <div class="drink-product-item ${drink.id === currentDrinkId ? 'active' : ''}" data-id="${drink.id}" onclick="selectDrink('${drink.id}')">
      <div class="drink-product-image">
        <img src="${drink.image}" alt="${drink.title}" />
      </div>
      <div class="drink-product-info">
        <h4>${drink.title}</h4>
        <div class="arabic-mini">${drink.arabic}</div>
        <div class="price-tag">AED ${drink.basePrice.toFixed(2)}</div>
      </div>
    </div>
  `).join("");
}

// --- FULL MENU RENDERING & FILTERING ---

function renderMenuGrid(category = "all", searchQuery = "") {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  let filtered = MENU_ITEMS;

  if (category !== "all") {
    filtered = filtered.filter(item => item.category === category);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.arabic.includes(q) || 
      item.desc.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px; color: rgb(var(--content-light));">
        <i class="ri-search-line" style="font-size: 40px; opacity: 0.4;"></i>
        <h3 style="margin-top: 10px; font-size: 18px;">No menu items found</h3>
        <p style="font-size: 13px;">Try searching for "chai", "shawarma", "burger", or "porotta"</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="food-card" data-category="${item.category}">
      <div class="food-card-img-wrap">
        <img src="${item.img}" alt="${item.title}" loading="lazy" />
        <span class="badge-overlay ${item.badge === 'Bestseller' ? 'bestseller' : ''}">${item.badge}</span>
      </div>
      <div class="food-card-body">
        <div class="food-card-header">
          <h4 class="food-card-title">${item.title}</h4>
          <div class="food-card-arabic">${item.arabic}</div>
        </div>
        <p class="food-card-desc">${item.desc}</p>
        <div class="food-card-footer">
          <div class="food-card-price">
            <span class="curr">AED</span> ${item.price.toFixed(2)}
          </div>
          <button class="btn-add-cart" onclick="addMenuItemToCart('${item.id}')">
            <i class="ri-add-line"></i> Add
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function addMenuItemToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const cartItem = {
    cartItemId: Date.now() + Math.random().toString(),
    id: item.id,
    title: item.title,
    customizations: "Standard Preparation",
    price: item.price,
    img: item.img,
    quantity: 1
  };

  addToCart(cartItem);
  showToast(`Added ${item.title} to order!`);
}

// --- CART & ORDER SYSTEM ---

function addToCart(item) {
  // Check if identical item already exists in cart
  const existing = cart.find(i => i.id === item.id && i.customizations === item.customizations);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCartToStorage();
  updateCartUI();
}

function updateCartQuantity(cartItemId, delta) {
  const idx = cart.findIndex(i => i.cartItemId === cartItemId);
  if (idx === -1) return;

  cart[idx].quantity += delta;
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1);
  }

  saveCartToStorage();
  updateCartUI();
}

function removeCartItem(cartItemId) {
  cart = cart.filter(i => i.cartItemId !== cartItemId);
  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  const countBadges = document.querySelectorAll(".cart-count-badge");
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  countBadges.forEach(b => {
    b.textContent = totalCount;
  });

  const cartBody = document.getElementById("cartDrawerBody");
  const subtotalEl = document.getElementById("cartSubtotalVal");
  const vatEl = document.getElementById("cartVatVal");
  const totalEl = document.getElementById("cartTotalVal");

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <i class="ri-cup-line"></i>
        <h4>Your tray is empty</h4>
        <p style="font-size: 13px; margin-top: 6px;">Add some hot Zafran Karak or a crispy Shawarma to get started!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "AED 0.00";
    if (vatEl) vatEl.textContent = "AED 0.00";
    if (totalEl) totalEl.textContent = "AED 0.00";
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.img}" alt="${item.title}" class="cart-item-img" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-details">${item.customizations}</div>
        <div class="cart-item-price-row">
          <div class="cart-item-price">AED ${(item.price * item.quantity).toFixed(2)}</div>
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQuantity('${item.cartItemId}', -1)">-</button>
            <div class="qty-val">${item.quantity}</div>
            <button class="qty-btn" onclick="updateCartQuantity('${item.cartItemId}', 1)">+</button>
          </div>
        </div>
      </div>
      <button onclick="removeCartItem('${item.cartItemId}')" style="color: #999; font-size: 16px; align-self: flex-start;">
        <i class="ri-delete-bin-line"></i>
      </button>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const vat = subtotal * 0.05; // 5% UAE VAT
  const grandTotal = subtotal + vat;

  if (subtotalEl) subtotalEl.textContent = `AED ${subtotal.toFixed(2)}`;
  if (vatEl) vatEl.textContent = `AED ${vat.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `AED ${grandTotal.toFixed(2)}`;
}

function saveCartToStorage() {
  try {
    localStorage.setItem("arab_chai_cart", JSON.stringify(cart));
  } catch (e) {}
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("arab_chai_cart");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {}
}

// --- DINING & CAR DELIVERY MODES ---

function setDiningMode(mode) {
  currentDiningMode = mode;
  
  // Header buttons
  document.querySelectorAll(".dining-mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  // Cart pills
  document.querySelectorAll(".order-type-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.mode === mode);
  });

  // Car details input visibility in cart
  const carField = document.getElementById("cartCarDetailsField");
  if (carField) {
    carField.classList.toggle("show", mode === "car");
  }
}

function saveQuickCarOrder() {
  const model = document.getElementById("carModelInput")?.value.trim() || "";
  const plate = document.getElementById("carPlateInput")?.value.trim() || "";
  
  if (!plate && !model) {
    showToast("Please enter your car plate or car model!");
    return;
  }

  carDetails.model = model;
  carDetails.plate = plate;

  // Sync to cart car field
  const cartCarInput = document.getElementById("cartCarInput");
  if (cartCarInput) {
    cartCarInput.value = `${model} ${plate}`.trim();
  }

  setDiningMode("car");
  showToast("🚗 Car details saved! Open your order tray to send.");
  toggleCartDrawer(true);
}

// --- WHATSAPP ORDER GENERATOR ---

function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast("Your tray is empty! Add items first.");
    return;
  }

  const phone = "971566847002"; // Arab Chai Cafe WhatsApp Number
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const vat = subtotal * 0.05;
  const grandTotal = subtotal + vat;

  let modeText = "Takeaway";
  if (currentDiningMode === "dinein") modeText = "Dine-In";
  if (currentDiningMode === "car") {
    const inputVal = document.getElementById("cartCarInput")?.value.trim() || `${carDetails.model} ${carDetails.plate}`.trim();
    modeText = `🚗 Car Delivery Outside Al Mina Shop (${inputVal || 'Outside Shop'})`;
  }

  let text = `*NEW ORDER - ARAB CHAI CAFE & RESTAURANT*\n`;
  text += `📍 Location: Al Mina, Dubai\n`;
  text += `🛎️ Order Type: ${modeText}\n`;
  text += `--------------------------------------\n`;

  cart.forEach((item, idx) => {
    text += `${idx + 1}. *${item.title}* (x${item.quantity})\n`;
    if (item.customizations) {
      text += `   ↳ _${item.customizations}_\n`;
    }
    text += `   ↳ AED ${(item.price * item.quantity).toFixed(2)}\n`;
  });

  text += `--------------------------------------\n`;
  text += `Subtotal: AED ${subtotal.toFixed(2)}\n`;
  text += `VAT (5%): AED ${vat.toFixed(2)}\n`;
  text += `*TOTAL AMOUNT: AED ${grandTotal.toFixed(2)}*\n\n`;
  text += `Thank you! Please confirm my order.\n`;

  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");
}

// --- UI INTERACTIONS & TOAST ---

function toggleCartDrawer(open) {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer || !overlay) return;

  if (open) {
    drawer.classList.add("active");
    overlay.classList.add("active");
  } else {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  }
}

function showToast(msg) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="ri-checkbox-circle-fill"></i> ${msg}`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function setupEventListeners() {
  // Mobile sidebar toggle
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const sidebar = document.querySelector(".main-sidebar");
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Search input
  const searchInput = document.getElementById("headerSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderMenuGrid("all", e.target.value);
    });
  }

  // Category filter tabs
  document.querySelectorAll(".category-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.category || "all";
      renderMenuGrid(cat);
    });
  });

  // Dining mode header selectors
  document.querySelectorAll(".dining-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setDiningMode(btn.dataset.mode);
    });
  });

  // Cart open / close
  const cartBtn = document.getElementById("headerCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartOverlay = document.getElementById("cartOverlay");

  if (cartBtn) cartBtn.addEventListener("click", () => toggleCartDrawer(true));
  if (closeCartBtn) closeCartBtn.addEventListener("click", () => toggleCartDrawer(false));
  if (cartOverlay) cartOverlay.addEventListener("click", () => toggleCartDrawer(false));

  // Cart order type pills
  document.querySelectorAll(".order-type-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      setDiningMode(pill.dataset.mode);
    });
  });
}
