const app = require('../app');
const request = require('supertest');
const Salon = require('../models/salon');
const sinon = require('sinon');

describe('GET /salones', () => {
  let JwtToken = ''

  beforeEach(async () => {
    await Salon.sync({ force: true });
    await request(app).post('/api/v1/signUp').send({username: 'tesa', email: 'test@example.com', password: '123'})
    const {body: { token } } = await request(app).post('/api/v1/signIn').send({email: 'test@example.com', password: '123'})
    JwtToken = token
  });

  const mockData = [
    {
      "id": 1,
      "nombre":"C4",
      "tipo":"Laboratorio",
      "capacidad": 30,
      "estado": "ocupado",
      "comodidades":"Aire Acondicionado, 40 Sillas, Computadoras",
      "createdAt": Date(),
      "updatedAt": Date()
    },
    {
      "id": 2,
      "nombre":"H1",
      "tipo":"Salon",
      "capacidad": 30,
      "estado": "ocupado",
      "comodidades":"Aire Acondicionado, 40 Sillas, Computadoras",
      "createdAt": Date(),
      "updatedAt": Date()
    }
  ]
  sinon.stub(Salon, 'findAll').returns(mockData);
  sinon.stub(Salon, 'findByPk').returns(mockData[0]);

  test('should return 200 and salones data', async () => {
    const { status, body } = await request(app).get('/api/v1/salones').set('Authorization', `Bearer ${JwtToken}`);

    expect(status).toBe(200);
    expect(body).toHaveLength(2)
  });

  test('should return 200 and salon data', async () => {
    const {status, body} = await request(app).get('/api/v1/salones/1').set('Authorization', `Bearer ${JwtToken}`);

    expect(status).toBe(200);
    expect(body).toEqual(mockData[0])
  });

});