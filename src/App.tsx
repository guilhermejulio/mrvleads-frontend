import { GlobalStyle } from "./styles/global";
import React from 'react';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

