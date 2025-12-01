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
        img: "https://images.unsplash.com/photo-1596545722210-91775796a32d?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        id: 2, 
        name: "Phin Đen Đá", 
        price: 25000, 
        category: "phin", 
        img: "https://images.unsplash.com/photo-1628266205562-349f2b8449c2?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        id: 3, 
        name: "Latte Art Hạnh Nhân", 
        price: 49000, 
        category: "espresso", 
        img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        id: 4, 
        name: "Cappuccino Cinnamon", 
        price: 49000, 
        category: "espresso", 
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        id: 5, 
        name: "Cold Brew Mộc Vị", 
        price: 55000, 
        category: "cold_brew", 
        img: "https://images.unsplash.com/photo-1517701604599-bb29b5c7fa5b?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        id: 6, 
        name: "Hạt Arabica Cầu Đất (250g)", 
        price: 120000, 
        category: "packaged", 
        img: "https://images.unsplash.com/photo-1611854779393-1b2ae9d5af1d?q=80&w=800&auto=format&fit=crop" 
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
