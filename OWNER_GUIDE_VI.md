# Hướng dẫn quản lý Vincent Nguyen Portfolio

Tài liệu này dành cho Vincent để có thể tự cập nhật và xuất bản website mà không cần chỉnh cấu trúc kỹ thuật.

## 1. Cách đưa website lên GitHub lần đầu

### Cách dễ nhất: GitHub Desktop

1. Đăng nhập GitHub bằng tài khoản `Vincentnguyencreative06-stack`.
2. Cài và mở GitHub Desktop: <https://desktop.github.com/>.
3. Giải nén gói source code đã nhận.
4. Trong GitHub Desktop, chọn **File → Add Local Repository** và trỏ tới thư mục vừa giải nén.
5. Chọn **Publish repository**.
6. Đặt repository name chính xác là `vincentnguyencreative06-stack.github.io`.
7. Bỏ chọn **Keep this code private** để repository ở chế độ public, sau đó chọn **Publish Repository**.
8. Trên GitHub, mở repository → **Settings → Pages**.
9. Trong **Build and deployment → Source**, chọn **GitHub Actions**.
10. Mở tab **Actions**. Khi workflow `Deploy portfolio to GitHub Pages` hiện dấu tích xanh, website đã được xuất bản.

Địa chỉ public dự kiến:
`https://vincentnguyencreative06-stack.github.io/`

## 2. Quy trình tự sửa bằng GitHub Desktop

1. Mở GitHub Desktop và chọn repository portfolio.
2. Chọn **Fetch origin**, sau đó **Pull origin** nếu GitHub báo có bản mới.
3. Mở thư mục bằng VS Code qua **Repository → Open in Visual Studio Code**.
4. Chỉnh đúng file theo bản đồ ở phần dưới.
5. Lưu file.
6. Quay lại GitHub Desktop để xem danh sách thay đổi.
7. Viết mô tả ngắn, ví dụ `Update experience details`.
8. Chọn **Commit to main** rồi **Push origin**.
9. GitHub tự build và cập nhật website. Có thể theo dõi trạng thái trong tab **Actions**.

### Sửa nhanh ngay trên website GitHub

Với thay đổi câu chữ đơn giản, không nhất thiết phải dùng VS Code:

1. Mở repository trên GitHub.
2. Mở file cần sửa theo bản đồ ở phần dưới.
3. Nhấn biểu tượng bút chì **Edit this file**.
4. Chỉ sửa phần câu chữ, sau đó chọn **Commit changes**.
5. GitHub Actions tự cập nhật website.

Để thay ảnh hoặc PDF trực tiếp trên GitHub, mở đúng thư mục, chọn **Add file → Upload files**, tải file mới lên và commit. Nếu muốn thay thế mà không sửa code, file mới phải trùng hoàn toàn tên file cũ.

## 3. Bản đồ nội dung cần chỉnh

| Nội dung | File |
| --- | --- |
| Trang chủ | `app/page.tsx` |
| About | `app/about/page.tsx` |
| Danh sách project | `app/work/page.tsx` |
| FinTech case study | `app/work/fintech-transaction-intelligence/page.tsx` |
| Supply Chain case study | `app/work/supply-chain-performance-intelligence/page.tsx` |
| Experience và Education | `app/experience/page.tsx` |
| Research Interests | `app/research/page.tsx` |
| Résumé | `app/resume/page.tsx` |
| Contact | `app/contact/page.tsx` |
| Marginalia | `app/marginalia/page.tsx` |
| Menu đầu trang | `components/SiteHeader.tsx` |
| Footer | `components/SiteFooter.tsx` |
| Màu sắc, font và dàn trang | `app/globals.css` |
| Tiêu đề và mô tả Google | `app/layout.tsx` |

## 4. Cách sửa chữ an toàn

Nội dung trang nằm giữa các thẻ HTML/React, ví dụ:

```tsx
<p>Current sentence shown on the website.</p>
```

Chỉ thay phần câu chữ:

```tsx
<p>New sentence shown on the website.</p>
```

Không xóa các dấu `<`, `>`, `/`, `{}`, dấu ngoặc kép hoặc tên class nếu chưa chắc chắn.

Nếu nội dung có dấu nháy đơn, có thể nhập bình thường trong phần text giữa hai thẻ. Nếu đang sửa nội dung nằm trong dấu ngoặc kép, giữ nguyên cặp ngoặc kép ở ngoài.

## 5. Cách thay ảnh

1. Chuẩn bị ảnh `.webp`, ưu tiên dung lượng dưới 500 KB.
2. Giữ đúng tỷ lệ gần giống ảnh cũ để bố cục không thay đổi bất ngờ.
3. Chép ảnh vào `public/assets/images`.
4. Tìm đường dẫn ảnh cũ trong file trang, ví dụ:

```tsx
src="/assets/images/hero-portrait.webp"
```

5. Thay tên file, nhưng giữ `/assets/images/` ở đầu.
6. Luôn cập nhật `alt` thành mô tả ngắn bằng tiếng Anh.

Không dùng khoảng trắng hoặc ký tự tiếng Việt trong tên file. Nên dùng tên như `new-portrait-2026.webp`.

## 6. Cách thay résumé

1. Xuất CV mới thành PDF.
2. Đặt tên file là `Vincent-Nguyen-Resume.pdf`.
3. Thay file cùng tên trong `public/files`.
4. Nếu giữ nguyên tên này, không cần sửa code.

Trước khi upload, kiểm tra lại ngày sinh, địa chỉ nhà và số điện thoại chưa muốn public.

## 7. Cách đổi màu

Mở `app/globals.css`. Các màu chính của Light mode nằm trong khối `:root`; Dark mode nằm trong `:root[data-theme="dark"]`.

Các biến quan trọng:

- `--cream`: nền chính.
- `--parchment`: nền phụ.
- `--ink`: chữ chính.
- `--muted`: chữ phụ.
- `--forest`: xanh chủ đạo.
- `--rust`: màu nhấn.
- `--line`: đường viền.

Chỉ nên thay mã màu, ví dụ `#6f2f20`, và luôn kiểm tra cả Light lẫn Dark mode. Không giảm contrast của `--muted` hoặc `--rust` nếu chưa kiểm tra khả năng đọc.

## 8. Cách xem website trên máy trước khi public

Mở Terminal trong VS Code và chạy:

```bash
npm install
npm run dev
```

Terminal sẽ đưa ra một địa chỉ local để mở bằng trình duyệt. Nhấn `Ctrl + C` trong Terminal để dừng.

Trước khi push, có thể kiểm tra bản GitHub bằng:

```bash
npm run build:github
```

Nếu Terminal kết thúc mà không có dòng `Error`, bản static export đã build thành công.

## 9. Nếu website bị lỗi sau khi sửa

1. Không xóa repository và không tạo repository mới.
2. Mở tab **Actions** trên GitHub, chọn lần chạy màu đỏ và đọc bước bị lỗi.
3. Trong GitHub Desktop, có thể xem file nào vừa thay đổi.
4. Sửa lại ký tự thiếu hoặc hoàn tác phần vừa đổi, sau đó commit và push lần nữa.
5. Một commit cũ luôn còn trong tab **History**, vì vậy source code có thể khôi phục.

## 10. Nguyên tắc privacy

- Không upload tài liệu proposal PhD hoặc bản nháp nghiên cứu mật.
- Chỉ public các research-interest themes đã duyệt.
- Không public số điện thoại cho tới khi có số UK và chủ động quyết định cập nhật.
- Kiểm tra metadata của PDF và hình ảnh nếu tài liệu có nguồn nhạy cảm.
- Mọi file trong một public repository đều có thể được người khác tải xuống.
