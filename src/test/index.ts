import * as request from 'supertest';

import { expect } from 'chai';
import { setup } from '../setup';
import { UserInput } from '../schema/typedefs';
import { getConnection } from 'typeorm';
// import { getConnection } from 'typeorm';

before(async () => {
  await setup();
});

describe('Query test', function () {
  it('should query Hello', async () => {
    const query = await request(`http://localhost:${process.env.PORT}`).post('/').send({
      query: 'query { hello }',
    });

    expect(query.body.data.hello).to.equal('Hello World!');
    //https://www.chaijs.com/api/bdd/
  });
});

describe('Create user mutation', function () {
  const input: UserInput = {
    name: 'monaaa',
    email: 'monaaa@taqtile.com.br',
    password: '12345ffgqwer',
    birthDate: '01-01-1999',
  };

  const createUser = `
    mutation createUser($data: UserInput!) {
      createUser(data: $data) {
        id
        name
        email
        birthDate
      }
    }
  `;

  beforeEach(async () => {
    await getConnection().manager.clear("User");
  });

  it('Should create a user in the database.', async () => {
    const response = await request(`http://localhost:${process.env.PORT}`)
      .post('/')
      .send({
        query: createUser,
        variables: { data: input },
      });

    expect(response.body.data.createUser.name).to.equal(input.name);
    expect(response.body.data.createUser.email).to.equal(input.email);
    expect(response.body.data.createUser.birthDate).to.equal(input.birthDate);
  });
});
