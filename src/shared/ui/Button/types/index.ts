export interface IButton{
    type?: "submit" | "reset" | "button" | undefined;
    onClick?:()=>void;
    className?: string;
    children?: React.ReactNode;
}