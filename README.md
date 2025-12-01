https://bkvananh.github.io/demo-cafe/
# ĐỒ ÁN MÔN HỌC - CỔNG TRUYỀN THÔNG SỐ CHUỖI CÀ PHÊ
**Nhóm:** 16  
**Lớp:** Thiết kế Đa phương tiện

---

## 1. Giới thiệu
Đây là website giả lập (Prototype) cho chuỗi cửa hàng **Coffee Chain**. Dự án tập trung vào thiết kế giao diện (UI/UX) và mô phỏng các luồng nghiệp vụ cơ bản mà không sử dụng Backend thực tế.

## 2. Công nghệ sử dụng
* **HTML5 / CSS3**: Xây dựng giao diện Responsive, chuẩn màu thương hiệu (Highlands/Starbucks style).
* **JavaScript (Vanilla)**: Xử lý logic Client-side.
* **LocalStorage**: Giả lập Cơ sở dữ liệu (Database) để lưu trữ món ăn, bài viết, và trạng thái đăng nhập.

## 3. Tính năng chính (Mô phỏng)
### A. Phân hệ Khách hàng (Public)
* Xem trang chủ với Slider và Teaser.
* Xem Menu có bộ lọc (Phin, Espresso, Cold Brew).
* Tìm kiếm sản phẩm (Realtime).
* Xem câu chuyện thương hiệu.

### B. Phân hệ Quản trị (Private)
* **Hidden Entry:** Đăng nhập qua đường dẫn ẩn `admin-portal-v2.html`.
* **Bảo mật:** Kiểm tra phiên làm việc (Session) bằng LocalStorage.
* **CRUD:** Thêm/Xóa món ăn - Dữ liệu cập nhật tức thì sang trang Khách hàng.

## 4. Hướng dẫn Cài đặt & Chạy Demo
1.  Tải toàn bộ source code về máy.
2.  Bổ sung hình ảnh vào thư mục `images/` theo đúng tên file yêu cầu.
3.  Mở file `index.html` bằng trình duyệt (Chrome/Edge).
4.  **Truy cập Admin:**
    * Mở file `admin-portal-v2.html` trên trình duyệt.
    * User: `admin`
    * Pass: `123`

## 5. Lưu ý khi Demo
* Dữ liệu được lưu trên trình duyệt của máy đang mở. Nếu đổi máy tính, dữ liệu sẽ về mặc định.
* Để reset dữ liệu về ban đầu: Mở Console (F12) -> Application -> Clear Local Storage -> F5.
