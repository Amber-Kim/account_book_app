import styles from "../../styles/homeComponents/HomeProfile.module.scss";
import { BsPerson, BsPencil, BsWallet2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

//UTILS
import { useUser } from "../../queries/user";

const HomeProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <BsPerson />
      </div>
      <div className={styles.info}>
        <span className={styles.welcome}>Hi</span>
        <div> className={styles.options}
          <Link to="profile">
            <span>Profile</span>
            <BePencil />
          </Link>
          <Link to="settings">
            <span>Settings</span>
            <BePencil />
          </Link>
          <Link to="wallet">
            <span>Wallet</span>
            <BePencil />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;