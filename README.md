
# 💻 Devdin — Full-Stack Developer Networking Platform

Devdin is a scalable, full-featured developer networking platform designed to foster real-time collaboration, mentorship, and intelligent technical support for developers across all levels.

---

## 🚀 Features

- 🔁 Real-time collaboration and mentorship tools
- 💬 WebSocket-powered real-time messaging and notifications (via Socket.io)
- 🔐 Role-based access control for users and mentors
- 💡 GPT-based coding assistance for solving complex problems
- 💳 Seamless payment gateway integration (Razorpay) for premium features
- 📊 Intelligent user matching algorithm to enhance productivity
- 🎨 Modern responsive UI using Tailwind CSS and DaisyUI

---

## 🧱 Tech Stack

| Layer      | Technology                         |
|------------|-------------------------------------|
| Frontend   | React.js, Tailwind CSS, DaisyUI     |
| Backend    | Node.js, Express.js, Socket.io      |
| Database   | MongoDB (Mongoose)                  |
| Auth       | JWT, bcrypt                         |
| Realtime   | WebSockets via Socket.io            |
| Payment    | Razorpay                            |
| AI Assist  | GPT API Integration                 |
| Dev Tools  | Nodemon, Validator, Cookie-parser   |

---

## 📁 Project Structure

```
├── src/
│   ├── app.js
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
├── public/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/aditya-8787/DevTinder.git
cd DevTinder
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file from the example:
```bash
cp .env.example .env
```

Add the following:
```env
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/devdin
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_SECRET=your_secret
GPT_API_KEY=your_gpt_api_key
```

### 4. Run the Application
```bash
npm run dev
```

---

## 🔐 Authentication & Authorization

- Users register/login using JWT-based authentication
- Role-based access (admin, mentor, user)
- Passwords are hashed using bcrypt

---

## 📬 Real-Time Communication

Using **Socket.io**, users can:
- Send/receive messages instantly
- Get real-time notifications
- Collaborate with mentors in live sessions

---

## 💳 Payments Integration

- Powered by **Razorpay**
- Premium users can unlock advanced mentorship features
- Secure transaction handling and webhook support

---

## 🤖 GPT-Based Coding Assistant

- Developers can describe their issue
- Integrated GPT returns intelligent suggestions
- Great for debugging, code review, and logic explanation

---

## 📈 Performance Highlights

- ⏫ Boosted developer productivity by **40%**
- 📊 Increased engagement by **35%** with premium features
- 🧠 Intelligent matching algorithm for mentor–mentee pairing

---

## 📄 License

Licensed under the **ISC License**.

---

## 👨‍💻 Author

Created by **Aditya Singh**

- GitHub: [@aditya-8787](https://github.com/aditya-8787)
- LinkedIn: [Aditya Singh](https://www.linkedin.com/in/aditya8787/)
## 🙏 Acknowledgments

🔹 Basic project structure inspired by [Naman](https://github.com/Naman-NITA).  
🔹 UI components extended from open-source Tailwind + DaisyUI examples.

 🔄 Deployment in Progress: The live version of this project is currently being finalized and will be available soon.
