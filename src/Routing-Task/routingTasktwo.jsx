import styles from "./routingTask.module.css";

import { Link, useNavigate } from "react-router-dom";

const Fsd = () => {
  return (
    <div className={styles.pythoncontainer}>
      <div>
        <img
          src="https://www.upwork.com/catalog-images-resized/1d6c8560ca06744121ebe6126f293813/large"
          alt="has some issue with the image"
        />
        <p>
          Start your coding journey with Full stack courses and tutorials.
          <br />
          From basic to advanced projects, grow your <br />
          Full Stack skills at our company
        </p>
        <Link to="/FSD" className={styles.link}>
          Go to home page
        </Link>
      </div>
    </div>
  );
};

const DataScience = () => {
  return (
    <div className={styles.pythoncontainer}>
      <div>
        <img
          src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/5/0/950321c11d_50173256_data-science-1.jpg"
          alt="has some issue with the image"
        />
        <p>
          Start your coding journey with Data Science courses and tutorials.
          <br />
          From basic to advanced projects, grow your <br />
          Data Science skills at our company
        </p>
        <Link to="/DS" className={styles.link}>
          Go to home page
        </Link>
      </div>
    </div>
  );
};

const CyperSecurity = () => {
  return (
    <div className={styles.pythoncontainer}>
      <div>
        <img
          src="https://www.leapit.co.uk/wp-content/uploads/2019/11/Cyber-Security-Importance-1080x675.jpeg"
          alt="has some issue with the image"
        />
        <p>
          Start your coding journey with cyper security and tutorials.
          <br />
          From basic to advanced projects, grow your <br />
          cyper security skills at our company
        </p>
        <Link to="/CS" className={styles.link}>
          Go to home page
        </Link>
      </div>
    </div>
  );
};

const MainFSD = () => {
  const navigateTo = useNavigate();
  const handle = () => {
    console.log("onclick2");
    navigateTo("/FSDOverview");
  };
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.Alldata} onClick={handle}>
        <img
          src="https://www.upwork.com/catalog-images-resized/1d6c8560ca06744121ebe6126f293813/large"
          alt="has some issue with the image"
        />
        <h3>Full Stack Developement</h3>
      </div>
    </div>
  );
};

const MainDS = () => {
  const navigateTo = useNavigate();
  const handle = () => {
    console.log("onclick2");
    navigateTo("/DSOverview");
  };
  return (
    <div className={styles.container}>
      <div className={styles.Alldata} onClick={handle}>
        <img
          src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/5/0/950321c11d_50173256_data-science-1.jpg"
          alt="has some issue with the image"
        />
        <h3>Data Science</h3>
      </div>
    </div>
  );
};

const MainCS = () => {
  const navigateTo = useNavigate();
  const handle = () => {
    console.log("onclick2");
    navigateTo("/CSOverview");
  };
  return (
    <div className={styles.container}>
      <div className={styles.Alldata} onClick={handle}>
        <img
          src="https://www.leapit.co.uk/wp-content/uploads/2019/11/Cyber-Security-Importance-1080x675.jpeg"
          alt="has some issue with the image"
        />
        <h3>Cyper Security</h3>
      </div>
    </div>
  );
};

export { MainFSD, Fsd, MainDS, DataScience, MainCS, CyperSecurity };
