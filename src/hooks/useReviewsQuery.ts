import { useQuery } from '@apollo/client';
import { GET_REVIEWS_QUERY } from '../graphql/reviewsQuery';

export const useReviewsQuery = (hotelId: string) => {
    const { loading, error, data } = useQuery(GET_REVIEWS_QUERY, {
        variables: { hotelId },
        skip: !hotelId,
    });

    return {
        loading,
        error,
        reviews: data?.reviewCollection.items || [],
    };
};
