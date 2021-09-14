export function IsTelephone(phone: string): boolean {
    const re = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
    return re.test(String(phone).toLowerCase());
}