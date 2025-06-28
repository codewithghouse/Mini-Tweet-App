# 🐦 Mini Tweet App

A simple and clean Twitter-like CRUD app built with Node.js, Express.js, and EJS – **without any database**.  
All tweets are stored in-memory using JavaScript arrays. Perfect for learning and demo projects!

---

## ✨ Features

- ✅ Create a new tweet (username + content)
- 📃 View all tweets
- ✏️ Edit any tweet
- ❌ Delete a tweet
- Unique ID generation via `uuid`
- Full in-memory storage – **no database used**
- Clean UI with CSS styling
- `method-override` to handle PUT & DELETE with HTML forms

---

## 🧰 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Method-Override](https://www.npmjs.com/package/method-override)
- HTML + CSS (no frameworks)
- [Nodemon](https://www.npmjs.com/package/nodemon) for development

---

## 🚀 How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/codewithghouse/Mini-Tweet-App.git
   cd Mini-Tweet-App
# npm install
# npm run dev
# http://localhost:3000/posts


# 📂 Project Structure
Mini-Tweet-App/
├── routes/             # All routing logic (tweets.js)
├── views/              # EJS templates (index, new, edit)
├── public/
│   └── css/            # Styling (style.css)
├── app.js              # Entry point for Express app
├── package.json
└── README.md

# 🧠 Learning Goals
This project is great if you're learning:

Basic CRUD with Express.js

How to use EJS for rendering dynamic pages

How method-override works for HTML form limitations

Structuring routes and views properly

Keeping logic clean without a database
# 🚧 Future Ideas (Optional)
Add login/signup using sessions

Save tweets in a JSON file for persistence

Switch to MongoDB or any DB in future

Add character limit like Twitter

Add dark mode support 🌑

# 📝 License
This project is open-source under the MIT License.

Made with 💙 by Rayaan  codewithghouse