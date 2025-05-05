import { Outlet, Link } from "react-router-dom";
export const Layout = () => {
  return (
    <>
    <header>
      <nav className="flex  justify-between items-center px-5 py-2 border border-b-white">
        <Link to="/" className="flex items-center gap-3 ">
          <div>
            <img className="w-[70px]" src="./src/public/logo.png" alt="Logo" />
          </div>
          <h1 className="text-scarlet-red text-4xl ">GodPedia</h1>
        </Link>

        <div className="flex gap-10">
          <Link to="/" className="text-scarlet-red text-4xl ">Home</Link>
          <Link to="gods/create" className="text-scarlet-red text-4xl ">Create God</Link>
        </div>
      </nav>
    </header>



  <main>
    <Outlet/>
  </main>

    </>

    
    
  );
};
