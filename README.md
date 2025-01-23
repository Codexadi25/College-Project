# Traversal.in
This repository contains a backend web application for managing hotel and restaurant listings. It is designed to simplify the process of adding, updating, viewing, and deleting information about hotels and restaurants. The project integrates modern web technologies to provide a robust and scalable solution for the hospitality industry.

---

## 1. Project Overview

The goal of this project is to create a platform that allows users to manage hotel and restaurant data dynamically. Users can perform CRUD (Create, Read, Update, Delete) operations on listings, which include details such as name, description, images, location, and contact information. The system uses Firebase for secure image management and follows a Model-View-Controller (MVC) architecture for structured development.

Key features include:
- User authentication for secure access.
- Dynamic content rendering with EJS.
- Integration of search and filtering options for ease of use.
- RESTful API endpoints for smooth data handling.

---

## 2. Technologies Used

This project leverages the following technologies and frameworks:

### Backend Framework
- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express.js**: A minimalist framework for building RESTful APIs and managing server-side routing.

### Database
- **MongoDB**: A NoSQL database for storing hotel and restaurant data with scalability and flexibility.

### Templating Engine
- **EJS (Embedded JavaScript)**: Renders dynamic HTML pages based on backend data.

### File Management
- **Firebase**: Manages image uploads and provides secure URLs for image storage.

### Other Tools and Libraries
- **cors**: Handles cross-origin requests for secure communication.
- **Bootstrap**: Enhances the frontend with responsive and consistent styling.
- **JavaScript**: Powers both client-side and server-side operations.

---

## 3. Software Used

To develop and manage the project efficiently, the following tools were utilized:
- **Visual Studio Code (VS Code)**: An integrated development environment for coding and debugging.
- **MongoDB Compass**: A GUI for managing the MongoDB database.
- **Postman**: Used for testing RESTful API endpoints and ensuring seamless communication between the server and client.

---

## 4. Features and Functionalities

1. **User Authentication and Authorization**:
   - Secure login and registration system.
   - Restricts data modification to authenticated users.

2. **CRUD Operations**:
   - Add, view, edit, and delete hotel and restaurant listings.

3. **Image Management**:
   - Upload images to Firebase and associate them with listings.

4. **Dynamic Content Rendering**:
   - EJS templates generate pages with real-time data from the database.

5. **Search and Filter**:
   - Users can search and filter listings based on location, cuisine, or rating.

---

## 5. How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Codexadi25/College-Project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd College-Project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up MongoDB and Firebase:
   *Configure your MongoDB connection string in the .env file.
   *Set up Firebase credentials for image management.