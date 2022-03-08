const express = require("express");
const { createTrip, getAllTrip, getDetailTrip, deleteTrip, updateTrip } = require("../controllers/trip.controller");

const tripRouters = express.Router();

tripRouters.post("/", createTrip);

tripRouters.get("/", getAllTrip);

tripRouters.get("/:id", getDetailTrip);

tripRouters.delete("/:id", deleteTrip);

tripRouters.put("/:id", updateTrip);

module.exports = {
  tripRouters,
};
