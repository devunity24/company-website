import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  CardMedia,
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

const services = [
  {
    title: "Website Development",
    description:
      "Devunity delivers custom website development solutions that are fast, responsive, and tailored to your business needs. Let us help you create a powerful online presence that drives success!",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    title: "Web App Development",
    description:
      "Devunity specializes in cutting-edge web app development, creating seamless, scalable, and secure solutions that empower your business to thrive in the digital world. Let's build your next big idea!",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
  },
  {
    title: "Mobile App Development",
    description:
      "Devunity offers expert mobile app development, crafting intuitive, high-performance apps for iOS and Android. Let's turn your vision into a powerful, user-friendly mobile experience!",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
  },
  {
    title: "Cloud Services",
    description:
      "Devunity provides reliable cloud services, offering scalable solutions for storage, computing, and security. Enhance your business with seamless, flexible cloud infrastructure tailored to your needs!",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  },
  {
    title: "DevOps",
    description:
      "Devunity offers expert DevOps services, streamlining your development and operations for faster, more efficient deployments. Optimize workflows, improve collaboration, and scale your business seamlessly!",
    icon: Settings,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
  },
  {
    title: "UI/UX Design",
    description:
      "Devunity creates stunning UI/UX designs that deliver seamless, engaging user experiences. We craft intuitive interfaces that captivate users and elevate your brand to new heights!",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Devunity harnesses the power of AI & Machine Learning to drive innovation. We create smart, data-driven solutions that optimize processes, enhance decision-making, and boost your business performance!",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
  },
  {
    title: "Customized Software Development",
    description:
      "Devunity specializes in custom software development, delivering tailored solutions that perfectly align with your business needs. We create scalable, efficient, and innovative software to drive your success!",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    title: "IT Infrastructure",
    description:
      "Devunity offers robust IT infrastructure solutions, providing scalable, secure, and efficient systems that support your business growth. Trust us to optimize and manage your technology for peak performance!",
    icon: Server,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
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
                <CardMedia
                  component="img"
                  height="160"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <service.icon className="h-6 w-6 text-blue-600 mr-2" />
                    <Typography variant="h6" component="h3">
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
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