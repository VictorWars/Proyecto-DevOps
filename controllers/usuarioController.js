const Usuario = require('../models/usuario');
const { JWT_SECRET, EXPIRATION_TIME } = require('../config/jwt');
const jwt = require('jsonwebtoken');

const { logger } = require('../util/logger');

const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const foundUser = await Usuario.findOne({ where: { email } });

    if (foundUser) {
      logger.warning('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    const createdUser = await Usuario.create({
      username,
      email,
      password,
    });

    return res.status(201).json(createdUser);
  } catch (e) {
    next(e);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Usuario.findOne({ where: { email } });
    if (!user) {
      logger.warning('Email does not exist');
      return res.status(404).json({ message: 'Email does not exist' });
    }
    const result = password === user.password;

    if (result) {
      const token = jwt.sign({ user }, JWT_SECRET, {
        expiresIn: EXPIRATION_TIME,
      });
      await Usuario.update(
        { lastLoginDate: Date() },
        { where: { id: user.id } }
      );
      return res.status(200).json({ token, username: user.username });
    }
    logger.warning('Email or password incorrect');
    return res.status(400).json({ message: 'Email or password incorrect' });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  signUp,
  signIn,
};
