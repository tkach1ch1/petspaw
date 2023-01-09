import { useEffect, useRef } from 'react'

export const usePrevious = (value: number) => {
    const ref = useRef<any>()
    useEffect(() => {
        ref.current = value
    })

    let prevAmount = ref.current

    return {
        prevAmount,
    }
}
