export {}; // Make this file a module

declare global {
  interface Date {
    getDateMonthYear(): string;
  }
}

Date.prototype.getDateMonthYear = function () {
  const day = this.getDate();
  const month = this.getMonth() + 1; // Months are 0-indexed
  const year = this.getFullYear();
  return `${day}-${month}-${year}`;
};
