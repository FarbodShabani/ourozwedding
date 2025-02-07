const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Import the Nodemailer library
const nodemailer = require("nodemailer");
const rsvp = require("./model/rsvp");

const rootDir = path.dirname(process.mainModule.filename);

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(rootDir, "public"))); // to creat dirctory for the files

app.use(bodyParser.json()); // for receiving json files
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use false for STARTTLS; true for SSL on port 465
  auth: {
    user: process.env.NODEMAILERGMAILUSERNAME,
    pass: process.env.NODEMAILERGMAILPASSWORD,
  },
});

const sendMail = (guestList) => {
  // Configure the mailoptions object
  const mailOptions = {
    from: "SainaFarbod@gettingmarried.com",
    to: ['shabani.farbod@yahoo.com', 's.ghomeshi@yahoo.com'],
    subject: "RSVP submit list",
    html: `
    <h1> RSVP list </h1>
    <h3> Hi farbod and Saina this is your RSVP list: </h3>
    <br/>
    <table>
  <tr>
    <th>Name</th>
    <th>Companion</th>
    <th>Music</th>
    <th>Dietary Restrictions</th>
    <th>phone</th>
    <th>email</th>
    <th>attending</th>
  </tr>
  ${guestList.map((guest) => `
    <tr>
    <td>${guest.name}</td>
    <td>${guest.cName}</td>
    <td>${guest.songs}</td>
    <td>${guest.diet}</td>
    <td>${guest.phone}</td>
    <td>${guest.email}</td>
    <td>${guest.attending}</td>
    </tr>
    `)}
</table>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};

app.get("/", (req, res) => {
  // The render method takes the name of the HTML
  // page to be rendered as input
  // This page should be in the views folder
  // in the root directory.
  res.render("main.ejs");
});

app.post("/rsvp", async (req, res) => {
  const body = req.body;

  const rsvpDetails = {
    name: body?.guestName,
    cName: body?.companionName,
    songs: body?.songs,
    diet: body?.dietary,
    phone: body?.phone,
    email: body?.email,
    attending: body?.attending,
  };

  try {
    const findGuest = await rsvp.findOne({ name: rsvpDetails.name });

    if (findGuest) {
      findGuest.name = rsvpDetails.name ? rsvpDetails.name : findGuest.name;
      findGuest.cName = rsvpDetails.cName ? rsvpDetails.cName : findGuest.cName;
      findGuest.email = rsvpDetails.email ? rsvpDetails.email : findGuest.email;
      findGuest.phone = rsvpDetails.phone ? rsvpDetails.phone : findGuest.phone;
      findGuest.diet = rsvpDetails.diet ? rsvpDetails.diet : findGuest.diet;
      findGuest.attending = rsvpDetails.attending
        ? rsvpDetails.attending
        : findGuest.attending;
      findGuest.songs = rsvpDetails.songs ? rsvpDetails.songs : findGuest.songs;
      await findGuest.save();
      const guests = await rsvp.find();
      sendMail(guests);
      return res
        .status(202)
        .json({
          success: true,
          message: "Your Rsvp is updated! See you soon.",
        });
    } else {
      const newRsvp = new rsvp({
        name: rsvpDetails.name,
        cName: rsvpDetails.cName,
        email: rsvpDetails.email,
        phone: rsvpDetails.phone,
        diet: rsvpDetails.diet,
        songs: rsvpDetails.songs,
        attending: rsvpDetails.attending,
      });
      await newRsvp.save();
      const guests = await rsvp.find();
      sendMail(guests);
      return res
        .status(201)
        .json({
          success: true,
          message: "Your Rsvp is created! See you soon.",
        });
    }
  } catch (error) {
    return res
      .status(505)
      .json({ success: false, message: "Contact Saina Or Farbod!" });
  }
});

mongoose
  .connect(process.env.DATABASECONNECTION)
  .then(() => {
    app.listen(4000, function () {
      console.log("listening to port 4000");
    });
  })
  .catch((e) => console.log(e));
