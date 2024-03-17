import { useReviewsQuery } from '../hooks/useReviewsQuery';

import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import type { Document } from '@contentful/rich-text-types';

import Loading from './common/Loading';
import ErrorMessage from './common/ErrorMessage';

type HotelReviewsProps = {
    hotelId: string;
};

type Customer = {
    sys: {
        id: string;
    };
    lastName: string;
    firstName: string;
};

type Review = {
    comment: {
        json: Document;
    };
    rating: number;
    customer: Customer;
};

type ReviewItemProps = {
    review: Review;
};

function HotelReviews({ hotelId }: HotelReviewsProps) {
    const { loading, error, reviews } = useReviewsQuery(hotelId);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage />;

    return (
        <div className="divide-pirate-light divide-y-2">
            {reviews.map((review: Review, index: number) => (
                <ReviewItem key={index} review={review} />
            ))}
        </div>
    );
}

export default HotelReviews;

function ReviewItem({ review }: ReviewItemProps) {
    const { rating, customer, comment } = review;
    const isPositiveReview = rating > 7;
    const reviewStyles = isPositiveReview
        ? 'bg-green-100 text-green-900'
        : 'rounded-b bg-red-100 text-red-900';

    return (
        <div className={`flex items-center p-5 md:p-10 ${reviewStyles}`}>
            <img
                src={isPositiveReview ? '/plus.svg' : '/minus.svg'}
                alt={isPositiveReview ? 'Positive review' : 'Negative review'}
                className="h-14 w-14"
            />
            <div className="flex flex-col pl-4">
                <p className="text-lg font-semibold">
                    {customer.firstName}&nbsp;{review.customer.lastName}
                </p>
                <p className="hyphens-auto">
                    {documentToPlainTextString(comment.json)}
                </p>
            </div>
        </div>
    );
}
