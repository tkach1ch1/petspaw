import React from 'react'
import '../../../styles/styles.css'
import { Box } from '@mui/material'
import {
    StyledFieldset,
    StyledLegend,
    TypographyMainTitle,
    TypographyTitle,
    TypographyDescription,
} from '../style/style'

//NOTE: BreeedInfoPage on witch user come from BreedsPage by clicking on certain breed

export const InfoTextBreedsId = (props) => {
    return (
        <StyledFieldset>
            <StyledLegend>{props.name}</StyledLegend>

            <Box sx={{ padding: { xs: '10px 20px', md: '20px 40px' } }}>
                <Box
                    sx={{
                        mt: { xs: '-20px', md: '-30px' },
                        textAlign: { xs: 'left', md: 'center' },
                        marginBottom: '20px',
                    }}
                >
                    <TypographyMainTitle sx={{ fontSize: { xs: '16px', md: '18px' } }}>
                        {props.description}
                    </TypographyMainTitle>
                </Box>

                <Box
                    display={{ md: 'flex' }}
                    sx={{
                        gap: { md: '30px' },
                        justifyContent: { md: 'space-around', lg: 'flex-start' },
                    }}
                >
                    <Box
                        flexDirection={{ md: 'column' }}
                        width={{ md: '220px', xl: '250px' }}
                    >
                        <TypographyTitle>Temperament:</TypographyTitle>
                        <TypographyDescription sx={{ mb: '10px' }}>
                            {props.temperament}
                        </TypographyDescription>
                    </Box>
                    <Box flexDirection={{ md: 'column' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: { md: '3px' },
                            }}
                        >
                            <TypographyTitle>Origin:</TypographyTitle>
                            <TypographyDescription sx={{ mb: '10px' }}>
                                {props.origin}
                            </TypographyDescription>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: { md: '3px' },
                            }}
                        >
                            <TypographyTitle>Weight:</TypographyTitle>
                            <TypographyDescription sx={{ mb: '10px' }}>
                                {props.weight} kg
                            </TypographyDescription>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: { md: '3px' },
                            }}
                        >
                            <TypographyTitle>Life span:</TypographyTitle>
                            <TypographyDescription sx={{ mb: '10px' }}>
                                {props.life_span} years
                            </TypographyDescription>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </StyledFieldset>
    )
}
