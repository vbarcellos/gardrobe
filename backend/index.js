const express = require("express");
const cors = require("cors");
const path = require("path");
const productRoutes = require("./routes/products");

const app = express();
const PORT = 5000;

app.use(cors());
app.use("/img", express.static(path.join(__dirname, "img")));
app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
