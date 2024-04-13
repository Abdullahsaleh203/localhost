import { useMemo } from "react";
import styles from "./StayCard.module.css";

const StayCard = ({
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.staycard}>
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.similarStaysParent}>
        <div className={styles.brightwoodsEstate}>
          <div className={styles.urbanLoft}>
            <div className={styles.brightwoodsEstate1}>{brightwoodsEstate}</div>
            <div className={styles.bridlepathOntarioCanada}>
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.urbanLoft1}>
            <div className={styles.simcoeOntario}>4.8</div>
            <img className={styles.vectorIcon1} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.michelleReviewCard}>
          <div className={styles.parent}>
            <div className={styles.div}>$502</div>
            <div className={styles.night}>/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
