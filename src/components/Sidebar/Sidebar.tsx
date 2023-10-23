import React from 'react';
import styles from './Sidebar.module.scss';
import samanthaImg from '../../assets/png/samantha.png';
import { Link, useLocation } from 'react-router-dom';

const sidebarNavLinks = [
  'dashboard',
  'expense',
  'wallets',
  'summary',
  'accounts',
  'settings',
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={samanthaImg} alt="Andrii" />
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>Samantha</p>
            <p className={styles.userEmail}>samantha@email.com</p>
          </div>

          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className={styles.sidebarNavItem}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? styles.sidebarLinkActive
                        : styles.sidebarLink
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;