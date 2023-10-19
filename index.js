const express = require('express')
const app = express()
const port = 5111

app.get("/Girr/:id", (req, res) => {
    res.send("Pengen makan");
});
app.post("/Yanto/:id", (req, res) => {
    res.send("Nasi padang best");
});
app.put("/Dadang/:id", (req, res) => {
    res.send("Jualan sayur dimana?");
});
app.delete("/Agus/:id", (req, res) => {
    res.send("Hallo ini Agus");
});
app.listen(port,() => console.log(`Server running on port ${port}`))
