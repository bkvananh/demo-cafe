/* file: js/db.js */
const PRODUCTS_KEY = 'coffee_products';
const BLOG_KEY = 'coffee_posts';
const CONTACTS_KEY = 'coffee_contacts';

// Dữ liệu mẫu (Ảnh Online)
const INITIAL_PRODUCTS = [
    { id: 1, name: "Phin Sữa Đá", price: 29000, category: "phin", img: "https://images.unsplash.com/photo-1596545722210-91775796a32d?q=80&w=800" },
    { id: 2, name: "Latte Art", price: 49000, category: "espresso", img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800" },
    { id: 3, name: "Cold Brew Mộc", price: 55000, category: "cold_brew", img: "https://images.unsplash.com/photo-1517701604599-bb29b5c7fa5b?q=80&w=800" },
    { id: 4, name: "Cà Phê Hạt (250g)", price: 120000, category: "packaged", img: "https://images.unsplash.com/photo-1611854779393-1b2ae9d5af1d?q=80&w=800" }
];

const INITIAL_POSTS = [
    { id: 1, title: "Khai trương chi nhánh Quận 1", date: "2025-12-01", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800", desc: "Ưu đãi mua 1 tặng 1 nhân dịp khai trương..." }
];

// Khởi tạo DB
function initDB() {
    if (!localStorage.getItem(PRODUCTS_KEY)) localStorage.setItem(PRODUCTS_KEY, JSON.stringify(INITIAL_PRODUCTS));
    if (!localStorage.getItem(BLOG_KEY)) localStorage.setItem(BLOG_KEY, JSON.stringify(INITIAL_POSTS));
}

// Hàm CRUD (Lấy, Thêm, Xóa)
function getData(key) { return JSON.parse(localStorage.getItem(key)) || []; }
function addData(key, item) { 
    let list = getData(key); 
    item.id = Date.now(); 
    list.unshift(item); 
    localStorage.setItem(key, JSON.stringify(list)); 
}
function deleteData(key, id) {
    let list = getData(key).filter(i => i.id != id);
    localStorage.setItem(key, JSON.stringify(list));
}

initDB(); // Chạy ngay
