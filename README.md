
# **e-Mission Coding Challenge**

This project demonstrates a small blog application built with **Nuxt.js**. The application displays posts fetched from a mocked API, allows searching by title or content, supports multilingual functionality, and includes a contact form with validations. The design is styled using **TailwindCSS**.

Link (Deployed to Vercel): https://blog-o7aejtokk-aksas-projects.vercel.app/

---

## **Functionalities**

- **Display Blog Posts:**
  - Fetch and display a list of blog posts from a mocked API. Used the JSON Placeholder API for posts and post detail: https://jsonplaceholder.typicode.com/
- **Search Functionality:**
  - Search posts by title or content with throttling using `lodash`.
- **Post Detail Page:**
  - View details of individual posts on dynamic routes.
- **Contact Form:**
  - Includes validation for name, email, and message fields.
  - Displays success messages upon submission.
- **Multilingual Support:**
  - Supports English and German with a dropdown to switch between languages.
- **Code Formatting:**
  - ESLint and Prettier integrated for consistent and high-quality code.

---

## **Tech Stack**

- Nuxt.js
- TailwindCSS
- Lodash
- ESLint / Prettier:

---

## **Project Structure**

```
BLOG-APP
├── assets/            # Custom styles and assets (e.g., Tailwind overrides, images)
├── components/        # Reusable Vue components (ContactForm, PostCard, SearchInput)
├── layouts/           # Nuxt layouts (default layout for the application)
├── pages/             # Nuxt pages (index.vue, contact-us.vue, posts/[id].vue)
├── public/            # Public static files (e.g., favicon, global assets)
```

---

## **Setup**

### **Install Dependencies**

Ensure you have Node.js installed. Then, install the project dependencies:

```bash
# Using npm
npm install
```

### **Run the Development Server**

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

---

## **Production**

### **Build for Production**

To build the application for production:

```bash
npm run build
```

### **Preview Production Build**

To locally preview the production build:

```bash
npm run preview
```

---

## **Deployment**

This project is configured for deployment on **Vercel**. Follow these steps to deploy:

1. Push your project to a GitHub repository.
2. Connect the GitHub repository to Vercel.
3. Vercel will automatically detect the Nuxt.js configuration and deploy your application.

For more information, check the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

---
