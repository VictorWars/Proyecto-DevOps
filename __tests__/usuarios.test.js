const app = require('../app');
const request = require('supertest');
const Salon = require('../models/asignatura');
const sinon = require('sinon');
const Usuario = require('../models/usuario');

beforeEach(async () => {
  await Usuario.sync({ force: true });
});

const payload = {
  username: "tesa",
  email: "tesa@example.com",
  password: "123"
}

describe('POST /signUp', () => {

  test('should return 201 and usuario data', async () => {
    const { status, body } = await request(app).post('/api/v1/signUp').send(payload)

    expect(status).toBe(201);
    expect(body).toHaveProperty('username')
    expect(body).toHaveProperty('email')
    expect(body).toHaveProperty('password')
  });

  test('should return 400 and error message', async () => {
    const { status: statusSignUp } = await request(app).post('/api/v1/signUp').send(payload)
    const { status, body } = await request(app).post('/api/v1/signUp').send(payload)

    expect(status).toBe(400);
    expect(body).toHaveProperty('message')
    expect(body.message).toEqual('User already exists')
  });
});

describe('POST /signIn', () => {
  beforeEach(async () => {
    await request(app).post('/api/v1/signUp').send(payload)
  })

  test('should return 200 and usuario data', async () => {
    const { email, password, username } = payload
    const { status, body } = await request(app).post('/api/v1/signIn').send({email, password})

    expect(status).toBe(200);
    expect(body).toHaveProperty('token')
    expect(body).toHaveProperty('username')
    expect(body.username).toEqual(username)
  });

  test('should return 404 and error message', async () => {
    const { password } = payload
    const { status, body } = await request(app).post('/api/v1/signIn').send({email: 'fake@example.com', password})

    expect(status).toBe(404);
    expect(body).toHaveProperty('message')
    expect(body.message).toEqual('Email does not exist')
  });

  test('should return 400 and error message', async () => {
    const { email } = payload
    const { status, body } = await request(app).post('/api/v1/signIn').send({email, password: 'fake'})

    expect(status).toBe(400);
    expect(body).toHaveProperty('message')
    expect(body.message).toEqual('Email or password incorrect')
  });
});
