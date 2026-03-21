import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoheader from '../images/logo-header.png';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ background: "#0f172a" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        {/* <Typography
          variant="h6"
          sx={{ cursor: "pointer", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          Furniture Bazzar
        </Typography> */}

        <Box
          sx={{
            width: 180,
            cursor:'pointer'
          }}
          onClick={() => navigate("/")}
        >
          <img src={logoheader} alt="logo" style={{ width: "100%" }} />
        </Box>

        {/* Menu */}
        <Box>
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
