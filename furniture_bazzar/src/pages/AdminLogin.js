import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdmin", "true");

      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        padding:'20px 0',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: 380,
          p: 4,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            background: "#0f172a",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
          }}
        >
          <LockOutlinedIcon sx={{ color: "#fff" }} />
        </Box>

        <Typography variant="h5" fontWeight="600" mb={3}>
          Admin Login
        </Typography>

        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />

        {error && (
          <Typography color="error" fontSize={14} mt={1}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            py: 1.2,
            background: "#0f172a",
            fontWeight: 600,

            "&:hover": {
              background: "#1e293b",
            },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography fontSize={12} color="gray" mt={3}>
          Admin access only
        </Typography>
      </Paper>
    </Box>
  );
}

export default AdminLogin;
