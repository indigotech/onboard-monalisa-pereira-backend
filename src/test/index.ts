import * as dotenv from 'dotenv';
import { expect } from 'chai';
import { setup } from '../setup';

import supertest = require('supertest');

before(async () => {
  const path = `${__dirname}/../../test.env`;
  dotenv.config({ path });
  await setup();
});


describe('Query test', function () {
  it('should query Hello', async () => {

    const query = await supertest(`http://localhost:${process.env.PORT}`).post('/').send({
      query: 'query { hello }'
    });;
    
    expect(query.body.data.hello).to.equal('Hello World');
    //https://www.chaijs.com/api/bdd/
  });

});
