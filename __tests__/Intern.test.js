const Intern = require('../lib/Intern.js')

test('creates an intern object', () => {
  const intern = new Intern('Stephanie');

  expect(intern.name).toBe('Stephanie');
});