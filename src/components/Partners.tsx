import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, CardMedia } from '@mui/material';

const partners = [
  {
    name: 'TechCorp International',
    description: 'Global technology solutions provider',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    name: 'InnovateSoft',
    description: 'Innovation-driven software development',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
  },
  {
    name: 'CloudTech Solutions',
    description: 'Cloud infrastructure specialists',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80'
  },
  {
    name: 'DataSense Analytics',
    description: 'Advanced analytics and AI solutions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  }
];

export default function Partners() {
  return (
    <Box
      id="partners"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'grey.50',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Our Partners
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto' }}>
            Collaborating with industry leaders to deliver excellence
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={partner.image}
                  alt={partner.name}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {partner.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {partner.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}