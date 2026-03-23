import { useEffect, useState } from "react";
// import Section from "../components/Section";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductDetailsModal from "../Modals/ProductDetailsModal";
import DeleteConfirmModal from "../Modals/DeleteConfirmModal";

function Home() {
  const location = useLocation();
  // check query param
  const queryAdmin =
    new URLSearchParams(location.search).get("admin") === "true";

  // check login
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  // final condition
  const isAdminView = isAdmin && queryAdmin;

  const API_BASE = "http://localhost:5000"; // base api

  const [chairs, setChairs] = useState([]);
  const [bed, setBed] = useState([]);
  const [cupboards, setCupboards] = useState([]);
  const [sofa, setSofa] = useState([]);
  const [temples, setTemples] = useState([]);
  const [tables, setTables] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [deleteId, setDeleteId] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const getdata = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/furniture`);
      const data = res.data;
      console.log(data, "data");
      setChairs(data.Chairs || []);
      setBed(data.Beds || []);
      setCupboards(data.CupBoards || []);
      setSofa(data.Sofas || []);
      setTemples(data.Temples || []);
      setTables(data.Tables || []);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const confirmDelete = async () => {
    try {
      await axios.delete(`${API_BASE}/api/product/${deleteId}`);

      setChairs((prev) => prev.filter((item) => item.id !== deleteId));

      setOpenDeleteModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (item) => {
    navigate(`/admin/dashboard?id=${item.id}`);
  };

  return (
    <>
      <section className="web-section">
        <div className="section-header">
          <h2>Chairs</h2>

          <Button
            size="small"
            variant="outlined"
            onClick={() => navigate("/chairs")}
          >
            View more
          </Button>
        </div>

        <div className="card-sections">
          {chairs.map((item) => (
            <Card
              onClick={() => {
                setSelectedProduct(item);
                setOpenModal(true);
              }}
              key={item.id}
              sx={{
                width: 260,
                cursor: "pointer",
                borderRadius: 3,
                position: "relative",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              {/* edit delete icons */}
              {isAdminView && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    display: "flex",
                    gap: 1,
                    background: "white",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      handleEdit(item);
                      e.stopPropagation();
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteId(item.id);
                      setOpenDeleteModal(true);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}

              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography fontWeight={600}>{item.name}</Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item.description}
                </Typography>

                {/* price section */}
                <Box display="flex" gap={1} alignItems="center">
                  {item.offerPrice ? (
                    <>
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          color: "gray",
                          fontSize: 14,
                        }}
                      >
                        ₹{item.price}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "green",
                        }}
                      >
                        ₹{item.offerPrice}
                      </Typography>
                    </>
                  ) : (
                    <Typography fontWeight={600}>₹{item.price}</Typography>
                  )}
                </Box>
                {/* colors */}
                {item.colorOptions && item.colors?.length > 0 && (
                  <Box mt={1}>
                    <Typography variant="caption" sx={{ color: "gray" }}>
                      Colors Available
                    </Typography>

                    <Box display="flex" gap={1} mt={0.5}>
                      {item.colors.map((color, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 18,
                            height: 18,
                            backgroundColor: color.toLowerCase(),
                            borderRadius: "3px",
                            border: "1px solid #ccc",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="web-section">
        <div className="section-header">
          <h2>Sofas</h2>

          <Button
            size="small"
            variant="outlined"
            onClick={() => navigate("/sofas")}
          >
            View more
          </Button>
        </div>

        <div className="card-sections">
          {sofa.map((item) => (
            <Card
              onClick={() => {
                setSelectedProduct(item);
                setOpenModal(true);
              }}
              key={item.id}
              sx={{
                width: 260,
                cursor: "pointer",
                borderRadius: 3,
                position: "relative",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              {/* edit delete icons */}
              {isAdminView && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    display: "flex",
                    gap: 1,
                    background: "white",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      handleEdit(item);
                      e.stopPropagation();
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteId(item.id);
                      setOpenDeleteModal(true);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}

              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography fontWeight={600}>{item.name}</Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item.description}
                </Typography>

                {/* price section */}
                <Box display="flex" gap={1} alignItems="center">
                  {item.offerPrice ? (
                    <>
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          color: "gray",
                          fontSize: 14,
                        }}
                      >
                        ₹{item.price}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "green",
                        }}
                      >
                        ₹{item.offerPrice}
                      </Typography>
                    </>
                  ) : (
                    <Typography fontWeight={600}>₹{item.price}</Typography>
                  )}
                </Box>
                {/* colors */}
                {item.colorOptions && item.colors?.length > 0 && (
                  <Box mt={1}>
                    <Typography variant="caption" sx={{ color: "gray" }}>
                      Colors Available
                    </Typography>

                    <Box display="flex" gap={1} mt={0.5}>
                      {item.colors.map((color, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 18,
                            height: 18,
                            backgroundColor: color.toLowerCase(),
                            borderRadius: "3px",
                            border: "1px solid #ccc",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="web-section">
        <div className="section-header">
          <h2>CupBoards</h2>

          <Button
            size="small"
            variant="outlined"
            onClick={() => navigate("/cupboards")}
          >
            View more
          </Button>
        </div>

        <div className="card-sections">
          {cupboards.map((item) => (
            <Card
              onClick={() => {
                setSelectedProduct(item);
                setOpenModal(true);
              }}
              key={item.id}
              sx={{
                width: 260,
                cursor: "pointer",
                borderRadius: 3,
                position: "relative",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              {/* edit delete icons */}
              {isAdminView && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    display: "flex",
                    gap: 1,
                    background: "white",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      handleEdit(item);
                      e.stopPropagation();
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteId(item.id);
                      setOpenDeleteModal(true);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}

              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography fontWeight={600}>{item.name}</Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item.description}
                </Typography>

                {/* price section */}
                <Box display="flex" gap={1} alignItems="center">
                  {item.offerPrice ? (
                    <>
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          color: "gray",
                          fontSize: 14,
                        }}
                      >
                        ₹{item.price}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "green",
                        }}
                      >
                        ₹{item.offerPrice}
                      </Typography>
                    </>
                  ) : (
                    <Typography fontWeight={600}>₹{item.price}</Typography>
                  )}
                </Box>
                {/* colors */}
                {item.colorOptions && item.colors?.length > 0 && (
                  <Box mt={1}>
                    <Typography variant="caption" sx={{ color: "gray" }}>
                      Colors Available
                    </Typography>

                    <Box display="flex" gap={1} mt={0.5}>
                      {item.colors.map((color, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 18,
                            height: 18,
                            backgroundColor: color.toLowerCase(),
                            borderRadius: "3px",
                            border: "1px solid #ccc",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="web-section">
        <div className="section-header">
          <h2>Beds</h2>

          <Button
            size="small"
            variant="outlined"
            onClick={() => navigate("/beds")}
          >
            View more
          </Button>
        </div>

        <div className="card-sections">
          {bed.map((item) => (
            <Card
              onClick={() => {
                setSelectedProduct(item);
                setOpenModal(true);
              }}
              key={item.id}
              sx={{
                width: 260,
                cursor: "pointer",
                borderRadius: 3,
                position: "relative",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              {/* edit delete icons */}
              {isAdminView && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    display: "flex",
                    gap: 1,
                    background: "white",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      handleEdit(item);
                      e.stopPropagation();
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteId(item.id);
                      setOpenDeleteModal(true);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}

              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography fontWeight={600}>{item.name}</Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item.description}
                </Typography>

                {/* price section */}
                <Box display="flex" gap={1} alignItems="center">
                  {item.offerPrice ? (
                    <>
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          color: "gray",
                          fontSize: 14,
                        }}
                      >
                        ₹{item.price}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "green",
                        }}
                      >
                        ₹{item.offerPrice}
                      </Typography>
                    </>
                  ) : (
                    <Typography fontWeight={600}>₹{item.price}</Typography>
                  )}
                </Box>
                {/* colors */}
                {item.colorOptions && item.colors?.length > 0 && (
                  <Box mt={1}>
                    <Typography variant="caption" sx={{ color: "gray" }}>
                      Colors Available
                    </Typography>

                    <Box display="flex" gap={1} mt={0.5}>
                      {item.colors.map((color, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 18,
                            height: 18,
                            backgroundColor: color.toLowerCase(),
                            borderRadius: "3px",
                            border: "1px solid #ccc",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="web-section">
        <div className="section-header">
          <h2>Temples</h2>

          <Button
            size="small"
            variant="outlined"
            onClick={() => navigate("/temples")}
          >
            View more
          </Button>
        </div>

        <div className="card-sections">
          {temples.map((item) => (
            <Card
              onClick={() => {
                setSelectedProduct(item);
                setOpenModal(true);
              }}
              key={item.id}
              sx={{
                width: 260,
                cursor: "pointer",
                borderRadius: 3,
                position: "relative",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              {/* edit delete icons */}
              {isAdminView && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    display: "flex",
                    gap: 1,
                    background: "white",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      handleEdit(item);
                      e.stopPropagation();
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteId(item.id);
                      setOpenDeleteModal(true);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}

              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography fontWeight={600}>{item.name}</Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item.description}
                </Typography>

                {/* price section */}
                <Box display="flex" gap={1} alignItems="center">
                  {item.offerPrice ? (
                    <>
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          color: "gray",
                          fontSize: 14,
                        }}
                      >
                        ₹{item.price}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "green",
                        }}
                      >
                        ₹{item.offerPrice}
                      </Typography>
                    </>
                  ) : (
                    <Typography fontWeight={600}>₹{item.price}</Typography>
                  )}
                </Box>
                {/* colors */}
                {item.colorOptions && item.colors?.length > 0 && (
                  <Box mt={1}>
                    <Typography variant="caption" sx={{ color: "gray" }}>
                      Colors Available
                    </Typography>

                    <Box display="flex" gap={1} mt={0.5}>
                      {item.colors.map((color, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 18,
                            height: 18,
                            backgroundColor: color.toLowerCase(),
                            borderRadius: "3px",
                            border: "1px solid #ccc",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="web-section">
        <div className="section-header">
          <h2>Tables</h2>

          <Button
            size="small"
            variant="outlined"
            onClick={() => navigate("/tables")}
          >
            View more
          </Button>
        </div>

        <div className="card-sections">
          {tables.map((item) => (
            <Card
              onClick={() => {
                setSelectedProduct(item);
                setOpenModal(true);
              }}
              key={item.id}
              sx={{
                width: 260,
                cursor: "pointer",
                borderRadius: 3,
                position: "relative",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              {/* edit delete icons */}
              {isAdminView && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    display: "flex",
                    gap: 1,
                    background: "white",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      handleEdit(item);
                      e.stopPropagation();
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteId(item.id);
                      setOpenDeleteModal(true);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}

              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography fontWeight={600}>{item.name}</Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item.description}
                </Typography>

                {/* price section */}
                <Box display="flex" gap={1} alignItems="center">
                  {item.offerPrice ? (
                    <>
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          color: "gray",
                          fontSize: 14,
                        }}
                      >
                        ₹{item.price}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "green",
                        }}
                      >
                        ₹{item.offerPrice}
                      </Typography>
                    </>
                  ) : (
                    <Typography fontWeight={600}>₹{item.price}</Typography>
                  )}
                </Box>
                {/* colors */}
                {item.colorOptions && item.colors?.length > 0 && (
                  <Box mt={1}>
                    <Typography variant="caption" sx={{ color: "gray" }}>
                      Colors Available
                    </Typography>

                    <Box display="flex" gap={1} mt={0.5}>
                      {item.colors.map((color, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 18,
                            height: 18,
                            backgroundColor: color.toLowerCase(),
                            borderRadius: "3px",
                            border: "1px solid #ccc",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <DeleteConfirmModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      {/* Product Popup  */}
      <ProductDetailsModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        product={selectedProduct}
      />
    </>
  );
}

export default Home;
