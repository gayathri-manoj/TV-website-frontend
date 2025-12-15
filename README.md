# Tech Vayuna website–Frontend 

This repository contains the frontend implementation of the **Tech Vayuna club website**, built using **React + Vite**.  
The current focus of this implementation is the **Contact page** and the **Join Us page**, designed based on the provided Figma designs.


## Tech Stack

- React (Vite)
- React Router DOM
- CSS (custom gradients & layout)
- Google Forms (embedded for Join Us)
- Node.js & npm

## Pages 

### 1. Contact Page
- Pixel-aligned UI based on Figma design
- Gradient background and card layout
- Input fields for:
  - Name
  - Phone number
  - Email
  - Message
- Static UI (no backend integration yet)

### 2. Join Us Page
- Separate routed page (`/join`)
- Embedded Google Form using iframe
- Used as a temporary form solution as suggested

##  Routing

Implemented using **react-router-dom**:

- `/` → Contact Page
- `/join` → Join Us Page (Google Form embed)

Navigation links in the header direct users to the correct pages.

## Project Structure
tech-vayuna/
├── src/
│ ├── pages/
│ │ ├── Contact.jsx
│ │ └── JoinUs.jsx
│ ├── assets/
│ ├── App.jsx
│ └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
