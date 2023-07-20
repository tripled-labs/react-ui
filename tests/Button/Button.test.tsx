import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '#components/Button';
import { vi } from 'vitest';

describe('Button', () => {
	it('should get the label', () => {
		render(<Button label='Click me!' variant='filled' color='primary' />);

		const label = screen.getByText(/click me!/i);

		expect(label).toBeInTheDocument();
	});

	it('should not get clicked', () => {
		const handleClick = vi.fn();

		render(<Button label='Do not click me!' variant='filled' color='primary' onClick={handleClick} disabled />);

		fireEvent.click(screen.getByRole('button'));

		expect(handleClick).toHaveBeenCalledTimes(0);
	});
});