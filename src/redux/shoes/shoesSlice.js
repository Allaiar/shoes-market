import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shoesService from "../services/shoesServices";

export const getShoes = createAsyncThunk("GET_SHOES", async (_, thunkApi) => {
  try {
    return shoesService.getShoes();
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

export const createShoes = createAsyncThunk(
  "CREATE_SHOES",
  async (shoesData, thunkApi) => {
    try {
      return shoesService.createShoes(shoesData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const shoesSlice = createSlice({
  name: "shoes",
  initialState: {
    shoes: null,
    isError: false,
    isLoading: false,
    message: "",
    categories: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getShoes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getShoes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shoes = action.payload;
      state.categories = action.payload.reduce((acc, shoe) => {
        if (!acc[shoe.category]) {
          acc[shoe.category] = [];
        }
        acc[shoe.category].push(shoe);
        return acc;
      }, []);
    });
    builder.addCase(getShoes.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.shoes = null;
    });
    builder.addCase(createShoes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createShoes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(createShoes.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.shoes = null;
    });
  },
});

export default shoesSlice.reducer;
