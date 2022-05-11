import { SubmitFeedbackUseCase } from '../SubmitFeedbackUseCase';

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

let submitFeedback: SubmitFeedbackUseCase;

describe('Submit feedback', () => {
  beforeEach(() => {
    submitFeedback = new SubmitFeedbackUseCase(
      { create: createFeedbackSpy },
      { sendEmail: sendEmailSpy },
    );
  });

  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Bug Teste',
        screenshot: 'data:image/png;base64,asdhhfdfhfhh',
      }),
    ).resolves.not.toThrow();
  });

  it('should not be able to submit a feedback without type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'Bug Teste',
        screenshot: 'data:image/png;base64,asdhhfdfhfhh',
      }),
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,asdhhfdfhfhh',
      }),
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback with invalid screenshot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Bug Teste',
        screenshot: 'image_teste.png',
      }),
    ).rejects.toThrow();
  });
});
