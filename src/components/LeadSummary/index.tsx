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
            <FaRegArrowAltCircleDown />
          </header>
          <strong>{statistics.inviteLeads}</strong>
        </div>
        <div>
          <header>
            <p>Rejected Leads</p>
            <FaRegTimesCircle />
          </header>
          <strong>{statistics.rejectLeads}</strong>
        </div>
        <div className="hightlight-background">
          <header>
            <p>Accepted Leads</p>
            <FaThumbsUp />
          </header>
          <strong>{statistics.acceptedLeads}</strong>
        </div>
      </Container>
  )
}
