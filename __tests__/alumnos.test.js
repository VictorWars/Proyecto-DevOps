const axios = require('axios');

// Create mock
jest.mock('axios');

describe("Testing endpoints", () => {
    test("GET /alumnos", async () => {
        const fake = [
            {
              "id": 1,
              "nombres": "Victor Enrique",
              "apellidoPaterno": "Cauich",
              "apellidoMaterno": "Davalos",
              "matricula": 15002051,
              "promedio": 7.2,
              "createdAt": Date(),
              "updatedAt": Date()
            },  {
                "id": 2,
                "nombres": "Javier Ramón",
                "apellidoPaterno": "Torres",
                "apellidoMaterno": "Peniche",
                "matricula": 15004844,
                "promedio": 7.2,
                "createdAt": Date(),
                "updatedAt": Date()
              }];

        // Set result
        axios.get.mockResolvedValue(fake);

        // Get result
        const result =  await axios.get('http://localhost:3000/api/v1/alumnos');
        
        // Test called get
        const axiosSpy = jest.spyOn(axios, 'get');
        expect(axiosSpy).toHaveBeenCalledTimes(1);
        
        // Test result
        expect(result).toEqual(fake);

    })
});