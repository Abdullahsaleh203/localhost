import { Button } from "@mui/material";
import Header from "../components/Header";
import DetailsCard from "../components/DetailsCard";
import AmenitiesSection from "../components/AmenitiesSection";
import ReviewCard from "../components/ReviewCard";
import StayCard from "../components/StayCard";
import Footer from "../components/Footer";
import styles from "./PropertyDetails.module.css";

const PropertyDetails = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <main className={styles.connectionParent}>
        <section className={styles.connection}>
          <div className={styles.container}>
            <img
              className={styles.siblingEdgeIcon}
              loading="lazy"
              alt=""
              src="/frame-9@2x.png"
            />
            <div className={styles.ancestorEdge}>
              <img
                className={styles.ancestorEdgeChild}
                loading="lazy"
                alt=""
                src="/frame-46@2x.png"
              />
              <img
                className={styles.ancestorEdgeItem}
                loading="lazy"
                alt=""
                src="/frame-47@2x.png"
              />
              <img
                className={styles.ancestorEdgeInner}
                loading="lazy"
                alt=""
                src="/frame-48@2x.png"
              />
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame-49@2x.png"
              />
              <div className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-50@2x.png"
                />
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.branchSubtrees}>
            <div className={styles.leafSubtreesParent}>
              <div className={styles.leafSubtrees}>
                <div className={styles.siblingsSubtree}>
                  <div className={styles.brightwoodsCabinParent}>
                    <h2 className={styles.brightwoodsCabin}>
                      Brightwoods Cabin
                    </h2>
                    <div className={styles.bridlepathOntarioCanada}>
                      Bridlepath, Ontario, Canada
                    </div>
                  </div>
                  <img
                    className={styles.heartIcon}
                    loading="lazy"
                    alt=""
                    src="/hearticon.svg"
                  />
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.parent}>
                    <div className={styles.div}>5.0</div>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className={styles.reviewsWrapper}>
                    <div className={styles.reviews}>200 Reviews</div>
                  </div>
                </div>
              </div>
              <div
                className={styles.welcomeToOur}
              >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.group}>
                  <b className={styles.b}>$658</b>
                  <div className={styles.nightWrapper}>
                    <div className={styles.night}>/night</div>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.icontrendParent}>
                    <div className={styles.icontrend}>
                      <div className={styles.iconParent}>
                        <img className={styles.icon} alt="" src="/icon.svg" />
                        <div className={styles.frameItem} />
                      </div>
                    </div>
                    <div className={styles.bestTimeToBookWrapper}>
                      <div className={styles.bestTimeTo}>Best time to Book</div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className={styles.searchFlightsButton}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#00c29f",
                  borderRadius: "6px",
                  "&:hover": { background: "#00c29f" },
                  height: 58,
                }}
              >
                Book this home
              </Button>
            </div>
            <div className={styles.subtreeConnectionPlus}>
              <div className={styles.hostedBy}>Hosted by:</div>
              <div className={styles.formatter}>
                <img
                  className={styles.dataProcessorIcon}
                  loading="lazy"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <div className={styles.controlCenter}>
                  <div className={styles.michelleWard}>Michelle Ward</div>
                  <div className={styles.joinedInMay}>Joined in May 2021</div>
                </div>
                <button className={styles.signalBoost}>
                  <img
                    className={styles.inputFilterIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className={styles.superhost}>Superhost</div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.listingDetailsSection}>
          <div className={styles.listingDescription}>
            <h3 className={styles.aboutThisHome}>About this home</h3>
            <div className={styles.loop}>
              <div className={styles.sequence}>
                <div className={styles.welcomeToBrightwoodsContainer}>
                  <p className={styles.welcomeToBrightwoods}>
                    Welcome to Brightwoods Cabin, your idyllic retreat nestled
                    in the heart of Bridlepath, Ontario! Our cozy cabin,
                    surrounded by the tranquility of nature's embrace, is
                    designed to provide the ultimate relaxing getaway.
                  </p>
                  <p className={styles.livingSpaceThisCharmingCa}>
                    <b className={styles.livingSpace}>{`Living Space: `}</b>
                    <span>
                      This charming cabin boasts a spacious living area adorned
                      with rustic decor and modern amenities. Enjoy the warmth
                      of the wood-burning fireplace, relax on the plush sofas,
                      and make yourself at home with our entertainment center
                      featuring a flat-screen TV, WiFi, and more.
                    </span>
                  </p>
                  <p className={styles.bedroomsWith3BeautifullyA}>
                    <b className={styles.bedrooms}>Bedrooms:</b>
                    <span>
                      {" "}
                      With 3 beautifully appointed bedrooms, our cabin
                      comfortably accommodates up to [number of guests]. Each
                      room is furnished with luxurious bedding and unique
                      woodland-inspired touches to ensure a restful slumber.
                    </span>
                  </p>
                  <p className={styles.kitchenDiningOurFullyEq}>
                    <b
                      className={styles.kitchenDining}
                    >{`Kitchen & Dining:`}</b>
                    <span>
                      {" "}
                      Our fully-equipped kitchen offers everything you need to
                      prepare delicious home-cooked meals. The open dining area
                      provides a welcoming space to enjoy meals with friends and
                      family.
                    </span>
                  </p>
                  <p className={styles.bathrooms2ModernBathrooms}>
                    <b className={styles.bathrooms}>Bathrooms:</b>
                    <span>
                      {" "}
                      2 modern bathrooms stocked with fresh towels, toiletries,
                      and all essential amenities add to your convenience.
                    </span>
                  </p>
                  <p className={styles.outdoorSpaceStepOutsideTo}>
                    <b className={styles.outdoorSpace}>Outdoor Space:</b>
                    <span>
                      {" "}
                      Step outside to a serene outdoor setting. Whether it's a
                      morning coffee on the porch, a BBQ in the yard, or a
                      soothing evening by the fire pit, the beauty of Bridlepath
                      is at your doorstep.
                    </span>
                  </p>
                  <p className={styles.locationLocatedJustMinutes}>
                    <b className={styles.location}>Location:</b>
                    <span>
                      {" "}
                      Located just minutes from [local attractions, trails,
                      dining, shopping], our cabin offers the perfect base to
                      explore the best of the region or simply unwind in
                      seclusion.
                    </span>
                  </p>
                  <p className={styles.hostedWithLoveWeTakePrid}>
                    <b className={styles.hostedWithLove}>Hosted with Love:</b>
                    <span>
                      {" "}
                      We take pride in hosting our guests and are committed to
                      making your stay unforgettable. We're just a call or
                      message away should you need anything during your stay.
                    </span>
                  </p>
                  <p className={styles.comeBeOur}>
                    Come, be our guest at [Cabin Name], and experience a piece
                    of woodland serenity right here in Bridlepath, Ontario. Book
                    now and make yourself at home!
                  </p>
                </div>
                <div className={styles.button}>Show more</div>
              </div>
              <div className={styles.variable}>
                <DetailsCard
                  frame65="/frame-65.svg"
                  dedicatedWorkspace="Dedicated workspace"
                  aPrivateRoomEquippedWithW="A private room equipped with WiFi"
                />
                <DetailsCard
                  frame65="/frame-65-1.svg"
                  dedicatedWorkspace="Self check-in"
                  aPrivateRoomEquippedWithW="Check in with just your phone"
                />
                <DetailsCard
                  frame65="/frame-65-2.svg"
                  dedicatedWorkspace="Free cancellation"
                  aPrivateRoomEquippedWithW="Cancel anytime"
                />
              </div>
            </div>
          </div>
          <div className={styles.locationAmenities}>
            <div className={styles.generator}>
              <h3 className={styles.amenities}>Amenities</h3>
              <div className={styles.multiplier}>
                <div className={styles.regulator}>
                  <AmenitiesSection
                    mdilake="/mdilake.svg"
                    lakeside="Lakeside"
                    tablertoolsKitchen2="/tablertoolskitchen2.svg"
                    kitchen="Kitchen"
                    materialSymbolsnestCamIqO="/materialsymbolsnestcamiqoutdooroutline.svg"
                    securityCamerasOnProperty="Security cameras on property"
                    ionwifi="/ionwifi.svg"
                    wifi="Wifi"
                  />
                  <AmenitiesSection
                    mdilake="/phcar.svg"
                    lakeside="Free parking"
                    tablertoolsKitchen2="/cilshower.svg"
                    kitchen="Outdoor shower"
                    materialSymbolsnestCamIqO="/materialsymbolswatervocoutlinerounded.svg"
                    securityCamerasOnProperty="Hot water"
                    ionwifi="/covidpersonalhygienehandliquidsoap.svg"
                    wifi="Shampoo"
                    propWidth="unset"
                  />
                  <AmenitiesSection
                    mdilake="/phfireextinguisher.svg"
                    lakeside="Fire Extinguisher"
                    tablertoolsKitchen2="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
                    kitchen="Freezer"
                    materialSymbolsnestCamIqO="/materialsymbolscoffeemakeroutline.svg"
                    securityCamerasOnProperty="Coffee Maker"
                    ionwifi="/mdistove.svg"
                    wifi="Glass stove"
                    propWidth="unset"
                  />
                </div>
                <Button
                  className={styles.searchFlightsButton1}
                  disableElevation={true}
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#171e1d",
                    fontSize: "16",
                    borderColor: "#171e1d",
                    borderRadius: "6px",
                    "&:hover": { borderColor: "#171e1d" },
                    width: 185,
                    height: 48,
                  }}
                >
                  Show all amenities
                </Button>
              </div>
            </div>
            <div className={styles.chart}>
              <div className={styles.model}>
                <div className={styles.simulation}>
                  <div className={styles.analysis}>
                    <h3 className={styles.whereYoullBe}>Where you’ll be</h3>
                    <div className={styles.design}>
                      <img
                        className={styles.prototypeIcon}
                        alt=""
                        src="/vector-3.svg"
                      />
                      <div className={styles.theBridlePath}>
                        The Bridle Path
                      </div>
                    </div>
                  </div>
                  <div className={styles.template}>
                    <div className={styles.weatherInfo}>
                      <img
                        className={styles.suncloudIcon}
                        loading="lazy"
                        alt=""
                        src="/suncloud.svg"
                      />
                      <div className={styles.weatherInfo1}>
                        <div className={styles.temperature}>20°C</div>
                        <div className={styles.weatherDetail}>
                          Broken clouds
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent1}>
                      <div className={styles.sunParent}>
                        <img className={styles.sunIcon} alt="" src="/sun.svg" />
                        <div className={styles.cWrapper}>
                          <b className={styles.c}>23°C</b>
                        </div>
                      </div>
                      <div className={styles.sunGroup}>
                        <div className={styles.sun}>Sun</div>
                        <div className={styles.aug}>27 Aug</div>
                      </div>
                    </div>
                    <div className={styles.frameParent2}>
                      <div className={styles.suncloudParent}>
                        <img
                          className={styles.suncloudIcon1}
                          alt=""
                          src="/suncloud-1.svg"
                        />
                        <div className={styles.cContainer}>
                          <b className={styles.c1}>22°C</b>
                        </div>
                      </div>
                      <div className={styles.monParent}>
                        <div className={styles.mon}>Mon</div>
                        <div className={styles.aug1}>28 Aug</div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.sunContainer}>
                        <img
                          className={styles.sunIcon1}
                          alt=""
                          src="/sun.svg"
                        />
                        <div className={styles.cFrame}>
                          <b className={styles.c2}>23°C</b>
                        </div>
                      </div>
                      <div className={styles.tueParent}>
                        <div className={styles.tue}>Tue</div>
                        <div className={styles.aug2}>29 Aug</div>
                      </div>
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.suncloudGroup}>
                        <img
                          className={styles.suncloudIcon2}
                          alt=""
                          src="/suncloud-1.svg"
                        />
                        <div className={styles.cWrapper1}>
                          <b className={styles.c3}>20°C</b>
                        </div>
                      </div>
                      <div className={styles.wedParent}>
                        <div className={styles.wed}>Wed</div>
                        <div className={styles.aug3}>30 Aug</div>
                      </div>
                    </div>
                    <div className={styles.frameParent5}>
                      <div className={styles.suncloudContainer}>
                        <img
                          className={styles.suncloudIcon3}
                          alt=""
                          src="/suncloud-1.svg"
                        />
                        <div className={styles.cWrapper2}>
                          <b className={styles.c4}>19°C</b>
                        </div>
                      </div>
                      <div className={styles.thuParent}>
                        <div className={styles.thu}>Thu</div>
                        <div className={styles.aug4}>31 Aug</div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div className={styles.sunParent1}>
                        <img
                          className={styles.sunIcon2}
                          alt=""
                          src="/sun.svg"
                        />
                        <div className={styles.cWrapper3}>
                          <b className={styles.c5}>24°C</b>
                        </div>
                      </div>
                      <div className={styles.friParent}>
                        <div className={styles.fri}>Fri</div>
                        <div className={styles.sep}>1 Sep</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.modelChild}
                  alt=""
                  src="/rectangle-1@2x.png"
                />
                <img
                  className={styles.dataAggregatorIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-92.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.reviewSection}>
          <div className={styles.imageStack}>
            <h3 className={styles.reviews1}>Reviews</h3>
            <div className={styles.button1}>View all</div>
          </div>
          <div className={styles.circleContainer}>
            <ReviewCard
              ellipse12="/ellipse-12@2x.png"
              johnnyCash="Johnny Cash"
              june2023="June 2023"
              prop="5.0"
              michellesPlaceWasSoGreatA="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
            />
            <ReviewCard
              ellipse12="/ellipse-12-1@2x.png"
              johnnyCash="Yuta Watanabe"
              june2023="May 2023"
              prop="4.5"
              michellesPlaceWasSoGreatA="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
            />
            <ReviewCard
              ellipse12="/ellipse-12-2@2x.png"
              johnnyCash="Shane Willis"
              june2023="December 2022"
              prop="4.8"
              michellesPlaceWasSoGreatA="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
            />
          </div>
        </section>
        <section className={styles.similarStaysSection}>
          <div className={styles.dataTransformer}>
            <h3 className={styles.similarStays}>Similar stays</h3>
            <div className={styles.button2}>View all</div>
          </div>
          <div className={styles.decisionTree}>
            <StayCard
              brightwoodsEstate="Missisuaga Aistream"
              bridlepathOntarioCanada="Missisauga, Ontario, Canada"
            />
            <div className={styles.staycard}>
              <div className={styles.frameParent7}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/superhost-icon.svg"
                  />
                  <div className={styles.superhost1}>Superhost</div>
                </div>
                <div className={styles.wrapperHeartIcon}>
                  <img
                    className={styles.heartIcon1}
                    alt=""
                    src="/hearticon-1.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.urbanLoftParent}>
                    <div className={styles.urbanLoft}>Urban Loft</div>
                    <div className={styles.urbanLoft1}>Urban Loft</div>
                  </div>
                  <div className={styles.parent1}>
                    <div className={styles.div1}>4.8</div>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/star-icon.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.parent2}>
                    <div className={styles.div2}>$502</div>
                    <div className={styles.night1}>/night</div>
                  </div>
                </div>
              </div>
            </div>
            <StayCard
              brightwoodsEstate="Forestville Cottages"
              bridlepathOntarioCanada="Simcoe, Ontario Canada"
              propBackgroundImage="url('/frame-94@3x.png')"
            />
          </div>
        </section>
      </main>
      <Footer
        supportMargin="unset"
        hostingMargin="unset"
        localhostMargin="unset"
      />
      <div className={styles.band}>
        <div className={styles.bandInner}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
