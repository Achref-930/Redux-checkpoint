# 📝 Redux TaskMaster

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)

A modern, feature-rich Task Management application built with **React** and **Redux**. This project demonstrates a classic Redux architecture for state management, enhanced with smooth animations using **Framer Motion** and a polished UI.

---

## ✨ Features

- **State Management**: Centralized state using Redux (Actions, Reducers, Store).
- **CRUD Operations**:
  - ➕ **Add** new tasks with validation.
  - ✏️ **Edit** existing task descriptions.
  - ❌ **Delete** tasks from the list.
  - ✅ **Toggle** completion status.
- **Smart Filtering**: Filter tasks by **All**, **Done**, or **Active** states.
- **Modern UI/UX**:
  - Clean card layout with the 'Inter' typeface.
  - Responsive design using CSS Variables.
  - Smooth entry/exit animations powered by **Framer Motion**.
  - Intuitive icons via **React Icons**.

---

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **React** | Component-based UI library |
| **Redux** | Predictable state container |
| **Framer Motion** | Production-ready animation library |
| **React Icons** | SVG icons |
| **CSS3** | Custom styling with Variables & Flexbox |

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Achref-930/Redux-checkpoint.git
   cd Redux-checkpoint
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Addtask.js      # Input form to create new tasks
│   ├── ListTask.js     # Container mapping through the task list
│   └── Task.js         # Individual task item with Edit/Delete controls
├── redux/
│   ├── actions.js      # Action creators (ADD_TASK, DELETE_TASK, etc.)
│   ├── reducer.js      # Pure function handling state logic
│   └── store.js        # Redux store configuration
├── App.css             # Global styles and CSS variables
├── App.js              # Main application entry point
└── index.js            # React DOM rendering
```

---

## 🔄 Redux Workflow

This application follows the classic Redux data flow:

1.  **Actions**: Events like `ADD_TASK` or `FILTER_TASK` are dispatched from components (e.g., `Addtask.js`).
2.  **Reducer**: The `reducer.js` receives the action and the current state. It returns a *new* state copy with the necessary updates (immutability is key).
3.  **Store**: The global state object holds the list of tasks and the current filter setting.
4.  **View**: Components like `ListTask.js` subscribe to the store using `useSelector` and re-render automatically when state changes.

---

## 🔮 Future Improvements

- [ ] **Local Storage**: Persist tasks so they remain after a page refresh.
- [ ] **Drag & Drop**: Reorder tasks using `react-beautiful-dnd`.
- [ ] **Dark Mode**: Toggle between light and dark themes.
- [ ] **Categories**: Group tasks by tags (Work, Personal, etc.).

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
