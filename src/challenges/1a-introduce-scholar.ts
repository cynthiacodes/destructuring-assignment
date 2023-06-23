interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}

//parameter destructuring

function introduceScholar(scholar: Scholar) {
  return `${scholar.firstName} ${scholar.lastName} is an Academy Scholar, on Cohort ${scholar.cohortNumber}.`;
}

// function introduceScholar(scholar: Scholar): string {
//   const {firstName, lastName, cohortNumber} = scholar;
//   const message = `${firstName} ${lastName} is an Academy Scholar, on Cohort ${cohortNumber}.`;
//   // use object destructuring, for practice!
//   return message;
// }

export default introduceScholar;
