const { Trip, Station } = require("../models");

const createTrip = async (req, res) => {
  const { fromStation, toStation, startTime, price } = req.body;
  const newTrip = await Trip.create({
    fromStation,
    toStation,
    startTime,
    price,
  });
  res.status(201).send(newTrip);
};

const getAllTrip = async (req, res) => {
  const tripList = await Trip.findAll({
    include: [
      {
        model: Station,
        as: "from",
      },
      {
        model: Station,
        as: "to",
      },
    ],
  });
  res.status(200).send(tripList);
};

const getDetailTrip = async (req, res) => {
  const { id } = req.params;
  try {
    const detailTrip = await Trip.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Station,
          as: "from",
        },
        {
          model: Station,
          as: "to",
        },
      ],
    });
    res.status(200).send(detailTrip);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const updTrip = await Trip.findOne({
      where: {
        id,
      },
    });
    if (updTrip) {
      const { fromStation, toStation, startTime, price } = req.body;
      await Trip.update(
        { fromStation, toStation, startTime, price },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).send("Updated!");
    } else {
      res.status(404).send("not found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  try {
    await Trip.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("delete successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createTrip,
  getAllTrip,
  getDetailTrip,
  deleteTrip,
  updateTrip,
};
