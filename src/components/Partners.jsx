import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const partners = [
  {
    name: "TechCorp International",
    description: "Global technology solutions provider",
    image: "/company-website/images/partner/tech-corp.avif",
  },
  {
    name: "InnovateSoft",
    description: "Innovation-driven software development",
    image: "/company-website/images/partner/innovate-soft.avif",
  },
  {
    name: "CloudTech Solutions",
    description: "Cloud infrastructure specialists",
    image: "/company-website/images/partner/cloud-tech.avif",
  },
  {
    name: "DataSense Analytics",
    description: "Advanced analytics and AI solutions",
    image: "/company-website/images/services/web-app.avif",
  },
];

export default function Partners() {
  return (
    <Box
      id="partners"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "grey.50",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Our Partners
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "md", mx: "auto" }}
          >
            Collaborating with industry leaders to deliver excellence
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <LazyLoadImage
                  height="160"
                  src={partner.image}
                  alt={partner.name}
                  effect="blur"
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
