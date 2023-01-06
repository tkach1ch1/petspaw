import React from 'react'
import '../../../styles/styles.css'
import { GridItem } from '../../../components/GridItem'
import { StyledCircularProgress } from '../../../components/style/style'
import { StyledGrid } from '../style/style'
import { nanoid } from 'nanoid'

//NOTE: Grid for GalleryPage

export const ImageGalleryTemplateGallery = ({ ...props }) => {
    const array = props.arr

    let content

    if (props.status === 'loading') {
        content = (
            <StyledCircularProgress
                sx={{
                    display: { xs: 'none', md: 'block' },
                    top: {
                        md: '200px',
                        lg: '100px',
                        xxl: '200px',
                        xxxl: '200px',
                    },
                    right: '40%',
                }}
                size={'100px'}
                color='secondary'
            />
        )
    } else if (props.status === 'succeeded') {
        content = array.map((elem) => (
            <GridItem
                id={nanoid}
                key={nanoid}
                imageUrl={elem.url}
                galleryValue={'gallery'}
            />
        ))
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
