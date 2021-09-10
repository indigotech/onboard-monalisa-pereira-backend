import { setup } from '../setup';

before(async () => {
  await setup();
  console.log('Test: setup done!');
});

require('./hello.test');