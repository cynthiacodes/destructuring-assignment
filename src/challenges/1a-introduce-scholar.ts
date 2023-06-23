interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}

function introduceScholar(scholar: Scholar): string {
  const {firstName, lastName, cohortNumber} = scholar;
  const message = `${firstName} ${lastName} is an Academy Scholar, on Cohort ${cohortNumber}.`;
  // use object destructuring, for practice!
  return message;
}

export default introduceScholar;
