import styles from "./ReviewCard.module.css";

const ReviewCard = ({
  ellipse12,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
}) => {
  return (
    <div className={styles.reviewcard}>
      <div className={styles.nAParent}>
        <div className={styles.nA}>
          <img
            className={styles.nAIcon}
            loading="lazy"
            alt=""
            src={ellipse12}
          />
          <div className={styles.nA1}>
            <div className={styles.johnnyCash}>{johnnyCash}</div>
            <div className={styles.june2023}>{june2023}</div>
          </div>
        </div>
        <div className={styles.michelleReviewCard}>
          <div className={styles.div}>{prop}</div>
          <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
