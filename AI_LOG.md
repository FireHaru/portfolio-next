# AI_LOG – Nhật ký sử dụng AI

> Mức AI của bài này: **Mức 2** (theo thông tin người học cung cấp; đối chiếu với Hướng dẫn sử dụng AI của môn học).
> Khai báo trung thực không bị trừ điểm. Không khai báo = vi phạm liêm chính học thuật.

| Ngày | Công cụ | Việc nhờ AI | Prompt (tóm tắt) | Kết quả dùng thế nào | Mình đã kiểm chứng / sửa gì | Commit/PR |
|---|---|---|---|---|---|---|
| 2026-11-18 | Copilot SDK trong VS Code | Cập nhật cấu trúc portfolio và chuyển sang Next.js App Router | Cập nhật components và dữ liệu tuần 6, dọn cấu trúc và đưa các phần cần thiết ra khỏi portfolio | AI triển khai thay đổi trực tiếp trong mã nguồn; dùng trong phiên bản portfolio | AI chạy ESLint, kiểm tra TypeScript và kiểm tra giao diện; mình tiếp tục đánh giá và đưa yêu cầu chỉnh sửa | `c6cc1b0` |
| 2026-11-18 | Copilot SDK trong VS Code | Chỉnh menu dự án, giao diện danh sách dự án, 4 dự án nổi bật và căn giữa phần tiêu đề | Tạo menu Dự án, làm trang danh sách đồng bộ với thẻ dự án nổi bật, thêm liên kết xem tất cả và sửa căn lề | AI chỉnh trực tiếp Header, Portfolio, ProjectCard, trang `/projects` và CSS; thay đổi được push lên GitHub | Mình xem giao diện, chỉ ra phần chữ chưa ở giữa và yêu cầu sửa. AI kiểm tra số lượng dự án, liên kết chi tiết, hiển thị desktop/mobile, ESLint, TypeScript và `git diff --check` | `fd248a6` |

## Tự đánh giá cuối bài

- **Phần mình tự làm hoàn toàn:** Mình đưa ra yêu cầu giao diện, đánh giá kết quả và chỉ ra các điểm cần chỉnh; chưa xác nhận phần code nào tự viết.
- **Phần AI giúp nhiều nhất và mình đã hiểu:** AI trực tiếp chỉnh giao diện và code; mình sẽ bổ sung điều mình thực sự đã hiểu trước khi nộp.
