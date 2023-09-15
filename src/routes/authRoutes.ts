import express from "express";
import passport from "passport";
import Jwt from "jsonwebtoken";
import { JWT_SECRET, FRONTEND_URL } from "../utils/secrets";

const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google",  {
      scope: ["email", "profile"], 
      session: false
    })
);

router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
    const token = Jwt.sign(
        { id: req.user?.id },
        JWT_SECRET,
    );

    res.redirect(`${FRONTEND_URL}/profile?token=${token}`);
});

export default router;
