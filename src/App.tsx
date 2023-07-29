import Navigation from "./components/Navigation";
import { ReactComponent as LogoIcon } from "./assets/logo.svg";
import Basket from "./components/Basket";
function App() {
  return (
    <main className={`flex min-h-screen bg-whites`}>
      <div className=" max-w-screen-xl  w-full mx-auto">
        <header className="flex flex-row ">
          <LogoIcon className="mr-14" />
          <Navigation />
          <div className="justify-self-end">
            <Basket />
            {/* <Avatar /> */}
          </div>
        </header>
      </div>
    </main>
  );
}

export default App;
