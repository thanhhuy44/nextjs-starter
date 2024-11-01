export type User = {
  _id: string;
  email: string;
  fullName: string;
};

export type LoginBody = {
  email: string;
  password: string;
};
