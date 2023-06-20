import { Department } from './department';
import { Manager } from './manager';
import { User } from './user';


describe('Manager', () => {
  it('should create an instance', () => {
    expect(new Manager(0, '', '', '', '', '', new User(0, '', '', ''), new Department(0, ''))).toBeTruthy();
  });
});
