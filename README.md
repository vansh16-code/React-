# 🛒 Grocery List App

A simple and interactive Grocery List application built with React and JSON Server to simulate a RESTful backend.

## 🚀 Features

- Add new grocery items
- Mark items as purchased (check/uncheck)
- Delete items
- Search/filter items in real-time
- JSON Server used for API simulation
- Loading indicators and error handling

## 🛠️ Tech Stack

- React (with Hooks)
- JSON Server (for fake API)
- CSS (basic styling)

## 📁 Project Structure

src/
├── App.js
├── apiRequest.js
├── Header.js
├── SearchItem.js
├── AddItem.js
├── Content.js
├── Footer.js
├── index.js
├── index.css
data/
└── db.json

bash
Copy
Edit

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/grocery-list-app.git
cd grocery-list-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Start JSON Server
Install JSON Server globally if not already installed:

bash
Copy
Edit
npm install -g json-server
Run the server:

bash
Copy
Edit
json-server --watch data/db.json --port 3500
API will be available at: http://localhost:3500/items

4. Start the React App
Open a second terminal and run:

bash
Copy
Edit
npm start
Visit: http://localhost:3000

🧪 API Endpoints
GET /items – Retrieve all items

POST /items – Add a new item

PATCH /items/:id – Update item (check/uncheck)

DELETE /items/:id – Delete item

📝 Notes
IDs are generated manually using the highest existing ID + 1.

You can use a .gitkeep file inside the data/ folder to ensure Git tracks it even if it's empty.

Make sure db.json exists in the data/ directory with some initial structure like:

json
Copy
Edit
{
  "items": []
}


Made with ❤️ using React


