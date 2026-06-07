export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export class LocalBoxError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LocalBoxError";
  }
}
