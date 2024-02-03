import PropTypes from "prop-types";
import styles from "./routingTask.module.css";
import Layout from "./layout.jsx";
import {MainFSD,Fsd,MainDS ,DataScience,MainCS,CyperSecurity} from "./routingTasktwo.jsx";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

const allData = [
  {
    name: "Python Course",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210215160315/FREE-Python-Course-For-Beginners.png",
    provalue: "Python",
  },
  {
    name: "Machine Learning",
    image:
      "https://th.bing.com/th/id/OIP.O95EHhoaM4sA_3c169YrMgHaD6?rs=1&pid=ImgDetMain",
    provalue: "ML",
  },
  {
    name: "Java Course",
    image:
      "https://www.triaright.com/images/course_create/main_image/6457d837912f45.jpg",
    provalue: "Java",
  },
];

const PageNotFound = ({ isnavToHome = false }) => {
  if (isnavToHome) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <h2>Page Not Found, Please check the URL</h2>
      <Link to="/">Go Home</Link>
    </>
  );
};
PageNotFound.propTypes = {
  isnavToHome: PropTypes.bool,
};

const Demodisplay = () => {
    return (
    <div className={styles.pythoncontainer}>
        <div>
        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210215160315/FREE-Python-Course-For-Beginners.png" alt="has some issue with the image" />
        <p>Start your coding journey with Python courses and tutorials.<br />From basic to advanced projects, grow your <br />Python skills at our company</p>
        <Link to="/all" className={styles.link}>Go to home page</Link>
        </div>  
      </div>
    );
};

const DemoML = () => {
    return (
    <div className={styles.pythoncontainer}>
        <div>
        <img src="https://th.bing.com/th/id/OIP.O95EHhoaM4sA_3c169YrMgHaD6?rs=1&pid=ImgDetMain" alt="has some issue with the image" />
        <p>Start your coding journey with Machine Learning courses and tutorials.<br />From basic to advanced projects, grow your <br />Machine learning skills at our company</p>
        <Link to="/all" className={styles.link}>Go to home page</Link>
        </div>  
      </div>
    );
};

const DemoJava = () => {
    return (
    <div className={styles.pythoncontainer}>
        <div>
        <img src="https://www.triaright.com/images/course_create/main_image/6457d837912f45.jpg" alt="has some issue with the image" />
        <p>Start your coding journey with Java courses and tutorials.<br />From basic to advanced projects, grow your <br />Java skills at our company</p>
        <Link to="/all" className={styles.link}>Go to home page</Link>
        </div>  
      </div>
    );
};


const AllData = ({ image, name, provalue }) => {
  let navigateTo = useNavigate();

  const handle = () => {
    console.log("onclick");
    navigateTo("/Python");
  };
  const handle1 = () => {
    console.log("onclick1");
    navigateTo("/ML");
  };
  const handle2 = () => {
    console.log("onclick2");
    navigateTo("/Java");
  };
  return (
    <div className={styles.Alldata} onClick={ provalue=="Python" ? handle : provalue=="ML" ? handle1 :  handle2 }>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {console.log(provalue)}
    </div>
  );
};

AllData.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  provalue: PropTypes.string,
};
const All = () => {
  return (
    <div className={styles.container}>
      {allData.map((value) => {
        return (
          <AllData
            key={value.name}
            image={value.image}
            name={value.name}
            provalue={value.provalue}
          />
        );
      })}
      {console.log("executing")}
    </div>
  );
};

const Mainroute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<All />}></Route>
          <Route path="/all" element={<All />}></Route>
          <Route path="/FSD" element={<MainFSD />}></Route>
          <Route path="/DS" element={<MainDS/>}></Route>
          <Route path="/CS" element={<MainCS/>}></Route>
          <Route path="*" element={<PageNotFound isnavToHome={true} />}></Route>
        </Route>
        <Route path="/Python" element={<Demodisplay />}></Route>
        <Route path="/ML" element={<DemoML />}></Route>
        <Route path="/Java" element={<DemoJava />}></Route>
        <Route path="/FSDOverview" element={<Fsd />}></Route>
        <Route path="/DSOverview" element={<DataScience />}></Route>
        <Route path="/CSOverview" element={<CyperSecurity />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Mainroute;
