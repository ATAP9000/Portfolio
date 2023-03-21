import { IEmail, IEmailService } from "./IEMailService";

// TODO
export class MailerService implements IEmailService {
    public SendEmail = async (email: IEmail): Promise<string> => {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        });

        const data = await response.json();

        return data;
    }
}