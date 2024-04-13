import styles from "./Header.module.css";

const Header = ({ notifications, avatar, showLoginSection }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.stays}>Stays</div>
          <div className={styles.becomeAHost}>Become a host</div>
        </div>
        {showLoginSection && (
          <div className={styles.loginSection}>
            <img
              className={styles.notificationsIcon}
              loading="lazy"
              alt=""
              src={notifications}
            />
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src={avatar}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
