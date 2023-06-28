import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_mini_list = createAsyncThunk(
  "minis/api_v1_mini_list",
  async payload => {
    const response = await apiService.api_v1_mini_list(payload)
    return response.data
  }
)
export const api_v1_mini_create = createAsyncThunk(
  "minis/api_v1_mini_create",
  async payload => {
    const response = await apiService.api_v1_mini_create(payload)
    return response.data
  }
)
export const api_v1_mini_retrieve = createAsyncThunk(
  "minis/api_v1_mini_retrieve",
  async payload => {
    const response = await apiService.api_v1_mini_retrieve(payload)
    return response.data
  }
)
export const api_v1_mini_update = createAsyncThunk(
  "minis/api_v1_mini_update",
  async payload => {
    const response = await apiService.api_v1_mini_update(payload)
    return response.data
  }
)
export const api_v1_mini_partial_update = createAsyncThunk(
  "minis/api_v1_mini_partial_update",
  async payload => {
    const response = await apiService.api_v1_mini_partial_update(payload)
    return response.data
  }
)
export const api_v1_mini_destroy = createAsyncThunk(
  "minis/api_v1_mini_destroy",
  async payload => {
    const response = await apiService.api_v1_mini_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const minisSlice = createSlice({
  name: "minis",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_mini_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mini_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mini_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mini_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mini_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mini_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mini_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_mini_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_mini_list,
  api_v1_mini_create,
  api_v1_mini_retrieve,
  api_v1_mini_update,
  api_v1_mini_partial_update,
  api_v1_mini_destroy,
  slice: minisSlice
}
