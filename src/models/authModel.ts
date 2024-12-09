export interface UserLoginModel {
  email: string;
  password: string;
}

export interface UserRegisterModel extends UserLoginModel {
  fullName: string;
  role: string;
}