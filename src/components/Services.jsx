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
      "Boost your online presence with our expert website development services. We design custom, responsive, and visually appealing websites tailored to your business needs. From e-commerce to corporate sites, we ensure your website is user-friendly, SEO-optimized, and mobile-responsive for maximum impact.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    title: "Web App Development",
    description:
      "Boost your business with our expert web app development services. We create custom, scalable, and secure web applications tailored to your needs. From e-commerce platforms like online stores to collaborative tools like project management apps, we deliver seamless user experiences and robust functionality. Whether it's a booking system, social networking site, or real-time analytics dashboard, we ensure your app is responsive, fast, and optimized for growth. Let us turn your ideas into impactful solutions.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
  },
  {
    title: "Mobile App Development",
    description:
      "Transform your business with our mobile app development services. We create custom, user-friendly, and high-performance mobile apps for both iOS and Android. Whether it's a ride-sharing app, fitness tracker, or e-commerce solution, we deliver seamless experiences that drive engagement. Our apps are designed to be fast, secure, and scalable, ensuring your brand stays connected to your audience anytime, anywhere. Let us bring your mobile vision to life with cutting-edge technology and innovation.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
  },
  {
    title: "Cloud Services",
    description:
      "Unlock the power of the cloud with our comprehensive cloud solutions. We offer secure, scalable, and cost-effective services to help your business optimize performance and enhance collaboration. Whether it's cloud storage, data backup, or cloud-based software, we design solutions tailored to your needs. Our cloud services ensure seamless integration, improved accessibility, and better resource management. Let us help you streamline operations, scale effortlessly, and stay ahead in today's fast-paced digital world.",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  },
  {
    title: "DevOps",
    description:
      "Accelerate your development cycle with our DevOps services. We integrate development and operations to enhance collaboration, automation, and efficiency. Our DevOps solutions streamline deployment, improve software quality, and enable faster delivery of updates. From continuous integration to automated testing and monitoring, we ensure your processes are optimized for speed, reliability, and scalability. Let us help you build, deploy, and manage applications seamlessly, empowering your team to innovate and respond faster to market needs.",
    icon: Settings,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
  },
  {
    title: "UI/UX Design",
    description:
      "Transform your digital experience with our expert UI/UX design services! We create intuitive, visually stunning interfaces that captivate users and drive engagement. From sleek mobile apps to dynamic websites, we design with your goals in mind. Let us bring your vision to life with user-centered designs!",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Unlock the power of AI & Machine Learning with our cutting-edge solutions! We build intelligent systems that automate tasks, optimize processes, and predict trends. Whether it's predictive analytics, natural language processing, or personalized recommendations, we help your business stay ahead of the curve!",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
  },
  {
    title: "IT Infrastructure",
    description:
      "Strengthen your business with robust IT infrastructure solutions! We provide scalable, secure, and efficient systems that ensure seamless connectivity, data management, and operational efficiency. From cloud services to network setup and cybersecurity, we build the foundation for your digital success!",
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
