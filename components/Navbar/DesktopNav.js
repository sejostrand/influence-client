import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';
// import { useCurrentUser, useDispatchCurrentUser } from '../../context/state';
import handleLogOut from '../../utils/api/handleLogOut';

const DesktopNav = () => {
  // const user = useCurrentUser();
  const isAuthenticated = true;

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Link href='/'>Clink</Link>
      </div>
      <nav className={styles.navMenu}>
        {isAuthenticated && (
          <span className={styles.navLink}>
            <Link href='/registration'>Sign up</Link>
          </span>
        )}
        {isAuthenticated && (
          <span className={styles.navLink}>
            <Link href='/login'>Log in</Link>
          </span>
        )}
        {isAuthenticated && (
          <span onClick={handleLogOut} className={styles.navLink}>
            <Link href='/'>Log out</Link>
          </span>
        )}
        {isAuthenticated && (
          <span className={styles.navLink}>
            <Link href='/profile'>Profile</Link>
          </span>
        )}
        <span className={styles.navLink}>
          <Link href='/browse'>Browse</Link>
        </span>
        <span className={styles.navLink}>
          <Link href='/'>Home</Link>
        </span>
      </nav>
    </div>
  );
};

export default DesktopNav;

// export async function getStaticProps(context) {
//   let isAuthenticated;
//   axios({
//     method: 'get',
//     url: 'http://localhost:1337/auth/local',
//     withCredentials: true,
//   })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log('An error occurred:', error);
//     });

//   return {
//     props: {
//       isAuthenticated,
//     },
//   };
// }
