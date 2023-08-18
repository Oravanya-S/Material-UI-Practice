import { BoxProps, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface PlaygroundProps extends BoxProps {
  img: string;
  name: string;
  price: number;
  discount: number;
}

// const Container = styled(Box)(({ theme }) => ({
//   width: '100%',
//   height: '50vh',
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const Frame = styled(Box)(({ theme }) => ({
//   border: `2px solid ${theme.palette.divider}`,
//   borderRadius: '12px',
//   padding: theme.spacing(2),
//   minHeight: 200,
// }));

export const CardProduct: React.FC<PlaygroundProps> = ({ img, name, price, discount, children }) => {
  return (
    // <Container>
        <Card sx={{ borderRadius: 4 }}>
        <CardMedia
            component="img"
            alt="green iguana"
            image={img}
        />
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
    // </Container>
  );
};
