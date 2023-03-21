import { IEmail, IEmailService } from "./IEMailService";

// TODO
export class MailerService implements IEmailService {
    public SendEmail = async (email: IEmail): Promise<string> => {
        const response = await fetch("https://localhost:7140/Email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        });

        const data = await response.json();

        return data.message
    }
}