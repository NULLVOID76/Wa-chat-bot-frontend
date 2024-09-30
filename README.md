# WhatsApp Chatbot Frontend

This repository contains the **frontend** part of a full-stack WhatsApp chatbot application. The frontend is built with **React** and styled using **Tailwind CSS**. It communicates with the backend API to fetch and display chat messages stored in a MongoDB database.

## Table of Contents

- [About the Project](#about-the-project)
  - [Features](#features)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Styling with Tailwind CSS](#styling-with-tailwind-css)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

The **WhatsApp Chatbot Frontend** is a React application that displays chat conversations between users and a WhatsApp chatbot. It fetches data from the backend API and presents it in a clean, organized interface. This project is part of a larger system that includes a backend server handling message processing and storage.

### Features

- **Chat Display**: View chat messages retrieved from the backend API.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **Interactive UI**: Clean and intuitive user interface for easy navigation.
- **Real-Time Updates**: Automatically updates the chat list when new messages are fetched.

### Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://github.com/axios/axios)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v12 or later)
- **npm** (v6 or later)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/whatsapp-chatbot-frontend.git
   cd whatsapp-chatbot-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   REACT_APP_BACKEND_API_URL=http://localhost:5000/api
   ```

   Replace `http://localhost:5000/api` with the URL of your backend API if it's different.

4. **Start the development server**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Usage

The frontend application fetches chat messages from the backend API and displays them. Ensure that the backend server is running and accessible at the URL specified in your `.env` file.

### Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Launches the test runner.
- **`npm run eject`**: Ejects the app configuration (not reversible).

---

## Project Structure

```plaintext
whatsapp-chatbot-frontend/
├── public/                     # Public assets
│   ├── index.html              # HTML template
│   └── favicon.ico             # Favicon
├── src/
│   ├── components/
│   │   ├── ChatDisplay.js      # Component displaying all chats
│   │   └── ChatItem.js         # Component for individual chat messages
│   ├── App.js                  # Main app component
│   ├── index.js                # Entry point of the app
│   └── index.css               # Global styles (includes Tailwind imports)
├── .env                        # Environment variables
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration for Tailwind CSS
└── README.md                   # Project documentation
```

---

## Environment Variables

The app uses an environment variable to determine the backend API URL.

- **`REACT_APP_BACKEND_API_URL`**: The base URL of the backend API.

Create a `.env` file in the root directory:

```env
REACT_APP_BACKEND_API_URL=http://localhost:5000/api
```

---

## Styling with Tailwind CSS

Tailwind CSS is used for styling the application. It allows for rapid UI development with utility-first CSS classes.

### Setup

Tailwind CSS is configured in `tailwind.config.js`:

```javascript
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // 'media' or 'class' for dark mode support
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

PostCSS is set up in `postcss.config.js` to process Tailwind directives:

```javascript
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
```

### Global Styles

In `src/index.css`, import Tailwind's base, components, and utilities:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom global styles can be added here */
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create your feature branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit your changes**

   ```bash
   git commit -m 'Add YourFeature'
   ```

4. **Push to the branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a pull request**

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

**Your Name**

- Email: [nullvoid76@example.com](mailto:nullvoid76@example.com)
- GitHub: [@nullvoid76](https://github.com/NULLVOID76)

*Feel free to reach out if you have any questions or suggestions!*
---
