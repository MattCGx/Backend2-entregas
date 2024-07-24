import { Router } from "express";
import { userModel } from "../Daos/models/user.model.js";
import { createHash }  from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";
import passport from "passport";

const router = Router();

router.post("/register", async (req, res) => {
  const { first_name, last_name, age, email, role, password } = req.body;

  if (!first_name || !last_name || !email || !password || !age) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const hashPassword = await createHash(password);

    const user = await userModel.create({
      first_name,
      last_name,
      age,
      email,
      password: hashPassword,
      role
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/login", passport.authenticate("login", { session: false, failureRedirect: "/login-error" }), async(req, res) => {
  const user = req.user;

  if(!user){
    return res.status(401).json({ error: "Credenciales incorrectas" });
  } 

  const payload = {
    email: user.email,
    role: user.role
  };

  const token = generateToken(payload);

  res.status(200).json({ message: 'Sesion Iniciada', token: token });
  
});

router.get("/login-error", (req, res) => {
  res.status(401).json({ error: "Credenciales incorrectas" });
});




export default router;
