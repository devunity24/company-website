import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Container,
  useScrollTrigger,
} from '@mui/material';
import { Menu, X, Code2 } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Industries', href: '#industries' },
  { name: 'Partners', href: '#partners' },
];

function ElevationScroll(props: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ElevationScroll>
      <AppBar position="fixed" color="inherit" sx={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Code2 className="h-8 w-8 text-blue-600 mr-2" />
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                Devunity
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  href={item.href}
                  color="inherit"
                  sx={{ '&:hover': { color: 'primary.main' } }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                href="#contact"
              >
                Contact Us
              </Button>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              sx={{ display: { md: 'none' } }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </IconButton>
          </Toolbar>
        </Container>

        {/* Mobile Navigation Drawer */}
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          sx={{ display: { md: 'none' } }}
        >
          <List sx={{ width: 250 }}>
            {navigation.map((item) => (
              <ListItem key={item.name} onClick={() => setIsOpen(false)}>
                <Button
                  href={item.href}
                  color="inherit"
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  {item.name}
                </Button>
              </ListItem>
            ))}
            <ListItem>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                href="#contact"
              >
                Contact Us
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </ElevationScroll>
  );
}