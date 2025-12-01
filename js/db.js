/* file: js/db.js */
const PRODUCTS_KEY = 'coffee_products';
const BLOG_KEY = 'coffee_posts';
const CONTACTS_KEY = 'coffee_contacts';

// --- Dữ liệu mẫu (Fallback) ---
const INITIAL_PRODUCTS = [
    { id: 1, name: "Phin Sữa Đá", price: 29000, category: "phin", img: "https://images.unsplash.com/photo-1596545722210-91775796a32d?q=80&w=800" },
    { id: 2, name: "Latte Hạnh Nhân", price: 49000, category: "espresso", img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800" },
    { id: 3, name: "Cold Brew Mộc", price: 55000, category: "cold_brew", img: "https://images.unsplash.com/photo-1517701604599-bb29b5c7fa5b?q=80&w=800" }
];

const INITIAL_POSTS = [
    { 
        id: 1, 
        title: "Khai trương chi nhánh Quận 1", 
        date: "2025-10-20", 
        img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800", 
        desc: "Ưu đãi mua 1 tặng 1 nhân dịp khai trương chi nhánh mới tại trung tâm thành phố." 
    },
    {
        id: 2, 
        title: "Ra mắt bộ sưu tập Trà Mùa Thu", 
        date: "2025-11-05", 
        img: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?q=80&w=800", 
        desc: "Hương vị thanh mát của trà Oolong kết hợp với hạt sen vàng."
    }
];

// --- Core Functions ---
function initDB() {
    if (!localStorage.getItem(PRODUCTS_KEY)) localStorage.setItem(PRODUCTS_KEY, JSON.stringify(INITIAL_PRODUCTS));
    if (!localStorage.getItem(BLOG_KEY)) localStorage.setItem(BLOG_KEY, JSON.stringify(INITIAL_POSTS));
}

// 1. PRODUCTS
function getProducts() { return JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || []; }
function addProduct(p) { 
    let list = getProducts(); p.id = Date.now(); list.unshift(p); 
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(list)); 
}
function deleteProduct(id) {
    let list = getProducts().filter(p => p.id != id);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(list));
}

// 2. BLOG (POSTS)
function getPosts() { return JSON.parse(localStorage.getItem(BLOG_KEY)) || []; }
function addPost(p) {
    let list = getPosts(); p.id = Date.now(); list.unshift(p);
    localStorage.setItem(BLOG_KEY, JSON.stringify(list));
}
function deletePost(id) {
    let list = getPosts().filter(p => p.id != id);
    localStorage.setItem(BLOG_KEY, JSON.stringify(list));
}

// 3. CONTACTS (Tin nhắn)
function getContacts() { return JSON.parse(localStorage.getItem(CONTACTS_KEY)) || []; }
function deleteContact(id) {
    let list = getContacts().filter(c => c.id != id);
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(list));
}

initDB();
