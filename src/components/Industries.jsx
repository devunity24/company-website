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
      "Delivering secure, compliant, and user-friendly fintech solutions. Whether it's digital banking, risk management, or investment tools, we provide technologies that foster trust and growth in the financial sector.",
    icon: LandmarkIcon,
    image: "/company-website/images/industry/finance-banking.avif",
  },
  {
    title: "Healthcare",
    description:
      "Enhancing patient care and operational efficiency with secure, compliant, and robust healthcare solutions. From patient management systems to telemedicine platforms, we bridge the gap between care providers and patients.",
    icon: CircleUserRound,
    image: "/company-website/images/industry/health-care.avif",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Empowering retail and e-commerce businesses with dynamic platforms. We create intuitive customer experiences, improve supply chain efficiency, and enable data-driven decision-making.",
    icon: Store,
    image: "/company-website/images/industry/retail-industry.avif",
  },
  {
    title: "Manufacturing",
    description:
      "Driving operational excellence and automation in manufacturing. Our solutions support smart factories, inventory management, and production planning, ensuring streamlined operations and reduced costs.",
    icon: Building,
    image: "/company-website/images/industry/manufacturing.jpg",
  },
  {
    title: "Travel & Hospitality",
    description:
      "Transforming the travel experience with technology that delights customers. We develop systems for booking, customer engagement, and operational optimization to help businesses provide memorable journeys.",
    icon: PlaneTakeoff,
    image: "/company-website/images/industry/travel-hospitality.avif",
  },
  {
    title: "Professional Services",
    description:
      "We streamline workflows and enhance productivity for professional services firms. From project management to client engagement, our solutions ensure efficiency, scalability, and seamless collaboration.",
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
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
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
