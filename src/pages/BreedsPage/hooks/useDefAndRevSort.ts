import { useState } from 'react'

export const useDefAndRevSort = () => {
    //States and actions for sort buttons
    const [isActiveDefaultSort, setIsActiveDefaultSort] = useState(true)
    const [isActiveReversSort, setIsActiveReverseSort] = useState(false)

    const onClickHandleReverseSort = () => {
        setIsActiveReverseSort(true)
        if (isActiveDefaultSort) {
            setIsActiveDefaultSort(false)
        }
    }
    const onClickHandleDefaultSort = () => {
        setIsActiveDefaultSort(true)
        if (isActiveReversSort) {
            setIsActiveReverseSort(false)
        }
    }
    return {
        isActiveDefaultSort,
        isActiveReversSort,
        onClickHandleDefaultSort,
        onClickHandleReverseSort,
    }
}
