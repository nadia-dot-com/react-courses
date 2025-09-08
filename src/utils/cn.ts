type ClassNameArg = string | undefined | null | false;


export function cn(...args: ClassNameArg[]): string {
    return args.filter((arg) => typeof arg === 'string' && arg).join(' ')
}