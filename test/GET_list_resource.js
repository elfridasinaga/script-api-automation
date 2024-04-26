const { expect } = require("chai")
const supertest = require("supertest")

describe('GET List user', () => {
    it('Success Get List user', async() =>{
       const response = await supertest('https://reqres.in').get('/api/unknown')
       console.log(response.body)
       expect(response.status).equal(200)
       expect(response.body)
    })
})