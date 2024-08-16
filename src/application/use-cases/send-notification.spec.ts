import { SendNotification } from './send-notification';

describe('SendNotification', () => {
  it('Should be able to send a notification', async () => {
    const sut = new SendNotification();

    const { notification } = await sut.execute({
      category: 'social',
      content: 'any_content',
      recipientId: 'any_id',
    });

    expect(notification).toBeTruthy();
  });
});
