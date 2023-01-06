import React from 'react'
import '../styles/styles.css'
import { GridItem } from '../components/GridItem'
import { NoItemBox } from './style/style'
import { StyledGrid } from '../pages/BreedsPage/style/style'
import { nanoid } from 'nanoid'

//NOTE: GridBox for Liked/Dislikes/Favourites Page

export const GridPageLoyaut = (props) => {
    //NOTE: Value for every categorie:
    //      Likes: '1'
    //      Dislikes: '0'
    //      Favourites: '2'

    return (
        <div>
            <StyledGrid
                sx={{
                    display: { xs: 'flex', md: 'grid' },
                    flexDirection: { xs: 'column' },
                }}
            >
                {props.arr.map((elem) => (
                    <GridItem
                        key={nanoid}
                        id={elem.id}
                        imageUrl={elem.url || (elem.image && elem.image.url)}
                        name={props.searchValue && elem.name}
                        favValue={elem.value === 2 && true}
                        searchValue={props.searchValue}
                    />
                ))}
            </StyledGrid>

            {props.arr.length === 0 && <NoItemBox>No item found</NoItemBox>}
        </div>
    )
}
