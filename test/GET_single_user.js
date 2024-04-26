const { expect } = require("chai")
const supertest = require("supertest")

describe('GET single user', () => {
    it('Success Get single user', async() =>{
       const response = await supertest('https://reqres.in').get('/api/users/2')
       console.log(response.body)
       expect(response.status).equal(200)
       expect(response.body)
    })
})