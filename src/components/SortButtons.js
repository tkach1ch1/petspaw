import { Box } from '@mui/system';
import React, { useState } from 'react';
import sortBA from '../img/sortBA.svg';
import sortAB from '../img/sortAB.svg';
import sortBA_act from '../img/sortBA_act.svg';
import sortAB_act from '../img/sortAB_act.svg';
import { styled } from '@mui/material/styles';

const SortButton = styled(Box)({
  background: 'var(--main-gray)',
  padding: '8px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  border: '2px solid transparent',
  '&:hover': {
    border: '2px solid var(--light-red)',
  },
});

const SortButtons = () => {
  const [isActiveBA, setIsActiveBA] = useState(false);
  const [isActiveAB, setIsActiveAB] = useState(false);

  const onClickHandleBA = () => {
    setIsActiveBA(!isActiveBA);
    if (isActiveAB) {
      setIsActiveAB(false);
    }
  };
  const onClickHandleAB = () => {
    setIsActiveAB(!isActiveAB);
    if (isActiveBA) {
      setIsActiveBA(false);
    }
  };

  return (
    <Box display={'flex'} gap={'10px'}>
      <SortButton onClick={onClickHandleBA}>
        {isActiveBA ? (
          <img src={sortBA_act} alt='sortBA_act' />
        ) : (
          <img src={sortBA} alt='sortBA' />
        )}
      </SortButton>
      <SortButton onClick={onClickHandleAB}>
        {isActiveAB ? (
          <img src={sortAB_act} alt='sortAB_act' />
        ) : (
          <img src={sortAB} alt='sortAB' />
        )}
      </SortButton>
    </Box>
  );
};

export default SortButtons;
