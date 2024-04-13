import styles from "./DetailsCard.module.css";

const DetailsCard = ({
  frame65,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
}) => {
  return (
    <div className={styles.detailscard}>
      <img
        className={styles.containerIcon}
        loading="lazy"
        alt=""
        src={frame65}
      />
      <div className={styles.dedicatedWorkspaceParent}>
        <div className={styles.dedicatedWorkspace}>{dedicatedWorkspace}</div>
        <div className={styles.aPrivateRoom}>{aPrivateRoomEquippedWithW}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
