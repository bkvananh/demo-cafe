/* file: js/components.js */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Kiểm tra xem có thẻ Sidebar Admin không
    const adminSidebarContainer = document.getElementById('admin-sidebar');
    
    if (adminSidebarContainer) {
        loadAdminSidebar(adminSidebarContainer);
    } else {
        // Nếu không phải trang Admin thì load Header/Footer cho khách
        loadHeader();
        loadFooter();
    }
});

/* --- SIDEBAR CHO ADMIN --- */
function loadAdminSidebar(container) {
    const sidebarHTML = `
    <div class="sidebar-inner">
        <h3 class="admin-logo">Admin Panel</h3>
        <div class="admin-menu">
            <a href="admin-dashboard.html">📬 Hộp thư đến</a>
            <a href="admin-products.html">☕ Quản lý Món</a>
            <a href="admin-blog.html">📰 Quản lý Bài viết</a>
        </div>
        <div class="admin-bottom">
            <a href="index.html" target="_blank" class="btn-view">👁️ Xem Web</a>
            <a href="#" onclick="handleLogout()" class="btn-logout">🚪 Đăng xuất</a>
        </div>
    </div>`;

    container.innerHTML = sidebarHTML;
    highlightActiveLink();
}

/* --- HEADER/FOOTER CHO KHÁCH (Giữ nguyên) --- */
function loadHeader() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const adminBtn = isAdmin ? `<a href="admin-dashboard.html" style="color:red; font-weight:bold; margin-left:15px;">🔧 Vào Admin</a>` : '';

    document.body.insertAdjacentHTML('afterbegin', `
    <header>
        <div class="header-inner">
            <a href="index.html" class="logo">COFFEE CHAIN</a>
            <nav>
                <a href="index.html">Trang chủ</a>
                <a href="menu.html">Thực đơn</a>
                <a href="blog.html">Tin tức</a>
                <a href="story.html">Câu chuyện</a>
                <a href="contact.html">Liên hệ</a>
                ${adminBtn}
            </nav>
        </div>
    </header>`);
}

function loadFooter() {
    document.body.insertAdjacentHTML('beforeend', `
    <footer>
        <div class="container" style="padding: 20px;">
            <p>&copy; 2025 Coffee Chain Admin System.</p>
        </div>
    </footer>`);
}

/* --- TIỆN ÍCH --- */
function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a, .admin-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPath) link.classList.add('active');
    });
}

function handleLogout() {
    localStorage.removeItem('isAdmin');
    window.location.href = 'index.html';
}
