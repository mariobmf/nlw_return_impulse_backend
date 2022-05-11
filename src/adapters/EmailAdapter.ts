export interface SendEmailDTO {
  subject: string;
  body: string;
}

export interface EmailAdapter {
  sendEmail: (data: SendEmailDTO) => Promise<void>;
}
