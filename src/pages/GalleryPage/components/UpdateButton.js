import React, { useContext } from 'react'
import '../../../styles/styles.css'
import { useDispatch } from 'react-redux'
import { useHover } from 'react-haiku'
import update from '../../../img/update.svg'
import update_hov from '../../../img/update_hov.svg'
import { fetchImages } from '../../../redux/allImagesGalleryReducer'
import Context from '../../../context/context'
import { StyledUpdateBox } from '../style/style'

//NOTE: Update button on GalleryPage in order to refresh images from API

export const UpdateButton = ({ ...props }) => {
    const { hovered, ref } = useHover()

    const dispatch = useDispatch()

    const value = useContext(Context)

    return (
        <StyledUpdateBox
            ref={ref}
            display={{ xs: props.displayXS, sm: props.displaySM }}
            width={props.width}
            height={props.height}
            padding={props.padding}
            onClick={() => dispatch(fetchImages(value))}
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
