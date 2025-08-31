import express from "express";
import session from "express-session";
import pg from "pg";
// @ts-ignore
import connectPgSimple from "connect-pg-simple";
import productsRoute from "./routes/products/index";
import categoriesRoute from "./routes/categories/index";
import usesRoute from "./routes/uses/index";
import authRoute from "./routes/auth/index";
import cartRoute from "./routes/cart/index";
import discountsRoute from "./routes/Discounts";
import brandsRoute from "./routes/brands/index";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { auth } from "./middlewares/auth";
import cors from "cors";

// Load .env file into process.env
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const dbpassword = process.env.DB_PASSWORD;
// Create a pg connection pool
const pgPool = new pg.Pool({
  user: "postgres",
  password: dbpassword,
  host: "localhost",
  port: 5432,
  database: "ecommerceprisma",
});
const PgSession = connectPgSimple(session);

// Use session middleware with Postgres store
app.use(
  session({
    store: new PgSession({
      pool: pgPool, // use existing pool
      tableName: "card_session", // table name (default: "session")
    }),
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      httpOnly: true,
    },
  })
);

app.use(express.json());
app.use(cookieParser());
app.get("/", auth, (req, res) => {
  res.send("hello worldd");
});

// allow requests from frontend (5173)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/products", productsRoute);
app.use("/categories", categoriesRoute);
app.use("/uses", usesRoute);
app.use("/discounts", discountsRoute);
app.use("/auth", authRoute);
app.use("/cart", cartRoute);
app.use("/brand", brandsRoute);

app.listen(port, () => {
  console.log("the server running on the port" + port);
});
