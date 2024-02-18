export default async function getUser() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!response.ok) {
    throw new Error("failed to get users");
  }
  return await response.json();
}
