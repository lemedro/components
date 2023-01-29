import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
	test('Button componenti renderlaniyo', () => {
		render(<Button label='Hello world!' />);
	});
});
