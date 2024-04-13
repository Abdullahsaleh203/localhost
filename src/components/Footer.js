import { useMemo } from "react";
import styles from "./Footer.module.css";

const Footer = ({ supportMargin, hostingMargin, localhostMargin }) => {
  const supportStyle = useMemo(() => {
    return {
      margin: supportMargin,
    };
  }, [supportMargin]);

  const hostingStyle = useMemo(() => {
    return {
      margin: hostingMargin,
    };
  }, [hostingMargin]);

  const localhostStyle = useMemo(() => {
    return {
      margin: localhostMargin,
    };
  }, [localhostMargin]);

  return (
    <footer className={styles.footer}>
      <div className={styles.conditionHandler}>
        <div className={styles.errorHandler}>
          <div className={styles.arithmeticOperator}>
            <h3 className={styles.support} style={supportStyle}>
              Support
            </h3>
            <div className={styles.helpCentre}>Help Centre</div>
            <div className={styles.aircover}>AirCover</div>
            <div className={styles.combatingDiscrimination}>
              Combating discrimination
            </div>
            <div className={styles.supportingPeopleWith}>
              Supporting people with disabilities
            </div>
            <div className={styles.cencellationOptions}>
              Cencellation options
            </div>
            <div className={styles.reportNeighbourhoodConcern}>
              Report neighbourhood concern
            </div>
          </div>
          <div className={styles.whileLoop}>
            <h3 className={styles.hosting} style={hostingStyle}>
              Hosting
            </h3>
            <div className={styles.localHome}>Local home</div>
            <div className={styles.coverForHosts}>Cover for hosts</div>
            <div className={styles.hostingResources}>Hosting resources</div>
            <div className={styles.communityForum}>Community forum</div>
            <div className={styles.hostingResponsibly}>Hosting responsibly</div>
          </div>
          <div className={styles.whileLoop1}>
            <h3 className={styles.localhost} style={localhostStyle}>
              Localhost
            </h3>
            <div className={styles.newsroom}>Newsroom</div>
            <div className={styles.newFeatures}>New Features</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.investres}>Investres</div>
            <div className={styles.giftCards}>Gift cards</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
