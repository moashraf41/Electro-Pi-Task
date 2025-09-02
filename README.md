Overview
This is a responsive landing page for Scout, an AI platform for teams, built with Next.js and React. The design is based on the provided Figma prototype and includes smooth animations using Framer Motion.

Live Preview
[Add your live preview link here after deployment]

Technologies Used
Next.js 14

React

Tailwind CSS

Framer Motion (for animations)

Next/Image (for optimized images)

Project Structure

├── components/
│ ├── Button.jsx
│ ├── Container.jsx
│ ├── Footer.jsx
│ └── Navbar.jsx
├── sections/
│ ├── Companies.jsx
│ ├── Feature.jsx
│ ├── Hero.jsx
│ ├── Pricing.jsx
│ └── Testimonials.jsx
├── app/
│ ├── globals.css
│ ├── layout.js
│ └── page.js
└── public/
└── [various images and icons]

Setup Instructions
Clone the repository

Install dependencies: npm install

Run the development server: npm run dev

Open http://localhost:3000 in your browser

Notes & Assumptions
All images are placed in the public folder as referenced in the components

The design uses a dark theme with gradient backgrounds

Responsive breakpoints are implemented for mobile, tablet and desktop

Animation timing and effects follow the design requirements

The page includes hover states and interactive elements as specified

Code Quality Features
Component-based architecture for maintainability

Consistent styling approach with Tailwind CSS

Responsive design implementation

Semantic HTML structure

Proper image optimization with Next.js Image component

Clean animation implementation with Framer Motion

The implementation follows modern React/Next.js best practices and creates a visually appealing, responsive landing page that matches the provided design closely.
