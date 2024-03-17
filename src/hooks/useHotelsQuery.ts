import { useQuery } from '@apollo/client';
import { GET_HOTELS_QUERY } from '../graphql/hotelsQuery';

export const useHotelsQuery = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_HOTELS_QUERY, {
        notifyOnNetworkStatusChange: true,
    });

    const loadMoreHotels = () => {
        fetchMore({
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return {
                    hotelCollection: {
                        ...fetchMoreResult.hotelCollection,
                        items: [
                            ...prev.hotelCollection.items,
                            ...fetchMoreResult.hotelCollection.items,
                        ],
                    },
                };
            },
        });
    };

    return {
        loading,
        error,
        hotels: data?.hotelCollection.items || [],
        total: data?.hotelCollection.total || 5,
        limit: data?.hotelCollection.limit || 100,
        loadMoreHotels,
    };
};
