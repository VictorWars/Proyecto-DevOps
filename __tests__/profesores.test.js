const axios = require('axios');

// Create mock
jest.mock('axios');

describe('Testing endpoints', () => {
  test('GET /profesores', async () => {
    const fake = [
      {
        id: 1,
        nombres: 'Emmanuel Isai',
        apellidoPaterno: 'Chable',
        apellidoMatenerno: 'Colli',
        numeroEmpleado: 1,
        horasClase: 10,
        createdAt: Date(),
        updatedAt: Date(),
      },
      {
        id: 2,
        nombres: 'Juan',
        apellidoPaterno: 'Ramón',
        apellidoMatenerno: 'Gonzales',
        numeroEmpleado: 2,
        horasClase: 5,
        createdAt: Date(),
        updatedAt: Date(),
      },
    ];

    // Set result
    axios.get.mockResolvedValue(fake);

    // Get result
    const result = await axios.get('http://localhost:3000/api/v1/profesores');

    // Test called get
    const axiosSpy = jest.spyOn(axios, 'get');
    expect(axiosSpy).toHaveBeenCalledTimes(1);

    // Test result
    expect(result).toEqual(fake);
  });
  test('POST /profesores', async () => {
    const tokenValue =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtbWFudWVsaXNhaV8yOEBob3RtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQyOC4ifQ.GgWS-JYKUfoBEnJadeNa24970hksD1whwoU4_qBFgSY';
    axios.post.mockResolvedValue(tokenValue);

    const loginData = {
      email: 'emmanuelisai_28@hotmail.com',
      password: 'password28.',
    };
    const token = await axios.post(
      'http://localhost:3000/api/v1/login',
      loginData
    );

    // Test called get
    const axiosSpy = jest.spyOn(axios, 'post');
    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(tokenValue).toEqual(token);

    const fake = {
      id: 1,
      nombres: 'Emmanuel Isai',
      apellidoPaterno: 'Chable',
      apellidoMatenerno: 'Colli',
      numeroEmpleado: 1,
      horasClase: 10,
      createdAt: Date(),
      updatedAt: Date(),
    };

    // Set result
    axios.post.mockResolvedValue(fake);

    // Get result
    const result = await axios.post(
      'http://localhost:3000/api/v1/profesores',
      fake,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    // Test called get
    expect(axiosSpy).toHaveBeenCalledTimes(2);

    // Test result
    expect(result).toEqual(fake);
  });
});
