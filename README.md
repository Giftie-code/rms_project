# 📦 File Upload API

A RESTful API built with **Node.js**, **TypeScript**, **Express**, and **Prisma**, allowing you to upload image and video files, store them in a local folder, and serve them via HTTP. Swagger UI is included for easy documentation and testing.

---

## 🚀 Features

- Upload image and video files via `multipart/form-data`
- Validates file extensions (supports: `.jpg`, `.jpeg`, `.png`, `.gif`, `.mp4`, `.mov`, `.avi`, `.webm`)
- Saves uploaded files to the `uploads/` folder
- Swagger UI documentation at `/api-docs`
- Prisma integration with PostgreSQL (future-ready for DB storage)

---

## 🧰 Requirements

Before running the project, make sure you have the following installed:

| Software     | Required Version | Download Link                       |
|--------------|------------------|-------------------------------------|
| [Node.js](https://nodejs.org/)  | v18.x or higher     | https://nodejs.org/                  |
| [PostgreSQL](https://www.postgresql.org/) | v12 or higher     | https://www.postgresql.org/download/ |
| [npm](https://www.npmjs.com/)   | v9.x or higher      | Bundled with Node.js                |

---

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/file-upload-api-ts.git
cd file-upload-api-ts
