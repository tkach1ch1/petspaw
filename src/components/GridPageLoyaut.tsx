import '../styles/styles.css'
import { GridItem } from './GridItem'
import { NoItemBox } from './style/style'
import { StyledGrid } from '../pages/BreedsPage/style/style'
import { nanoid } from 'nanoid'
import { ActionsElements } from 'src/assets/BreedTypes'

//NOTE: GridBox for Liked/Dislikes/Favourites Page

interface GridPageLoyautProps {
    array: ActionsElements[]
    searchValue?: string
}

export const GridPageLoyaut = ({ array, searchValue }: GridPageLoyautProps) => {
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
                {array.map((elem) => (
                    <GridItem
                        key={nanoid()}
                        id={elem.id}
                        imageUrl={elem.url || elem.image.url}
                        name={elem.name}
                        favValue={elem.value === 2 && true}
                        searchValue={searchValue}
                    />
                ))}
            </StyledGrid>

            {array.length === 0 && <NoItemBox>No item found</NoItemBox>}
        </div>
    )
}
