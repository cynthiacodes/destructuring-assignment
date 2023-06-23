// parameter destructuring

function listFollowers([firstFollower, secondFollowers]: string[]): string {
  return `Followed by ${firstFollower}, ${secondFollowers} and others`;
}

// function listFollowers(followerNames: string[]): string {
//   use array destructuring, for practice!
//   const [firstFollower, secondFollowers] = followerNames;
//   const followerMessage = `Followed by ${firstFollower}, ${secondFollowers} and others`
//   return followerMessage;
// }

export default listFollowers;
