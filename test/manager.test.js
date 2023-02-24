const Manager = require('../lib/Manager');
const manager = new Manager('Michael', '58078', 'potter0316@gmail.com', '1632');

test('should return constructor for the manager', () => {
    expect(manager.name).toBe('Michael');
    expect(manager.id).toBe('58078');
    expect(manager.email).toBe('potter0316@gmail.com');
    expect(manager.officeNumber).toBe('1632');
});

test('should return the name from the getName', () => {
    expect(manager.getName()).toBe('Michael');
});

test('should return the id from the getId', () => {
    expect(manager.getId()).toBe('58078');
});

test('should return the email from the getEmail', () => {
    expect(manager.getEmail()).toBe('potter0316@gmail.com');
});

test('should return the officeNumber from the getofficeNumber', () => {
    expect(manager.getOfficeNumber()).toBe('1632');
});