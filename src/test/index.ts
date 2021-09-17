import * as dotenv from 'dotenv';
import * as request from "supertest";

import { expect } from 'chai';
import { setup } from '../setup';


before(async () => {
  const path = `${__dirname}/../../test.env`;
  dotenv.config({ path });
  await setup();
});


describe('Query test', function () {
  it('should query Hello', async () => {

    const query = await request(`http://localhost:${process.env.PORT}`).post('/').send({
      query: 'query { hello }'
    });;


    expect(query.body.data.hello).to.equal('Hello World');
    //https://www.chaijs.com/api/bdd/
  });

});
