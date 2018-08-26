const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach( () => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Victor',
      room: 'VP Talk'
    }, {
      id: '2',
      name: 'Paulina',
      room: 'VP'
    }, {
      id: '3',
      name: 'Emma',
      room: 'VP Talk'
    }]
  });
  
  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Victor',
      room: 'VP Talk'
    };
    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user',() => {
    let userId = '1';
    let user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    let userId = '99';
    let user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let userId = '2';
    let user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    let userId = '99';
    let user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('should return names for VP Talk', () => {
    let userList = users.getUserList('VP Talk');

    expect(userList).toEqual(['Victor', 'Emma']);
  });

  it('should return names for VP', () => {
    let userList = users.getUserList('VP');

    expect(userList).toEqual(['Paulina']);
  });
});