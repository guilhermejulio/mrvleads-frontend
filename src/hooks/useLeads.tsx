import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Lead } from "../models/Lead";	
import { Statistics } from "../models/Statistics";	

type LeadInput = Omit<Lead, "leadId" | "leadFullName"| "leadCreatedAt" | "leadUpdatedAt"| "statusId"| "statusName">;

interface InvitesProviderProps {
  children: ReactNode;
}

interface InvitesContextData {
  leadsInvited: Lead[];
  leadsAccepted: Lead[];
  statistics: Statistics;
  createInvite: (lead: LeadInput) => Promise<void>;
  acceptLead: (leadId: number) => Promise<void>;
  declineLead: (leadId: number) => Promise<void>;
}

const InvitesContext = createContext<InvitesContextData>(
  {} as InvitesContextData
);

export function InvitesProvider({ children }: InvitesProviderProps) {
  const [leadsInvited, setLeads] = useState<Lead[]>([]);
  const [leadsAccepted, setLeadsAccepted] = useState<Lead[]>([]);
  const [statistics, setStatistics] = useState<Statistics>({} as Statistics);

  useEffect(() => {
    api.get("/leads/GetStatistics")
      .then((response) => setStatistics(response.data))
  }, []);


  useEffect(() => {
    api.get("/leads/ListAllCreated")
      .then((response) => setLeads(response.data))
  }, []);

  useEffect(() => {
    api.get("/leads/ListAllAccepted")
      .then((response) => setLeadsAccepted(response.data))
  }, []);

  async function createInvite(lead: LeadInput) {
    const response = await api.post("/leads/create", lead);
    const newInvite = response.data;

    setLeads([newInvite, ...leadsInvited]);
    getStatistics();
  }

  async function acceptLead(leadId: number) {
    const response = await api.put(`/leads/UpdateStatus/accept/${leadId}`);
    const acceptedLead = response.data;

    const newLeads = [...leadsInvited.filter((lead) => lead.leadId !== leadId)];
    setLeads(newLeads);
    setLeadsAccepted([acceptedLead, ...leadsAccepted]);
    getStatistics();
  }

  async function declineLead(leadId: number) {
    await api.put(`/leads/UpdateStatus/decline/${leadId}`);

    const newLeads = [...leadsInvited.filter((lead) => lead.leadId !== leadId)];
    setLeads(newLeads);
    getStatistics();
  }

  async function getStatistics() {
    const response = await api.get("/leads/GetStatistics");
    const statistic: Statistics = response.data;

    setStatistics(statistic);
  }

  return (
    <InvitesContext.Provider value={{ leadsInvited, leadsAccepted, statistics, createInvite, acceptLead, declineLead}}>
      {children}
    </InvitesContext.Provider>
  );
}


export function useLeads() {
  const context = useContext(InvitesContext);

  return context;
}
