import React from 'react';
import { useAccountInformation } from './useAccountInformation';
import { Redirect } from '@magento/venia-drivers';

const AccountInformation = () => {
  const { currentUser, isSignedIn } = useAccountInformation();

  if (!isSignedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Account information</h1>

      <ul>
        <li>
          <strong>First name: </strong>
          <span>{currentUser.firstname}</span>
        </li>
        <li>
          <strong>Last name: </strong>
          <span>{currentUser.lastname}</span>
        </li>
      </ul>
    </div>
  );
};

export default AccountInformation;
