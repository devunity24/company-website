import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { Code2, Laptop, Globe, Shield, Cpu, Users } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Tailored software solutions built with cutting-edge technologies to meet your specific needs.'
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Responsive and scalable web applications that deliver exceptional user experiences.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security measures to protect your digital assets and maintain data integrity.'
  },
  {
    icon: Laptop,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services optimized for performance and reliability.'
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Smart AI solutions that automate processes and drive business intelligence.'
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Expert developers and specialists to strengthen your existing team.'
  }
];

export default function Expertise() {
  return (
    <Box
      id="expertise"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'grey.50',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Our Expertise
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto' }}>
            Leveraging cutting-edge technologies to deliver exceptional solutions that drive your business forward.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 2,
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <service.icon size={40} className="text-blue-600" />
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary">
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}