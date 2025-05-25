# Stay Safe - Grievance Reporting Web App

## 🚀 Overview

**Stay Safe** is a full-stack grievance reporting application built with React (frontend), Node.js/Express (backend), and PostgreSQL (database). It allows users to report municipal issues (e.g., potholes, broken streetlights), attach images, include geolocation data, and enables municipal staff (receivers) to manage and track these complaints.

---

## 🛠️ Tech Stack

| Technology         | Role                          |
| ------------------ | ----------------------------- |
| React.js           | Frontend UI                   |
| Node.js + Express  | Backend API                   |
| PostgreSQL         | Relational database           |
| Vercel             | Frontend Hosting              |
| Render/Fly.io/etc. | Backend Hosting (recommended) |
| Multer             | Image Upload Handling         |
| Geolocation API    | Latitude/Longitude capture    |

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
│   └── index.js        # Entry point
├── README.md
```

---

## 🧭 System Architecture

```mermaid
graph TD;
    A[User (Frontend)] -->|Registers/Logs in| B[Node.js/Express Backend];
    B --> C[PostgreSQL Database];
    A -->|Uploads Image| B;
    B -->|Stores Image Path| C;
    D[Receiver (Frontend)] -->|Fetches Complaints| B;
    B -->|Serves Complaint Data| D;
```

---

## 🔁 Application Flow

1. **User Registration/Login**

   * Users create an account or log in.

2. **Submit Complaint**

   * Add description, image, auto-fetched geolocation.
   * Complaint is sent to backend and stored in PostgreSQL.

3. **Receiver Dashboard**

   * Receiver views list of complaints with filters by status.
   * Can mark complaints as *Resolved*, *In Progress*, or *Reopen* them.

4. **Image Handling**

   * Images are uploaded to `/uploads` directory.
   * Stored as `image_path` in PostgreSQL.

5. **Complaint Map (optional enhancement)**

   * Plot latitude/longitude on map (e.g., Leaflet, Google Maps).

---

## 📦 Setup Instructions

### 🧑‍💻 Local Development

#### Clone Repository

```bash
git clone https://github.com/avinashsinghpal/stay-safe.git
cd stay-safe
```

### 🔧 Backend Setup

```bash
cd backend
npm init -y

# edit db.js file
PORT=5000
DB_USER=your_pg_user
DB_PASSWORD=your_pg_pass
DB_NAME=your_pg_db
DB_HOST=localhost

node index.js
```

### 💻 Frontend Setup

```bash
cd client
npm install
npm start
```

### 🌐 Deployment

#### Frontend (Vercel)

* Push `client/` to GitHub.
* Import project on Vercel.
* Set the base directory to `client/`.

#### Backend (Render/Fly.io/etc.)

* Push `server/` to GitHub.
* Create a new Web Service on Render.
* Set environment variables (`DB_*`, `PORT`).

---

## 🖼️ Sample Complaint Display (ReceiverPage)

| ID     | Description       | Location     | Date       | Status | Image |
| ------ | ----------------- | ------------ | ---------- | ------ | ----- |
| GR-001 | Pothole near mall | 12.97, 77.59 | 2025-05-25 | New    |       |

---

## 🔒 Security Notes

* Input validation and XSS protection on frontend.
* Image type validation using `Multer`.
* No authentication implemented yet (JWT can be added).

---

## 🔧 Future Improvements

* JWT-based auth
* Search/filter on complaints
* Admin dashboard with metrics
* Email/SMS alerts on updates
* Live maps for geolocation data

---

## 📬 Contact

**Developer:** Avinash Singh Pal
**GitHub:** [@avinashsinghpal](https://github.com/avinashsinghpal)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
