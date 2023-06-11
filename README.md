# TvMaze
Project Name TvMaze
Project description goes here.

Prerequisites
Node.js 
npm 
Backend dependencies (see Backend Setup)
Frontend dependencies (see Frontend Setup)

Backend Setup
Clone the repository.
Navigate to the backend directory.
Install the dependencies using the following command: npm install
Start the backend server using the following command: npm start
The backend server will start running on http://localhost:8090.

Frontend Setup
Navigate to the frontend directory.
Install the dependencies using the following command: npm install
Start the development server using the following command: npm start
The frontend development server will start running on http://localhost:3000.

Usage
Open a web browser and visit http://localhost:3000 to access the application.
The home page will display a material toolbar with the "Home" text on the left and a login button on the right.
Clicking on the login button will navigate you to the login page.
On the login page, enter your email and password in the input fields. The form will validate the email and password.
After successful login, you will be redirected to the search page.
On the search page, enter a TV show title in the search input field and click the "Search" button.
The search results will be displayed as material cards, showing the TV show information including the poster, name, summary, type, language, genres, status, and schedule.
If no results are found, a snack bar with a proper message will be displayed.

API Routes
POST /api/login
Description: Authenticate the user and return a JWT token.
Request body:
email: User's email address.
password: User's password.
Response:
token: JWT token for authentication.

GET /api/search?title={title}
Description: Search TV shows based on the provided title.
Request query parameter:
title: The title of the TV show to search for.
Request headers:
Authorization: JWT token for authentication.
Response:
List of TV shows matching the search query.

Technologies Used
Backend: Node.js, Express.js
Frontend: React.js, Material-UI
