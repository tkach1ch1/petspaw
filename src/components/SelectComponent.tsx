import React from 'react'
import { Box } from '@mui/system'
import arrow_down from 'src/img/svg/ArrowDown.svg'
import { SelectCompImg, StyledFormControl } from './style/style'
import { nanoid } from 'nanoid'

interface ArrayProps {
    name: string
    value: number | string
}

interface SelectComponentProps {
    array: ArrayProps[]
    status?: string
    error?: string | undefined
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    value: number | string
    firstParam?: string
    backgroundColor?: string
    color?: string
    mb?: string
}

//NOTE: Select categories on Breeds- and GalleryPage
export const SelectComponent = ({
    array,
    status,
    error,
    onChange,
    value,
    firstParam,
    backgroundColor,
    color,
    mb,
}: SelectComponentProps) => {
    let content

    // When taking categories value async from API
    if (status === 'succeeded') {
        content = array && array.map((elem) => <option key={nanoid()}>{elem.name}</option>)
    } else if (status === 'failed') {
        content = <div>{error}</div>
    }
    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <StyledFormControl
                onChange={onChange}
                value={value}
                sx={{
                    backgroundColor: backgroundColor,
                    color: color,
                    mb: mb,
                }}
            >
                {firstParam && <option>{firstParam}</option>}
                {status
                    ? content
                    : // When taking categories sync from self-written array
                      array &&
                      array.map((elem) => (
                          <option
                              key={nanoid()}
                              value={elem.value}
                          >
                              {elem.name}
                          </option>
                      ))}
            </StyledFormControl>
            <SelectCompImg
                src={arrow_down}
                alt='arrow_down'
            />
        </Box>
    )
}
