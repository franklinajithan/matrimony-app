# 💍 Matrimony App

A modern, full-featured Matrimony mobile application built using **React Native (Expo)**, **TypeScript**, **Tailwind CSS (NativeWind)**, and **AWS Amplify**. This app provides a seamless experience for users looking to find their perfect match through personalized profiles, smart matching, secure chat, and horoscope compatibility.

## 🚀 Features

- 🔐 **Authentication** using AWS Cognito
- 👤 **User Profile Management**
- ❤️ **Smart Match Recommendations**
- 🧠 **Horoscope-Based Matching**
- 📷 **Profile Image Uploads via S3**
- 💬 (Optional) Real-time Chat
- 🌍 Global Reach & Language Support
- ⚙️ Built with scalable and modular architecture

---

## 🧰 Tech Stack

### **Frontend**
- [React Native (Expo)](https://docs.expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS (NativeWind)](https://www.nativewind.dev/)
- [Expo Router](https://expo.github.io/router/)

### **Backend**
- [AWS Amplify](https://docs.amplify.aws/)
  - Cognito (Auth)
  - DynamoDB (Database)
  - S3 (Storage)
  - AppSync (GraphQL) or REST API + Lambda

### **Dev Tools**
- ESLint, Prettier, Husky
- Jest (Unit Testing)
- GitHub Actions (CI/CD)

---

## 📱 Screens

- **Home Tab**: Discover matches and featured profiles
- **Profile Tab**: View and update user details
- **Matches Tab**: List of potential matches based on preferences
- **Horoscope Tab**: Horoscope compatibility and suggestions

---

## 🏗️ Project Structure

```plaintext
├── components/         # Reusable UI components
├── screens/           # Tab-based screens
├── navigation/        # Expo Router setup
├── contexts/          # App-level states (e.g., Auth)
├── services/          # Amplify API & logic
├── utils/             # Helper functions
├── types/             # Global TypeScript types
├── hooks/             # Custom hooks
├── App.tsx            # App entry
├── tailwind.config.js # NativeWind config
├── metro.config.js    # Tailwind + Expo config
```

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/matrimony-app.git
cd matrimony-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup AWS Amplify

```bash
amplify init
amplify add auth
amplify add api
amplify push
```

### 4. Run the App

```bash
npx expo start
```
