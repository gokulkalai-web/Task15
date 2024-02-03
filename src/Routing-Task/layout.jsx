import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { useState } from "react";

const Layout = () => {
  const [isClicked, setIsClicked] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    console.log(isClicked);
    setIsClicked((prevState) =>
      prevState.map((value, i) => (i === index ? !prevState[i] : false))
    );
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          top: 0,
          left: 0,
          width: "100vw",
          height: "auto",
          borderBottom: "1px solid grey",
          boxShadow: "0 0 1px 0",
        }}
        className={styles.header}
      >
        {["All", "FSD", "DS", "CS"].map((category, index) => (
          <Link
            key={category}
            to={`/${category.toLowerCase()}`}
            onClick={() => handleClick(index)}
            style={{ color: isClicked[index] ? "green": "black" }}
            className={styles.liheader}
          >
            {category == "FSD" ? ("FULL STACK DEVELOPMENT") : category ==  "DS" ? "DATA SCIENCE" 
            : category == "CS" ? "CYPER SECURITY" : category}
          </Link>
        ))}
      </header>
      <div style={{ marginTop: "75px", padding: 16 }}>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
