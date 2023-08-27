import { Box, BoxProps, Stack, Typography, styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface PlaygroundProps extends BoxProps {
  img: string;
  name: string;
  price: number;
  discount: number;
  banner: string;
}

const Banner = styled(Box)(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  color: 'white',
  borderRadius: '4px',
  padding: '2px 10px',
  position: 'absolute',
  right: 16,
  top: 16,
  fontSize: '12px',
  fontWeight: 'bold'
}));

export const CardProduct: React.FC<PlaygroundProps> = ({ img, name, price, discount, banner, children }) => {
  return (
    // <Container>
        <Card sx={{ borderRadius: 4, position: 'relative' }}>
        <CardMedia
            component="img"
            alt="green iguana"
            image={img}
        />
        {banner ? <Banner sx={{position: 'absolute', backgroundColor: `${banner==='sale' ? '#EF4D3E' : '#2396F1'}`}}>{banner.toLocaleUpperCase()}</Banner> : <></>}
        <CardContent>
            <Typography gutterBottom variant="h6" noWrap={true} component="div">
                {name}
            </Typography>
            <Typography variant="h5">
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
            >
                <Stack direction={'row'} alignItems={'center'} marginLeft={'6px'}>
                    {children}
                </Stack>
                <Stack
                    direction={'row'}
                    gap={1}
                >
                    {discount? <Stack sx={{color: '#B7B7B7', textDecorationLine: 'line-through'}}>${price}</Stack> : ""}
                    {discount? <Stack>${(price*(1-discount/100)).toFixed(2)}</Stack>: <Stack>${price}</Stack>}
                </Stack>
            </Stack>
            </Typography>
        </CardContent>
        </Card>
  );
};
