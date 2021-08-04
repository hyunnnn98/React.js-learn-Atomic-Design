import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { setLanguage } from '../modules/user';

export default function useUser() {
  const { language } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onSetLanguage = useCallback(
    language => {
      dispatch(setLanguage(language));
    },
    [dispatch]
  );

  return {
    languageData: language.data,
    onSetLanguage,
  };
}
