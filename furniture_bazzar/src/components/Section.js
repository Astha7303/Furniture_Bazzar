import { Box, Typography, Button } from "@mui/material";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function Section({ title, data, route }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
        {data.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={() => navigate(route)}
      >
        View More
      </Button>
    </Box>
  );
}

export default Section;
