import express from "express";
const router = express.Router();

router.get("/",(req,res) => { console.log("running")});
router.get("/:id", (req,res) => { console.log("running")})
router.post("/",(req,res) => { console.log("running")})
router.put("/:id",(req,res) => { console.log("running")})
router.delete("/:id", (req,res) => { console.log("running")})

export default router;
