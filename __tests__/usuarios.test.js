
const axios = require('axios');

jest.mock('axios');

describe('Testing Endpoints', () => { 
  test('POST /signUp', async () => { 
    const fakeBody = {
      username: "tesa",
      email: "tesa@example.com",
      password: "123"
    }
    const fakeResponse = {
      status:201, 
      body: {
        id:1,
        username: "tesa",
        email: "tesa@example.com",
        password: "123",
        lastLoginDate:Date(),
        createdAt: Date(),
        updatedAt: Date(),
      }
    }

    axios.post.mockResolvedValue(fakeResponse);

    const result = await axios.post(
      'http://localhost:3000/api/v1/signUp',
      fakeBody
    )
    const axiosSpy = jest.spyOn(axios, 'post');
    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result.status).toBe(201);
    expect(result.body).toHaveProperty('username')
    expect(result.body).toHaveProperty('email')
    expect(result.body).toHaveProperty('password')
  });

  test('POST /signIn', async () => { 
    const fakeBody = {
      email: "tesa@example.com",
      password: "123"
    }
    const fakeResponse = {
      status:200, 
      body: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtbWFudWVsaXNhaV8yOEBob3RtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQyOC4ifQ.GgWS-JYKUfoBEnJadeNa24970hksD1whwoU4_qBFgSY',
        username: "tesa",
      }
    }

    axios.post.mockResolvedValue(fakeResponse);

    const result = await axios.post(
      'http://localhost:3000/api/v1/signIp',
      fakeBody
    )
    const axiosSpy = jest.spyOn(axios, 'post');
    expect(axiosSpy).toHaveBeenCalledTimes(1);
    expect(result.status).toBe(200);
    expect(result.body).toHaveProperty('token')
    expect(result.body).toHaveProperty('username')
  });
});


