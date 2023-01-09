import 'src/styles/styles.css'
import { GridItem } from 'src/components/GridItem'
import { StyledCircularProgress } from 'src/components/style/style'
import { StyledGrid } from '../style/style'
import { nanoid } from 'nanoid'
import { GalleryArrayElements } from 'src/redux/allImagesGalleryReducer'

interface ImageGalleryTemplateGalleryProps {
    array: GalleryArrayElements[]
    status: string
    error: string | undefined
}

//NOTE: Grid for GalleryPage
export const ImageGalleryTemplateGallery = ({
    array,
    status,
    error,
}: ImageGalleryTemplateGalleryProps) => {
    let content

    if (status === 'loading') {
        content = (
            <StyledCircularProgress
                sx={{
                    display: { xs: 'none', md: 'block' },
                    top: {
                        md: '200px',
                        lg: '100px',
                        xxl: '120px',
                        xxxl: '200px',
                    },
                    right: '45%',
                }}
                size={'100px'}
                color='secondary'
            />
        )
    } else if (status === 'succeeded') {
        content = array.map((elem) => (
            <GridItem
                id={elem.id}
                key={nanoid()}
                imageUrl={elem.url}
                galleryValue={'gallery'}
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
