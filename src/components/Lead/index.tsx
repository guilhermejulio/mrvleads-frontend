import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

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
      <CardContent> 
        <Typography variant="body2" color="text.secondary">
          Suburb
          Category
          Job ID
        </Typography>
      </CardContent>
      <CardContent> 
        <Typography variant="body2" color="text.secondary">
          Description
        </Typography>
      </CardContent>
      <CardContent> 
        Button1 
        Button 2
        Price
      </CardContent>
    </Card>
  );
}
