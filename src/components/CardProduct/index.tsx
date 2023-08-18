import { BoxProps, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface PlaygroundProps extends BoxProps {
  img: string;
  name: string;
  price: number;
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

// const Frame = styled(Box)(({ theme }) => ({
//   border: `2px solid ${theme.palette.divider}`,
//   borderRadius: '12px',
//   padding: theme.spacing(2),
//   minHeight: 200,
// }));

export const CardProduct: React.FC<PlaygroundProps> = ({ img, name, price, children }) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 4 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
          >
            <Stack direction={'row'} alignItems={'center'}>
                {children}
            </Stack>
            <Stack>${price}</Stack>
          </Stack>
        </Typography>
      </CardContent>
    </Card>
  );
};
