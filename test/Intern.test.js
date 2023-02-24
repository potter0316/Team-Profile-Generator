const Intern = require('../lib/intern');
const intern = new Intern('Michael', '58078', 'potter0316@gmail.com', 'Minnesota');

test('should return the constructors for the engineer', () => {
    expect(intern.name).toBe('Michael');
    expect(intern.id).toBe('58078');
    expect(intern.email).toBe('potter0316@gmail.com');
    expect(intern.school).toBe('Minnesota');
});

test('should return the name from the getName', () => {
    expect(intern.getName()).toBe('Michael');
});

test('should return the id from the getId', () => {
    expect(intern.getId()).toBe('58078');
});

test('should return the email from the getEmail', () => {
    expect(intern.getEmail()).toBe('potter0316@gmail.com');
});

test('should return the officeNumber from the getofficeNumber', () => {
    expect(intern.getOfficeNumber()).toBe('1632');
});