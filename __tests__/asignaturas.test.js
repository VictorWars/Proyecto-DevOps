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
  test('GET /asignaturas', async () => {
    const fake = [
      {
        id: 1,
        nombre: 'Algebra Lineal',
        descripcion: 'Temas de algebra',
        creditos: 9,
        tipo: "Obligatoria",
        codigo: "A123456789",
        createdAt: Date(),
        updatedAt: Date(),
      },
      {
        id: 2,
        nombre: 'Calculo Integral',
        descripcion: 'Temas de calculo',
        creditos: 9,
        tipo: "Obligatoria",
        codigo: "B123456789",
        createdAt: Date(),
        updatedAt: Date(),
      },
    ];

    // Set result
    axios.get.mockResolvedValue(fake);

    // Get result
    const result = await axios.get('http://localhost:3000/api/v1/asignaturas', 
    {
      authorization: `Bearer ${token}`,
    });

    // Test called get
    const axiosSpy = jest.spyOn(axios, 'get');
    expect(axiosSpy).toHaveBeenCalledTimes(1);

    // Test result
    expect(result).toEqual(fake);
  });

  test('POST /asignaturas', async () => {
    const fakeBody = {
        nombre: 'Algebra Lineal',
        descripcion: 'Temas de algebra',
        creditos: 9,
        tipo: "Obligatoria",
        codigo: "A123456789",
    };

    const fakeResponse = {
        id: 1,
        nombre: 'Algebra Lineal',
        descripcion: 'Temas de algebra',
        creditos: 9,
        tipo: "Obligatoria",
        codigo: "A123456789",
        createdAt: Date(),
        updatedAt: Date(),
    }
    // Set result
    axios.post.mockResolvedValue(fakeResponse);

    // Get result
    const result = await axios.post(
      'http://localhost:3000/api/v1/asignaturas',
      fakeBody,
      {
        authorization: `Bearer ${token}`,
      }
    );
    const axiosSpy = jest.spyOn(axios, 'post');

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(fakeResponse);
  });

  test('PUT /asignaturas/:id', async () => {
    const fakeResponse = {
      id: 1,
        nombre: 'Algebra Superior',
        descripcion: 'Temas de algebra',
        creditos: 9,
        tipo: "Optativa",
        codigo: "A123456789",
        createdAt: Date(),
        updatedAt: Date(),
    };

    axios.put.mockResolvedValue(fakeResponse);

    // Get result
    const result = await axios.put(
      'http://localhost:3000/api/v1/asignatura/1',
      {
        nombre: 'Algebra Superior',
        descripcion: 'Temas de algebra',
        creditos: 9,
        tipo: "Optativa",
        codigo: "A123456789",
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    const axiosSpy = jest.spyOn(axios, 'put');

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(fakeResponse);
  });

  test('GET /asignaturas/:id', async () => {
    const fakeResponse = {
      id: 1,
        nombre: 'Algebra Superior',
        descripcion: 'Temas de algebra',
        creditos: 9,
        tipo: "Optativa",
        codigo: "A123456789",
        createdAt: Date(),
        updatedAt: Date(),
    };

    axios.get.mockResolvedValue(fakeResponse);

    // Get result
    const result = await axios.get('http://localhost:3000/api/v1/asignaturas/1',
      {
        'authorization': `Bearer ${token}`,
      },
    );
    const axiosSpy = jest.spyOn(axios, 'get');

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(fakeResponse);
  });

  test('DELETE /asignatura/:id', async () => {
    const fake = {
      status: 200,
    };

    axios.delete.mockResolvedValue(fake);

    // Get result
    const result = await axios.delete(
      'http://localhost:3000/api/v1/asignaturas/1',
        {
          'authorization': `Bearer ${token}`,
        },
      
    );
    const axiosSpy = jest.spyOn(axios, 'delete');

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(fake.status);
  });
});
