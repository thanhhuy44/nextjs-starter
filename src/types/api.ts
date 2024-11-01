/* eslint-disable @typescript-eslint/no-explicit-any */
export type ApiResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};
