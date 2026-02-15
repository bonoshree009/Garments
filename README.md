# Garments Website

This is a **Garments E-commerce Website** built with **React**, **Tailwind CSS**, **Firebase Authentication**, and **MongoDB** for the backend. It supports role-based dashboards, product management, and order booking.

---

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Project Structure](#project-structure)  
- [Setup & Installation](#setup--installation)  
- [Deployment](#deployment)  
- [Future Improvements](#future-improvements)  
- [License](#license)  

---

## Features

### Authentication
- Register and Login using **Firebase Auth**  
- Role assignment during registration: `admin`, `manager`, `buyer`  
- Google Sign-in  

### Role-Based Dashboard
- **Admin:** Manage users, view all products  
- **Manager:** Add/manage products  
- **Buyer:** View orders and products, book/order items  

### Products
- **All Products Page:** 3-column grid layout with product cards  
- **Product Details Page:** Modal shows full description, images, features, payment options  
- **Homepage:** Shows 6 featured products below banner  

### Orders
- Buyers can order/booking products  
- Only logged-in buyers can place orders  

### UI/UX
- Fully responsive using Tailwind CSS  
- Smooth animations using Framer Motion  

---

## Technologies Used

- **Frontend:** React, Tailwind CSS, Framer Motion  
- **Authentication:** Firebase Auth  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas)  
- **Hosting/Deployment:**  
  - Frontend: **Netlify** (React App)  
  - Backend: **Vercel** (Express API)  

---

## Project Structure

