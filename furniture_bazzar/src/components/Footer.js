import { Box, Typography, Grid, IconButton } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../images/logo.png";

function Footer() {
  return (
    <Box
      sx={{
        background: "#0f172a",
        color: "#fff",
        pt: 6,
        pb: 2,
        mt: 8,
      }}
    >
      <Grid container spacing={5} px={{ xs: 3, md: 8 }}>
        {/* LOGO */}
        <Grid item xs={12} md={4} size={3}>
          <Box
            sx={{
              width: 180,
            }}
          >
            <img src={logo} alt="logo" style={{ width: "100%" }} />
          </Box>
        </Grid>

        {/* QUICK LINKS */}
        <Grid item xs={12} md={4} size={3}>
          <Typography
            sx={{
              color: "#d4a373",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Quick Links
          </Typography>

          <Typography mb={1}>Home</Typography>
          <Typography mb={1}>About Us</Typography>
          <Typography mb={1}>Contact Us</Typography>
          <Typography mb={1}>Investors</Typography>
          <Typography mb={1}>Brochure</Typography>
        </Grid>

        {/* USEFUL LINKS */}
        <Grid item xs={12} md={4} size={3}>
          <Typography
            sx={{
              color: "#d4a373",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Useful Links
          </Typography>

          <Typography mb={1}>Our Products</Typography>
          <Typography mb={1}>Privacy Policy</Typography>
          <Typography mb={1}>Terms & Condition</Typography>
          <Typography mb={1}>Return & Refund</Typography>
          <Typography mb={1}>Cancellation Policy</Typography>
        </Grid>

        {/* CONTACT */}
        <Grid item xs={12} md={4} size={3}>
          <Typography
            sx={{
              color: "#d4a373",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Contact Details
          </Typography>

          <Typography mb={1}>Email: asthajethava@gmail.com</Typography>

          <Typography mb={2}>Phone: +91 93282 19976</Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              sx={{
                background: "#fff",
                color: "#000",
              }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              sx={{
                background: "#fff",
                color: "#000",
              }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              sx={{
                background: "#fff",
                color: "#000",
              }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* bottom line */}

      <Box
        sx={{
          borderTop: "1px solid #3f3f46",
          mt: 5,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          Copyright 2026 © web design by Astha |  All rights
          Reserved to Furniture Bazzar
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
