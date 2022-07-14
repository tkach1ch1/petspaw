import React from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { Box, Typography } from '@mui/material';

const StyledFieldset = styled('fieldset')({
  border: '2px solid var(--light-red)',
  borderRadius: '20px',
});

const StyledLegend = styled('legend')({
  fontSize: '36px',
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

//NOTE: BreeedInfoPage on witch user come from BreedsPage by clicking on certain breed

const InfoTextBreedsId = (props) => {
  return (
    <StyledFieldset>
      <StyledLegend>{props.name}</StyledLegend>

      <Box sx={{ padding: { xs: '10px 20px', md: '20px 40px' } }}>
        <Box mb={'12px'} sx={{ mt: { xs: '-20px', md: '-30px' } }}>
          <TypographyMainTitle sx={{ fontSize: { xs: '16px', md: '20px' } }}>
            Family companion cat
          </TypographyMainTitle>
        </Box>

        <Box display={{ md: 'flex' }} sx={{ gap: { md: '30px', lg: '30px' } }}>
          <Box
            flexDirection={{ md: 'column' }}
            width={{ lg: '220px', xl: '250px' }}
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
  );
};

export default InfoTextBreedsId;
