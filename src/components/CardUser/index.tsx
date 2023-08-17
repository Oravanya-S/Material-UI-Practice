import { Box, BoxProps, Stack, Typography, styled } from '@mui/material';

interface PlaygroundProps extends BoxProps {
  firstName: string;
  lastName: string;
  age: string;
  img: string;
}

const Frame = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  padding: theme.spacing(1),
  marginBottom: 12,
  height: 80,
  width: 370,
}));

export const Playground: React.FC<PlaygroundProps> = ({ firstName, lastName , age, img, children }) => {
  return (
      <Stack>
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