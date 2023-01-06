import React from 'react'
import { Box } from '@mui/system'
import sortBA from '../../../img/sortBA.svg'
import sortAB from '../../../img/sortAB.svg'
import sortBA_act from '../../../img/sortBA_act.svg'
import sortAB_act from '../../../img/sortAB_act.svg'
import { SortButton } from '../style/style'

export const SortButtons = (props) => {
    return (
        <Box
            display={'flex'}
            gap={'10px'}
        >
            <SortButton onClick={props.onClickBA}>
                {props.valueBA ? (
                    <img
                        src={sortBA_act}
                        alt='sortBA_act'
                    />
                ) : (
                    <img
                        src={sortBA}
                        alt='sortBA'
                    />
                )}
            </SortButton>
            <SortButton onClick={props.onClickAB}>
                {props.valueAB ? (
                    <img
                        src={sortAB_act}
                        alt='sortAB_act'
                    />
                ) : (
                    <img
                        src={sortAB}
                        alt='sortAB'
                    />
                )}
            </SortButton>
        </Box>
    )
}
