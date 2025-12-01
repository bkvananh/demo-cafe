/* file: js/db.js */
const PRODUCTS_KEY = 'coffee_products';
const BLOG_KEY = 'coffee_posts';
const CONTACTS_KEY = 'coffee_contacts'; // Key quan trọng để lưu tin nhắn

// Dữ liệu mẫu phong phú hơn
const INITIAL_PRODUCTS = [
    // PHIN
    { id: 1, name: "Phin Sữa Đá", price: 29000, category: "phin", img: "https://images.unsplash.com/photo-1596545722210-91775796a32d?q=80&w=800" },
    { id: 2, name: "Phin Đen Đá", price: 25000, category: "phin", img: "https://images.unsplash.com/photo-1628266205562-349f2b8449c2?q=80&w=800" },
    { id: 3, name: "Bạc Xỉu Đá", price: 32000, category: "phin", img: "https://images.unsplash.com/photo-1582236894374-954f0a20078b?q=80&w=800" },
    
    // ESPRESSO
    { id: 4, name: "Latte Art Hạnh Nhân", price: 49000, category: "espresso", img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800" },
    { id: 5, name: "Cappuccino Cinnamon", price: 45000, category: "espresso", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800" },
    { id: 6, name: "Americano Đá", price: 35000, category: "espresso", img: "https://images.unsplash.com/photo-1551030173-122f525e6556?q=80&w=800" },
    
    // COLD BREW
    { id: 7, name: "Cold Brew Mộc", price: 45000, category: "cold_brew", img: "https://images.unsplash.com/photo-1517701604599-bb29b5c7fa5b?q=80&w=800" },
    { id: 8, name: "Cold Brew Cam Sả", price: 55000, category: "cold_brew", img: "https://images.unsplash.com/photo-1461023058943-48dbf1399f98?q=80&w=800" },
    
    // ĐÓNG GÓI
    { id: 9, name: "Cà Phê Hạt (250g)", price: 120000, category: "packaged", img: "https://images.unsplash.com/photo-1611854779393-1b2ae9d5af1d?q=80&w=800" },
    { id: 10, name: "Cà Phê Hòa Tan (Hộp)", price: 65000, category: "packaged", img: "https://images.unsplash.com/photo-1621221768656-7872ee91eb0d?q=80&w=800" }
];

const INITIAL_POSTS = [
    { id: 1, title: "Khai trương chi nhánh Quận 1", date: "2025-12-01", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800", desc: "Ưu đãi mua 1 tặng 1 nhân dịp khai trương..." }
];

// Khởi tạo DB
function initDB() {
    if (!localStorage.getItem(PRODUCTS_KEY)) localStorage.setItem(PRODUCTS_KEY, JSON.stringify(INITIAL_PRODUCTS));
    if (!localStorage.getItem(BLOG_KEY)) localStorage.setItem(BLOG_KEY, JSON.stringify(INITIAL_POSTS));
    // Không cần init contact vì nó bắt đầu là rỗng
}

// Hàm CRUD dùng chung
function getData(key) { return JSON.parse(localStorage.getItem(key)) || []; }

function addData(key, item) { 
    let list = getData(key); 
    item.id = Date.now(); // Tạo ID duy nhất
    list.unshift(item);   // Thêm vào đầu danh sách
    localStorage.setItem(key, JSON.stringify(list)); 
}

function deleteData(key, id) {
    let list = getData(key).filter(i => i.id != id);
    localStorage.setItem(key, JSON.stringify(list));
}

initDB(); // Chạy ngay
