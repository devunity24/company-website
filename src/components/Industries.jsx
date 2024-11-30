import React, { useContext } from "react";
import BreakpointContext from "../context/breakPointContext";
import {
  Container,
  Typography,
  Grid2,
  Card,
  CardContent,
  Box,
  CardMedia,
} from "@mui/material";
import {
  Building,
  Briefcase,
  CircleUserRound,
  Store,
  LandmarkIcon,
  PlaneTakeoff,
} from "lucide-react";

const industries = [
  {
    title: "Finance & Banking",
    description:
      "Devunity offers tailored solutions for the Finance & Banking industry, enhancing operational efficiency, security, and customer experience. By leveraging advanced technologies like AI, blockchain, and data analytics, Devunity supports seamless transactions, fraud detection, risk management, and compliance with regulations. Their innovative software solutions streamline processes, improve decision-making, and enable personalized services, driving growth and competitiveness in the evolving financial landscape.",
    icon: LandmarkIcon,
    image: "/company-website/images/industry/finance-banking.avif",
  },
  {
    title: "Healthcare",
    description:
      "Devunity delivers innovative solutions for the Healthcare industry, focusing on improving patient care, operational efficiency, and data security. Their expertise in AI, IoT, and data analytics enables real-time health monitoring, predictive diagnostics, and personalized treatments. By streamlining administrative tasks and ensuring regulatory compliance, Devunity enhances workflow automation, reduces costs, and supports better clinical outcomes, helping healthcare providers deliver superior services in a rapidly evolving landscape.",
    icon: CircleUserRound,
    image: "/company-website/images/industry/health-care.avif",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Devunity offers cutting-edge solutions for the Retail & E-commerce industry, optimizing customer experiences and driving operational efficiency. By leveraging AI, big data, and automation, they help businesses personalize recommendations, improve inventory management, and streamline supply chains. Their solutions enable seamless omnichannel strategies, secure payment processing, and real-time analytics, enhancing customer engagement and boosting sales while ensuring scalability and competitiveness in a dynamic market.",
    icon: Store,
    image: "/company-website/images/industry/retail-industry.avif",
  },
  {
    title: "Manufacturing",
    description:
      "Devunity provides advanced solutions for the Manufacturing industry, focusing on optimizing production processes and improving operational efficiency. By integrating IoT, AI, and data analytics, they enable real-time monitoring, predictive maintenance, and smart automation, reducing downtime and enhancing productivity. Their solutions also help with supply chain management, quality control, and inventory optimization, empowering manufacturers to streamline operations, reduce costs, and stay competitive in a rapidly evolving market.",
    icon: Building,
    image: "/company-website/images/industry/manufacturing.jpg",
  },
  {
    title: "Travel & Hospitality",
    description:
      "Devunity offers tailored solutions for the Travel & Hospitality industry, enhancing customer experiences and operational efficiency. By leveraging AI, data analytics, and automation, they help businesses personalize services, optimize booking systems, and streamline operations. Their solutions enable seamless customer interactions, dynamic pricing, and improved resource management. Devunity also enhances data security, supports real-time analytics, and drives growth by delivering innovative, scalable solutions for the evolving travel sector.",
    icon: PlaneTakeoff,
    image: "/company-website/images/industry/travel-hospitality.avif",
  },
  {
    title: "Professional Services",
    description:
      "Devunity offers comprehensive solutions for the Professional Services industry, helping firms streamline operations, enhance client interactions, and drive business growth. Their expertise in AI, automation, and data analytics enables improved project management, resource allocation, and decision-making. Devunity’s solutions facilitate seamless collaboration, optimize billing systems, and ensure compliance with industry regulations. By delivering tailored, scalable technologies, they empower professional service firms to enhance efficiency and provide exceptional client experiences.",
    icon: Briefcase,
    image: "/company-website/images/industry/proffesional-service.avif",
  },
];
function CardMediaContent({ image, title }) {
  return (
    <CardMedia
      sx={{ padding: "16px" }}
      component="img"
      height="160"
      width="160"
      image={image}
      alt={title}
    />
  );
}
function CardSummary({ icon, title, description }) {
  const Icon = icon;
  return (
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Icon className="h-6 w-6 text-blue-600 mr-2" />
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      </Box>
      <p className="text-gray-600">{description}</p>
      {/* <Typography variant="body2" color="text.secondary">
        {description}
      </Typography> */}
    </CardContent>
  );
}
export default function Industries() {
  const isSmallScreen = Boolean(useContext(BreakpointContext) === "sm");
  const getLeftContent = (industry, index) => {
    if (isSmallScreen) {
      return <CardMediaContent image={industry.image} title={industry.title} />;
    } else
      return index % 2 === 0 ? (
        <CardMediaContent image={industry.image} title={industry.title} />
      ) : (
        <CardSummary
          icon={industry.icon}
          title={industry.title}
          description={industry.description}
        />
      );
  };
  const getRightContent = (industry, index) => {
    if (isSmallScreen) {
      return (
        <CardSummary
          icon={industry.icon}
          title={industry.title}
          description={industry.description}
        />
      );
    } else
      return index % 2 === 0 ? (
        <CardSummary
          icon={industry.icon}
          title={industry.title}
          description={industry.description}
        />
      ) : (
        <CardMediaContent image={industry.image} title={industry.title} />
      );
  };
  return (
    <Box
      id="industries"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Industries We Serve
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: "md", mx: "auto" }}
          >
            Tailored solutions for diverse industry needs
          </Typography>
        </Box>

        {industries.map((industry, index) => (
          <Card
            key={index}
            elevation={0}
            className="my-3 hover:shadow-md"
            sx={{
              height: "100%",
              display: "flex",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <Grid2 container className="w-full" sx={{ display: "flex" }}>
              {/* // left content block */}
              <Grid2
                size={{
                  xs: 12,
                  sm: index % 2 === 0 ? 4 : 8,
                  md: index % 2 === 0 ? 4 : 8,
                  lg: index % 2 === 0 ? 4 : 8,
                  xl: index % 2 === 0 ? 4 : 8,
                }}
              >
                {getLeftContent(industry, index)}
              </Grid2>
              <Grid2
                size={{
                  xs: 12,
                  sm: index % 2 === 0 ? 8 : 4,
                  md: index % 2 === 0 ? 8 : 4,
                  lg: index % 2 === 0 ? 8 : 4,
                  xl: index % 2 === 0 ? 8 : 4,
                }}
              >
                {/* // Right content block */}
                {getRightContent(industry, index)}
              </Grid2>
            </Grid2>
          </Card>
        ))}
      </Container>
    </Box>
  );
}
