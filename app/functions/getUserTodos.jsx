export default async function getUserTodos(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  );
  if (!response.ok) {
    throw new Error("failed to get todos");
  }
  return await response.json();
}
