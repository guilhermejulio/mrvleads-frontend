import { Container } from "./styles";
import { FaRegArrowAltCircleDown, FaRegTimesCircle, FaThumbsUp } from "react-icons/fa";
import { useLeads } from "../../hooks/useLeads";

export function LeadSummary() {
  const { statistics } = useLeads();

  return (
      <Container>
        <div>
          <header>
            <p>Invited Leads</p>
            <FaRegArrowAltCircleDown className="invite-icon-summary"/>
          </header>
          <strong>{statistics.inviteLeads}</strong>
        </div>
        <div>
          <header>
            <p>Declined Leads</p>
            <FaRegTimesCircle className="declined-icon-summary" />
          </header>
          <strong>{statistics.rejectLeads}</strong>
        </div>
        <div className="hightlight-background">
          <header>
            <p>Accepted Leads</p>
            <FaThumbsUp className="accepted-icon-summary" />
          </header>
          <strong>{statistics.acceptedLeads}</strong>
        </div>
      </Container>
  )
}
