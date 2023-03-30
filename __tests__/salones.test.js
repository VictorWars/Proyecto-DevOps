const axios = require('axios');

// Create mock
jest.mock('axios');
let token = '';

describe('Testing endpoints', () => {
  test('Login', async () => {
    const tokenValue =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtbWFudWVsaXNhaV8yOEBob3RtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQyOC4ifQ.GgWS-JYKUfoBEnJadeNa24970hksD1whwoU4_qBFgSY';
    axios.post.mockResolvedValue(tokenValue);

    const loginData = {
      email: 'emmanuelisai_28@hotmail.com',
      password: 'password28.',
    };
    const tokenResult = await axios.post(
      'http://localhost:3000/api/v1/signIn',
      loginData
    );
    const axiosSpy = jest.spyOn(axios, 'post');
    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(tokenValue).toEqual(tokenResult);
    token = tokenResult;
  });
  test('GET /salones', async () => {
    const fakeResponse = [
      {
        id: 1,
        nombre: 'C4',
        tipo: 'Laboratorio',
        capacidad: 30,
        estado: "Ocupado",
        comodidades: "Aire Acondicionado, Computadoras, Internet",
        createdAt: Date(),
        updatedAt: Date(),
      },
      {
        id: 2,
        nombre: 'H1',
        tipo: 'Salon',
        capacidad: 30,
        estado: "Libre",
        comodidades: "Sillas, Computadoras, Internet",
        createdAt: Date(),
        updatedAt: Date(),
      },
    ];

    // Set result
    axios.get.mockResolvedValue(fakeResponse);

    // Get result
    const result = await axios.get('http://localhost:3000/api/v1/asignaturas', 
    {
      authorization: `Bearer ${token}`,
    });

    // Test called get
    const axiosSpy = jest.spyOn(axios, 'get');
    expect(axiosSpy).toHaveBeenCalledTimes(1);

    // Test result
    expect(result).toEqual(fakeResponse);
    expect(result).toHaveLength(2);
  });

  test('POST /salones', async () => {
    const fakeBody = {
      nombre: 'EA1',
      tipo: 'Cubiculo',
      capacidad: 1,
      estado: "Ocupado",
      comodidades: "Aire Acondicionado, Computadoras, Internet, Escritorio",
    };

    const fakeResponse = {
        status:200,
        body :{
          id: 1,
          nombre: 'EA1',
          tipo: 'Cubiculo',
          capacidad: 1,
          estado: "Ocupado",
          comodidades: "Aire Acondicionado, Computadoras, Internet, Escritorio",
          createdAt: Date(),
          updatedAt: Date(),
        }
    }
    // Set result
    axios.post.mockResolvedValue(fakeResponse);

    // Get result
    const result = await axios.post(
      'http://localhost:3000/api/v1/salones',
      fakeBody,
      {
        authorization: `Bearer ${token}`,
      }
    );
    const axiosSpy = jest.spyOn(axios, 'post');

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(fakeResponse.status);
    expect(result.body).toEqual(fakeResponse.body);
  });

  test('PUT /salones/:id', async () => {
    const fakeResponse = {
      status:200,
      body :{
        id: 1,
        nombre: 'EA1',
        tipo: 'Cubiculo',
        capacidad: 1,
        estado: "Libre",
        comodidades: "Aire Acondicionado, Computadoras, Internet, Escritorio",
        createdAt: Date(),
        updatedAt: Date(),
      }
  }

    axios.put.mockResolvedValue(fakeResponse);

    // Get result
    const result = await axios.put(
      'http://localhost:3000/api/v1/salones/1',
      {
        nombre: 'EA1',
        tipo: 'Cubiculo',
        capacidad: 1,
        estado: "Libre",
        comodidades: "Aire Acondicionado, Computadoras, Internet, Escritorio"
      },
      {
        authorization: `Bearer ${token}`,
      }
    );
    const axiosSpy = jest.spyOn(axios, 'put');

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result.body).toEqual(fakeResponse.body);
    expect(result.status).toEqual(fakeResponse.status);
  });

  test('GET /salones/:id', async () => {
    const fakeResponse = {
      status:200,
      body :{
        id: 1,
        nombre: 'EA1',
        tipo: 'Cubiculo',
        capacidad: 1,
        estado: "Libre",
        comodidades: "Aire Acondicionado, Computadoras, Internet, Escritorio",
        createdAt: Date(),
        updatedAt: Date(),
      }
  }

    axios.get.mockResolvedValue(fakeResponse);

    // Get result
    const result = await axios.get('http://localhost:3000/api/v1/salones/1',
      {
        'authorization': `Bearer ${token}`,
      },
    );
    const axiosSpy = jest.spyOn(axios, 'get');

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result.body).toEqual(fakeResponse.body);
    expect(result.status).toEqual(fakeResponse.status);
  });

  test('DELETE /salones/:id', async () => {
    const fake = {
      status: 200,
    };

    axios.delete.mockResolvedValue(fake);

    // Get result
    const result = await axios.delete(
      'http://localhost:3000/api/v1/salones/1',
        {
          'authorization': `Bearer ${token}`,
        },
      
    );
    const axiosSpy = jest.spyOn(axios, 'delete');

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(200);
  });
});
