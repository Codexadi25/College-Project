const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

// Requiring Express Router files.
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

// Setting for project requirements.
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const MONGO_URL = "mongodb+srv://Aditya_Sahu:hDpSv4EgVxV9iIax@cluster0.amwsbkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// express-session parameters.
const sessionOptions = {
    secret: "Session Secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: Date.now() + 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

// Flsh Message Middleware.
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// Home Route
app.get("/", (req, res) => {
    res.redirect("/listings");
});

// Express Routers
app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

// Middlewares
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Went Wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

/* Database connectivity setup */
async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Database connected.");
}

main().catch((err) => console.log(err));

/* Server setup */
app.listen(8080, () => {
    console.log("Server is running on localhost: 8080");
});