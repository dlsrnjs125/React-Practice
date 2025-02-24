import { fetchUsers } from "../slices/usersSlice";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 🔥 사용자 Slice 생성
const usersServices = createSlice({
    name: 'users',
    initialState: {
      users: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
      },
    });
    
    export default usersServices.reducer;