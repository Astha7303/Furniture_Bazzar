import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductDetailsModal({ open, handleClose, product }) {
  const navigate = useNavigate();
  if (!product) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Grid container spacing={3}>
          {/* LEFT IMAGE SECTION */}

          <Grid item xs={12} md={6} size={6}>
            <Box>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  height: "400px",
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT DETAILS SECTION */}

          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="600">
              {product.name}
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {product.description}
            </Typography>

            {/* PRICE */}

            <Box mt={2}>
              {product.offerPrice ? (
                <>
                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      color: "gray",
                    }}
                  >
                    ₹{product.price}
                  </Typography>

                  <Typography variant="h5" fontWeight="600" color="green">
                    ₹{product.offerPrice}
                  </Typography>
                </>
              ) : (
                <Typography variant="h5" fontWeight="600">
                  ₹{product.price}
                </Typography>
              )}
            </Box>

            {/* COLORS */}

            {product.colorOptions && product.colors?.length > 0 && (
              <Box mt={2}>
                <Typography fontWeight="500">Available Colors</Typography>

                <Box display="flex" gap={1} mt={1}>
                  {product.colors.map((color, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 25,
                        height: 25,
                        backgroundColor: color.toLowerCase(),
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* PRODUCT DETAILS */}

            <Box mt={3}>
              <Typography fontWeight="600">Product Highlights</Typography>

              <Box mt={1}>
                {product.productHighlights && (
                  <>
                    <Typography variant="body2">
                      Warranty:{" "}
                      {product.productHighlights.warrantyInMonths || " - "}{" "}
                      Months
                    </Typography>

                    <Typography variant="body2">
                      Length: {product.productHighlights.length || " - "}
                    </Typography>

                    <Typography variant="body2">
                      Material types:{" "}
                      {product.productHighlights.materialTypes.join(", ") ||
                        "-"}
                    </Typography>

                    <Typography variant="body2">
                      Height: {product.productHighlights.height || "-"}
                    </Typography>

                    <Typography variant="body2">
                      Weight: {product.productHighlights.weight || "-"}
                    </Typography>
                  </>
                )}
              </Box>
            </Box>

            {/* BUTTONS */}

            <Box mt={4} display="flex" gap={2}>
              <Button variant="contained" size="large">
                Book Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() =>
                  navigate(`/${product.furnitureType.toLowerCase()}`)
                }
              >
                View More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsModal;
