const { expect } = require("chai")
const supertest = require("supertest")

describe('DELETE user', () => {
    it('Success DELETE user', async() =>{
       const response = await supertest('https://reqres.in').delete('/api/users/2')
       console.log(response.body)
       expect(response.status).equal(204)
       expect(response.body)
    })
})