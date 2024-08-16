import { Content } from '../entities/content';
import { Notification } from '../entities/notifications';

interface SendNotificationRequest {
  recipientId: string;
  category: string;
  content: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute({
    category,
    content,
    recipientId,
  }: SendNotificationRequest): Promise<SendNotificationResponse> {
    const notification = new Notification({
      category,
      content: new Content(content),
      recipientId,
    });

    return {
      notification,
    };
  }
}
