# Context-X: Advanced React + Firebase Auth + Tailwind + DaisyUI

A modern, production-ready authentication starter built with **React**, **Vite**, **Firebase Authentication**, **Tailwind CSS**, and **DaisyUI**.  
Seamlessly manage user authentication, protected routes, and beautiful UI - all with best practices and extensibility in mind.

## Features

- **React 18** with [Vite](https://vitejs.dev/) for instant HMR and lightning-fast builds
- **Firebase Authentication** (Email/Password and Google OAuth)
- **Context API** for global auth state management
- **Protected Routes** with React Router v6
- **Tailwind CSS** and **DaisyUI** for rapid, responsive, and accessible UI development
- **TypeScript** for type safety and scalability
- **Reusable Components**: Header, Profile, Orders, Auth Forms
- **Customizable Themes** (light, dark, cupcake)
- **ESLint** and **Prettier** for code quality
- **Production-ready** structure and best practices

## Project Structure

src/App.tsx main.tsx index.css firebase/firebase.config.ts Layout/Main.tsx components/Header.tsx Home.tsx Login.tsx Register.tsx Profile.tsx Orders.tsx providers/AuthProvider.tsx routes/PrivateRoutes.tsx public/vite.svg

## Getting Started

### 1. Clone the Repository

git clone https://github.com/go-kawser/ContextX-React-Firebase-Starter.git

## Authentication Flow

- **Register:** Create a new account with email and password.
- **Login:** Sign in with email/password or Google.
- **Protected Routes:** /profile and /orders are accessible only to authenticated users.
- **Profile Management:** View and (extend to) edit user profile.
- **Logout:** Securely sign out from any page.

## Theming and Styling

- Built with Tailwind CSS and DaisyUI for rapid, customizable UI.
- Switch between light, dark, and cupcake themes.
- Responsive and accessible by default.

## Scripts

### Command

- npm run dev
- npm run build
- npm run preview
- npm run lint
- npm run format
- npm run type-check

### Extending Functionality

Add Firestore: Connect orders or user data to Firestore.
Profile Editing: Implement profile update logic in Profile.tsx.
Password Reset: Add a password reset flow.
Role-based Access: Extend AuthProvider for admin/user roles.

#### Acknowledgements

1. React
2. Vite
3. Firebase
4. Tailwind CSS
5. DaisyUI

##### Contact

**Email:** abu.kayser.official@gmail.com
