import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Film } from "../../api/starWarsTypes";

const api = axios.create({
  baseURL: "https://swapi.dev/api",
});

// Async thunks
export const fetchFilms = createAsyncThunk<Film[], void>(
  "films/fetchFilms",
  async () => {
    const response = await api.get("/films/");
    return response.data.results;
  }
);

// Initial state
interface FilmsState {
  films: Film[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FilmsState = {
  films: [],
  status: "idle",
  error: null,
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch films
      .addCase(fetchFilms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilms.fulfilled, (state, action: PayloadAction<Film[]>) => {
        state.status = "succeeded";
        state.films = action.payload;
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch films";
      });
  },
});

export default filmsSlice.reducer;
