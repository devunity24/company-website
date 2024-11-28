import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, CardMedia } from '@mui/material';
import { Building, Briefcase, CircleUserRound, Store, LandmarkIcon, PlaneTakeoff } from 'lucide-react';

const industries = [
  {
    title: 'Finance & Banking',
    description: 'Digital transformation solutions for modern financial institutions.',
    icon: LandmarkIcon,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80'
  },
  {
    title: 'Healthcare',
    description: 'Innovative healthcare solutions for improved patient care.',
    icon: CircleUserRound,
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80'
  },
  {
    title: 'Retail & E-commerce',
    description: 'End-to-end solutions for modern retail businesses.',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80'
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing solutions for Industry 4.0.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1565465295423-68c959f89282?auto=format&fit=crop&q=80'
  },
  {
    title: 'Travel & Hospitality',
    description: 'Digital solutions for enhanced guest experiences.',
    icon: PlaneTakeoff,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80'
  },
  {
    title: 'Professional Services',
    description: 'Technology solutions for service-based businesses.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
  }
];

export default function Industries() {
  return (
    <Box
      id="industries"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Industries We Serve
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto' }}>
            Tailored solutions for diverse industry needs
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {industries.map((industry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                  image={industry.image}
                  alt={industry.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <industry.icon className="h-6 w-6 text-blue-600 mr-2" />
                    <Typography variant="h6" component="h3">
                      {industry.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {industry.description}
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