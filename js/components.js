/* file: js/components.js */
document.addEventListener('DOMContentLoaded', () => {
    // Kiểm tra xem trang hiện tại là trang KHÁCH hay trang ADMIN
    const isAdminPage = window.location.pathname.includes('admin-');
    
    if (isAdminPage) {
        loadAdminSidebar();
    } else {
        loadHeader();
        loadFooter();
    }
});

/* --- 1. HEADER CHO KHÁCH HÀNG --- */
function loadHeader() {
    // Kiểm tra xem có đang đăng nhập Admin không?
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    
    // Nút "Vào Admin" (Chỉ hiện khi đã đăng nhập)
    const adminButton = isAdmin 
        ? `<a href="admin-products.html" style="color: red; font-weight: bold; border: 1px solid red; padding: 5px 10px; border-radius: 4px; margin-left: 15px;">🔧 Quản trị</a>` 
        : '';

    const headerHTML = `
    <header>
        <div class="header-inner">
            <a href="index.html" class="logo">COFFEE CHAIN</a>
            <nav>
                <a href="index.html">Trang chủ</a>
                <a href="menu.html">Thực đơn</a>
                <a href="blog.html">Tin tức</a>
                <a href="story.html">Câu chuyện</a>
                <a href="contact.html">Liên hệ</a>
                ${adminButton} 
            </nav>
        </div>
    </header>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    highlightActiveLink();
}

/* --- 2. FOOTER CHO KHÁCH HÀNG --- */
function loadFooter() {
    const footerHTML = `
    <footer>
        <div class="container" style="padding: 20px;">
            <h3>COFFEE CHAIN</h3>
            <p>Từ năm 1999 - Hương vị di sản Việt Nam</p>
            <br>
            <p style="font-size: 14px; opacity: 0.7;">&copy; 2025 Group 16 Multimedia Design. All rights reserved.</p>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

/* --- 3. SIDEBAR CHO ADMIN (MỚI) --- */
function loadAdminSidebar() {
    // Tìm thẻ div placeholder có class="admin-sidebar-placeholder" để chèn vào
    // Hoặc chèn trực tiếp vào đầu body nếu cấu trúc CSS cho phép
    
    const sidebarHTML = `
    <div class="sidebar">
        <h3 style="margin-bottom: 30px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 20px;">Admin Panel</h3>
        
        <a href="admin-dashboard.html">📬 Hộp thư khách hàng</a>
        <a href="admin-products.html">☕ Quản lý Sản phẩm</a>
        <a href="admin-blog.html">📰 Quản lý Bài viết</a>
        
        <div style="margin-top: 50px; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 20px;">
            <a href="index.html" target="_blank" style="background: #4CAF50; color: white;">👁️ Xem Website</a>
            <a href="#" onclick="handleLogout()" style="background: #d9534f; color: white;">🚪 Đăng xuất</a>
        </div>
    </div>`;

    // Chèn Sidebar vào đầu trang Admin
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    
    highlightActiveLink();
}

/* --- HÀM TIỆN ÍCH --- */
function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop();
    // Chọn tất cả thẻ a trong nav (header) hoặc sidebar
    const links = document.querySelectorAll('nav a, .sidebar a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        // So sánh tương đối để tránh lỗi
        if (href && href === currentPath) {
            link.classList.add('active');
        }
    });
}

// Hàm đăng xuất toàn cục
function handleLogout() {
    localStorage.removeItem('isAdmin');
    window.location.href = 'index.html';
}
