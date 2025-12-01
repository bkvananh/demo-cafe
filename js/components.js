/* file: js/components.js */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Kiểm tra xem đây là trang Admin hay Khách
    const adminSidebar = document.getElementById('admin-sidebar');

    if (adminSidebar) {
        // --- RENDER SIDEBAR ADMIN ---
        adminSidebar.innerHTML = `
            <h3 style="text-align:center; padding-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.2); margin-bottom:20px;">Admin Panel</h3>
            <a href="admin-dashboard.html" class="sidebar-link">📬 Hộp thư</a>
            <a href="admin-products.html" class="sidebar-link">☕ Quản lý Món</a>
            <a href="admin-blog.html" class="sidebar-link">📰 Quản lý Bài viết</a>
            <div style="margin-top:auto; padding-top:20px; border-top:1px solid rgba(255,255,255,0.2);">
                <a href="index.html" target="_blank" class="sidebar-link" style="background:#4CAF50; color:white; text-align:center;">👁️ Xem Web</a>
                <a href="#" onclick="adminLogout()" class="sidebar-link" style="background:#d32f2f; color:white; text-align:center;">🚪 Đăng xuất</a>
            </div>
        `;
    } else {
        // --- RENDER HEADER KHÁCH ---
        const isAdmin = localStorage.getItem('isAdmin') === 'true';
        const adminBtn = isAdmin ? `<a href="admin-products.html" style="color:red; font-weight:bold; margin-left:15px;">🔧 Vào Admin</a>` : '';
        
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
            </header>
        `);
        
        document.body.insertAdjacentHTML('beforeend', `
            <footer><div class="container"><p>&copy; 2025 Coffee Chain Group 16.</p></div></footer>
        `);
    }

    // Highlight Active Link
    const path = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a, .sidebar-link').forEach(a => {
        if(a.getAttribute('href') === path) a.classList.add('active');
    });
});
