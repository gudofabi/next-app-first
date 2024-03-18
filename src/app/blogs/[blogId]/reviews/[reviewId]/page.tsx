export default function ReviewDetails({
  params,
}: {
  params: {
    blogId: string;
    reviewId: string;
  };
}) {
  return (
    <>
      <h1>
        Review {params.reviewId} from blog {params.blogId}
      </h1>
    </>
  );
}
