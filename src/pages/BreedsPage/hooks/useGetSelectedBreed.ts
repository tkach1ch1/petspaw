import { useEffect, useState } from 'react'

export const useGetSelectedBreed = () => {
    //State and actions for breed select
    const [breed, setBreed] = useState('')

    const onHandleBreedsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBreed(event.target.value)
    }

    useEffect(() => {
        if (breed === 'All breeds') {
            setBreed('')
        }
    }, [breed])
    return { breed, onHandleBreedsChange }
}
