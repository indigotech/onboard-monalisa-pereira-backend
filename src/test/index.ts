import { setup } from '../setup';

before(async () => {
  await setup();
  console.info('Test: setup done!');
});

require('./hello.test');
