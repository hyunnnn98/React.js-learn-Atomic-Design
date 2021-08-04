import { createSlice } from '@reduxjs/toolkit';

import LangCode from '../@types/langCode';

const name = 'user';

const initialState = {
  nickname: {
    data: '',
  },
  language: {
    data: localStorage.getItem('lang') || LangCode.KOREAN,
  },
};

const user = createSlice({
  name,
  initialState,
  reducers: {
    setNickname: (state, action) => {
      state.nickname.data = action.payload;
    },
    setLanguage: (state, action) => {
      state.language.data = action.payload;
    },
  },
});

export default user.reducer;
export const setLanguage = user.actions.setLanguage;
