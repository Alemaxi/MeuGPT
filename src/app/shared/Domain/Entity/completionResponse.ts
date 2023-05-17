import { MensagemChat } from "./mensagemChat";

export class CompletionResponse {
    id: string | undefined;
    object: string | undefined;
    created: number | undefined;
    choices: Choice[] = [];
}

export class Choice{
    index: number | undefined;
    message: MensagemChat | undefined;
    finish_reason: string | undefined;
}

export class Usage {
    prompt_tokens: number | undefined;
    completion_tokens: number | undefined;
    total_tokens: number | undefined;
}