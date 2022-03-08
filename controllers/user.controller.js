const { User, sequelize } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  try {
    //tạo avatar mặc định
    const avatarUrl = gravatar.url(email);
    //tạo ra 1 chuỗi ngẫu nhiên
    const salt = bcrypt.genSaltSync(10);
    // mã hóa chuỗi ngẫu nhiên vừa tạo ra (mã hóa salt + password)
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      numberPhone,
      avatar: avatarUrl,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // b1: tìm ra user đang đăng nhập dựa trên email
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    // b2: kiểm tra mật khẩu có đúng hay không
    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) {
      const token = jwt.sign(
        { email: user.email, type: user.type },
        "private-key",
        { expiresIn: 60 * 60 }
      );
      res.status(200).send({ message: "Login successfully!", token: token });
    } else {
      res.status(500).send({ message: "email or password is invalid!" });
    }
  } else {
    res.status(404).send({ message: "email is not exist!" });
  }
};

const uploadAvatar = async (req, res) => {
  const { user, file } = req;
  const urlImage = `http://localhost:3000/${file.path}`;
  const userFound = await User.findOne({
    email: user.email,
  });
  userFound.avatar = urlImage;
  await userFound.save();
  res.send(urlImage);
};

const getAllTrip = async (req, res) => {
  try {
    const [results] = await sequelize.query(
      `select users.name as user_name, fromSta.name as from_station, toSta.name as to_station
      from users 
      inner join tickets on users.id = tickets.user_id
      inner join trips on trips.id = tickets.trip_id
      inner join stations as fromSta on fromSta.id = trips.fromStation
      inner join stations as toSta on toSta.id = trips.toStation;`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  register,
  login,
  uploadAvatar,
  getAllTrip,
};
