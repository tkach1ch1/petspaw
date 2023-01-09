import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks'
import { loadImageAnaylsis, uploadImage } from 'src/redux/allImagesGalleryReducer'

export const useFileUploadProof = (file: string | Blob) => {
    const dispatch = useAppDispatch()

    // Show or Remove a success or fail upload message
    const [isUploaded, setIsUploaded] = useState(false)

    // Send image URL to API in order to API could proof, if it is a cat image or not
    const onHandleFileClick = () => {
        if (file) {
            dispatch(uploadImage({ file }))
            setIsUploaded(true)
        }
    }

    const uploadedImage = useAppSelector((state) => state.allImages.uploadedImage)

    // Taking from API an object with proofed image we have to send there and sending image_id for analysis in API
    let image_id = uploadedImage.id

    useEffect(() => {
        dispatch(loadImageAnaylsis({ image_id }))
    }, [dispatch, image_id])

    // The object with analysis info we can use for example to categorize our shared image in certain categories
    // But I'm using it to check a response from API and then show success or fail upload message

    const imageAnalysis = useAppSelector((state) => state.allImages.imageAnalysis)

    // Remove success/fail upload message
    useEffect(() => {
        setTimeout(() => {
            if (imageAnalysis.length > 0) {
                setIsUploaded(false)
            }
        }, 4000)
    }, [imageAnalysis])

    return { isUploaded, onHandleFileClick }
}
