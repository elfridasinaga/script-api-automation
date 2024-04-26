const { expect } = require("chai")
const supertest = require("supertest")

describe('POST user', () => {
    it('Success Post user', async() =>{
       const response = await supertest('https://reqres.in').post('/api/users').send({
        "name": "Elfrida",
        "data": {
           "nik": 2019,
           "telepon": 184999,
           "pekerjaan": "Intel",
           "alamat": "jakarta"
        }
     })
     //.set('Content-type', 'application/json') //header
       console.log(response.body)
       expect(response.status).equal(201)
       expect(response.body)
    })
})