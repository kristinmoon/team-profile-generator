const Employee = require('../lib/Employee.js')

test('creates an employee', () => {
  const employee = new Employee('Stephanie');

  expect(employee.name).toBe('Stephanie');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe(true);
});