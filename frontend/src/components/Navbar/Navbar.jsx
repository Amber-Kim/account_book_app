//STYLES
import styles from "../../styles/Navbar/Navbar.module.scss";

//COMPONENTS
import ListItemLink from "./ListItemLink";

//UTILS
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

//REACT QUERY
import { useLogoutUser } from "../../queries/user";
import { queryClient } from "../../constants/config";

//HOOKS
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutate: logoutHandler, isSuccess } = useLogoutUser();
  
  useEffect(() => {
    if (isSuccess) {
      queryClient.removeQueries();
      setAuth(false);
      if (!auth) navigate("auth");
    }
  }, [isSuccess]);
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <div>Book Account</div>
        </Link>
      </div>
      
      <nav>
        <ul>
          {/* Home */}
          <ListItemLink url="">
            <h3>Home</h3>
          </ListItemLink>

          {/* Categories */}
          <ListItemLink url="categories">
            <h3>Categories</h3>
          </ListItemLink>

          {/* Transactions */}
          <ListItemLink url="transactions">
            <h3>transactions</h3>
          </ListItemLink>

          {/* Profile */}
          <div className={styles.mobileMenuLinks}>
            <ListItemLink url="profile">
              <h3>Profile</h3>
            </ListItemLink>
          </div>

          {/* Settings */}
          <div className={styles.mobileMenuLinks}>
            <ListItemLink url="settings">
              <h3>Settings</h3>
            </ListItemLink>
          </div>

          {/* Auth Menu */}
          <ListItemLink url="logout" clickHandler={logoutHandler}>
            <h3>Logout</h3>
          </ListItemLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;