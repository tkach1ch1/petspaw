import React, { useContext } from 'react'
import '../../../../styles/styles.css'
import { useDropzone } from 'react-dropzone'
import { Box } from '@mui/material'
import { UploadBox } from './UploadBox'
import Context from '../../../../context/context'
import unpload_bg from '../../../../img/upload-bg.png'
import { ImgBox, MainTypography, SubTypography, ImgStyle, StyledImg } from '../../style/style'

export const ModalUploadBox = (props) => {
    const { onDrop } = useContext(Context)

    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <Box>
            <Box
                onChange={props.onChange}
                {...getRootProps()}
            >
                <input
                    {...getInputProps()}
                    accept='image/*'
                    style={{ display: 'none' }}
                    id='raised-button-file'
                    type='file'
                />
                <label
                    htmlFor='raised-button-file'
                    style={{ mb: '20px' }}
                >
                    <UploadBox>
                        {props.files === null ? (
                            <ImgBox
                                sx={{
                                    height: {
                                        xs: '170px',
                                        sm: '240px',
                                        md: '320px',
                                        lg: '200px',
                                        xl: '220px',
                                        xxl: '320px',
                                    },
                                }}
                            >
                                <ImgStyle
                                    src={unpload_bg}
                                    alt={'foto'}
                                />
                                <Box
                                    display={'flex'}
                                    flexDirection={{ xs: 'column', sm: 'row' }}
                                    gap={'5px'}
                                    position={'absolute'}
                                >
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <MainTypography sx={{ fontSize: '20px' }}>
                                            Drag here
                                        </MainTypography>
                                        <SubTypography sx={{ fontSize: '20px' }}>
                                            your file or
                                        </SubTypography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <MainTypography sx={{ fontSize: '20px' }}>
                                            Click here
                                        </MainTypography>
                                        <SubTypography sx={{ fontSize: '20px' }}>
                                            to upload
                                        </SubTypography>
                                    </Box>
                                </Box>{' '}
                            </ImgBox>
                        ) : (
                            <ImgBox
                                sx={{
                                    height: {
                                        xs: '170px',
                                        sm: '240px',
                                        md: '320px',
                                        lg: '200px',
                                        xl: '220px',
                                        xxl: '320px',
                                    },
                                    padding: { xs: '10px 20px', sm: '20px 40px' },
                                }}
                            >
                                {/* Uploaded image I have styled with object-fit: contain to make an image more clearer. Although this is contrary to the design layout, where image width should be 100% of upload box, but on this way the proportions of any picture will be saved and it will be easier then for API to analyse an image for upload*/}
                                <StyledImg
                                    src={props.files}
                                    alt={'uploaded_foto'}
                                />
                            </ImgBox>
                        )}
                    </UploadBox>
                </label>
            </Box>
        </Box>
    )
}
