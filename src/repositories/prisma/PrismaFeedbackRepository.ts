import { prisma } from '../../prisma';
import { FeedbackCreateDTO, FeedbackRepository } from '../FeedbackRepository';

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackCreateDTO) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
