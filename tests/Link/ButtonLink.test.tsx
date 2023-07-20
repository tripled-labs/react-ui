import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonLink } from '#components/Link';

describe('Button Link', () => {
	it('should get the label', () => {
		render(<ButtonLink label='A Button' variant='filled' color='primary' href='https://example.com' />);

		const label = screen.getByText(/a button/i);

		expect(label).toBeInTheDocument();
	});
});