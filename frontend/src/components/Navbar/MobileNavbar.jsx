import styles from '../../styles/Navbar/MobileNavbar.module.scss'
import { FaTimes, FaBars } from 'react-icons/fa';

import ListItemLink from './ListItemLink';
import { useState, useEffect } from 'react';

const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false)
  }

  return (
    <div className={styles.container}>
      <div>
        <div 
        className={`${styles.iconContainer} ${styles.bars}`}
        onClick={() => setNavOpen(true)}
        >
          <FaBars />
        </div>

        <nav className={navOpen ? styles.navActive : undefined}>
          <ul>
            <div
            className={`${styles.iconContainer} ${styles.times}`}
            onClick={() => setNavOpen(false)}
            >
              <FaTimes />
            </div>

            {/* Home */}
            <ListItemLink 
              url=""
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Home</h3>
            </ListItemLink>

            {/* Categories */}
            <ListItemLink 
              url="categories"
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>Categories</h3>
            </ListItemLink>

            {/* Transactions */}
            <ListItemLink 
              url="transactions"
              optionClass={styles.linkColor}
              clickHandler={closeNav}
            >
              <h3>transactions</h3>
            </ListItemLink>

            {/* Profile */}
            <div className={styles.mobileMenuLinks}>
              <ListItemLink 
                url="profile"
                optionClass={styles.linkColor}
                clickHandler={closeNav}
              >
                <h3>Profile</h3>
              </ListItemLink>
            </div>

            {/* Settings */}
            <div className={styles.mobileMenuLinks}>
              <ListItemLink  
                url="settings"
                optionClass={styles.linkColor}
                clickHandler={closeNav}
                >
                <h3>Settings</h3>
              </ListItemLink>
            </div>

            {/* Auth Menu */}
            <ListItemLink 
              url="logout" 
              optionClass={styles.linkColor}
              // clickHandler={logoutHandler}
            >
              <h3>Logout</h3>
            </ListItemLink>

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;