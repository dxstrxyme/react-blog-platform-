# 📝 React Blog

Comprehensive blog application

## ✨ Features

- ✅ **State Management** - useState, useEffect, useContext
- ✅ **Components** - Functional and class components
- ✅ **Forms** - Controlled and uncontrolled components
- ✅ **UI Library** - Reusable components with CSS modules
- ✅ **List Operations** - Rendering, sorting, filtering
- ✅ **Optimization** - useMemo, React.memo for performance
- ✅ **Modal Windows** - Reusable UI components
- ✅ **Custom Hooks** - Logic decomposition
- ✅ **API Integration** - Axios, server data loading
- ✅ **Pagination** - Paginated data display
- ✅ **Routing** - React Router, dynamic navigation
- ✅ **Authorization** - Private and public routes

---

## 🛠️ Technology Stack

### Core Technologies

- **React**
- **JavaScript (ES6+)**
- **CSS Modules**
- **Vite**

### Libraries and Tools

- **React Router** - Client-side routing
- **Axios** - HTTP client for API interactions
- **React DevTools** - Developer tools

### React Concepts and Hooks

- **useState** - Local state management
- **useEffect** - Side effects and lifecycle
- **useRef** - DOM element access
- **useMemo** - Memoization and optimization
- **useContext** - Global state
- **useHistory, useParams** - Routing functionality
- **Custom Hooks** - useFetching, reusable logic

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/dxstrxyme/my-react-app.git

# Navigate to project directory
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
MY-REACT-APP/
├── node_modules/             # Project dependencies
├── public/                   # Static files
├── src/
│   ├── API/
│   │   └── PostService.js    # Service for posts API
│   ├── components/
│   │   ├── UI/               # UI library of reusable components
│   │   │   ├── button/
│   │   │   │   ├── MyButton.jsx
│   │   │   │   └── MyButton.module.css
│   │   │   ├── input/
│   │   │   │   ├── MyInput.jsx
│   │   │   │   └── MyInput.module.css
│   │   │   ├── loader/
│   │   │   │   └── Loader.jsx
│   │   │   ├── MyModal/
│   │   │   │   ├── MyModal.jsx
│   │   │   │   └── MyModal.module.css
│   │   │   ├── navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.module.css
│   │   │   ├── pagination/
│   │   │   │   └── Pagination.jsx
│   │   │   └── select/
│   │   │       └── MySelect.jsx
│   │   ├── AppRouter.jsx     # Application router
│   │   ├── ClassCounter.jsx  # Class component counter
│   │   ├── counter.jsx       # Functional component counter
│   │   ├── PostFilter.jsx    # Post filtering component
│   │   ├── PostForm.jsx      # New post creation form
│   │   ├── PostItem.jsx      # Post list item
│   │   └── PostList.jsx      # Post list component
│   ├── context/
│   │   └── index.js          # Context for global state
│   ├── hooks/
│   │   ├── useFetching.js    # Custom hook for data loading
│   │   ├── usePagination.js  # Pagination hook
│   │   └── usePost.js        # Hook for post operations
│   ├── pages/
│   │   ├── About.jsx         # About page
│   │   ├── Login.jsx         # Authorization page
│   │   ├── PostIdPage.jsx    # Individual post page
│   │   └── Posts.jsx         # Main page with posts
│   ├── router/
│   │   └── index.js          # Routes configuration
│   ├── styles/
│   │   └── App.css           # Global application styles
│   ├── utils/
│   │   └── pages.js          # Pagination utilities
│   ├── App.jsx               # Main application component
│   └── main.jsx              # Application entry point
├── .gitignore                # Git ignored files
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

---

## 🚀 Key Features

### 📝 **Post Management**

- Create new posts through form
- View list of all posts
- View individual post with comments
- Delete posts

### 🔍 **Search and Filtering**

- Search posts by title and content
- Sort by title and date
- Real-time result filtering

### 📄 **Pagination**

- Paginated post display
- Page navigation

### 🔐 **Authorization**

- Login form
- Private routes for authorized users
- Authorization state persistence

---

## 🎮 How to Use

### **Viewing Posts:**

1. Open the main page
2. Browse the list of posts
3. Use search and sorting
4. Navigate through pages using pagination

### **Creating a Post:**

1. Log in to the system
2. Fill out the post creation form
3. Click "Create Post" button

### **Viewing Details:**

1. Click on a post title
2. View full content
3. Read post comments

---

## 🛠️ API

The project uses JSONPlaceholder API for demonstration:

- `https://jsonplaceholder.typicode.com/posts` - Posts
- `https://jsonplaceholder.typicode.com/comments` - Comments

---

## 🚧 Planned Improvements

- [ ] Adding TypeScript
- [ ] Testing with Jest and React Testing Library
- [ ] State management with Redux Toolkit
- [ ] Enhanced form validation with Formik
- [ ] Responsive design
- [ ] PWA functionality
- [ ] Drag & Drop for posts
- [ ] Dark theme

---

## 👨‍💻 Author

**Nikita Gres**

- GitHub: [@dxstrxyme](https://github.com/dxstrxyme)
- Email: dxstrxyme@gmail.com

---

<div align="center">

</div>
