var person = {
  firstName: 'Nick',
  lastName: 'Cardoza',
  hobby: 'Archery'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is:", fullName + '.');

person.job = 'Master Thinker on a new path to consume all coffee';

console.log("The person's current job is:", person.job + '.');

person.previousJob = 'Specialty Welder and Faricator';

console.log("The person's previous job was:", person.previousJob + '.');

console.log('The complete person object:', person);
