import { useUserContext } from '@magento/peregrine/lib/context/user';

/**
 * useAccountInformation hook which provides data for AccountInformation component
 * @returns {{currentUser: {id, email, firstname, lastname, is_subscribed}, isSignedIn: boolean}}
 */
export const useAccountInformation = () => {
  const [{ currentUser, isSignedIn }] = useUserContext();

  return {
    currentUser,
    isSignedIn
  };
};
