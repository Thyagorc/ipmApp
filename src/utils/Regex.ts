export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const validateNumber = (numero: number) => {
    const regex = /^\(?\d{2}\)?[- ]?\d{5}[- ]?\d{4}$/;
    return regex.test(numero.toString());
}
