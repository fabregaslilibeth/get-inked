mkdir backend
cd backend
npm init
npm install express cors mongoose dotenv
npm install -g nodemon

then create a server
touch server.js
touch .env
set up server

then create models and routes


FRONTEND
npm install bootstrap
on App.js > import "bootstrap/dist/css/bootstrap.min.css"
npm install react-router-dom
npm install axios


need to pass token from Login.js to App.js to Navbar.js
if guest, show name = guest, login and register
if user, show name, bookings, and reviews
if admin, show manage packages, manage bookings, manage reviews, manage galleries