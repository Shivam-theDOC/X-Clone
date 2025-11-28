/**
 * Format timestamp to relative time (e.g., "2h", "5m", "3d")
 * @param {Date|string|number} timestamp - The timestamp to format
 * @returns {string} Formatted relative time
 */
export const formatRelativeTime = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((now - past) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds}s`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes}m`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours}h`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return `${diffInDays}d`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
        return `${diffInWeeks}w`;
    }

    // For older posts, show the date
    const month = past.toLocaleString('default', { month: 'short' });
    const day = past.getDate();
    const year = past.getFullYear();

    // If same year, don't show year
    if (year === now.getFullYear()) {
        return `${month} ${day}`;
    }

    return `${month} ${day}, ${year}`;
};

/**
 * Format timestamp to full date (e.g., "Nov 23, 2025")
 * @param {Date|string|number} timestamp - The timestamp to format
 * @returns {string} Formatted date
 */
export const formatFullDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
};
