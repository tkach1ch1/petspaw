import React, { useEffect, useState, useCallback } from 'react'
import { useHover } from 'react-haiku'
import { useDispatch, useSelector } from 'react-redux'
import '../../../../styles/styles.css'
import { Box, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ModalUploadBox } from './ModalUploadBox'
import { loadImageAnaylsis, uploadImage } from '../../../../redux/allImagesGalleryReducer'
import { ModalUploadInfo } from './ModalUploadInfo'
import { ModalUploadFileInfo } from './ModalUploadFileInfo'
import { ModalUploadAsyncContent } from './ModalUploadAsyncContent'
import Context from '../../../../context/context'
import upload from '../../../../img/upload.svg'
import upload_hov from '../../../../img/upload_hov.svg'
import { MainStyledButton } from '../../../../components/MainStyledButton'
import { StyledTypography } from '../../../../components/style/style'
import { CloseButton, StyledModalBox } from '../../style/style'

//NOTE: Modal window on GalleryPage by clicking Upload

export const ModalUpload = () => {
    const dispatch = useDispatch()

    // Open / Close modal window
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const { hovered, ref } = useHover()

    // File upload
    const [file, setFile] = useState(null)
    const [fileURL, setFileURL] = useState(null)

    //Get image file on Drag
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onload = function () {
                setFileURL(URL.createObjectURL(file))
                setFile(file)
            }

            reader.readAsArrayBuffer(file)
        })
    }, [])

    //Get image file on Click
    const getFile = (event) => {
        let reader = new FileReader()
        reader.onload = function () {
            setFileURL(reader.result)
            setFile(event.target.files[0])
        }
        reader.readAsDataURL(event.target.files[0])
    }

    // Get file form controll
    const onHandleFileChange = (event) => {
        getFile(event)
    }

    // This flag is useful in order to show or remove a success or fail upload message
    const [isUploaded, setIsUploaded] = useState(false)

    // Send image URL to API in order to API could proof, if it is a cat image or not
    const onHandleFileClick = () => {
        dispatch(uploadImage({ file }))
        setIsUploaded(true)
    }

    const uploadedImage = useSelector((state) => state.allImages.uploadedImage)

    // Taking from API an object with proofed image we have to send there and sending image_id for analysis in API
    let image_id = uploadedImage.id

    useEffect(() => {
        dispatch(loadImageAnaylsis({ image_id }))
    }, [dispatch, image_id])

    // The object with analysis info we can use for example to categorize our shared image in certain categories
    // But I'm using it to check a response from API and then show success or fail upload message

    const imageAnalysis = useSelector((state) => state.allImages.imageAnalysis)
    const imageStatus = useSelector((state) => state.allImages.statusUpload)

    // Clear image upload box
    useEffect(() => {
        if (imageStatus === 'succeeded') {
            setFileURL(null)
            setFile(null)
        }
    }, [imageStatus])

    // Remove success/fail upload message
    useEffect(() => {
        setTimeout(() => {
            if (imageAnalysis.length > 0) {
                setIsUploaded(false)
            }
        }, 4000)
    }, [imageAnalysis])

    return (
        <Context.Provider value={{ onDrop }}>
            <Box>
                <MainStyledButton
                    padding='11px 35px'
                    ref={ref}
                    onClick={handleOpen}
                >
                    <Box display={'flex'}>
                        {hovered ? (
                            <img
                                src={upload_hov}
                                alt='upload_hov'
                            />
                        ) : (
                            <img
                                src={upload}
                                alt='upload'
                            />
                        )}
                    </Box>
                    <StyledTypography>Upload</StyledTypography>
                </MainStyledButton>

                <Modal
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                    open={open}
                    onClose={handleClose}
                >
                    <StyledModalBox
                        sx={{
                            width: {
                                md: '92%',
                                lg: '500px',
                                xl: '570px',
                                xxl: '680px',
                                xxxl: '750px',
                            },
                            height: {
                                xs: '100%',
                                md: '970px',
                                lg: '710px',
                                xl: '660px',
                                xxl: '840px',
                                xxxl: '870px',
                            },
                            right: { xs: 0, lg: 0, xxxl: '180px' },
                            left: { xs: 0, lg: 'auto' },
                            margin: { md: '30px' },
                            borderRadius: { md: '20px' },
                        }}
                    >
                        <CloseButton onClick={handleClose}>
                            <CloseIcon sx={{ fontSize: '38px', color: 'var(--main-red)' }} />
                        </CloseButton>

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            mt={{ xs: '100px', md: '100px', xl: '60px', xxl: '100px' }}
                            position={'relative'}
                        >
                            <ModalUploadInfo />

                            <ModalUploadBox
                                files={fileURL}
                                onChange={onHandleFileChange}
                            />

                            <ModalUploadFileInfo
                                file={file}
                                imageStatus={imageStatus}
                                onClick={onHandleFileClick}
                            />
                            <ModalUploadAsyncContent isUploaded={isUploaded} />
                        </Box>
                    </StyledModalBox>
                </Modal>
            </Box>
        </Context.Provider>
    )
}
