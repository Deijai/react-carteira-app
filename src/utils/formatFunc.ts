export const formatCurrency = (current: number): string => {
    return current.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}

export const formatDate = (date: string): string => {
    const dateFormat = new Date(date);
    const day = dateFormat.getDate() < 10 ? '0'+dateFormat.getDate() : dateFormat.getDate();
    const month = (dateFormat.getMonth() + 1) < 10 ? '0'+(dateFormat.getMonth() + 1) : (dateFormat.getMonth() + 1);
    const year = dateFormat.getFullYear();
    return `${day}/${month}/${year}`;
}