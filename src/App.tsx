import { ThemeProvider } from "./providers/mui/ThemeProvider";
import { originalTheme } from "./themes";
import { Playground } from "./components/CardUser";
function App() {
  const userArr = [
    {
      firstName: "Oravanya",
      lastName: "Sapsrithong",
      age: "25",
      img: "https://duoplanet.com/wp-content/uploads/2023/05/duolingo-avatar-4.png",
    },
    {
      firstName: "Winnie",
      lastName: "In the pooh",
      age: "20",
      img: "https://duoplanet.com/wp-content/uploads/2023/05/duolingo-avatar-5.png",
    },
    {
      firstName: "Boom",
      lastName: "Kanyaphasawee",
      age: "35",
      img: "https://duoplanet.com/wp-content/uploads/2023/05/duolingo-avatar-3.png",
    },
  ];
  return (
    <ThemeProvider theme={originalTheme}>
      {userArr.map((el) => (
        <Playground
          {...el}
        ></Playground>
      ))}
    </ThemeProvider>
  );
}

export default App;
