const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Paulina';
    let text = 'I am paulina';
    let message = generateMessage(from, text);
    
    expect(typeof message.createAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Paulina';
    let latitude = 15;
    let longtitude = 19;
    let url = `https://www.google.com/maps?q=15,19`;
    let message = generateLocationMessage(from, latitude, longtitude);

    expect(typeof message.createAt).toBe('number');
    expect(message).toMatchObject({from, url});
  });
});