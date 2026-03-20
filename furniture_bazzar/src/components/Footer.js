import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "#0f172a", color: "#fff", p: 3, mt: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
        <Button color="inherit" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate("/about")}>
          About Us
        </Button>
        <Button color="inherit" onClick={() => navigate("/contact")}>
          Contact Us
        </Button>
        <Button color="inherit" onClick={() => navigate("/book")}>
          Book Now
        </Button>
      </Box>

      <Typography align="center" variant="body2">
        made by Astha - all copyrights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
