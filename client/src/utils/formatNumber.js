/**
 * Format large numbers to K/M format (e.g., 1.8K, 30K, 108M)
 * @param {number} num - The number to format
 * @returns {string} Formatted number
 */
export const formatNumber = (num) => {
    if (num === null || num === undefined) {
        return '0';
    }

    const absNum = Math.abs(num);

    if (absNum < 1000) {
        return num.toString();
    }

    if (absNum < 1000000) {
        const formatted = (num / 1000).toFixed(1);
        // Remove .0 if it's a whole number
        return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'K' : formatted + 'K';
    }

    if (absNum < 1000000000) {
        const formatted = (num / 1000000).toFixed(1);
        // Remove .0 if it's a whole number
        return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'M' : formatted + 'M';
    }

    const formatted = (num / 1000000000).toFixed(1);
    // Remove .0 if it's a whole number
    return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'B' : formatted + 'B';
};

/**
 * Format number with commas (e.g., 1,234,567)
 * @param {number} num - The number to format
 * @returns {string} Formatted number with commas
 */
export const formatNumberWithCommas = (num) => {
    if (num === null || num === undefined) {
        return '0';
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
