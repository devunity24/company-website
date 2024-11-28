import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <Box
      id="welcome"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(17, 24, 39, 0.9))',
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 3,
            }}
          >
            Crafting innovative solutions, together
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'grey.100',
              mb: 4,
            }}
          >
            We transform ideas into powerful digital solutions that drive business growth and innovation.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
              sx={{ 
                '&:hover .MuiSvgIcon-root': {
                  transform: 'translateX(4px)',
                },
              }}
            >
              Discover More
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ 
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Our Solutions
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}