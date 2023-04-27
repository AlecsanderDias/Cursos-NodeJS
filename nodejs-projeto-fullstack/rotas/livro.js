import { Router } from "express";

const router = Router();

router.get("/teste", (req,res) => {
    res.status(200).send("Teste OK");
})

export default router;