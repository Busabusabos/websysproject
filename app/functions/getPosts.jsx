export default async function getPosts() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (!response.ok) {
    throw new Error("failed to get posts");
  }
  return await response.json();
}
