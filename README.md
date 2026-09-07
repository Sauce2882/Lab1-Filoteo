# DCIT50 - Laboratory Exercise 1: Git, GitHub, and Branching

**Student Name:** Einrejhay Timoty Filoteo  
**Course, Year & Section:** BSIT 3-6  
**Instructor / Course:** DCIT50: Object Oriented Programming  

---

## 📌 Project Overview
This project demonstrates basic version control techniques using Git and GitHub. It features a personal introduction webpage developed using dynamic HTML, custom CSS styling following the **60-30-10 color rule**, and JavaScript interactivity. The repository maintains two separate branches to show version control progression:

* **`main` Branch:** Contains the complete webpage implementation (`index.html`, `style.css`, and `script.js`).
* **`no-style` Branch:** Preserves the clean, HTML-only version of the webpage.

---

## 🛠️ Step-by-Step Git Commands Guide

### Step 1: Configure Git User Identity
Set up global configuration for Git username and email address to associate commits with your account.
```bash
git config --global user.name "Timoty Filoteo"
git config --global user.email "timotyfiloteo28@gmail.com"
```

### Step 2: Initialize Project Folder & Local Repository
Create the project workspace directory and initialize an empty Git repository.
```bash
mkdir lab1_filoteo
cd lab1_filoteo
git init
```

### Step 3: Create Initial Page & Perform First Commit (HTML Only)
Create `index.html` with basic self-introduction content and commit it to save the initial state.
```bash
git add index.html
git commit -m "Add initial HTML-only self-introduction webpage"
```

### Step 4: Branch Management & Setup
Create the `no-style` branch from the initial commit to preserve the unstyled HTML version, rename the primary branch to `main`, and verify active branches.
```bash
git branch no-style
git branch -M main
git branch
```

### Step 5: Add CSS Styling and JavaScript Interactivity
Switch to the `main` branch, add `style.css` and `script.js`, link them inside `index.html`, and commit the updated version.
```bash
git checkout main
git add .
git commit -m "Add CSS styling and JavaScript interactivity"
```

### Step 6: Link Remote GitHub Repository & Push Branches
Connect the local Git repository to your GitHub remote repository and push both `main` and `no-style` branches.
```bash
git remote add origin https://github.com/Sauce2882/Lab1-Filoteo.git
git push -u origin main
git push origin no-style
```

---

## 📁 Repository Structure

```text
lab1_filoteo/
├── index.html     # HTML structure with self-introduction content
├── style.css      # Custom styling using 60-30-10 rule and background shapes
├── script.js     # JavaScript interactivity for interactive greeting
└── README.md      # Project documentation and Git guide
```

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Sauce2882/Lab1-Filoteo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Lab1-Filoteo
   ```
3. Open `index.html` in any web browser or launch it using **VS Code Live Server**.