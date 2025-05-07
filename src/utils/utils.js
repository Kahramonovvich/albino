export const formatCurrency = (value) => {
    if (!value && value !== 0) return '';
    const formatted = String(value)
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${formatted} so’m`;
};