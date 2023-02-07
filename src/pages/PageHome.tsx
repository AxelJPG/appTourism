import { Outlet } from "react-router-dom";

function PageHome() {
  return (
    <>
      <h1>Pagina Home</h1>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default PageHome;
