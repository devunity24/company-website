import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import {
  Globe,
  Smartphone,
  Code2,
  Cloud,
  Settings,
  Palette,
  Brain,
  Server,
} from "lucide-react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const services = [
  {
    title: "Website Development",
    description:
      "Devunity delivers custom website development solutions that are fast, responsive, and tailored to your business needs. Let us help you create a powerful online presence that drives success!",
    icon: Globe,
    image: "/company-website/images/services/website-development-new.jpg",
  },
  {
    title: "Web App Development",
    description:
      "Devunity specializes in cutting-edge web app development, creating seamless, scalable, and secure solutions that empower your business to thrive in the digital world. Let's build your next big idea!",
    icon: Code2,
    image: "/company-website/images/services/web-app.avif",
  },
  {
    title: "Mobile App Development",
    description:
      "Devunity offers expert mobile app development, crafting intuitive, high-performance apps for iOS and Android. Let's turn your vision into a powerful, user-friendly mobile experience!",
    icon: Smartphone,
    image: "/company-website/images/services/mobile-app.avif",
  },
  {
    title: "Cloud Services",
    description:
      "provides reliable cloud services, offering scalable solutions for storage, computing, and security. Enhance your business with seamless, flexible cloud infrastructure tailored to your needs!",
    icon: Cloud,
    image: "/company-website/images/services/cloud-service.avif",
  },
  {
    title: "DevOps",
    description:
      "offers expert DevOps services, streamlining your development and operations for faster, more efficient deployments. Optimize workflows, improve collaboration, and scale your business seamlessly!",
    icon: Settings,
    image: "/company-website/images/services/dev-ops.avif",
  },
  {
    title: "UI/UX Design",
    description:
      "creates stunning UI/UX designs that deliver seamless, engaging user experiences. We craft intuitive interfaces that captivate users and elevate your brand to new heights!",
    icon: Palette,
    image: "/company-website/images/services/ui-ux.avif",
  },
  {
    title: "AI & Machine Learning",
    description:
      "harnesses the power of AI & Machine Learning to drive innovation. We create smart, data-driven solutions that optimize processes, enhance decision-making, and boost your business performance!",
    icon: Brain,
    image: "/company-website/images/services/ai-ml.avif",
  },
  {
    title: "Customized Software Development",
    description:
      "specializes in custom software development, delivering tailored solutions that perfectly align with your business needs. We create scalable, efficient, and innovative software to drive your success!",
    icon: Code2,
    image: "/company-website/images/services/customized-development.avif",
  },
  {
    title: "IT Infrastructure",
    description:
      "offers robust IT infrastructure solutions, providing scalable, secure, and efficient systems that support your business growth. Trust us to optimize and manage your technology for peak performance!",
    icon: Server,
    image: "/company-website/images/services/it-infastructure.avif",
  },
];

export default function Services() {
  return (
    <Box
      id="services"
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
            Our Services
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "md", mx: "auto" }}
          >
            Comprehensive software solutions tailored to your business needs
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                  src={service.image}
                  effect="blur"
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <service.icon className="h-6 w-6 text-blue-600 mr-2" />
                    <Typography variant="h6" component="h3">
                      {service.title}
                    </Typography>
                  </Box>
                  <p className="text-gray-600">
                    <strong>Devunity</strong>&nbsp;
                    {service.description}
                  </p>
                  {/* <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
