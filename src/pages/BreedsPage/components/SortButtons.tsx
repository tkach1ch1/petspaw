import { Box } from '@mui/system'
import sortBA from 'src/img/svg/sortBA.svg'
import sortAB from 'src/img/svg/sortAB.svg'
import sortBA_act from 'src/img/svg/sortBA_act.svg'
import sortAB_act from 'src/img/svg/sortAB_act.svg'
import { SortButton } from '../style/style'

interface SortButtonsProps {
    isActiveReversSort: boolean
    onClickHandleReverseSort: () => void
    isActiveDefaultSort: boolean
    onClickHandleDefaultSort: () => void
}

export const SortButtons = ({
    isActiveReversSort,
    isActiveDefaultSort,
    onClickHandleReverseSort,
    onClickHandleDefaultSort,
}: SortButtonsProps) => {
    return (
        <Box
            display={'flex'}
            gap={'10px'}
        >
            <SortButton onClick={onClickHandleReverseSort}>
                {isActiveReversSort ? (
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
            <SortButton onClick={onClickHandleDefaultSort}>
                {isActiveDefaultSort ? (
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
