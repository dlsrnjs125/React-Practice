// src/features/users/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ⭐️ API 데이터를 가져오는 비동기 액션 생성
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data; // 성공 시 payload로 사용될 값
      } catch (error) {
        return rejectWithValue(error.response?.data || '데이터를 가져오는 중 오류 발생');
      }
    }
  );
 