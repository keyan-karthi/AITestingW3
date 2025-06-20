export class ErrorHandler {
  static handle(error: unknown, context?: string) {
    const message = context ? `[${context}] ` : '';
    if (error instanceof Error) {
      console.error(`${message}${error.name}: ${error.message}\n${error.stack}`);
    } else {
      console.error(`${message}Unknown error:`, error);
    }
    // Optionally, add more sophisticated logging or reporting here
  }
} 