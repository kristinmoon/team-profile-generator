const Manager = require('../lib/Manager.js')

test('creates a manager object', () => {
  const manager = new Manager('Stephanie');

  expect(manager.name).toBe('Stephanie');
});