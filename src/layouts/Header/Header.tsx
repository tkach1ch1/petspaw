import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { BurgerMenu } from './BurgerMenu'
import { SearchBar } from './SearchBar'
import heart from 'src/img/svg/heart.svg'
import smile from 'src/img/svg/smile.svg'
import sad_smile from 'src/img/svg/sad_smile.svg'
import heart_act from 'src/img/svg/heart_act.svg'
import smile_act from 'src/img/svg/smile_act.svg'
import sad_smile_act from 'src/img/svg/sad_smile_act.svg'
import { useLocation } from 'react-router-dom'
import { BoxWrapper } from './style/style'
import { nanoid } from 'nanoid'
import { StyledNavLink } from 'src/components/StyledNavLink'

const navigationHeader = [
    { link: '/likes', img: smile, activeImg: smile_act, name: 'smile' },
    { link: '/favourites', img: heart, activeImg: heart_act, name: 'heart' },
    { link: '/dislikes', img: sad_smile, activeImg: sad_smile_act, name: 'sad_smile' },
]

export const Header = () => {
    const [newActiveLink, setNewActiveLink] = useState('')

    const location = useLocation()

    // Takes page pathname to compare it with a NavLink
    //to change categorie image on active image when user on the page
    useEffect(() => {
        setNewActiveLink(location.pathname)
    }, [location])

    return (
        <Box
            sx={{
                mb: { xs: '10px', md: 0 },
                height: '10%',
            }}
        >
            <BoxWrapper>
                <Box sx={{ ml: { xs: '10px', md: '10px', lg: 0 } }}>
                    <BurgerMenu />
                </Box>

                <SearchBar display={{ xs: 'none', md: 'flex' }} />

                {/* Like, Favourite, Dislike buttons */}
                <Box sx={{ display: 'flex', gap: '8px', ml: { lg: '10px' } }}>
                    {navigationHeader.map((elem) => (
                        <StyledNavLink
                            to={elem.link}
                            key={nanoid()}
                            sx={{
                                padding: '15px',
                                borderRadius: '20px',
                                width: '60px',
                                height: '60px',
                            }}
                        >
                            {newActiveLink === elem.link ? (
                                <img
                                    src={elem.activeImg}
                                    alt={`${elem.name}_act`}
                                />
                            ) : (
                                <img
                                    src={elem.img}
                                    alt={elem.name}
                                />
                            )}
                        </StyledNavLink>
                    ))}
                </Box>
            </BoxWrapper>

            <Box>
                <SearchBar display={{ xs: 'block', md: 'none' }} />
            </Box>
        </Box>
    )
}
