interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const formattedName = `${firstInitial}. ${lastName}`;
  return formattedName;
};

// Usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
