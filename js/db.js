/* file: js/db.js */
const PRODUCTS_KEY = 'coffee_products';
const BLOG_KEY = 'coffee_posts';

// Dữ liệu mẫu ban đầu
const INITIAL_PRODUCTS = [
    { id: 1, name: "Phin Sữa Đá Đậm Vị", price: 29000, category: "phin", img: "images/products/phin-da.jpg" },
    { id: 2, name: "Phin Đen Đá", price: 25000, category: "phin", img: "images/products/phin-da.jpg" },
    { id: 3, name: "Latte Hạnh Nhân", price: 45000, category: "espresso", img: "images/products/latte.jpg" },
    { id: 4, name: "Cappuccino", price: 45000, category: "espresso", img: "images/products/latte.jpg" },
    { id: 5, name: "Cold Brew Truyền Thống", price: 50000, category: "cold_brew", img: "images/products/cold-brew.jpg" },
    { id: 6, name: "Cà Phê Hạt Arabica (250g)", price: 120000, category: "packaged", img: "images/products/hat-cf.jpg" }
];

const INITIAL_POSTS = [
    {
        id: 1,
        title: "Khai trương chi nhánh Quận 1",
        date: "2025-10-20",
        img: "images/blog/news1.jpg",
        desc: "Ưu đãi mua 1 tặng 1 nhân dịp khai trương chi nhánh mới..."
    }
];

// Hàm khởi tạo DB
function initDB() {
    if (!localStorage.getItem(PRODUCTS_KEY)) {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(INITIAL_PRODUCTS));
    }
    if (!localStorage.getItem(BLOG_KEY)) {
        localStorage.setItem(BLOG_KEY, JSON.stringify(INITIAL_POSTS));
    }
}

// Hàm lấy dữ liệu
function getProducts() { return JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || []; }
function getPosts() { return JSON.parse(localStorage.getItem(BLOG_KEY)) || []; }

// Hàm thêm sản phẩm (Admin)
function addProduct(product) {
    let products = getProducts();
    product.id = Date.now();
    products.unshift(product);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

// Hàm xóa sản phẩm (Admin)
function deleteProduct(id) {
    let products = getProducts();
    products = products.filter(p => p.id != id);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

// Chạy khởi tạo ngay khi file được load
initDB();
