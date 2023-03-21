export interface IEmail {
    Name: string;
    Email: string;
    Message: string;
}

export interface IEmailService {
    SendEmail: (email: IEmail) => Promise<string>;
}