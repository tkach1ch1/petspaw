import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { BurgerMenu } from '../Header/BurgerMenu'
import { SearchBar } from './SearchBar'
import heart from '../../img/heart.svg'
import smile from '../../img/smile.svg'
import sad_smile from '../../img/sad_smile.svg'
import heart_act from '../../img/heart_act.svg'
import smile_act from '../../img/smile_act.svg'
import sad_smile_act from '../../img/sad_smile_act.svg'
import { useLocation } from 'react-router-dom'
import { BoxWrapper, StyledLinkHeader } from './style/style'
import { nanoid } from 'nanoid'

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
                <Box sx={{ display: 'flex', gap: '10px', ml: { lg: '10px' } }}>
                    {navigationHeader.map((elem) => (
                        <StyledLinkHeader
                            to={elem.link}
                            key={nanoid}
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
                        </StyledLinkHeader>
                    ))}
                </Box>
            </BoxWrapper>

            <Box>
                <SearchBar display={{ xs: 'block', md: 'none' }} />
            </Box>
        </Box>
    )
}
