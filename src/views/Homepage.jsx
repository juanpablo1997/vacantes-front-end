import layout from "../components/layout/layout.grid.module.css";
import Header from "../components/common/header/Header";
//import CreateUser from "../components/integrated/users/CreateUser";
import CreateJob from "../components/integrated/jobs/CreateJob";
import Companies from "../components/integrated/companies/Companies";

/**
 * ==============================
 * Componente Homepage.jsx
 * ==============================
 * Este componente es la página principal del sitios. */
const Homepage = () => {
  return (
    <div className={layout.container}>
      <div className={layout.header}><Header /></div>
      <main className={layout.main}>
        <div><Companies /></div>
        <div>En construccion...</div>
        <div><CreateJob /></div> 
      </main>
    </div>
  );
};

export default Homepage;
