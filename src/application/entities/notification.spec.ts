import { Content } from './content';
import { Notification } from './notifications';

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const content = new Notification({
      content: new Content('You received a new notification'),
      category: 'social',
      recipientId: 'any_id',
    });

    expect(content).toBeTruthy();
  });
});
