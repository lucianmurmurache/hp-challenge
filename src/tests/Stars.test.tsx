import { render, screen } from '@testing-library/react';
import Stars from '../components/Stars';

describe('Stars', () => {
    test.each([0, 1, 2, 3, 4, 5])(
        'renders %i gold star(s) correctly',
        (rating) => {
            render(<Stars rating={rating} />);
            const stars = screen.getAllByText('★');
            expect(stars).toHaveLength(5);
            stars.forEach((star, index) => {
                expect(star).toHaveStyle(
                    `color: ${index < rating ? '#6a3460' : 'gray'}`
                );
            });
            expect(screen.getByTitle(`${rating} stars`)).toBeInTheDocument();
        }
    );

    test('displays the correct accessibility text for screen readers', () => {
        const testRating = 3;
        render(<Stars rating={testRating} />);
        const accessibleTextElements = screen.getAllByText(
            `${testRating} star rating`
        );
        expect(accessibleTextElements).toHaveLength(5);
        accessibleTextElements.forEach((element) => {
            expect(element).toBeInTheDocument();
        });
    });
});
