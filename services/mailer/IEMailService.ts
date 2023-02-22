export interface IEmail {
    name: string;
    email: string;
    message: string;
}

export interface IEmailService {
    SendEmail: (email: IEmail) => Promise<string>;
}