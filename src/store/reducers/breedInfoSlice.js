import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  breedInfo: {},
  loader: true,
};

export const fetchBreedInfo = createAsyncThunk(
  "breedInfo/fetchData",
  async (id) => {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "live_5LqU17EmpCQCYOqSG260OALJOZNozpPq4mviHyL6UtBP9VEGi6tjgd974EoH1XhD",
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.warn(err);
      });
    return response;
  }
);

export const breedInfoSlice = createSlice({
  name: "breedInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBreedInfo.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchBreedInfo.fulfilled, (state, action) => {
      state.breedInfo = action.payload;
      state.loader = false;
    });
  },
});

export default breedInfoSlice.reducer;
