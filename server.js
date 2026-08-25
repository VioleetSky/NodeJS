require("dotenv").config();
const express=require("express");
const cors=require("cors");
const connectDB=require("./config/db");
const productRouter=require("./routes/ProductRoutes");
const {errorHandler}=require("./controllers/productControllers");
const NodeCache=require("node-cache");
const app=express();
app.use(express.json());
app.use(cors());

const cache=new NodeCache({stdTTL: 30});
connectDB();

const cacheMiddlware=(req,res, next)=>{
    if(req.method !== "GET"){
        return next();
    }
    const key=req.originalUrl;
    const cacheResponse=cache.get(key);
    if(cacheResponse){
        console.log("cache response");
       return res.send(cacheResponse);
    }
    else{
        console.log("no cache response");
    }

    const originalReqSend=res.send;

    res.send=function (body){
        cache.set(key,body);
        originalReqSend.call(this, body);
    }

    next()
}

app.use("/products", cacheMiddlware, productRouter);

app.use((req, res, next)=>{
    res.status(404).json({message:"Not Found"});
})
app.use(errorHandler)

const PORT=process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
})