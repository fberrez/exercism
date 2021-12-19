const SURE: string = 'Sure.';
const CHILL: string = 'Whoa, chill out!';
const CALM: string = "Calm down, I know what I'm doing!";
const FINE: string = 'Fine. Be that way!';
const WHATEVER: string = 'Whatever.';

function isQuestion(message: string): boolean {
    return message[message.length - 1] === '?';
}

function isYelling(message: string): boolean {
    return message === message.toUpperCase();
}

function isAnything(message: string): boolean {
    const regexp = /[a-zA-Z]/g;
    return !regexp.test(message);
}

function isFigureOnly(message: string): boolean {
    const regexp = /[0-9]/g;
    const letters = /[a-zA-Z]/g;
    return regexp.test(message) && !letters.test(message);
}

export function hey(message: string): string {
    const trimmedMsg = message.trim();
    if (message.trim().length === 0 ) {
        return FINE;
    }
    
    if (isFigureOnly(trimmedMsg) && isQuestion(trimmedMsg)) {
        return SURE;
    }

    if (isFigureOnly(trimmedMsg)) {
        return WHATEVER;
    }

    if (isYelling(trimmedMsg) && isQuestion(trimmedMsg)) {
        return CALM;
    }

    if (isQuestion(trimmedMsg)) {
        return SURE;
    }

    if (isYelling(trimmedMsg)) {
        return CHILL;
    }


    return WHATEVER;
}
