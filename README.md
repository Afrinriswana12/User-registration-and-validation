🔴 User Registration and Validation (Red Theme)

A complete user registration and login validation system built using HTML, CSS, and JavaScript with a bold red-themed interface.
This project provides smooth form validation, user authentication, and data persistence through the browser’s localStorage, making it work fully offline without a backend server.

🚀 Features

🔑 User Registration: Create an account with username, email, and password.

⚙️ Validation: Ensures all fields are filled, passwords match, and no duplicate users exist.

🔐 Login System: Authenticates users based on stored credentials.

💾 LocalStorage Support: Saves registered users locally in the browser.

🎨 Red Theme UI: A minimal yet visually striking design.

⚡ Frontend Only: Works without a backend — ideal for learning or portfolio demos.

🖼️ Pages Overview
Page	Description
register.html	Form for new users to sign up with validation checks.
login.html	Allows users to log in using stored credentials.
welcome.html	Shown after successful login.
style.css	Contains red-themed styling for all pages.
script.js	Handles registration, validation, and login logic.
🧠 How It Works

The user fills in the registration form (username, email, password, confirm password).

JavaScript validates that all fields are filled and both passwords match.

If valid, the user’s data is stored in the browser’s localStorage.

On the login page, credentials are checked against stored users.

Successful login redirects the user to a welcome page.

🗂️ Folder Structure
red-auth/
│
├── register.html       # Registration page
├── login.html          # Login page
├── welcome.html        # Welcome page after login
├── style.css           # Stylesheet (red theme)
└── script.js           # JavaScript logic

💡 Technologies Used

HTML5 — Structure and layout

CSS3 — Styling and visual design

JavaScript (ES6) — Logic, validation, and localStorage handling

localStorage API — For persistent browser-side data storage

🧰 Installation & Usage

Clone the repository:

git clone https://github.com/yourusername/red-auth.git


Open the project folder:

cd red-auth


Launch the registration page:

Open register.html in your browser
(or deploy via GitHub Pages / Netlify)

Register a new user → Login → Redirects to Welcome page 🎉

🧩 Future Enhancements

Add password strength meter

Implement logout button with session handling

Integrate backend (Node.js / PHP) for real database storage

Include responsive design for mobile devices
