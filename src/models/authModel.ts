export interface FormLoginModel {
  email: string;
  password: string;
}

export interface FormRegisterModel extends FormLoginModel {
  fullName: string;
  role: string;
}