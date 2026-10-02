
# 🌿 GreenNest — Plant Care & Booking

GreenNest is a responsive plant-care web application where users can explore plants, view plant details, and manage their bookings.

🔗 **Live Website:** https://greennestplant.netlify.app/  
📦 **GitHub Repository:** https://github.com/munzurul-dev/greennest-plant-care.git

## ✨ Features

- Browse plants and explore plant details
- User authentication with Firebase
- Google sign-in (if enabled in the Firebase project)
- View and manage booked plants
- Remove plants from booking history
- Update profile name and photo URL
- Responsive layout for mobile, tablet, and desktop
- Client-side routing with React Router

## 🛠️ Technologies

- React
- Vite
- Tailwind CSS
- Firebase Authentication
- React Router
- Lucide React

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/munzurul-dev/greennest-plant-care.git
cd greennest-plant-care
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add your Firebase web app configuration:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_firebase_app_id
```

Replace the placeholder values with your own Firebase project settings. Do not commit your `.env` file to GitHub.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal.

### 5. Build for production

```bash
npm run build
```

The production build is generated in the `dist` directory.

## 🔐 Firebase Setup

To use Firebase Authentication:

1. Create or open a project in the [Firebase Console](https://console.firebase.google.com/).
2. Register a Web App and copy its Firebase configuration.
3. Enable the authentication providers used by the app.
4. Add your deployed domain (`greennestplant.netlify.app`) to **Authentication → Settings → Authorized domains**.
5. Add the environment variables to your hosting provider and redeploy.

## 🌐 Deployment

The project is deployed on Netlify:

https://greennestplant.netlify.app/

If the GitHub repository is connected to Netlify with automatic deploys enabled, pushing changes to the configured branch triggers a new deployment.

## 👨‍💻 Author

**Muhammad Munzurul**

- GitHub: [@munzurul-dev](https://github.com/munzurul-dev)

---

Made with 🌱 for plant lovers.