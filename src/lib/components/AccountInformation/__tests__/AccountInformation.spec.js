import React from 'react';
import { default as createTestInstance } from '@magento/peregrine/lib/util/createTestInstance';
import { useAccountInformation } from '../../../talons/AccountInformation/useAccountInformation';
import AccountInformation from '../AccountInformation';

jest.mock(
    '@marcinkwiatkowski/customer-menu/src/lib/talons/AccountInformation/useAccountInformation'
);
jest.mock('@magento/venia-ui/lib/classify');
jest.mock('@magento/peregrine/lib/context/user', () => {
    const userState = {
        isGettingDetails: false,
        getDetailsError: null
    };
    const userApi = {
        getUserDetails: jest.fn(),
        setToken: jest.fn(),
        signIn: jest.fn()
    };
    const useUserContext = jest.fn(() => [userState, userApi]);

    return { useUserContext };
});

jest.mock('@magento/venia-ui/lib/drivers', () => ({
    Redirect: props => <mock-Redirect {...props} />
}));

test('Redirects when not authenticated', () => {
    useAccountInformation.mockReturnValue({
        isSignedIn: false,
        currentUser: null
    });

    const tree = createTestInstance(<AccountInformation />);
    expect(tree.toJSON()).toMatchSnapshot();
});

test('Display page when user is signed in', () => {
    useAccountInformation.mockReturnValue({
        isSignedIn: true,
        currentUser: {
            firstname: 'Marcin',
            lastname: 'Kwiatkowski'
        }
    });

    const tree = createTestInstance(<AccountInformation />);
    expect(tree.toJSON()).toMatchSnapshot();
});
