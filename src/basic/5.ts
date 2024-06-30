enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek) => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return false;
  } else {
    return true;
  }
};
console.log(isWeekend(DayOfWeek.Saturday));

export {};
