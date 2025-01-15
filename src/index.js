import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
const clerkFrontendApi = "pk_test_YXNzdXJlZC1iZWUtMTYuY2xlcmsuYWNjb3VudHMuZGV2JA";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi} afterSignOutUrl="/">
      <App />
      
    </ClerkProvider>
    
  </React.StrictMode>
);
Kommunicate.init("29d7e7244dd3b8007bdc94a6371983274", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

