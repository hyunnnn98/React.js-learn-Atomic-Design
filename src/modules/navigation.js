import { createSlice } from '@reduxjs/toolkit';

const name = 'navigation';

const initialState = {
  navigation: {
    data: '',
  },
};

const navigation = createSlice({
  name,
  initialState,
  reducers: {
    setNavigation: (state, action) => {
      state.navigation.data = action.payload;
    },
  },
});

export default navigation.reducer;
export const setNavigation = navigation.actions.setNavigation;
