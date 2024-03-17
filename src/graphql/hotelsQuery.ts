import { gql } from '@apollo/client';

export const GET_HOTELS_QUERY = gql`
    query GetHotels($skip: Int, $limit: Int) {
        hotelCollection(skip: $skip, limit: $limit) {
            total
            skip
            limit
            items {
                sys {
                    id
                }
                name
                description {
                    json
                }
                imagesCollection(limit: 1) {
                    items {
                        url
                        title
                    }
                }
                rating
                price
                city
                country
                startDate
                endDate
            }
        }
    }
`;
