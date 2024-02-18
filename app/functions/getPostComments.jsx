export default async function getPostComments(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  if (!response.ok) {
    throw new Error("failed to get comments");
  }
  return await response.json();
}
