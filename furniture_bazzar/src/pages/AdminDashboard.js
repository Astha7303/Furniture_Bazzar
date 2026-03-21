import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Button,
  Grid,
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const API_BASE = "http://localhost:5000";

  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    price: "",
    offer: "no",
    offerPrice: "",
    colorOption: "no",
    colors: [],
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const colorsList = ["Red", "Blue", "Black", "White"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleColorChange = (color) => {
    let updated = [...formData.colors];
    updated.includes(color)
      ? (updated = updated.filter((c) => c !== color))
      : updated.push(color);

    setFormData({ ...formData, colors: updated });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "colors") {
        data.append("colors", JSON.stringify(formData.colors));
      } else {
        data.append(key, formData[key]);
      }
    });

    if (id) {
      await axios.put(`http://localhost:5000/api/product/${id}`, data);
    } else {
      await axios.post(`http://localhost:5000/api/add-product`, data);
    }

    navigate("/?admin=true");
  };

  const navigate = useNavigate();

  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    const res = await axios.get(`${API_BASE}/api/product/${id}`);
    const data = res.data;

    setFormData({
      category: data.category,
      name: data.name,
      description: data.description,
      price: data.price,
      offer: data.offerPrice ? "yes" : "no",
      offerPrice: data.offerPrice || "",
      colorOption: data.colorOptions ? "yes" : "no",
      colors: data.colors || [],
      image: null,
    });

    // show existing image
    setPreview(data.image);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {!id && (
        <Button
          variant="outlined"
          sx={{ mb: 2 }}
          onClick={() => navigate("/?admin=true")}
        >
          Edit Items
        </Button>
      )}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" mb={3} fontWeight="600">
          {id ? "Edit Product" : "Add Product"}
        </Typography>

        <Grid container spacing={2}>
          {/* ROW 1 */}

          <Grid item xs={12} sm={6} size={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                onChange={handleChange}
                value={formData.category}
              >
                <MenuItem value="Chairs">Chairs</MenuItem>
                <MenuItem value="Sofas">Sofas</MenuItem>
                <MenuItem value="Beds">Beds</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} size={6}>
            <TextField
              fullWidth
              label="Product Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </Grid>

          {/* ROW 2 */}
          <Grid item xs={12} sm={6} size={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              onChange={handleChange}
              value={formData.price}
            />
          </Grid>

          <Grid item xs={12} sm={6} size={6}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
          </Grid>

          {/* ROW 3 */}
          <Grid item xs={12} sm={6} size={6}>
            <FormControl fullWidth>
              <InputLabel>Offer</InputLabel>
              <Select name="offer" onChange={handleChange}>
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {formData.offer === "yes" && (
            <Grid item xs={12} sm={6} size={6}>
              <TextField
                fullWidth
                label="Offer Price"
                name="offerPrice"
                onChange={handleChange}
                value={formData.offerPrice}
              />
              {/* ) : (
              <Box height="56px" /> // keeps alignment
            )} */}
            </Grid>
          )}

          {/* ROW 4 */}
          <Grid item xs={12} sm={6} size={6}>
            <FormControl fullWidth>
              <InputLabel>Color Option</InputLabel>
              <Select
                name="colorOption"
                onChange={handleChange}
                value={formData.colorOption}
              >
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {formData.colorOption === "yes" && (
            <Grid item xs={12} sm={6} size={6}>
              <Box display="flex" gap={1} flexWrap="wrap">
                {colorsList.map((color) => (
                  <FormControlLabel
                    key={color}
                    control={
                      <Checkbox
                        onChange={() => handleColorChange(color)}
                        checked={formData.colors.includes(color)}
                      />
                    }
                    label={color}
                  />
                ))}
              </Box>
              {/* ) : (
              <Box height="56px" /> */}
            </Grid>
          )}

          {/* ROW 5 */}
          <Grid item xs={12} sm={6} size={6}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ height: "56px" }}
            >
              Upload Image
              <input type="file" hidden onChange={handleImageUpload} />
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} size={12}>
            {preview ? (
              <img
                src={preview}
                alt="preview"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Box height="56px" />
            )}
          </Grid>

          {/* SUBMIT */}
          <Grid item xs={12} size={12}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleSubmit}
              sx={{ height: "50px", fontWeight: "600" }}
            >
              {id ? "Update Product" : "Add Product"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default AdminDashboard;
