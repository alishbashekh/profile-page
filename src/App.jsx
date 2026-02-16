
import { HelmetProvider } from "react-helmet-async";
import Routes from "./routes/index";


function App() {

  return (
    <HelmetProvider>
      <Routes/>

    </HelmetProvider>
  );
}

export default App;
