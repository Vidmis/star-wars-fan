// characterSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Character {
  name: string;
  gender: string;
  birth_year: string;
  mass: string;
}

interface CharacterState {
  data: Character[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

export const fetchCharacterData = createAsyncThunk<Character[], string[]>(
  "characters/fetchCharacterData",
  async (characterUrls: string[]) => {
    const characterDataArray = await Promise.all(
      characterUrls.map(async (url) => {
        const response = await axios.get<Character>(url);
        return response.data;
      })
    );
    return characterDataArray;
  }
);

const initialState: CharacterState = {
  data: [],
  status: "idle",
  error: "",
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacterData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCharacterData.fulfilled,
        (state, action: PayloadAction<Character[]>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchCharacterData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default characterSlice.reducer;
