import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const getAllImages = 'https://api.thecatapi.com/v1/images/search'

const uploadUrl = 'https://api.thecatapi.com/v1/images/upload'

export interface GalleryArrayElements {
    id: string
    url: string
}

interface AllImagesGalleryReducerState {
    images: GalleryArrayElements[]
    uploadedImage: { id: string }
    imageAnalysis: []
    statusGallery: 'idle' | 'loading' | 'succeeded' | 'failed'
    statusUpload: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | undefined
    limit: number
}

const initialState: AllImagesGalleryReducerState = {
    images: [],
    uploadedImage: { id: '' },
    imageAnalysis: [],
    statusGallery: 'idle',
    statusUpload: 'idle',
    error: 'null',
    limit: 5,
}

const allImagesGalleryReducer = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        changeLimit: (state, action) => {
            state.limit = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchImages.pending, (state) => {
                state.statusGallery = 'loading'
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.statusGallery = 'succeeded'
                state.images = action.payload
            })
            .addCase(fetchImages.rejected, (state, action) => {
                state.statusGallery = 'failed'
                state.error = action.error.message
            })
            .addCase(uploadImage.pending, (state) => {
                state.statusUpload = 'loading'
            })
            .addCase(uploadImage.fulfilled, (state, action) => {
                state.statusUpload = 'succeeded'
                state.uploadedImage = action.payload
            })
            .addCase(uploadImage.rejected, (state, action) => {
                state.statusUpload = 'failed'
                state.error = action.error.message
            })
            .addCase(loadImageAnaylsis.fulfilled, (state, action) => {
                state.statusUpload = 'succeeded'
                state.imageAnalysis = action.payload
            })
    },
})

export const { changeLimit } = allImagesGalleryReducer.actions

interface FetchImagesProps {
    limit: number
    order: string
    breedId: string
    type: string
}

interface UploadImageProps {
    file: string | Blob
}

interface LoadImageAnaylsisProps {
    image_id: string
}

export const fetchImages = createAsyncThunk(
    'gallery/fetchImages',
    async ({ limit, order, type, breedId }: FetchImagesProps) => {
        axios.defaults.headers.common['x-api-key'] = 'd9d3b448-0ba6-42b0-bc87-0efa97515132'

        let query_params = {
            limit: limit,
            order: order,
            mime_types: type,
            breed_ids: breedId,
        }
        const response = await axios.get(getAllImages, {
            params: query_params,
        })

        return response.data
    }
)

export const uploadImage = createAsyncThunk(
    'gallery/uploadImage',
    async ({ file }: UploadImageProps) => {
        axios.defaults.headers.common['x-api-key'] = 'd9d3b448-0ba6-42b0-bc87-0efa97515132'

        let formData = new FormData()
        formData.append('file', file)

        let response = await axios.post(uploadUrl, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })

        return response.data
    }
)

export const loadImageAnaylsis = createAsyncThunk(
    'gallery/loadImageAnaylsis',
    async ({ image_id }: LoadImageAnaylsisProps) => {
        let response = await axios.get(
            'https://api.thecatapi.com/v1/images/' + image_id + '/analysis'
        )

        return response.data[0].labels
    }
)

export default allImagesGalleryReducer.reducer
