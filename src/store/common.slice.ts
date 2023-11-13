import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ICommonState = {
  title: string;
  sidebarOpen: boolean;
};

const initialState: ICommonState = {
  title: 'Game room',
  sidebarOpen: false
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    openSidebar: (state) => {
      state.sidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    }
  }
});

export const { setTitle, openSidebar, closeSidebar } = commonSlice.actions;

export default commonSlice.reducer;
