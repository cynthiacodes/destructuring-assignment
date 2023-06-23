
function listFollowers(followerNames: string[]): string {
  // complete function
  // use array destructuring, for practice!
  const [firstFollower, secondFollowers] = followerNames;
  const followerMessage = `Followed by ${firstFollower}, ${secondFollowers} and others`
  return followerMessage;
}

export default listFollowers;
