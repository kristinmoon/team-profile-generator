const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
  const employee = new Employee('Stephanie');

  expect(employee.name).toBe('Stephanie');
});