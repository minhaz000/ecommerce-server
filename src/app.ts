import express , {Application } from 'express'
import session from 'express-session'
import passport from 'passport'
import MongoStore from "connect-mongo"
import cors from "cors"
import * as dotenv from 'dotenv'
dotenv.config()
// App  local imports 
import rootRouter  from "./modules/root/root.routes"
import { verifyClient } from './middlewares/verify.client'
const app:Application = express()
app.use(express.json());
app.set('trust proxy', 1)

app.use(session({
  secret: process.env.SESSION_SECRET || "some secret",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL || "mongodb://localhost:27017/test" }),
  cookie: { maxAge: 14 * 86400000, sameSite:"strict" , secure: false },
}))

declare module "express-session" {
  interface SessionData {
    veiw: number;
  }
}
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({origin:'http://localhost:3000',credentials: true}))
app.use(verifyClient)
app.use('/',rootRouter)

export default app