import 'src/styles/styles.css'
import { useHover } from 'react-haiku'
import update from 'src/img/svg/update.svg'
import update_hov from 'src/img/svg/update_hov.svg'
import { fetchImages } from 'src/redux/allImagesGalleryReducer'
import { StyledUpdateBox } from '../style/style'
import { useAppDispatch } from 'src/hooks/reduxHooks'

interface UpdateButtonProps {
    limit: number
    order: string
    type: string
    breedId: string
}

//NOTE: Update button on GalleryPage in order to refresh images from API
export const UpdateButton = ({ limit, order, type, breedId }: UpdateButtonProps) => {
    const { hovered, ref } = useHover()

    const dispatch = useAppDispatch()

    return (
        <StyledUpdateBox
            ref={ref}
            onClick={() => dispatch(fetchImages({ limit, order, type, breedId }))}
            sx={{ width: '40px', height: '40px' }}
        >
            {hovered ? (
                <img
                    src={update_hov}
                    alt='update_hov'
                />
            ) : (
                <img
                    src={update}
                    alt='update'
                />
            )}
        </StyledUpdateBox>
    )
}
