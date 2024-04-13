import { useMemo } from "react";
import styles from "./AmenitiesSection.module.css";

const AmenitiesSection = ({
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propWidth,
}) => {
  const kitchenStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.amenitiessection1}>
      <div className={styles.mdilakeParent}>
        <img
          className={styles.mdilakeIcon}
          loading="lazy"
          alt=""
          src={mdilake}
        />
        <div className={styles.lakeside}>{lakeside}</div>
      </div>
      <div className={styles.phfireextinguisher}>
        <img
          className={styles.tablertoolsKitchen2Icon}
          loading="lazy"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className={styles.kitchen} style={kitchenStyle}>
          {kitchen}
        </div>
      </div>
      <div className={styles.materialSymbolsnestCamIqOParent}>
        <img
          className={styles.materialSymbolsnestCamIqOIcon}
          loading="lazy"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div className={styles.securityCamerasOn}>
          {securityCamerasOnProperty}
        </div>
      </div>
      <div className={styles.securityCameras}>
        <img
          className={styles.ionwifiIcon}
          loading="lazy"
          alt=""
          src={ionwifi}
        />
        <div className={styles.wifi}>{wifi}</div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
