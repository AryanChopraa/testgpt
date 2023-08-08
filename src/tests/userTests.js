```javascript
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('User', () => {
    describe('/POST register', () => {
        it('it should register a new user', (done) => {
            let user = {
                name: "Test User",
                email: "testuser@gmail.com",
                password: "password"
            }
            chai.request(server)
                .post('/api/users/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('User successfully registered');
                    done();
                });
        });
    });

    describe('/POST login', () => {
        it('it should login a user', (done) => {
            let user = {
                email: "testuser@gmail.com",
                password: "password"
            }
            chai.request(server)
                .post('/api/users/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('User successfully logged in');
                    done();
                });
        });
    });

    describe('/PUT profile', () => {
        it('it should update user profile', (done) => {
            let user = {
                name: "Updated Test User",
                email: "updatedtestuser@gmail.com"
            }
            chai.request(server)
                .put('/api/users/profile')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Profile successfully updated');
                    done();
                });
        });
    });
});
```