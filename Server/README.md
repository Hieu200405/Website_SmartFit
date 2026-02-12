# Backend - NodeJS Express (Clean Architecture)

Dự án phát triển backend cho ứng dụng Luyện tập và Dinh dưỡng SmartFit, được xây dựng theo mô hình Clean Architecture đơn giản hóa.

## Cấu trúc thư mục

```
Server/
 ├─ src/
 │   ├─ config/              # Cấu hình hệ thống
 │   │   └─ db.js            # Kết nối PostgreSQL
 │   ├─ middleware/          # Middleware dùng chung
 │   │   └─ auth.js          # Xác thực JWT
 │   ├─ modules/             # Phân chia theo nghiệp vụ (Domain)
 │   │   ├─ profile/         # Quản lý hồ sơ người dùng
 │   │   ├─ plan/            # Kế hoạch tập luyện (Todo)
 │   │   ├─ log/             # Nhật ký hoạt động (Todo)
 │   │   └─ ...
 │   └─ index.js             # Entry point
 ├─ .env                     # Biến môi trường (KHÔNG commit lên Git)
 ├─ .env.example             # Mẫu biến môi trường
 └─ package.json
```

## Yêu cầu cài đặt

1.  Node.js (v14+)
2.  PostgreSQL (v12+)
3.  npm hoặc yarn

## Cài đặt và Chạy

### 1. Clone & Cài đặt thư viện

```bash
cd Server
npm install
```

### 2. Cấu hình biến môi trường

Tạo file `.env` từ file mẫu:

```bash
cp .env.example .env
```

Mở file `.env` và điền thông tin kết nối database của bạn:

```ini
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=smartfit
JWT_SECRET=your_secure_secret
```

### 3. Chạy Server

- Môi trường Development:
  ```bash
  npm run dev
  ```
- Môi trường Production:
  ```bash
  node src/index.js
  ```

## API Endpoint mẫu

- `POST /api/v1/profile`: Cập nhật hồ sơ (yêu cầu Header `Authorization: Bearer <token>`)

## Đóng góp

Tuân thủ Clean Architecture:

- `Controller`: Chỉ nhận request và trả response.
- `Service`: Xử lý logic nghiệp vụ.
- `Repository`: Truy vấn Database.
