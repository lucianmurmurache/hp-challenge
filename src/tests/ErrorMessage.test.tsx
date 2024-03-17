import { render, screen } from '@testing-library/react';
import ErrorMessage from '../components/common/ErrorMessage';

describe('ErrorMessage', () => {
    test('renders correctly', () => {
        render(<ErrorMessage />);

        expect(screen.getByRole('alert')).toBeInTheDocument();

        expect(screen.getByText('Oops!')).toBeInTheDocument();
        expect(
            screen.getByText('Something went terribly wrong.')
        ).toBeInTheDocument();
    });

    test('has appropriate classNames for styling', () => {
        render(<ErrorMessage />);
        const titleDiv = screen.getByText('Oops!').closest('div');
        const messageDiv = screen
            .getByText('Something went terribly wrong.')
            .closest('div');
        expect(titleDiv).toHaveClass(
            'rounded-t bg-red-700 px-4 py-2 font-bold text-red-100'
        );
        expect(messageDiv).toHaveClass(
            'rounded-b border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700'
        );
    });
});
