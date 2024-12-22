![logoxdocs](https://github.com/user-attachments/assets/03618e27-1d0b-4aeb-97fa-31aadb7ade9c)

# 📋 Table of Contents

* 🚀 [Introduction](#introduction)
* ⚙️ [Tech Stack](#tech-stack)
* 🔋 [Features](#features)
* 🤸 [Quick Start](#quick-start)

---

# 🚀 Introduction 
<a name="introduction"></a>

A real-time collaborative document editor that's secure, responsive, and built with modern web technologies for seamless team productivity.

---

# ⚙️ Tech Stack 
<a name="tech-stack"></a>

* Next.js
* TypeScript
* Liveblocks
* Lexical Editor
* ShadCN
* Tailwind CSS

---

# 🔋 Features 
<a name="features"></a>

## ✨ Effortless Collaboration, Seamless Editing

### 🔐 Secure Authentication

Harness the power of Clerk for a secure, user-friendly sign-in experience.

### ✍️ Real-Time Collaborative Editing

Watch your ideas come to life as multiple users edit documents together, with changes reflected in real-time.

### 📂 Master Your Documents

#### 📝 Create with Confidence
Start fresh with new documents that auto-save and organize themselves in your personal library.

#### 🗑️ Effortless Removal
Clean up your space by easily deleting documents you no longer need.

#### 🔄 Share Your Vision
Empower collaboration by sharing documents through email or links, with customizable access rights.

#### 🎯 Organize at a Glance
Navigate through your document collection with ease, thanks to advanced search and sorting options.

### 💬 Interactive Comments

Dive into discussions with threaded comments, whether they're inline or general, fostering a dynamic workflow.

### 👥 Collaborate in Real-Time

See who's working on what with live indicators showing active collaborators in the text editor.

### 🔔 Stay Informed

Get instant notifications for document shares, fresh comments, and collaborator actions, keeping you in the loop.

### 📱 Responsive Across Devices

Whether on desktop, tablet, or phone, your workspace adapts to fit your device, ensuring productivity anywhere, anytime.

---

# 🤸 Quick Start
<a name="quick-start"></a>

Follow these steps to set up the project locally on your machine.

## Prerequisites

Make sure you have the following installed on your machine:

* Git
* Node.js
* npm (Node Package Manager)

## Cloning the Repository

```bash
git clone https://github.com/adrianhajdin/collaborative-editor.git
cd collaborative-editor
```

## Installation

Install the project dependencies using npm:

```bash
npm install
```

## Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & LiveBlocks credentials. You can obtain these credentials by signing up on the Clerk and Liveblocks website.

## Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.