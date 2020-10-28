import React from 'react';
import { useAccountInformation } from '../../talons/AccountInformation/useAccountInformation';
import { Redirect } from '@magento/venia-drivers';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './accountInformation.css';

const AccountInformation = props => {
  const classes = mergeClasses(defaultClasses, props.classes);
  const { currentUser, isSignedIn } = useAccountInformation();

  if (!isSignedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Account information</h1>

      <ul className={classes.list}>
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
