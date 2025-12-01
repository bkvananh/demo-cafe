/* file: js/components.js */
function loadComponents() {
    // Header HTML
    const headerHTML = `
    <header>
        <div class="header-inner">
            <a href="index.html" class="logo"><img src="./images/logo.png" alt="Coffee Chain"></a>
            <nav>
                <a href="index.html">Trang chủ</a>
                <a href="menu.html">Thực đơn</a>
                <a href="story.html">Câu chuyện</a>
                <a href="contact.html">Liên hệ</a>
            </nav>
        </div>
    </header>`;

    // Footer HTML
    const footerHTML = `
    <footer>
        <div class="container" style="padding: 20px;">
            <h3>COFFEE CHAIN</h3>
            <p>Hương vị di sản Việt Nam</p>
            <p>&copy; 2025 Coffee Chain Group 16. All rights reserved.</p>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Active state
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) link.classList.add('active');
    });
}

document.addEventListener('DOMContentLoaded', loadComponents);
