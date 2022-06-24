import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container } from "./styles";
import { FaRegArrowAltCircleDown, FaRegTimesCircle, FaThumbsUp } from "react-icons/fa";

export function LeadSummary() {
  return (
    <Container>
      <div>
        <header>
          <p>Invited Leads</p>
          <FaRegArrowAltCircleDown />
        </header>
        <strong>42</strong>
      </div>
      <div>
        <header>
          <p>Rejected Leads</p>
          <FaRegTimesCircle />
        </header>
        <strong>42</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Accepted Leads</p>
          <FaThumbsUp />
        </header>
        <strong>42</strong>
      </div>
    </Container>
  )
}
