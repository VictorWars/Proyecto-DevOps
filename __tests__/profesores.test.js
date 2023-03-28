const axios = require('axios');

// Create mock
jest.mock('axios');

describe("Testing endpoints", () => {
    test("GET /profesores", async () => {
        const fake = [
            {
              "id": 1,
              "nombres": "Emmanuel Isai",
              "apellidoPaterno": "Chable",
              "apellidoMatenerno": "Colli",
              "numeroEmpleado": 1,
              "horasClase": 10,
              "createdAt": Date(),
              "updatedAt": Date()
            },  {
                "id": 2,
                "nombres": "Juan",
                "apellidoPaterno": "Ramón",
                "apellidoMatenerno": "Gonzales",
                "numeroEmpleado": 2,
                "horasClase": 5,
                "createdAt": Date(),
                "updatedAt": Date()
              }];

        // Set result
        axios.get.mockResolvedValue(fake);

        // Get result
        const result =  await axios.get('http://localhost:3000/api/v1/profesores');
        
        // Test called get
        const axiosSpy = jest.spyOn(axios, 'get');
        expect(axiosSpy).toHaveBeenCalledTimes(1);
        
        // Test result
        expect(result).toEqual(fake);

    })
});