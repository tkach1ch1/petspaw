import React from 'react'
import { Box } from '@mui/system'
import arrow_down from '../img/ArrowDown.svg'
import { SelectCompImg, StyledFormControl } from './style/style'
import { nanoid } from 'nanoid'

//NOTE: Select categories on Breeds- and GalleryPage

export const SelectComponent = ({ ...props }) => {
    let content

    // When taking categories value async from API
    if (props.status === 'succeeded') {
        content = props.arr && props.arr.map((elem) => <option key={nanoid}>{elem.name}</option>)
    } else if (props.status === 'failed') {
        content = <div>{props.error}</div>
    }
    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <StyledFormControl
                onChange={props.onChange}
                value={props.value}
                sx={{
                    width: {
                        xs: '100%',
                        md: props.widthmd,
                        lg: '100%',
                        xl: '100%',
                        xxl: props.widthxxl,
                        xxxl: props.widthxxxl,
                    },
                    backgroundColor: props.backgroundColor,
                    color: props.color,
                    mb: props.mb,
                }}
            >
                {props.firstParam && <option>{props.firstParam}</option>}
                {props.status
                    ? content
                    : // When taking categories sync from self-written array
                      props.arr &&
                      props.arr.map((elem) => (
                          <option
                              key={nanoid}
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
