const express = require("express");
const Stripe = require("./src/connect/stripe");
const session = require("express-session");
var MemoryStore = require("memorystore")(session)
const UserService = require("./src/user");

const app = express();
app.use(session(({
  saveUninitialized : false,
  cookie: {maxAge: 86400000},
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
  resave: false,
  secret: "keyboard cat"
})))
app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);

app.use(express.json());
app.get("/", async function (req, res) {
  res.status(200).render("login.ejs");
});

app.post("/login", async (req, res) => {
  const { email } = req.body;
  const customer = await Stripe.addNewCustomer(email);
  req.session.customerId = customer
  res.send("Customer Created: " + JSON.stringify(customer));
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
