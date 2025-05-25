# Stay Safe - Grievance Reporting Web App

## 🚀 Overview

**Stay Safe** is a full-stack grievance reporting web application that empowers citizens to report municipal issues (like potholes, garbage, broken lights) and enables authorities to manage and resolve these complaints efficiently.

It features:

* 📷 Image uploads
* 📍 Geolocation tagging
* 📊 Receiver dashboard with live complaint tracking
* 🌐 Hosting support for production use

---

## 🛠️ Tech Stack

| Technology         | Role                           |
| ------------------ | ------------------------------ |
| React.js           | Frontend UI                    |
| Node.js + Express  | Backend API                    |
| PostgreSQL         | Relational database            |
| Vercel             | Frontend Hosting               |
| Render/Fly.io/etc. | Backend Hosting (recommended)  |
| Multer             | Image Upload Handling          |
| Geolocation API    | Captures Lat/Lng automatically |

---

## 📁 Project Structure

```
stay-safe/
├── client/             # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── ReceiverPage.jsx
│   │   │   ├── UserPage.jsx
│   │   ├── App.jsx
│   │   └── index.js
├── server/             # Express backend
│   ├── routes/
│   │   ├── auth.js
│   │   └── complaints.js
│   ├── db.js           # PostgreSQL connection
│   └── index.js        # Server entry point
└── README.md
```

---

## 🧭 Architecture Diagram

To render this Mermaid chart on GitHub, install [Mermaid plugin](https://marketplace.visualstudio.com/items?itemName=vstirbu.vscode-mermaid-preview) or view using GitHub’s Markdown viewer.

```mermaid
graph TD
    A[User (Frontend)] -->|Registers / Logs in| B[Node.js/Express Backend]
    A -->|Uploads Complaint + Image + Location| B
    B -->|Stores Data| C[(PostgreSQL DB)]
    B -->|Stores Image Path| C
    D[Receiver (Frontend)] -->|Fetches Complaints| B
    B -->|Sends Complaint Data| D
```

---

## 🔁 Application Flow

### 👤 User

1. Registers / logs in from the frontend
2. Fills in complaint with:

   * Description
   * Auto-fetched latitude/longitude
   * Attached image
3. Complaint is stored in DB + image is uploaded to `/uploads`

### 🧑‍💼 Receiver

1. Logs in to a dashboard (`ReceiverPage.jsx`)
2. Can:

   * View all complaints
   * Filter by status
   * Update status to `In Progress`, `Resolved`, or `Reopen`

---

## 📸 Complaint Image Rendering Example

In `ReceiverPage.jsx`, to show the uploaded image:

```jsx
<img src={`http://localhost:5000/uploads/${complaint.image_path}`} alt="Complaint" width="100" />
```

Ensure your backend serves the `uploads/` folder:

```js
// server/index.js
app.use('/uploads', express.static('uploads'));
```

---

## ⚙️ Setup Instructions

### Clone the Repo

```bash
git clone https://github.com/avinashsinghpal/stay-safe.git
cd stay-safe
```

---

### 🔧 Backend Setup (Node.js + PostgreSQL)

```bash
cd backend
npm install
# Configure PostgreSQL in db.js or .env:
# DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT

node index.js
```

Ensure your PostgreSQL table:

```sql
CREATE TABLE complaints (
  id SERIAL PRIMARY KEY,
  description TEXT,
  image_path TEXT,
  latitude DECIMAL,
  longitude DECIMAL,
  status TEXT DEFAULT 'New',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 💻 Frontend Setup (React)

```bash
cd client
npm install
npm start
```

Make sure `axios` requests point to `http://localhost:5000` or your deployed backend.

---

## 🌐 Deployment

### Vercel (Frontend)

* Connect `client/` folder to GitHub
* Set base directory: `client`
* Deploy

### Render (Backend)

* Push `server/` to GitHub
* Create new Web Service on Render
* Set environment variables:

  * `DB_USER`
  * `DB_PASSWORD`
  * `DB_HOST`
  * `DB_NAME`
  * `PORT`

---

## 🔒 Security Considerations

* Image type validation using `Multer`
* Sanitize input to prevent XSS
* No authentication yet (can add JWT later)

---

## 🔧 Future Improvements

* ✅ Add JWT-based authentication
* 🔍 Add filters/search to dashboard
* 📍 Display complaints on map
* 📬 Email/SMS notification on updates
* 📈 Admin metrics dashboard

---

## 🧑‍💻 Author

**Avinash Singh Pal**
GitHub: [@avinashsinghpal](https://github.com/avinashsinghpal)

---

## 📄 License

MIT License. Free for public use and contributions.
