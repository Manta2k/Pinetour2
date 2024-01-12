import { mockData } from "../Mockdatas.jsx/mocksdata";
export const styles = {
  Maindiv: {
    height: "550px",
    width: "450px",
    border: "3px solid gray",
    borderRadius: "20px",
  },
  inner2: {
    width: "auto",
    height: "40%",
    borderTop: "2px solid gray",
    padding: "20px",
  },
  inner1: {
    width: "auto",
    height: "60%",
  },
  firstname: {
    fontWeight: "bold",
    fontSize: "25px",
  },
  lastname: {
    fontSize: "22px",
  },
  employment: {
    fontSize: "22px",
  },
  gender: {
    fontSize: "22px",
  },
  email: {
    fontSize: "22px",
  },
};
export const Maincontainer = () => {
  const Alldivs = mockData.map((el, i) => (
    <div key={i} style={styles.Maindiv}>
      <div style={styles.inner1}>
        <img src={el.avatar} alt="" />
      </div>
      <div style={styles.inner2}>
        <div style={styles.firstname}>Firstname: {el.first_name}</div>
        <div style={styles.lastname}>Lastname: {el.last_name}</div>
        <div style={styles.employment}>Employment:</div>
        <div style={styles.gender}>Gender: {el.gender}</div>
        <div style={styles.email}>Email: {el.email}</div>
      </div>
    </div>
  ));
  return Alldivs;
};
