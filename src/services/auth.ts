import { ApiResponse } from "@/types/api";
import { REQUEST_METHOD } from "@/types/enum";
import { LoginBody, User } from "@/types/user";
import ApiFetch from "@/utils/fetch";

export const AuthService = {
  login: async (
    body: LoginBody
  ): Promise<
    ApiResponse<{ info: User; token: string; refreshToken: string }>
  > => {
    return await ApiFetch("/auth/login", {
      method: REQUEST_METHOD.POST,
      body: JSON.stringify(body),
    }).then((res) => res.json());
  },
};
