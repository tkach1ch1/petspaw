import React from 'react'
import '../../../styles/styles.css'
import { useSelector } from 'react-redux'
import { GridItem } from '../../../components/GridItem'
import { StyledCircularProgress } from '../../../components/style/style'
import { StyledGrid } from '../style/style'
import { nanoid } from 'nanoid'

//NOTE: Grid for BreedsPage

export const ImageGalleryTemplateBreeds = ({ ...props }) => {
    const allBreeds = useSelector((state) => state.allBreeds.breeds)

    const arrayLimited = props.limitedBreedsArray

    let content

    if (props.status === 'loading') {
        content = (
            <StyledCircularProgress
                sx={{
                    display: { xs: 'none', md: 'block' },
                    top: { md: '250px', lg: '180px', xxxl: '250px' },
                    right: '40%',
                }}
                size={'100px'}
                color='secondary'
            />
        )
    } else if (props.status === 'succeeded') {
        content =
            // Sorted Breeds from A to B
            props.selectedBreed === '' && props.valueAB
                ? arrayLimited.length > 0 &&
                  arrayLimited.map((elem) => (
                      <GridItem
                          id={elem.id}
                          key={nanoid}
                          name={elem.name}
                          imageUrl={elem.image && elem.image.url}
                          breedsValue={'breeds'}
                      />
                  ))
                : // Sorted Breeds from B to A
                props.selectedBreed === '' && props.valueBA
                ? arrayLimited
                      .map((elem) => (
                          <GridItem
                              id={elem.id}
                              key={nanoid}
                              name={elem.name}
                              breedsValue={'breeds'}
                              imageUrl={elem.image && elem.image.url}
                          />
                      ))
                      .reverse()
                : //Filtering Breeds to find one selected breed in selected breed categorie
                  allBreeds
                      .filter((elem) => elem.name === props.selectedBreed)
                      .map((elem) => (
                          <GridItem
                              id={elem.id}
                              key={nanoid}
                              name={elem.name}
                              breedsValue={'breeds'}
                              imageUrl={elem.image.url}
                          />
                      ))
    } else if (props.status === 'failed') {
        content = <div>{props.error}</div>
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
