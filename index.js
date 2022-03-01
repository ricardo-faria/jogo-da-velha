const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;

app.use(express.static("public"));
app.use("/js", express.static("public"));
app.use("/css", express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("pages/index");
});

io.on("connection", (socket) => {
	console.log("connected");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
