import { MensagemChat } from "./mensagemChat";

export class ChatCompletion{
    model: string | undefined;
    messages: MensagemChat[] = [];
    temperature: number | undefined;
    top_p: number | undefined;
    n: number | undefined;
}