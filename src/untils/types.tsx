export interface InputDate {
    day: string;
    month: string;
    year: string
}
export type KeyOfErrorContent = (
    'invalidDate'
    | 'invalidYear'
    | 'invalidMonth'
    | 'invalidDay'
    | 'emptyField'
    | 'valid'
    | 'empty'
);

export type ReturnedErrors = {
    day: KeyOfErrorContent,
    month: KeyOfErrorContent,
    year: KeyOfErrorContent,
}