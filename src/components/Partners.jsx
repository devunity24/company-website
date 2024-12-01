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
    name: "Pinger Man",
    description: "Global technology solutions provider",
    image: "/company-website/images/partner/pinger_man.jpg",
    url: "https://pingerman.com/"
  },
  {
    name: "Maxotek",
    description: "Innovation-driven software development",
    image: "/company-website/images/partner/maxotek.jpg",
    url: "https://maxotek.com/"
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

        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                onClick={() => window.open(partner.url, "_blank")}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                  cursor: "pointer",
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
