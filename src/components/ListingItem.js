import { useMemo } from "react";
import styles from "./ListingItem.module.css";

const ListingItem = ({
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  propMinWidth,
  propMinWidth1,
  propFlex,
  propMinWidth2,
  onListingItemContainerClick,
}) => {
  const listingTitleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const listingSubtitleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const pricePerNightStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const priceChartStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={styles.listingItem} onClick={onListingItemContainerClick}>
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
          alt=""
          src="/superhost-icon.svg"
        />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle} style={listingTitleStyle}>
              {listingTitle}
            </div>
            <div
              className={styles.listingSubtitle}
              style={listingSubtitleStyle}
            >
              {listingSubtitle}
            </div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight} style={pricePerNightStyle}>
            <div className={styles.price}>{price}</div>
            <div className={styles.night}>/night</div>
          </div>
          {showBestTime && (
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                loading="lazy"
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className={styles.priceChart} style={priceChartStyle}>
                Price chart
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
