const data = require('../data/zoo_data');

const schedule = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: data.species.filter((specie) => specie.availability.includes('Tuesday'))
      .map((item) => item.name),
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: data.species.filter((specie) => specie.availability.includes('Wednesday'))
      .map((item) => item.name),
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: data.species.filter((specie) => specie.availability.includes('Thursday'))
      .map((item) => item.name),
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: data.species.filter((specie) => specie.availability.includes('Friday'))
      .map((item) => item.name),
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: data.species.filter((specie) => specie.availability.includes('Saturday'))
      .map((item) => item.name),
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: data.species.filter((specie) => specie.availability.includes('Sunday'))
      .map((item) => item.name),
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const getSchedule = (scheduleTarget) => {
  const animal = data.species.find((target) => target.name === scheduleTarget);
  if (animal) {
    return animal.availability;
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: schedule.Monday };
  }
  if (Object.keys(schedule).includes(scheduleTarget)) {
    console.log(Object.keys(schedule));
    console.log(Object.keys(schedule).includes(scheduleTarget));
    const obj = {};
    obj[scheduleTarget] = schedule[scheduleTarget];
    return obj;
  }
  return schedule;
};

module.exports = getSchedule;
