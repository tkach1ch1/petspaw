import Box from '@mui/material/Box'
import { NavLinkImg } from './NavLinkImg'
import vote from 'src/img/vote-table.png'
import breeds from 'src/img/pet-breeds.png'
import search from 'src/img/images-search.png'
import { StyledNavLink } from 'src/components/StyledNavLink'
import { CategoryWrapper, ImgBox } from './style/style'
import { nanoid } from 'nanoid'

const categories = [
    { name: 'Voting', link: '/voting', backgroundcolor: '#B4B7FF', src: vote },
    { name: 'Breeds', link: '/breeds', backgroundcolor: '#97EAB9', src: breeds },
    { name: 'Gallery', link: '/gallery', backgroundcolor: '#FFD280', src: search },
]

export const Category = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { sm: 'center' },
                gap: { xs: '20px', sm: '16px' },
            }}
        >
            {categories.map((categ) => (
                <CategoryWrapper key={nanoid()}>
                    <NavLinkImg
                        to={categ.link}
                        backgroundColor={categ.backgroundcolor}
                        border={'4px solid rgba(255, 255, 255, 0.6)'}
                    >
                        <ImgBox>
                            <img
                                src={categ.src}
                                alt={categ.name}
                            />
                        </ImgBox>
                    </NavLinkImg>

                    <StyledNavLink
                        to={categ.link}
                        sx={{ padding: '9px 0', borderRadius: '10px' }}
                    >
                        {categ.name}
                    </StyledNavLink>
                </CategoryWrapper>
            ))}
        </Box>
    )
}
