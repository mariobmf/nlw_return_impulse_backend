export interface FeedbackCreateDTO {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create: (data: FeedbackCreateDTO) => Promise<void>;
}
