import LeadsTabs from "../LeadsTabs";
import { LeadSummary } from "../LeadSummary";
import { Container } from "./styles";

export function Dashboard(){
  return(
    <Container>
      <LeadSummary />
      <LeadsTabs />
    </Container>
  );
}
