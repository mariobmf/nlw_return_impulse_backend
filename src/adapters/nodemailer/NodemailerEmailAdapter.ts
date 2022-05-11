import nodemailer, { Transporter } from 'nodemailer';
import { EmailAdapter, SendEmailDTO } from '../EmailAdapter';

export class NodemailerEmailAdapter implements EmailAdapter {
  private transport: Transporter;

  constructor() {
    this.transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail({ body, subject }: SendEmailDTO) {
    await this.transport.sendMail({
      from: 'Equipe FeedGet <oi@feedget.com>',
      to: 'Teste <teste@email.com>',
      subject,
      html: body,
    });
  }
}
