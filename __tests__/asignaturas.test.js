const app = require('../app');
const request = require('supertest');
const sinon = require('sinon');
const Asignatura = require('../models/asignatura');
const { create } = require('../models/asignatura');

let JwtToken = ''

beforeEach(async () => {
  await Asignatura.sync({ force: true });
  await request(app).post('/api/v1/signUp').send({username: 'tesa', email: 'test@example.com', password: '123'})
  const {body: { token } } = await request(app).post('/api/v1/signIn').send({email: 'test@example.com', password: '123'})
  JwtToken = token
});

const mockData = [
  {
    "id": 1,
    "nombre":"Algebra Lineal",
    "descripcion":"Temas de Algebra",
    "creditos": 9,
    "tipo": "Obligatoria",
    "codigo":"A02031234",
    "createdAt": Date(),
    "updatedAt": Date()
  },
  {
    "id": 2,
    "nombre":"Calculo Diferencial",
    "descripcion":"Temas de Calculo",
    "creditos": 9,
    "tipo": "Obligatoria",
    "codigo":"B02031234",
    "createdAt": Date(),
    "updatedAt": Date()
  }
]

describe('GET /asignaturas', () => {
  sinon.stub(Asignatura, 'findAll').returns(mockData);
  
  test('should return 200 and salones data', async () => {
    const { status, body } = await request(app).get('/api/v1/asignaturas').set('Authorization', `Bearer ${JwtToken}`);

    expect(status).toBe(200);
    expect(body).toHaveLength(2)
  });

});

describe.only('GET /asignaturas/:id', () => { 
  test('should return 200 and salon data', async () => {
    const {status, body} = await request(app).get('/api/v1/asignaturas/1').set('Authorization', `Bearer ${JwtToken}`);

    expect(status).toBe(200);
    expect(body).toEqual(mockData[0]);
  });

  test('should return 404 and message found', async () => { 
    const {status, body} = await request(app).get('/api/v1/asignaturas/9').set('Authorization', `Bearer ${JwtToken}`);
    expect(status).toBe(404);
    expect(body).toHaveProperty('message');
    expect(body.message).toEqual('Asignatura no existe');  
  });
});

describe('POST /asignaturas', () => {
  payload = {
    "nombre":"Algebra Superior",
    "descripcion":"Temas de Algebra",
    "creditos": 9,
    "tipo": "Obligatoria",
    "codigo":"c02031234",
  }
  
  mockDataResponse = {
    "id": 3, ...payload, "createdAt": Date(), "updatedAt": Date()
  }
  
  sinon.stub(Asignatura, 'create').returns(mockDataResponse);
  
  test('should return 201 and asignatura created', async () => {
  
    const {status, body} = await request(app).post('/api/v1/asignaturas').set('Authorization', `Bearer ${JwtToken}`).send(payload);

    expect(status).toBe(201);
    expect(body).toEqual(mockDataResponse);
  });
});

describe('PUT /asignaturas/:id', () => { 
  asignatura = {
    "nombre": "Nombre Actualizado",
    "descripcion": "Temas de Algebra",
    "creditos": 9,
    "tipo": "Obligatoria",
    "codigo": "c02031234",
  }

  test('should return 200 and asignatura updated', async () => {
    const {status} = await request(app).put('/api/v1/asignaturas/1').set('Authorization', `Bearer ${JwtToken}`).send(asignatura);

    expect(status).toBe(200);
  }); 
})

// describe('DELETE /asignatura/:id', async() => { 
  
// });
