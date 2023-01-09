import { useCallback, useEffect, useState } from 'react'
import { useAppSelector } from 'src/hooks/reduxHooks'
import { FileElements } from '../components/Modal/ModalUpload'

export const useFileUpload = () => {
    // File upload
    const [file, setFile] = useState<string | Blob>('')
    const [fileArray, setFileArray] = useState<FileElements[]>([])
    const [fileURL, setFileURL] = useState<string | ArrayBuffer | null>('')

    const imageStatus = useAppSelector((state) => state.allImages.statusUpload)

    //Get image file on Drag
    const onDrop = useCallback((acceptedFiles: []) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onload = function () {
                setFileURL(URL.createObjectURL(file))
                setFile(file)
                setFileArray(file)
            }

            reader.readAsArrayBuffer(file)
        })
    }, [])

    //Get image file on Click
    const getFile = (event: any) => {
        let reader = new FileReader()
        reader.onload = function () {
            setFileURL(reader.result)
            setFile(event.target.files[0])
        }
        reader.readAsDataURL(event.target.files[0])
    }

    // Get file form controll
    const onHandleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        getFile(event)
    }

    // Clear image upload box
    useEffect(() => {
        if (imageStatus === 'succeeded') {
            setFileURL('')
            setFile('')
            setFileArray([])
        }
    }, [imageStatus])

    return { file, fileArray, fileURL, onDrop, onHandleFileChange }
}
