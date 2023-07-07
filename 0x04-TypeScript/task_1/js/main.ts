interface Directors extends Teacher {
  numberOfReports: number;
}

// Usage
const director: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: 'London',
  numberOfReports: 5,
};

console.log(director);
