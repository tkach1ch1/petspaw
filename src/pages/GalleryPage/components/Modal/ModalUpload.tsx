import { useHover } from 'react-haiku'
import 'src/styles/styles.css'
import { Box, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ModalUploadBox } from './ModalUploadBox'
import { ModalUploadInfo } from './ModalUploadInfo'
import { ModalUploadFileInfo } from './ModalUploadFileInfo'
import { ModalUploadAsyncContent } from './ModalUploadAsyncContent'
import upload from 'src/img/svg/upload.svg'
import upload_hov from 'src/img/svg/upload_hov.svg'
import { MainStyledButton } from 'src/components/MainStyledButton'
import { StyledTypography } from 'src/components/style/style'
import { CloseButton, StyledModalBox } from '../../style/style'
import { useAppSelector } from 'src/hooks/reduxHooks'
import { useFileUpload } from '../../hooks/useFileUpload'
import { useFileUploadProof } from '../../hooks/useFileUploadProof'
import { useState } from 'react'

export interface FileElements {
    name: string
    path?: string
    type?: string
    size?: number
    lastModified?: number
}

//NOTE: Modal window on GalleryPage by clicking Upload
export const ModalUpload = () => {
    const { hovered, ref } = useHover()

    // Open / Close modal window
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    //File controll
    const { file, fileArray, fileURL, onDrop, onHandleFileChange } = useFileUpload()

    //File upload controll and proof
    const { isUploaded, onHandleFileClick } = useFileUploadProof(file)

    const imageStatus = useAppSelector((state) => state.allImages.statusUpload)

    return (
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
                style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
                <StyledModalBox>
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
                            fileUrl={fileURL}
                            onChange={onHandleFileChange}
                            onDrop={onDrop}
                        />

                        <ModalUploadFileInfo
                            file={fileArray}
                            imageStatus={imageStatus}
                            onClick={onHandleFileClick}
                        />
                        <ModalUploadAsyncContent isUploaded={isUploaded} />
                    </Box>
                </StyledModalBox>
            </Modal>
        </Box>
    )
}
