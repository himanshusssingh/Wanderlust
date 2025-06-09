🧳 Wanderlust - MERN Stack Travel Booking App

Wanderlust is a full-stack travel booking application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to explore and book hotels and tourist places with ease, providing a smooth and secure travel planning experience.


🚀 Features:
Search for hotels or tourist destinations by location or country.

View Listings with detailed descriptions, images, and ratings.

Reviews & Ratings system to share and read user experiences.

User Authentication (Sign up / Login / Logout) using Passport.js.

Add, Edit & Delete listings and reviews (authenticated users).

Session Management using express-session and connect-mongo.

Responsive and interactive frontend using EJS templating.

MongoDB Atlas cloud-hosted database integration.


📁 Project Structure:

Wanderlust/
├── routes/
│ ├── user.js
│ ├── review.js
│ └── listing.js
├── models/
│ ├── user.js
│ └── review.js
├── views/
│ ├── includes/
│ ├── layouts/
│ └── users/
├── utils/
├── .env
├── app.js
└── package.json


⚙️ Tech Stack:

Frontend: HTML, CSS, EJS, Bootstrap

Backend: Node.js, Express.js

Database: MongoDB Atlas (Cloud), Mongoose ODM

Authentication: Passport.js (Local Strategy)

Templating Engine: EJS + EJS-Mate

Session Store: connect-mongo


🛠️ Installation

Clone the repository:
git clone https://github.com/your-username/majors-travel-app.git
cd majors-travel-app


Install dependencies:
npm install

Create a .env file and add your environment variables:
ATLASDB_URL=your_mongodb_connection_string
NODE_ENV=development

Run the app:
nodemon app.js

Visit:
http://localhost:8080


📷 Screenshots

Coming soon...


🧑‍💻 Author

Himanshu Singh
Gorakhpur, Uttar Pradesh
BCA Student | MERN Stack Developer
YouTube Vlogger | Tech Enthusiast


📬 Feedback

Have any suggestions or feedback? Feel free to open an issue or connect with me!

