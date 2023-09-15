import express from "express";
import passport from "passport";


const router = express.Router();

// Use the passport middleware to protect routes
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  // This route is protected and can only be accessed with a valid JWT token
  res.json(req.user);
});

export default router;
