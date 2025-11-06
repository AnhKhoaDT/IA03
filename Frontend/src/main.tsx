import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './styles/index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/**
       * BrowserRouter with dynamic basename so it works on:
       * - GitHub Pages project site: BASE_URL = '/IA03/' -> basename '/IA03'
       * - Local/Render: BASE_URL = '/' -> basename undefined
       */}
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
