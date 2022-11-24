import type { PropsWithChildren } from 'react';
import { Box } from '@mui/system';

const css = {
  ul: {
    listStyleType: 'none',
    marginBlockStart: '0',
    marginBlockEnd: '0',
    marginInlineStart: '0',
    marginInlineEnd: '0',
    paddingInlineStart: '0',
    padding: '0 1rem 1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
};

const List = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ ...css.ul }} component="ul">
      {children}
    </Box>
  );
};

export default List;
