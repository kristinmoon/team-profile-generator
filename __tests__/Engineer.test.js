const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
  const engineer = new Engineer('Stephanie');

  expect(engineer.name).toBe('Stephanie');
});