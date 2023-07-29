import Navigation from "./components/Navigation";
import { ReactComponent as LogoIcon } from "./assets/logo.svg";
import { ReactComponent as CartIcon } from "./assets/cart.svg";
function App() {
  return (
    <main className={`flex min-h-screen bg-whites`}>
      <div className="max-w-screen-xl w-full mx-auto">
        <header className="flex flex-row justify-between items-center py-8 border-b border-b-gray1">
          <div className="flex flex-row">
            <LogoIcon className="mr-14" />
            <Navigation />
          </div>

          <div className="flex flex-row items-center gap-x-12 ">
            <CartIcon />
            <img src="/images/image-avatar.png " className="w-12 h-12" />
          </div>
        </header>
        <section className=" mt-20 pl-10 flex flex-row">
          <div className="">
            <div className="w-[445px] h-[445px] rounded-[16px] overflow-hidden mb-4">
              <img src="/images/image-product-1.jpg" alt="" className="" />
            </div>
            <div className="flex flex-row gap-x-4 w-[445px]">
              <div>
                <img
                  src="/images/image-product-1-thumbnail.jpg"
                  alt=""
                  className="rounded-[10px]"
                />
              </div>

              <div className="">
                <img
                  src="/images/image-product-2-thumbnail.jpg"
                  alt=""
                  className="rounded-[10px]"
                />
              </div>
              <div className="">
                <img
                  src="/images/image-product-3-thumbnail.jpg"
                  alt=""
                  className="rounded-[10px]"
                />
              </div>
              <div className="">
                <img
                  src="/images/image-product-4-thumbnail.jpg"
                  alt=""
                  className="rounded-[10px]"
                />
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="">Sneaker Company</h3>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
