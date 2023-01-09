import { useEffect } from 'react'
import 'src/styles/styles.css'
import { StyledCircularProgress } from 'src/components/style/style'
import { nanoid } from 'nanoid'
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks'
import { fetchImage } from 'src/redux/votingPageReducer'
import { ChosenImageBox, ImgStyle } from '../style/style'

export const ChosenImage = () => {
    const dispatch = useAppDispatch()

    const imageVoting = useAppSelector((state) => state.votingPage.image)
    const imageStatus = useAppSelector((state) => state.votingPage.status)
    const imageError = useAppSelector((state) => state.votingPage.error)

    useEffect(() => {
        dispatch(fetchImage())
    }, [dispatch])

    let content

    //NOTE: Taking image from API and showing it on Voting page

    if (imageStatus === 'loading') {
        content = (
            <StyledCircularProgress
                sx={{ top: { xs: '120px', sm: '100px', md: '90px' } }}
                size={'100px'}
                color='secondary'
            />
        )
    } else if (imageStatus === 'succeeded' && imageVoting.length > 0) {
        content = imageVoting.map((elem) => (
            <ImgStyle
                src={imageVoting && elem.url}
                key={nanoid()}
                alt='Random cat'
                style={{
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '20px',
                }}
            />
        ))
    } else if (imageStatus === 'failed') {
        content = <div>{imageError}</div>
    }

    return <ChosenImageBox>{content}</ChosenImageBox>
}
