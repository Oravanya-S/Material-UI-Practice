import { Box, BoxProps, Stack, Typography, styled } from '@mui/material';

interface PlaygroundProps extends BoxProps {
  firstName: string;
  lastName: string;
  age: string;
  img: string;
}

// const Container = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(4),
//   width: '100%',
//   height: '50vh',
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

const Frame = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  padding: theme.spacing(1),
  height: 80,
  width: 370,
}));

export const Playground: React.FC<PlaygroundProps> = ({ firstName, lastName , age, img, children }) => {
  return (
      <Stack spacing={1} margin={1}>
        <Frame>
            <Stack
                direction={'row'}
                spacing={2}
            >
                <Stack
                    direction={'column'}
                    justifyContent={'center'}
                    sx={{
                        width: '60px'
                    }}
                >
                    <img src={img} alt="profile" />
                </Stack>
                <Stack
                    direction={'column'}
                    justifyContent={'center'}
                >
                    <Typography variant='h3'>{firstName} {lastName}</Typography>
                    <Typography variant='h5'>{age} years old</Typography>
                </Stack>
            </Stack>
            
        </Frame>
      </Stack>
  );
};

{/* <Typography variant='h3'>{title}</Typography> */}