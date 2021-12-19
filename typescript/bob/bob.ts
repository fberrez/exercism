function isQuestion(message: string): boolean {
    return message.endsWith('?');
}

function isYelling(message: string): boolean {
    return message === message.toUpperCase() && /[a-zA-Z]/.test(message);
}

export function hey(message: string): string {
    const trimmedMsg = message.trim();
    if (!trimmedMsg) { return 'Fine. Be that way!' }
    if (isYelling(trimmedMsg) && isQuestion(trimmedMsg)) { return "Calm down, I know what I'm doing!" }
    if (isYelling(trimmedMsg)) { return 'Whoa, chill out!' }
    if (isQuestion(trimmedMsg)) { return 'Sure.' }
    return 'Whatever.';
}
