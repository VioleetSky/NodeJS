require("dotenv").config();
const express=require("express");
const cors=require("cors");
const connectDB=require("./config/db");
const productRouter=require("./routes/ProductRoutes");
const app=express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/products",productRouter);

const PORT=process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
})