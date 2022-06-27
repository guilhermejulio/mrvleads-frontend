import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {
  Container,
  Info,
  Line,
  Bottom,
  Price,
  CardContact,
  CardDescription,
} from "./styles";
import {
  FaLocationArrow,
  FaSuitcase,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { DateTime } from "luxon";
import { Lead } from "../../models/Lead";

interface LeadData {
  lead: Lead;
  isAccepted: boolean;
}

export default function LeadCard({ lead, isAccepted }: LeadData) {
  return (
    <Card sx={{ maxWidth: 1120, marginTop: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#FB9E04" }} aria-label="recipe">
            {lead.leadFirstName
              ? lead.leadFirstName.charAt(0)
              : lead.leadFullName.charAt(0)}
          </Avatar>
        }
        title={lead.leadFirstName ? lead.leadFirstName : lead.leadFullName}
        subheader={
          !isAccepted
            ? DateTime.fromISO(lead.leadCreatedAt).toFormat(
                "dd/MM/yyyy @ HH:mm"
              )
            : DateTime.fromISO(lead.leadUpdatedAt).toFormat(
                "dd/MM/yyyy @ HH:mm"
              )
        }
      />
      <Line />
      <CardContent>
        <Container>
          <Typography variant="body2" color="text.secondary">
            <Info>
              <FaLocationArrow />
              {lead.leadSuburb}
            </Info>
            <Info>
              <FaSuitcase />
              {lead.leadCategory}
            </Info>
            <Info>Job ID: {lead.leadId}</Info>
            {isAccepted && (
              <Info>
                <Price>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(lead.leadPrice)}
                </Price>
                Lead invitation
              </Info>
            )}
          </Typography>
        </Container>
      </CardContent>
      <Line />
      <CardContent>
        {isAccepted && (
          <CardContact>
            <Typography variant="body2" color="text.secondary">
              <FaPhone />
              {lead.leadPhoneNumber}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <FaEnvelope />
              {lead.leadEmailAddress}
            </Typography>
          </CardContact>
        )}
        <CardDescription>
          <Typography variant="body2" color="text.secondary">
            {lead.leadDescription}
          </Typography>
        </CardDescription>
      </CardContent>
      {!isAccepted && (
        <>
          <Line />
          <CardContent>
            <Bottom>
              <Button variant="contained">Accept</Button>
              <Button variant="outlined">Decline</Button>
              <Info>
                <Price>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(lead.leadPrice)}
                </Price>
                Lead invitation
              </Info>
            </Bottom>
          </CardContent>
        </>
      )}
    </Card>
  );
}