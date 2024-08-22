import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('SendNotification', () => {
  it('Should be able to send a notification', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();
    const sut = new SendNotification(inMemoryNotificationsRepository);

    const { notification } = await sut.execute({
      category: 'social',
      content: 'any_content',
      recipientId: 'any_id',
    });

    expect(inMemoryNotificationsRepository.notifications).toHaveLength(1);
    expect(inMemoryNotificationsRepository.notifications[0]).toEqual(
      notification,
    );
  });
});
