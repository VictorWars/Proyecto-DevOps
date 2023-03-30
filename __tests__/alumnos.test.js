const axios = require("axios");

// Create mock
jest.mock("axios");
let token = "";

describe("Testing endpoints", () => {
  test("Login", async () => {
    const tokenValue =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtbWFudWVsaXNhaV8yOEBob3RtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQyOC4ifQ.GgWS-JYKUfoBEnJadeNa24970hksD1whwoU4_qBFgSY";
    axios.post.mockResolvedValue(tokenValue);

    const loginData = {
      email: "emmanuelisai_28@hotmail.com",
      password: "password28.",
    };
    const tokenResult = await axios.post(
      "http://localhost:3000/api/v1/login",
      loginData
    );
    const axiosSpy = jest.spyOn(axios, "post");
    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(tokenValue).toEqual(tokenResult);
    token = tokenResult;
  });

  test("GET /alumnos", async () => {
    const fake = [
      {
        id: 1,
        nombres: "Victor Enrique",
        apellidoPaterno: "Cauich",
        apellidoMaterno: "Davalos",
        matricula: 15002051,
        promedio: 7.2,
        createdAt: Date(),
        updatedAt: Date(),
      },
      {
        id: 2,
        nombres: "Javier Ramón",
        apellidoPaterno: "Torres",
        apellidoMaterno: "Peniche",
        matricula: 15004844,
        promedio: 7.2,
        createdAt: Date(),
        updatedAt: Date(),
      },
    ];

    // Set result
    axios.get.mockResolvedValue(fake);

    // Get result
    const result = await axios.get("http://localhost:3000/api/v1/alumnos");

    // Test called get
    const axiosSpy = jest.spyOn(axios, "get");
    expect(axiosSpy).toHaveBeenCalledTimes(1);

    // Test result
    expect(result).toEqual(fake);
  });

  test("POST /alumnos", async () => {
    const fake = {
      id: 1,
      nombres: "Victor Enrique",
      apellidoPaterno: "Cauich",
      apellidoMaterno: "Davalos",
      matricula: 15002051,
      promedio: 7.2,
      createdAt: Date(),
      updatedAt: Date(),
    };
    // Set result
    axios.post.mockResolvedValue(fake);

    // Get result
    const result = await axios.post(
      "http://localhost:3000/api/v1/alumnos",
      fake,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    const axiosSpy = jest.spyOn(axios, "post");

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(fake);
  });

  test("PUT /alumnos/:id", async () => {
    const fake = {
      id: 1,
      nombres: "Victor Enrique",
      apellidoPaterno: "Cauich",
      apellidoMaterno: "Davalos",
      matricula: 15002066,
      promedio: 10,
      createdAt: Date(),
      updatedAt: Date(),
    };

    axios.put.mockResolvedValue(fake);

    // Get result
    const result = await axios.put(
      "http://localhost:3000/api/v1/alumnos",
      {
        nombres: "Victor Enrique",
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    const axiosSpy = jest.spyOn(axios, "put");

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(fake);
  });

  test("GET /alumnos/:id", async () => {
    const fake = {
      id: 1,
      nombres: "Victor Enrique",
      apellidoPaterno: "Cauich",
      apellidoMaterno: "Davalos",
      matricula: 15002066,
      promedio: 10,
      createdAt: Date(),
      updatedAt: Date(),
    };

    axios.get.mockResolvedValue(fake);

    // Get result
    const result = await axios.get("http://localhost:3000/api/v1/alumnos/1");
    const axiosSpy = jest.spyOn(axios, "get");

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(fake);
  });

  test("DELETE /alumnos/:id", async () => {
    const fake = {
      id: 1,
      nombres: "Victor Enrique",
      apellidoPaterno: "Cauich",
      apellidoMaterno: "Davalos",
      matricula: 15002066,
      promedio: 10,
      createdAt: Date(),
      updatedAt: Date(),
    };

    axios.delete.mockResolvedValue(fake);

    // Get result
    const result = await axios.delete(
      "http://localhost:3000/api/v1/alumnos/1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const axiosSpy = jest.spyOn(axios, "delete");

    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(fake);
  });
});
