/* TODO: types, styles and icons */
import { useReviewsQuery } from '../hooks/useReviewsQuery';

function Reviews({ hotelId }) {
    const { loading, error, reviews } = useReviewsQuery(hotelId);

    if (loading) return <>Loading....</>;
    if (error) return <>Error...</>;

    return (
        <div className="divide-pirate-light divide-y-2">
            {reviews.map((review, index) => (
                <ReviewItem key={index} review={review} />
            ))}
        </div>
    );
}

export default Reviews;

function ReviewItem({ review }) {
    const { customer, comment } = review;

    return (
        <div>
            <div className="flex flex-col pl-4">
                <p className="text-lg font-semibold">
                    {customer.firstName}&nbsp;{review.customer.lastName}
                </p>
                <p className="hyphens-auto">
                    {documentToPlainTextString(comment)}
                </p>
            </div>
        </div>
    );
}
