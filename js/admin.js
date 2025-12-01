/* file: js/admin.js */

// Hàm kiểm tra quyền Admin
(function checkAdminPermission() {
    // 1. Kiểm tra token trong LocalStorage
    const token = localStorage.getItem('isAdmin');

    // 2. Nếu không phải là 'true'
    if (token !== 'true') {
        // Stop loading trang hiện tại bằng cách xóa nội dung body (tránh chớp nháy)
        document.body.innerHTML = '<h2 style="text-align:center; margin-top:50px;">⛔ Đang chuyển hướng...</h2>';
        
        // Đá về trang login
        window.location.href = 'admin-portal-v2.html';
    }
})();

// Hàm Đăng xuất (Dùng chung cho nút Logout)
function handleLogout() {
    if(confirm("Bạn muốn đăng xuất?")) {
        localStorage.removeItem('isAdmin'); // Xóa token
        window.location.href = 'index.html'; // Về trang chủ
    }
}
