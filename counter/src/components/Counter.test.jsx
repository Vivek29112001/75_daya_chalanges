import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './counter';
import '@testing-library/jest-dom';

describe('Counter Component', () => {
  test('renders Counter with initial count', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('Count: 0');
  });

  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    const button = screen.getByTestId('increment-btn');
    fireEvent.click(button);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('Count: 1');
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const button = screen.getByTestId('decrement-btn');
    fireEvent.click(button);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('Count: -1');
  });
});
