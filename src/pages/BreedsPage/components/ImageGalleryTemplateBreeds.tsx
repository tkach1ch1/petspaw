import 'src/styles/styles.css'
import { GridItem } from 'src/components/GridItem'
import { StyledCircularProgress } from 'src/components/style/style'
import { StyledGrid } from '../style/style'
import { nanoid } from 'nanoid'
import { useAppSelector } from 'src/hooks/reduxHooks'
import { ActionsElements } from 'src/assets/BreedTypes'

interface ImageGalleryTemplateBreedsProps {
    limitedBreedsArray: ActionsElements[]
    status: string
    error: string | undefined
    selectedBreed: string
    isActiveDefaultSort: boolean
    isActiveReversSort: boolean
}

//NOTE: Grid for BreedsPage
export const ImageGalleryTemplateBreeds = ({
    limitedBreedsArray,
    status,
    error,
    selectedBreed,
    isActiveDefaultSort,
    isActiveReversSort,
}: ImageGalleryTemplateBreedsProps) => {
    const allBreeds = useAppSelector((state) => state.allBreeds.breeds)

    const arrayLimited = limitedBreedsArray

    let content

    if (status === 'loading') {
        content = (
            <StyledCircularProgress
                sx={{
                    display: { xs: 'none', md: 'block' },
                    top: { md: '250px', lg: '180px', xxxl: '250px' },
                    right: '45%',
                }}
                size={'100px'}
                color='secondary'
            />
        )
    } else if (status === 'succeeded') {
        content =
            // Sorted Breeds from A to B
            selectedBreed === '' && isActiveDefaultSort
                ? arrayLimited.length > 0 &&
                  arrayLimited.map((elem) => (
                      <GridItem
                          id={elem.id}
                          key={nanoid()}
                          name={elem.name}
                          imageUrl={elem.image && elem.image.url}
                          breedsValue={'breeds'}
                      />
                  ))
                : // Sorted Breeds from B to A
                selectedBreed === '' && isActiveReversSort
                ? arrayLimited
                      .map((elem) => (
                          <GridItem
                              id={elem.id}
                              key={nanoid()}
                              name={elem.name}
                              breedsValue={'breeds'}
                              imageUrl={elem.image && elem.image.url}
                          />
                      ))
                      .reverse()
                : //Filtering Breeds to find one selected breed in selected breed categorie
                  allBreeds
                      .filter((elem) => elem.name === selectedBreed)
                      .map((elem) => (
                          <GridItem
                              id={elem.id}
                              key={nanoid()}
                              name={elem.name}
                              breedsValue={'breeds'}
                              imageUrl={elem.image.url}
                          />
                      ))
    } else if (status === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <StyledGrid
            sx={{
                display: { xs: 'flex', md: 'grid' },
                flexDirection: { xs: 'column' },
            }}
        >
            {content}
        </StyledGrid>
    )
}
