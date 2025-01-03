export interface UserLoginModel {
    email: string;
    password: string;
}

export interface UserRegisterModel extends UserLoginModel {
    fullName: string;
    role: string;
}

export interface ReqUserRegisterModel {
    userData: UserRegisterModel;
    navigate: (path: string) => void;
}

export interface ReqUserLoginModel {
    userData: UserLoginModel;
    navigate: (path: string) => void;
}
