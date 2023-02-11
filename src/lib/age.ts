export function calculateAge() {
  const currentDate = new Date();

  let age = currentDate.getFullYear() - 2004;
  if (currentDate.getMonth() + 1 < 5) {
    age -= 1;
  }

  return age;
}
