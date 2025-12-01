/* file: js/admin.js */
// Hàm kiểm tra quyền, nhúng vào đầu các trang admin
function checkGatekeeper() {
    const isLogin = localStorage.getItem('isAdmin');
    if (isLogin !== 'true') {
        alert('⛔ Bạn chưa đăng nhập!');
        window.location.href = 'admin-portal-v2.html';
    }
}

function adminLogout() {
    if(confirm("Đăng xuất khỏi hệ thống?")) {
        localStorage.removeItem('isAdmin');
        window.location.href = 'index.html';
    }
}
