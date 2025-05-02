# Book_Search_Engine [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The Book Search Engine is a full-stack MERN application that allows users to search for books using the Google Books API, save their favorite books, and manage their saved books. The application has been refactored to use GraphQL with Apollo Server for its API, replacing the previous RESTful API implementation. It features a React front end, a Node.js/Express.js server, and a MongoDB database.

---

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Features](#Features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)
- [Contribution Guidelines](#contribution-guidelines)
- [Questions](#questions)

---

## Features

- Search for books using the Google Books API.
- View book details, including title, author(s), description, and a link to the book.
- Save books to a personal account.
- View and manage saved books (delete books from the saved list).
- User authentication with JSON Web Tokens (JWT).
- Fully integrated with GraphQL for queries and mutations.

---

## Technologies Used

- **Front End**: React, React Router, Apollo Client, Bootstrap
- **Back End**: Node.js, Express.js, Apollo Server, GraphQL
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Other Tools**: TypeScript, Vite, dotenv

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Book_Search_Engine
   ```

2. Install dependencies:
   ```bash

   npm run install
   
   ```

3. Set up environment variables:
   Create a .env file in the server directory with the following variables:
   ```bash

   MONGODB_URI='mongodb://127.0.0.1:27017/googlebooks'
   JWT_SECRET_KEY='your-secret-key'
   
   ```


4. Build the TypeScript files:
   ```bash

    npm run build
   
   ```

5. Start the development server:


   ```bash

    npm run develop
   
   ```

---

## Usage

1. Search for Books:

- Enter a search term in the search bar and click "Submit Search."
- View the search results, including book details. 

2. Save Books:

- Log in or sign up to save books to your account.
- Click the "Save This Book!" button under a book to save it. 

3. View Saved Books:

- Navigate to the "See Your Books" page to view your saved books.
- Remove books from your saved list by clicking the "Delete this Book!" button. 

4. Authentication:

- Use the "Login/Sign Up" modal to create an account or log in.
- Log out using the "Logout" button in the navigation bar.

---

## Application Demo

The application You can access it at:(https://github.com/gamalmubarak/Book_Search_Engine)

The application is deployed on Render. You can access it at:(https://book-search-engine-f5u2.onrender.com/)

 
 see this screenshots of the app:
 (https://1drv.ms/i/c/3b216777a5c674e6/Eax0x_j1hRlJmSNPQrKx4hQBa-Rn3f32hX5iWehPpi0DvA?e=yE1154)
 (https://1drv.ms/i/c/3b216777a5c674e6/EYMZvs6VJ2tEshk--bcvG_cBbDX7vvYFsJdJb36Rmtihbg?e=vQeW6c)
 (https://1drv.ms/i/c/3b216777a5c674e6/EUtwDI5TNoBFmgpCoWgKRQABFbLGHCWedy2iI4JBD1-BTQ?e=7l1VdF)
 (https://1drv.ms/i/c/3b216777a5c674e6/EdVNB_aqnk9FkE_t-tM8D0UB9JyKkcgEUd1t3uF2Ve0lfA?e=gvkgmm)
 
---

## License 
Project license: MIT

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Contribution Guidelines

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.

---

## Test Instructions

Tests will be added in the future.

## Questions
If you have any questions, please feel free to contact me at gamalmubarak87@gmail.com. You can also find more of my work at [gamalmubarak](https://github.com/gamalmubarak).