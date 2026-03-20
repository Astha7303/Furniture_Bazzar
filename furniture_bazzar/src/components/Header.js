import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ background: "#1e293b" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          Furniture Bazzar
        </Typography>

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
