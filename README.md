# M0S_MD

**Local-first, markdown-powered web note system**

Transform your local `.md` files into a navigable, link-aware knowledge base — fully in your browser.

---

## 🚀 Features

- 📁 **Local-first**: No cloud required — your files stay on your machine.
- 📝 **Markdown-based**: Supports standard markdown syntax and internal links.
- 🧭 **Link-aware navigation**: Explore notes through `[[file-name]]` style links.
- 💻 **Web GUI**: Clean, intuitive interface for viewing and browsing notes.
- ⚙️ **Backend with Node.js**: Enables read/write access to your local files via API.

---

## 🛠️ Project Structure

```bash
M0S_MD/
├── frontend/         # React + Vite 프론트엔드
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── main.jsx
├── backend/          # Node.js + Express 백엔드
│   ├── routes/
│   ├── controllers/
│   └── index.js
├── notes/            # 마크다운 파일 저장소
└── README.md
```

---

## 🔌 Backend API Overview

| Method | Endpoint           | Description                         |
|--------|--------------------|-------------------------------------|
| GET    | `/api/read?path=`  | Read the content of a markdown file |
| POST   | `/api/save`        | Save or update a markdown file      |
| GET    | `/api/list`        | List all files under `notes/`       |

---

## 🧪 Development

```bash
# Install dependencies (frontend & backend)
npm install

# Start backend
cd server
npm install
npm run dev

# Start frontend
cd ..
npm run dev
```

---

## 📦 Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Markdown Parser: Marked.js
- Sanitization: DOMPurify
- File I/O: Node fs/promises

---

## 📄 License

MIT © 2025 its.m0s.qto  
Feel free to use, modify, and distribute with proper attribution.

---

# 🇰🇷 한글 안내

**로컬 우선, 마크다운 기반 웹 노트 시스템**

`.md` 파일을 링크 기반으로 연결된 지식 베이스로 구성하고,  
웹 GUI를 통해 탐색, 열람, 편집, 저장까지 가능한 로컬 노트 플랫폼입니다.

---

## 🚀 주요 기능

- 📁 **로컬 우선(Local-first)**  
  파일은 로컬에 저장되고, 클라우드를 사용하지 않습니다.

- 📝 **마크다운 기반**  
  표준 `.md` 문법을 지원하며, 내부 링크(`[[다른문서]]`)를 통한 페이지 이동 가능

- 🧭 **링크 탐색**  
  파일 간 하이퍼링크를 자동 인식하여 GUI 내에서 전환 지원

- 💻 **웹 기반 GUI 인터페이스**  
  직관적인 브라우저 기반 UI 제공 (마우스 + 키보드)

- ⚙️ **백엔드 지원 (Node.js + Express)**  
  로컬 파일을 직접 읽고 수정할 수 있는 API 포함

---

## 🛠️ 프로젝트 구조

```bash
M0S_MD/
M0S_MD/
├── frontend/         # React + Vite 프론트엔드
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── main.jsx
├── backend/          # Node.js + Express 백엔드
│   ├── routes/
│   ├── controllers/
│   └── index.js
├── notes/            # 마크다운 파일 저장소
└── README.md

```

---

## 🔌 백엔드 API 개요

| 메서드 | 엔드포인트         | 설명                           |
|--------|---------------------|--------------------------------|
| GET    | `/api/read?path=`   | 특정 `.md` 파일 내용 가져오기   |
| POST   | `/api/save`         | 마크다운 파일 저장 (수정 포함) |
| GET    | `/api/list`         | `notes/` 폴더 내 파일 리스트   |

---

## 🧪 개발 방법

```bash
# 패키지 설치 (프론트/백엔드 공통)
npm install

# 백엔드 실행
cd server
npm install
npm run dev

# 프론트엔드 실행
cd ..
npm run dev
```

---

## 📦 주요 스택

- 프론트엔드: React + Vite
- 백엔드: Node.js + Express
- 마크다운 파서: Marked.js
- 보안 필터링: DOMPurify
- 파일 접근: Node fs/promises

---

## 📄 라이선스

MIT © 2025 its.m0s.qto  
자유롭게 사용/수정/배포 가능하며, 라이선스 명시만 해주시면 됩니다.
