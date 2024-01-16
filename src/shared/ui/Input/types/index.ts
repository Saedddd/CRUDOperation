export interface IInput{
    type?: string;
    value?: string;
    onChange?: ((value: string) =>void) | undefined;
    className?: string;
    placeholder?: string;
}