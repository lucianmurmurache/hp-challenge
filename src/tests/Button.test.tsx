import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/common/Button';

describe('Button', () => {
    test('renders with the correct label', () => {
        render(<Button label="Click me" onClick={() => {}} />);
        expect(
            screen.getByRole('button', { name: 'Click me' })
        ).toBeInTheDocument();
    });

    test('calls the onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Button label="Click me" onClick={handleClick} />);
        fireEvent.click(screen.getByRole('button', { name: 'Click me' }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('is disabled when the disabled prop is true', () => {
        render(
            <Button
                label="Can't click this"
                onClick={() => {}}
                disabled={true}
            />
        );
        expect(
            screen.getByRole('button', { name: "Can't click this" })
        ).toBeDisabled();
    });

    test('is focusable when not disabled', () => {
        render(<Button label="Focus on me" onClick={() => {}} />);
        const button = screen.getByRole('button', { name: 'Focus on me' });
        button.focus();
        expect(button).toHaveFocus();
    });
});
