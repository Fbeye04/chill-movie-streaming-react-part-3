# 🎬 Chill - Movie Streaming Platform (React Edition)

**Chill** is a modern movie streaming platform interface rebuilt using **React.js** and **Tailwind CSS**. Originally designed with pure HTML/CSS, this project has been migrated to a component-based architecture to ensure better scalability, maintainability, and dynamic rendering.

---

## 🎯 About the Project

This project focuses on implementing a responsive UI/UX for a streaming service. The main goal was to migrate a static design into a dynamic **Single Page Application (SPA)**.

It utilizes modern React patterns such as:

- Hooks (`useState`, `useEffect`, `useRef`)
- Declarative routing
- Local Storage for data persistence
- Dynamic array mapping for rendering movie sections

---

## ✨ Key Features

### 📝 User Reviews (CRUD & Local Storage)

- **Full CRUD Functionality** – Users can Create, Read, Update, and Delete their own movie reviews.
- **Data Persistence** – Reviews are saved dynamically to the browser's `localStorage`, ensuring data remains intact even after a page refresh.
- **Dynamic Empty States** – Designed empty state UI when no reviews are present.

---

### 🏠 Navigation & Dedicated Pages

- **Seamless Routing** – Fixed absolute vs. relative path routing for bug-free navigation.
- **Dedicated Pages** – Adaptable pages for **Series**, **Film**, and **My List** (with custom empty state layout).
- **Dynamic Hero Section** – Large banner with overlay actions that adapt based on the active page.

---

### 🎨 Advanced UI/UX & Interactions

- **Netflix-Style Hover Cards** – Movie cards scale and display additional options upon hovering.
- **Optimized Horizontal Scrolling** – Improved slider behavior and navigation controls.
- **Fully Responsive Design** – Optimized for Mobile, Tablet, and Desktop screens.

---

### 🔐 Authentication

- **Login & Register Pages** – Clean, focused layouts using shared layout (`AuthLayout`).
- **Custom Input Components** – Floating labels / placeholders with password toggle feature.

---

## 🛠️ Tech Stack

- **Framework**: React.js (via Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6+)
- **Icons**: React Icons / Lucide React
- **Package Manager**: NPM

---

## 📁 Project Structure (Atomic Design)

This project adopts the **Atomic Design** methodology to organize components efficiently:

```bash
src/
├── assets/                  # Static assets (Images, Icons)
├── components/
│   ├── atoms/               # Basic building blocks (Buttons, Inputs, Logos)
│   ├── molecules/           # Simple combinations (MovieCard, ReviewModal, ReviewCard)
│   ├── organisms/           # Complex sections (Header, Hero, MovieSection, ReviewSection)
│   └── layouts/             # Page wrappers (AuthLayout)
├── data/                    # Mock data for movies (movies.js)
├── pages/                   # Main Page Views (Home, Dashboard, Series, Film, MyList)
├── App.jsx                  # Main Router Setup
├── main.jsx                 # Entry Point
└── index.css                # Global Styles & Tailwind Directives

```

## 📅 Development Timeline

This project was built over multiple sprints:

### 🚀 Sprint 1: UI Foundation & Routing

- **Day 1** – Setup & Migration (Initialized Vite project, configured Tailwind CSS)
- **Day 2–5** – Core Components & Authentication
- **Day 6–8** – Routing setup, Header, Footer, and Hero section
- **Day 9–10** – Mock data integration and dynamic rendering

---

### ⚙️ Sprint 2: Advanced Features & CRUD

- **Day 11** – Dedicated pages (Series, Film, My List) & navigation fixes
- **Day 12** – Netflix-style hover interactions & slider optimization
- **Day 13** – Review Section UI & modal form
- **Day 14** – CRUD logic implementation & Local Storage integration

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Fbeye04/chill-movie-streaming-react.git
```

### 2️⃣ Navigate to the project directory

```bash
cd chill-movie-react
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the development server

```bash
npm run dev
```

### 5️⃣ Open in browser

Visit:

```bash
http://localhost:5173
```

## 📸 Screenshots

### 🖥 Desktop View

![Desktop Login](/public/screenshots/login-desktop.png)
![Desktop Register](/public/screenshots/register-desktop.png)
![Desktop Dashboard](/public/screenshots/home-desktop.png)

### 📱 Mobile View

![Mobile Login](/public/screenshots/login-mobile.png)
![Mobile Register](/public/screenshots/register-mobile.png)
![Mobile Dashboard](/public/screenshots/home-mobile.png)

### New Features Part 2

![CRUD Features](/public/screenshots/fitur%20CRUD.png)
![Hover Card](/public/screenshots/hover%20card.png)
![Series Page](/public/screenshots/Series%20Page.png)
![Film Page](/public/screenshots/Film%20Page.png)

## 👨‍💻 Author

Muhammad Fachrezi Barus

- 🔗 LinkedIn: https://www.linkedin.com/in/muhammad-fachrezi-barus/

- 📧 Email: fachrezibarus@gmail.com

## 📝 License

This project is created for educational and portfolio purposes. Feel free to use and modify it with proper credit.
