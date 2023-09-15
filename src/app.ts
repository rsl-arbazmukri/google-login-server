import express, { Express } from 'express'
import cors from 'cors'
import { PORT } from "./utils/secrets";
import authRoutes from "./routes/authRoutes";
import protectedRoutes from "./routes/protectedRoutes";
import "./config/passport";
import passport from "passport";
import dbConnection from './db'

const app: Express = express()

app.use(cors())

app.use(passport.initialize());

app.use("/auth", authRoutes);
app.use("/user", protectedRoutes);


dbConnection.once('open', () => {
  console.log('Server is connected to the database');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
})

dbConnection.on('error', (err) => {
  console.error('Database connection error:', err);
});



