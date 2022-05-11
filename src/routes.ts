import { Router } from 'express';
import { NodemailerEmailAdapter } from './adapters/nodemailer/NodemailerEmailAdapter';
import { PrismaFeedbackRepository } from './repositories/prisma/PrismaFeedbackRepository';
import { SubmitFeedbackUseCase } from './services/SubmitFeedbackUseCase';

export const routes = Router();

routes.post('/feedback', async (req, res) => {
  const { comment, type, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodemailerEmailAdapter = new NodemailerEmailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerEmailAdapter,
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
