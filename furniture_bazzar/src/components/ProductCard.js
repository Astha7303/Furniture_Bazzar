import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function ProductCard({ item }) {
  return (
    <Card sx={{ maxWidth: 250, borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
