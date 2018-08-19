const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Paulina';
    let text = 'I am paulina';
    let message = generateMessage(from, text);
    
    expect(typeof message.createAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});