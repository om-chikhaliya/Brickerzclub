# LedgerLink Landing Page

This repository contains the source code for the LedgerLink landing page, showcasing a blockchain development tools and services. Built with React, Vite, Tailwind CSS, and Lucide React icons.

## 🚀 Quick Start

To get the landing page running locally:

```bash
# Clone the repository
git clone https://github.com/OumarouSandaSouley/LedgerLink.git

# Navigate to the project directory
cd LedgerLink

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` to view the landing page.

## 🛠 Project Structure

```
LedgerLink/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── PricingSection.jsx
│   │   └── TestimonialSection.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── images/
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 📝 Development Guidelines

- Use functional components and hooks for React development
- Utilize Tailwind CSS classes for styling
- Import icons from Lucide React as needed
- Ensure responsive design across all device sizes
- Follow accessibility best practices

## 🔧 Available Scripts

- `npm run dev`: Starts the Vite development server
- `npm run build`: Builds the production-ready site
- `npm run preview`: Locally preview the production build
- `npm run lint`: Lints the codebase using ESLint

## 🎨 Styling

This project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`.

## 🖼 Icons

We use Lucide React for icons. Import icons as needed:

```jsx
import { ChevronRight, User } from "lucide-react";
```

## 📚 Content Management

Update content in the respective component files. For larger content changes, consider creating a separate `content.js` file in the `src` directory.
