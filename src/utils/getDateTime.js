export const generateRange = (start, length) => Array.from({ length }, (_, i) => start + i)

export const getYears = (startYear, count) => generateRange(startYear, count)
export const getMonths = () => generateRange(1, 12)
export const getDays = () => generateRange(1, 31)
export const getHours = () => generateRange(0, 24)
export const getMinutes = () => generateRange(0, 60)
