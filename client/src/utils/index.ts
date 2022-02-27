import moment from "moment";

export const isValidDate = (date?: Date) => moment(date)?.isValid();

export const getDiffDays = (date?: Date) => (isValidDate(date) ? moment(date).diff(moment(), "days") : 0);
