const Engineer = require('../lib/engineer');
const engineer = new Engineer('Michael', '58078', 'potter0316@gmail.com', 'potter0316');

test('should get the constructor for the engineer', () => {
    expect(engineer.name).toBe('Michael');
    expect(engineer.id).toBe('58078');
    expect(engineer.email).toBe('potter0316@gmail.com');
    expect(engineer.github).toBe('potter0316');
});

test('should get the name from the getName()', () => {
    expect(engineer.getName()).toBe('Michael');
});

test('should get the if from the getId()', () => {
    expect(engineer.getId()).toBe('58078');
})

test('should get the email from the getEmail()', () => {
    expect(engineer.getEmail()).toBe('potter0316@gmail.com');
})

test('should get the if from the getGithub()', () => {
    expect(engineer.getGithub()).toBe('potter0316');
})