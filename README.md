# 🚀 ⚡ Dynamic Status Indicator – Peerlist Challenge Day 2 Submission



- A real-time, visually dynamic status indicator built using React, Tailwind CSS, and Framer Motion — crafted for Peerlist's #5Days Challenge (Day 2).
- This mini project showcases clean animation logic, responsive styling, and interaction-driven UI feedback.



## 📋 Table of Contents
- Introduction
- Features
- Project Implementation Process
- File Structure
- Technology Stack
- Installation
- Usage
- Screenshots
- Contributing
- License
- Contact

## 📘 Introduction

- This project is a sleek and minimal component that acts as a live transaction status indicator, dynamically updating the UI based on user interaction or task state.
- Whether it's “Processing”, “Success”, or “Failed” — each state is animated smoothly using Framer Motion, styled with TailwindCSS, and built on the performant React 19 stack.
- Perfect for integrating into dashboards, fintech UIs, or workflow tools.


## ✨ Features

✅ Animated Transitions – Smooth and visually distinct transitions between status states

🎨 Tailwind-powered UI – Utility-first CSS for responsive and modern styling

⚛️ React 19 Functional Components – Lightweight and component-driven architecture

🎥 Framer Motion Effects – Engaging micro-interactions and motion effects

🔄 Interactive Simulation – Change transaction status manually to simulate real scenarios

📱 Fully Responsive – Works seamlessly across screen sizes

🧪 Test-ready Setup – Configured with Testing Library for unit testing

## 🛠 Project Implementation Process

#### 1. Setup & Scaffolding
- Bootstrapped with create-react-app
- Tailwind CSS and Framer Motion installed via NPM
- Component folder created with status logic and layout

#### 2. Dynamic Logic
- Button triggers change in status (Idle, Processing, Success, Error)
- Visuals update using conditional rendering and animation variants

#### 3. Animations & Feedback
- Framer Motion brings motion-based transitions per status
- Icons or colors update to represent each state clearly

#### 4. Testing & Polish
- Integrated @testing-library/react for testing dynamic behavior
- Applied accessibility best practices

## 📁 File Structure

```bash
transaction-indicator/
├── public/                 # Static files
├── src/
│   ├── components/         # StatusIndicator.jsx
│   ├── App.jsx             # Main component
│   ├── index.css           # Tailwind CSS import
│   ├── index.js            # React DOM render
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 💻 Technology Stack

Category	Technology

⚛️ Framework	React 19 + CRA

🎨 Styling	Tailwind CSS

🎥 Animations	Framer Motion

🧪 Testing	Testing Library

🚀 Tooling	PostCSS, Autoprefixer


## 🛠 Installation

Follow these steps to set up and run the Techny project locally:

#### 1. Clone the repository
```bash
git clone https://github.com/YourUsername/transaction-indicator.git
cd transaction-indicator
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Run the frontend

```bash
npm start
```

## 🚀 Usage
- Click on status change buttons to simulate a transaction process
- Observe the UI update with animations and color changes
- Ideal as a reusable component in other apps


## 📸 Screenshots



## 🤝 Contributing
We welcome community contributions! Follow the steps below to contribute:

#### Fork the repository
- Create a new branch:
```bash
git checkout -b feature/YourFeature
```

- Commit your changes:
```bash
git commit -m 'Add your feature'
```

- Push to the branch:
```bash
git push origin feature/YourFeature
```

- Open a pull request with detailed explanations of your changes.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact
For any questions or suggestions, feel free to reach out:

- Email: rohansh0808@gmail.com
- GitHub: Rohansh0808
