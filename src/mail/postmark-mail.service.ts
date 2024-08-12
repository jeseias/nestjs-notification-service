import { MailService } from './mail.service';

export class PostMarkMailService implements MailService {
  async sendMail(): Promise<string> {
    return 'Post Mark Mail Service!';
  }
}
