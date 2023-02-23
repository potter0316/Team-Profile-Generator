const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const Employee = require('../lib/Employee');
const employee = new Employee('Michael', '58078', 'potter0316@gmail.com');

test('should return the constructor values for the employee object', () => {
    expect(employee.name).toBe('Michael');
    expect(employee.id).toBe('58078');
    expect(employee.email).toBe('potter0316@gmail.com');
});

test('should return the name from the getName()', () => {
    expect(employee.getName()).toBe('Michael');
});

test('should return the id from the getId()', () => {
    expect(employee.getId()).toBe("58078");
})

test('should return the email from the getEmail()', () => {
    expect(employee.getEmail()).toBe("58078");
})

test('should return the role from the getRole()', () => {
    expect(employee.getRole()).toBe("Employee");
})