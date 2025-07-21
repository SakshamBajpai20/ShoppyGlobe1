# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






An attractive, responsive e-commerce application built with React, Redux Toolkit, and React Router, featuring live API integration, cart management, and a modern, vibrant UI for learning and practical submission.

## 🚀 Features
✅ Product listing with live API fetch  
✅ Search and filter functionality  
✅ Product detail page with add to cart  
✅ Shopping cart with quantity management and removal  
✅ State management using Redux Toolkit  
✅ Routing with React Router  
✅ Lazy loading and suspense for performance  
✅ Attractive gradient header and footer  
✅ Responsive design for all devices

## 🛠️ Tech Stack
- React
- Redux Toolkit
- React Router DOM
- Fetch API
- Vite / CRA (adaptable)
- CSS

## 📂 Project Structure
```
ShoppyGlobe/
  public/
    index.html
  src/
    components/
      Header.jsx, Footer.jsx, ProductList.jsx, ProductItem.jsx, ProductDetail.jsx, Cart.jsx, CartItem.jsx, NotFound.jsx
      Header.css, Footer.css, ProductList.css, etc.
    store/
      store.js, cartSlice.js
    App.jsx
    index.js
    index.css
```