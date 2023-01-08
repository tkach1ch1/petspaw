import { Box } from '@mui/system'
import sortBA from 'src/img/svg/sortBA.svg'
import sortAB from 'src/img/svg/sortAB.svg'
import sortBA_act from 'src/img/svg/sortBA_act.svg'
import sortAB_act from 'src/img/svg/sortAB_act.svg'
import { SortButton } from '../style/style'

interface SortButtonsProps {
    valueBA: boolean
    onClickBA: () => void
    valueAB: boolean
    onClickAB: () => void
}

export const SortButtons = ({ valueAB, onClickAB, valueBA, onClickBA }: SortButtonsProps) => {
    return (
        <Box
            display={'flex'}
            gap={'10px'}
        >
            <SortButton onClick={onClickBA}>
                {valueBA ? (
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
            <SortButton onClick={onClickAB}>
                {valueAB ? (
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
