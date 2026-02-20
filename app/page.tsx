import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // Gold
    },
    secondary: {
      main: '#CD7F32', // Bronze
    },
  },
});

const campaigns = [
  {
    restaurantName: 'The Great Restaurant',
    experienceTitle: 'Culinary Adventure',
    price: '$50',
    followersRequirement: 100,
    description: 'Join us for an unforgettable night of gourmet dining.'
  },
  {
    restaurantName: 'Foodie Paradise',
    experienceTitle: 'Gastronomic Journey',
    price: '$75',
    followersRequirement: 200,
    description: 'Experience the best dishes from around the world.'
  },
  // Add more campaign objects as needed
];

const CampaignCards = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        {campaigns.map((campaign, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{campaign.restaurantName}</Typography>
                <Typography variant="h6">{campaign.experienceTitle}</Typography>
                <Typography variant="body1">{campaign.price}</Typography>
                <Typography variant="body2">Followers Required: {campaign.followersRequirement}</Typography>
                <Typography variant="body2">{campaign.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default CampaignCards;