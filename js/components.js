/* file: js/components.js */
document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    document.body.insertAdjacentHTML('afterbegin', `
        <header>
            <div class="header-inner">
                <a href="index.html" class="logo">COFFEE CHAIN</a>
                <nav>
                    <a href="index.html">Trang chủ</a>
                    <a href="menu.html">Thực đơn</a>
                    <a href="blog.html">Tin tức</a> <a href="story.html">Câu chuyện</a>
                    <a href="contact.html">Liên hệ</a>
                </nav>
            </div>
        </header>
    `);

    // Inject Footer (Giữ nguyên)
    document.body.insertAdjacentHTML('beforeend', `
        <footer>
            <div class="container" style="padding: 20px;">
                <h3>COFFEE CHAIN</h3>
                <p>Từ năm 1999 - Hương vị di sản Việt Nam</p>
                <br>
                <p style="font-size: 14px; opacity: 0.7;">&copy; 2025 Group 16 Multimedia Design. All rights reserved.</p>
            </div>
        </footer>
    `);

    // Highlight Active Menu (Giữ nguyên)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) link.classList.add('active');
    });
});
