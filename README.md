Here's a detailed `README.md` file for your **Angular Product Shopping Cart App**, based on the `package.json` and app structure you've shared:

---

## 🛍️ Product Shopping Cart

This is a responsive Angular shopping cart application that fetches product data from [FakeStoreAPI](https://fakestoreapi.com/products), displays product cards, allows "Add to Cart" functionality, and includes unit tests.

---

## 📦 Framework & Libraries Used

| Dependency              | Version          |
| ----------------------- | ---------------- |
| Angular                 | ^18.2.0          |
| Angular CLI             | ^18.2.12         |
| Bootstrap               | ^5.3.7           |
| Bootstrap Icons         | ^1.13.1          |
| RxJS                    | \~7.8.0          |
| TypeScript              | \~5.5.2          |
| Jasmine/Karma (Testing) | ^5.2.0 / \~6.4.0 |

---

## 🚀 How to Run Locally

### 1. 📥 Clone the repository

```bash
git clone https://github.com/nikunjparmar25/product-shopping-cart.git
cd product-shopping-cart
```

### 2. 📦 Install dependencies

```bash
npm install
```

### 3. ▶️ Run the development server

```bash
npm start
```

> Navigate to: `http://localhost:4200`
> The app will automatically reload if you change any source files.

---

## 🧪 Run Unit Tests

```bash
npm test
```

This runs the unit tests via **Karma** and **Jasmine** and displays results in the browser.

---

## 📁 Project Structure (Summary)

```
src/
├── app/
│   ├── shared/
│   │   └── item-card
│   ├── service/
│   │   ├── product.service.ts
│   │   └── cart.service.ts
│   ├── model/
│   │   └── product.model.ts
│   └── app.component.ts
```

---

## 🌐 API Used

* [https://fakestoreapi.com/products](https://fakestoreapi.com/products) – Fake REST API for eCommerce products.

---

## 📱 Features

* 📦 Product listing with image, title, description, price
* 🛒 Add to Cart button
* 🔢 Cart item count in navbar
* 💻 Fully responsive design (mobile/tablet/desktop)
* ✅ Unit-tested services and components

---

## 🧰 Scripts Summary

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm start`     | Start development server          |
| `npm run build` | Build for production              |
| `npm test`      | Run unit tests with Karma/Jasmine |

---

## 🙌 Acknowledgments

* [Fake Store API](https://fakestoreapi.com)
* [Angular](https://angular.io)
* [Bootstrap 5](https://getbootstrap.com)
* [Bootstrap Icons](https://icons.getbootstrap.com)

---

Let me know if you'd like a downloadable `.md` file, or help generating a GitHub repo for this!