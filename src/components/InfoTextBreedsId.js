import React from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { Box, Typography } from '@mui/material';

const StyledFieldset = styled('fieldset')({
  border: '2px solid var(--light-red)',
  borderRadius: '20px',
});

const StyledLegend = styled('legend')({
  fontSize: '20px',
  fontWeight: '500',
  padding: '16px 20px',
  textAlign: 'center',
  color: 'var(--black)',
});

const TypographyMainTitle = styled(Typography)({
  fontWeight: '500',
  color: 'var(--gray)',
  textAlign: 'center',
});

const TypographyTitle = styled(Typography)({
  fontWeight: '500',
  color: 'var(--black)',
});

const TypographyDescription = styled(Typography)({
  color: 'var(--gray)',
});

const InfoTextBreedsId = () => {
  return (
    <StyledFieldset>
    <StyledLegend>Basenji</StyledLegend>
      <Box sx={{ padding: { xs: '10px 20px', md: '20px 40px' } }}>
        <Box mb={'12px'} mt={'-20px'}>
          <TypographyMainTitle  sx={{fontSize: {xs: '16px', md: '20px'}}}>Family companion cat</TypographyMainTitle>
        </Box>

        <Box display={{ md: 'flex'}} sx={{ gap: {md: '100px', lg: '30px'} }}>
          <Box flexDirection={{ md: 'column' }} width={{lg: '220px', xl: '250px'}}>
            <TypographyTitle>Temperament:</TypographyTitle>
            <TypographyDescription sx={{ mb: '10px' }}>
              Affectionate, Energetic, Alert, Curious, Playful, Intelligent
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
                United States
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
                5 - 7 kgs
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
                10 - 12 years
              </TypographyDescription>
            </Box>

          </Box>
        </Box>
      </Box>
    </StyledFieldset>
  );
};

export default InfoTextBreedsId;
