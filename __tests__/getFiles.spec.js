const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.NODE_ENV);
test('testing test setup', () => {
  expect(true).toBe(true);
});
