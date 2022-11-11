import { isToday } from "date-fns";
import { isYesterday } from "~/util/isYesterday.mjs";

console.log(isToday(new Date()), isYesterday(new Date()));
