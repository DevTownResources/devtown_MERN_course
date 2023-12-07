const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const secretKey = "thisisasecretkey";

const app = express();

// app.use(cors());
app.use(logger);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

// Pages Routes
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/pages/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/pages/signup.html");
});

app.get("/logout", (req, res) => {
  res.clearCookie("access_token");
});

const authMiddleware = async (req, res, next) => {
  try {
    // Authorization
    const token = req.cookies.access_token;
    jwt.verify(token, secretKey);
    next();
  } catch (error) {
    res.status(401).json({
      status: "error",
      msg: "Unauthorized",
      data: null,
    });
  }
};

app.get("/todos", authMiddleware, (req, res) => {
  res.sendFile(__dirname + "/pages/todos.html");
});

// API Routes

app.post("/api/signup", async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const data = await fs.promises.readFile("./users.json", "utf8");
    const parsedData = JSON.parse(data);

    if (parsedData.find((ele) => ele.email === email)) {
      return res.status(400).json({
        status: "error",
        msg: "User already exists",
        data: null,
      });
    }

    const newUser = {
      id: uuidv4(),
      email,
      name,
      password,
    };
    parsedData.push(newUser);
    await fs.promises.writeFile("./users.json", JSON.stringify(parsedData));
    res.status(201).json({
      status: "success",
      msg: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await fs.promises.readFile("./users.json", "utf8");
    const parsedData = JSON.parse(data);

    const user = parsedData.find((ele) => ele.email === email);

    if (!user) {
      return res.status(404).json({
        status: "error",
        msg: "User not found",
        data: null,
      });
    }

    // Authenticate user - verify password
    if (user.password !== password) {
      return res.status(400).json({
        status: "error",
        msg: "Incorrect password",
        data: null,
      });
    }

    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: "1d",
    });

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        status: "success",
        msg: "User logged in successfully",
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
    });
  }
});

app.get("/api/todos", async (req, res) => {
  try {
    const data = await fs.promises.readFile("./db.json", "utf8");
    const parsedData = JSON.parse(data);
    res.status(200).json({
      status: "success",
      msg: "Todos retrieved successfully",
      data: parsedData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: [],
    });
  }
});

app.post("/api/todos", async (req, res) => {
  try {
    const data = await fs.promises.readFile("./db.json", "utf8");
    const parsedData = JSON.parse(data);
    const newTodo = {
      id: uuidv4(),
      title: req.body.title,
      completed: false,
    };
    parsedData.push(newTodo);
    await fs.promises.writeFile("./db.json", JSON.stringify(parsedData));
    res.status(201).json({
      status: "success",
      msg: "Todo created successfully",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
});

app.patch("/api/todos/:id", async (req, res) => {
  try {
    const data = await fs.promises.readFile("./db.json", "utf8");
    const parsedData = JSON.parse(data);

    const { id } = req.params;
    const todo = parsedData.find((ele) => ele.id === id);

    if (!todo) {
      return res.status(404).json({
        status: "error",
        msg: "Todo not found",
        data: null,
      });
    }

    const updatedData = parsedData.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          ...req.body,
        };
      }
      return ele;
    });

    await fs.promises.writeFile("./db.json", JSON.stringify(updatedData));

    res.status(200).json({
      status: "success",
      msg: "Todo updated successfully",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  try {
    const data = await fs.promises.readFile("./db.json", "utf8");
    const parsedData = JSON.parse(data);

    const { id } = req.params;
    const todo = parsedData.find((ele) => ele.id === id);

    if (!todo) {
      return res.status(404).json({
        status: "error",
        msg: "Todo not found",
        data: null,
      });
    }

    const filteredData = parsedData.filter((ele) => ele.id !== id);
    await fs.promises.writeFile("./db.json", JSON.stringify(filteredData));

    res.status(200).json({
      status: "success",
      msg: "Todo deleted successfully",
      data: filteredData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
});

function logger(req, res, next) {
  console.log(req.method, req.url, new Date());
  next();
}

const PORT = 8000;
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}.`);
});
