import { MailService } from './mail.service';

export class SMTPMailService implements MailService {
  async sendMail(): Promise<string> {
    return 'SMTP Mail';
  }
}
