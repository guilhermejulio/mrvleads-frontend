import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Container, Info, Line, Bottom, Price } from './styles';
import { FaLocationArrow, FaSuitcase } from "react-icons/fa";

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 1120 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      < Line />
      <CardContent> 
        <Container >
        <Typography variant="body2" color="text.secondary">
            <Info>
              <FaLocationArrow />
              Suburb
            </Info>
            <Info>
              <FaSuitcase />
              Category
            </Info>
            <Info>
              Job ID
            </Info>
        </Typography>
        </Container>
      </CardContent>
      < Line />
      <CardContent> 
        <Typography variant="body2" color="text.secondary">
          Description
        </Typography>
      </CardContent>
      < Line />
        <CardContent> 
          <Bottom >
            <Button variant="contained">Accept</Button>
            <Button variant="outlined">Decline</Button>
            <Info>
              <Price>
                $232
              </Price>
              Lead price
            </Info>
          </ Bottom>
        </CardContent>
    </Card>
  );
}
