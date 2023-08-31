import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  breedsData: [],
  loader: true,
};

export const fetchBreeds = createAsyncThunk("breeds/fetchData", async () => {
  const response = await fetch(
    // limit is changeble 1-100, path as parametr
    // `https://api.thecatapi.com/v1/images/search?limit=${limitNum}`,
    // `https://api.thecatapi.com/v1/images/search?limit=10`,
    `https://api.thecatapi.com/v1/breeds?limit=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "live_5LqU17EmpCQCYOqSG260OALJOZNozpPq4mviHyL6UtBP9VEGi6tjgd974EoH1XhD",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.warn(err);
    });
  return response;
});

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBreeds.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchBreeds.fulfilled, (state, action) => {
      state.breedsData = action.payload;
      state.loader = false;
    });
  },
});

export default breedsSlice.reducer;
