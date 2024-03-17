import { render, screen } from '@testing-library/react';
import HotelReviews from '../components/Reviews';
import { useReviewsQuery } from '../hooks/useReviewsQuery';

jest.mock('../hooks/useReviewsQuery', () => ({
    useReviewsQuery: jest.fn(),
}));

jest.mock('@contentful/rich-text-plain-text-renderer', () => ({
    documentToPlainTextString: jest
        .fn()
        .mockImplementation(() => 'Sample comment'),
}));

jest.mock('../hooks/useReviewsQuery');

describe('HotelReviews', () => {
    it('displays the loading state correctly', () => {
        (useReviewsQuery as jest.Mock).mockReturnValue({ loading: true });
        render(<HotelReviews hotelId="1" />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('displays an error message on failure', () => {
        (useReviewsQuery as jest.Mock).mockReturnValue({ error: true });
        render(<HotelReviews hotelId="1" />);

        expect(screen.getByRole('alert')).toBeInTheDocument();
    });
});
