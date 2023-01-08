import { UpdatedActionsElements } from 'src/assets/BreedTypes'
import { ActionsElements } from './../assets/BreedTypes'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const getAllBreeds = 'https://api.thecatapi.com/v1/breeds'

const getAllImagesById = 'https://api.thecatapi.com/v1/images/search'

export interface ImagesByIdElements {
    url: string
}

interface AllBreedsReducerState {
    breeds: UpdatedActionsElements[]
    limBreeds: ActionsElements[]
    breedsId: string
    imagesById: ImagesByIdElements[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | undefined
}

const initialState: AllBreedsReducerState = {
    breeds: [],
    limBreeds: [],
    breedsId: '',
    imagesById: [],
    status: 'idle',
    error: '',
}

const allBreedsReducer = createSlice({
    name: 'allBreeds',
    initialState,
    reducers: {
        addBreedsId: (state, action) => {
            state.breedsId = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchLimitBreeds.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchLimitBreeds.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.limBreeds = action.payload
            })
            .addCase(fetchLimitBreeds.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchAllBreeds.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.breeds = action.payload
            })
            .addCase(fetchImagesByBreedsId.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchImagesByBreedsId.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.imagesById = action.payload
            })
    },
})

export const { addBreedsId } = allBreedsReducer.actions

export const fetchAllBreeds = createAsyncThunk('allBreeds/fetchAllBreeds', async () => {
    const response = await fetch(getAllBreeds, {
        headers: {
            'x-api-key': 'd9d3b448-0ba6-42b0-bc87-0efa97515132',
        },
    })
    return response.json()
})

interface FetchLimitBreedsProps {
    limit?: number
    breedPage?: number
}

interface FetchImagesByBreedsIdProps {
    breedId: string
}

export const fetchLimitBreeds = createAsyncThunk(
    'allBreeds/fetchLimitBreeds',
    async ({ limit, breedPage }: FetchLimitBreedsProps) => {
        axios.defaults.headers.common['x-api-key'] = 'd9d3b448-0ba6-42b0-bc87-0efa97515132'

        let query_params = {
            limit,
            page: breedPage,
        }
        const response = await axios.get(getAllBreeds, { params: query_params })
        return response.data
    }
)

export const fetchImagesByBreedsId = createAsyncThunk(
    'allBreeds/fetchImagesByBreedsId',
    async ({ breedId }: FetchImagesByBreedsIdProps) => {
        axios.defaults.headers.common['x-api-key'] = 'd9d3b448-0ba6-42b0-bc87-0efa97515132'

        let query_params = {
            breed_ids: breedId,
            limit: 8,
        }
        const response = await axios.get(getAllImagesById, {
            params: query_params,
        })
        return response.data
    }
)

export default allBreedsReducer.reducer
