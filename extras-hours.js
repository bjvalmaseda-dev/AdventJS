function countHours(year, holidays) {
  const hoursReduce = (acc, item) => {
    const [month, day] = item.split("/");
    const date = new Date(year, month - 1, day);
    if (date.getDay() === 0 || date.getDay() === 6) {
      return acc;
    }
    return acc + 2;
  };

  return holidays.reduce(hoursReduce, 0);
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

console.log(countHours(year, holidays)); // 2 days -> 4 extra hours in the year
