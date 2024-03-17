import { gql } from '@apollo/client';

export const GET_REVIEWS_QUERY = gql`
    query GetHotelReviews($hotelId: String!) {
        reviewCollection(where: { hotel: { sys: { id: $hotelId } } }) {
            items {
                customer {
                    sys {
                        id
                    }
                    lastName
                    firstName
                }
                comment {
                    json
                }
                rating
                feedback
            }
        }
    }
`;
