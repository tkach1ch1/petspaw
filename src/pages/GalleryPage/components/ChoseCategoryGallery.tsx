import 'src/styles/styles.css'
import { SelectComponent } from 'src/components/SelectComponent'
import Box from '@mui/material/Box'
import { UpdateButton } from './UpdateButton'
import { RefreshLineBox, StyledBox, StyledInputLabel } from '../style/style'
import { useAppSelector } from 'src/hooks/reduxHooks'
import React from 'react'

const arrLimit = [
    { name: '5 items per page', value: 5 },
    { name: '10 items per page', value: 10 },
    { name: '15 items per page', value: 15 },
    { name: '20 items per page', value: 20 },
]

const arrOrder = [
    { name: 'Random', value: 'random' },
    { name: 'Desc', value: 'desc' },
    { name: 'Asc', value: 'asc' },
]

const arrayType = [
    { name: 'All', value: 'jpg,png,gif' },
    { name: 'Static', value: 'jpg,png' },
    { name: 'Animated', value: 'gif' },
]

interface ChoseCategoryGalleryProps {
    limit: number
    order: string
    type: string
    breed: string
    breedId: string
    setLimit: React.Dispatch<React.SetStateAction<number>>
    setOrder: React.Dispatch<React.SetStateAction<string>>
    setType: React.Dispatch<React.SetStateAction<string>>
    setBreedId: React.Dispatch<React.SetStateAction<string>>
    setBreed: React.Dispatch<React.SetStateAction<string>>
}

//NOTE: Categories on Gallery page
export const ChoseCategoryGallery = ({
    limit,
    order,
    type,
    breed,
    breedId,
    setLimit,
    setOrder,
    setType,
    setBreedId,
    setBreed,
}: ChoseCategoryGalleryProps) => {
    const allBreeds = useAppSelector((state) => state.allBreeds.breeds)

    const onHandleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let value = event.target.value
        setLimit(Number(value))
    }

    const onHandleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOrder(event.target.value)
    }

    const onHandleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value)
    }

    //To find in API images on certain breed, not breed name but breed id is needed
    //Comparing all breed names in array and onChange value to find a match and sending breed id from founded match breed.
    const onHandleBreedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBreed(event.target.value)
        if (allBreeds.find((elem) => elem.name === event.target.value)) {
            let foundBreed = allBreeds.find((elem) => elem.name === event.target.value)
            !!foundBreed && setBreedId(foundBreed.id)
        } else setBreedId('')
    }

    return (
        <StyledBox
            display={'flex'}
            flexDirection={{ xs: 'column', sg: 'row' }}
            gap={{ xs: 0, sg: '20px' }}
        >
            <Box sx={{ width: { xs: '100%', sg: '50%' } }}>
                {/* Order categorie */}
                <StyledInputLabel>Order</StyledInputLabel>
                <SelectComponent
                    array={arrOrder}
                    backgroundColor='white'
                    color='var(--black)'
                    mb='10px'
                    value={order}
                    onChange={onHandleOrderChange}
                />
                {/* Breed categorie */}
                <StyledInputLabel>Breed</StyledInputLabel>
                <SelectComponent
                    array={allBreeds.length > 0 ? allBreeds : []}
                    firstParam='None'
                    backgroundColor='white'
                    color='var(--black)'
                    mb='10px'
                    value={breed}
                    onChange={onHandleBreedChange}
                />
            </Box>
            <Box sx={{ width: { xs: '100%', sg: '50%' } }}>
                {/* Type categorie */}
                <StyledInputLabel>Type</StyledInputLabel>
                <SelectComponent
                    array={arrayType}
                    backgroundColor='white'
                    color='var(--black)'
                    mb='10px'
                    value={type}
                    onChange={onHandleTypeChange}
                />
                {/* Limit categorie */}
                <StyledInputLabel>Limit</StyledInputLabel>
                <RefreshLineBox>
                    <SelectComponent
                        array={arrLimit}
                        backgroundColor='white'
                        color='var(--black)'
                        mb='10px'
                        value={limit}
                        onChange={onHandleLimitChange}
                    />
                    {/* Button that refreshes images from API  */}
                    <UpdateButton
                        limit={limit}
                        type={type}
                        order={order}
                        breedId={breedId}
                    />
                </RefreshLineBox>
            </Box>
        </StyledBox>
    )
}
