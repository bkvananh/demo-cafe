/* file: js/db.js */
const PRODUCTS_KEY = 'coffee_products';
const BLOG_KEY = 'coffee_posts';
const CONTACTS_KEY = 'coffee_contacts';

// Dữ liệu mẫu với ẢNH ONLINE (Unsplash) - Không lo lỗi ảnh nữa
const INITIAL_PRODUCTS = [
    { 
        id: 1, 
        name: "Phin Sữa Đá Truyền Thống", 
        price: 29000, 
        category: "phin", 
        img: "./image/products/phin-da.jpg" 
    },
    { 
        id: 2, 
        name: "Phin Đen Đá", 
        price: 25000, 
        category: "phin", 
        img: "./image/products/phin-da.jpg" 
    },
    { 
        id: 3, 
        name: "Latte Art Hạnh Nhân", 
        price: 49000, 
        category: "espresso", 
        img: "./image/products/latte.jpg" 
    },
    { 
        id: 4, 
        name: "Cappuccino Cinnamon", 
        price: 49000, 
        category: "espresso", 
        img: "./image/products/hat-cf.jpg" 
    },
    { 
        id: 5, 
        name: "Cold Brew Mộc Vị", 
        price: 55000, 
        category: "cold_brew", 
        img: "./image/products/cold-brew.jpg" 
    },
    { 
        id: 6, 
        name: "Hạt Arabica Cầu Đất (250g)", 
        price: 120000, 
        category: "packaged", 
        img: "./image/products/cold-brew.jpg" 
    }
];

// Hàm khởi tạo DB
function initDB() {
    if (!localStorage.getItem(PRODUCTS_KEY)) {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(INITIAL_PRODUCTS));
    }
}

// Các hàm CRUD
function getProducts() { return JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || []; }

function addProduct(product) {
    let list = getProducts();
    product.id = Date.now();
    list.unshift(product);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(list));
}

function deleteProduct(id) {
    let list = getProducts().filter(p => p.id != id);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(list));
}

initDB(); // Chạy ngay khi file được nhúng
