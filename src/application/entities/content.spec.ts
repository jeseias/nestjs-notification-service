import { Content } from './content';

describe('NotificatinContent', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('You received a new notification');
    expect(content).toBeTruthy();
  });
  it('Should not be able to create a notification content if its content is length less then 3', () => {
    expect(() => new Content('aaa')).toThrow();
  });
  it('Should not be able to create a notification content if its content is length more than 240', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
