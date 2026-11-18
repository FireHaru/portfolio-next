<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Luật dự án (PHY10615 – Phát triển ứng dụng web)

### Phiên bản & công nghệ (không tự ý đổi)

- Next.js 16.4 App Router (repo hiện dùng 16.4.6), React 19 và TypeScript. Không dùng Pages Router, `getServerSideProps` hoặc `next/router`; dùng `proxy.ts`, không dùng `middleware.ts`.
- Tailwind CSS v4 cấu hình bằng CSS (`@theme`). Không tạo `tailwind.config.js`.
- shadcn/ui dùng Radix; thêm component bằng `npx shadcn@latest add <component>`.
- Prisma ORM 7, không nâng lên 8. Dùng generator `prisma-client` có `output`, adapter `@prisma/adapter-pg` và URL trong `prisma.config.ts`.
- Better Auth 1.7, không dùng NextAuth/Auth.js. Lấy session bằng `auth.api.getSession({ headers: await headers() })`.
- Zod 4: dùng `z.flattenError()`, định dạng lỗi `{ error: "..." }` và `z.email()`.
- Unit/component test: Vitest 5 và React Testing Library; E2E: Playwright.
- Không tự cài package npm mới. Nêu tên package, lý do và link npm, rồi chờ người dùng xác nhận.

### Bảo mật (bắt buộc)

- Mọi Server Action và Route Handler phải gọi `requireUser()` trước, validate input bằng Zod và lọc mọi truy vấn theo `userId` lấy từ session.
- Sửa/xóa dữ liệu bằng `updateMany`/`deleteMany` với `where: { id, userId }` và kiểm tra `count`.
- Không đưa bí mật vào biến `NEXT_PUBLIC_*`; không commit file `.env`.
- Không dùng `dangerouslySetInnerHTML` hoặc `$queryRawUnsafe`.

### Quy trình

- Trước khi kết thúc, chạy `npm run lint`, `npm run typecheck` và `npx vitest run`.
- Thay đổi logic nghiệp vụ phải kèm test.
- Kiểm tra script và package đã có trước khi chạy lệnh test. Nếu thiếu script/package, báo rõ; không tự cài hoặc cấu hình thêm khi chưa được người dùng xác nhận.
- Hiện `package.json` chưa có script `typecheck` hoặc các package Prisma, Better Auth, Zod, Vitest, React Testing Library và Playwright; không giả định chúng đã được cài.
- Cuối mỗi tác vụ, tóm tắt thay đổi ngắn gọn để sinh viên ghi vào `AI_LOG.md`.
