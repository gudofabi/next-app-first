export default function ProductDetails({
  params,
}: {
  params: { blogId: string };
}) {
  return (
    <>
      <h1>Content of the blog #{params.blogId}</h1>
    </>
  );
}
