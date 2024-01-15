import { mockData } from "@/Mockdatas.jsx/mocksdata";
import { EmploymentDetails } from "@/exammock/comp2";
export const styles = {
  flex: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
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
  onoff: {
    height: "100px",
    width: "200px",
  },
};

export const InnerContainer = ({
  avatar,
  first_name,
  last_name,
  gender,
  email,
}) => {
  return (
    <div style={styles.Maindiv}>
      <div style={styles.inner1}>
        <img src={avatar} alt="" />
      </div>
      <div style={styles.inner2}>
        <div style={styles.firstname}>Firstname: {first_name}</div>
        <div style={styles.lastname}>Lastname: {last_name}</div>
        <div style={styles.employment}>Employment:</div>
        <div style={styles.gender}>Gender: {gender}</div>
        <div style={styles.email}>Email: {email}</div>
      </div>
    </div>
  );
};
