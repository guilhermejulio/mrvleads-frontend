import { GlobalStyle } from "./styles/global";
import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewInviteModal } from "./components/NewInviteModal";
import { InvitesProvider } from "./LeadsContext";

export function App() {
  const [isNewInviteModalOpen, setIsNewInviteModalOpen] = useState(false);

  function handleOpenNewInviteModal() {
    setIsNewInviteModalOpen(true);
  }

  function handleCloseNewInviteModal() {
    setIsNewInviteModalOpen(false);
  }
  
  return (
    <InvitesProvider>
      <Header onOpenNewInviteModal={handleOpenNewInviteModal} />
      <Dashboard />
      <NewInviteModal 
        isOpen={isNewInviteModalOpen}
        onRequestClose={handleCloseNewInviteModal}
      />
      <GlobalStyle />
    </InvitesProvider>
  );
}

