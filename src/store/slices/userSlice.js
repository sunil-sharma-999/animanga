import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  favorites: {},
  favList: [],
};

const userSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    setData(state, action) {
      const { favorites, username } = action.payload;
      state.favList = Object.keys(action.payload.favorites);
      state.favorites = favorites;
      state.username = username;
    },
    updateFavorite(state, action) {
      const { data, typename } = action.payload;
      const path = `${typename}:${data.mal_id}`;
      const index = state.favList.indexOf(path);
      if (index === -1) {
        state.favList.push(path);
        state.favorites[path] = data;
      } else {
        state.favList.splice(index, 1);
        delete state.favorites[path];
      }
      return state;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
