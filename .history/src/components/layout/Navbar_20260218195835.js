import React from "react";
import {
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaHeart,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      
      {/* Логотип */}
      <div style={styles.logo}>Instagram</div>

      {/* Поиск */}
      <div style={styles.searchBox}>
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          style={styles.input}
        />
      </div>

      {/* Иконки */}
      <div style={styles.icons}>
        <FaHome size={22} />
        <FaPlusSquare size={22} />
        <FaHeart size={22} />
        <FaUserCircle size={26} />
      </div>

    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 30px",
    borderBottom: "1px solid #dbdbdb",
    background: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    background: "#efefef",
    padding: "5px 10px",
    borderRadius: "8px",
    width: "300px",
  },
  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    marginLeft: "8px",
    width: "100%",
  },
  icons: {
    display: "flex",
    gap: "20px",
    cursor: "pointer",
  },
};

export default Navbar;