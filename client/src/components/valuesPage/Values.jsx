import React from "react";
import styles from "./valuesStyle.module.css";
import HeaderNav from "../homePage/pages/navBar/HeaderNav";
import BackgorundImg from "../reusebleComp/backgorundImg/BackgorundImg";
import FooterComp from "../homePage/pages/footer/FooterComp";
import WWA from "./whoWeAre/WWA";
import OurValues from "./ourValues/OurValues";
const Values = () => {
  return (
    <div>
      <HeaderNav />
      <div className={styles.allContOne}>
        <BackgorundImg
          h3={"THESUS OUTDOORS"}
          p={"We believe that we can all do better by people and the planet"}
          styleCont={styles.backCont}
          styleH3={styles.styleH3}
          styleP={styles.styleP}
          styleBtn={styles.btnCont}
        />
      </div>
      <div className={styles.wwaCont}>
        <WWA
          h2="Who We Are"
          p1="Thesus is a socially and environmentally progressive brand of outdoor footwear and accessories. We are made up of a small ragtag band of industry outsiders from around the world."
          p2="We have big imaginations but we listen, think and act carefully. We believe that positive change happens when even simple ideas are given wings. Our ideas are brought to life through connection, commitment, and design simplicity."
        />
      </div>
      <div className={styles.allContTwo}>
        <BackgorundImg
          h3={"Where We Are"}
          p={
            "Thesus HQ is in Toronto, Canada. We acknowledge the Mississaugas of New Credit, the Haudenosaunee and Huron-Wendat First Nations, the original keepers of this land that hosts us."
          }
          styleCont={styles.backContTwo}
          styleH3={styles.styleH3Two}
          styleP={styles.stylePTwo}
          styleBtn={styles.btnCont}
        />
      </div>
      <div className={styles.valuesCont}>
        <OurValues />
      </div>
      <div className={styles.allContThree}>
        <BackgorundImg
          styleCont={styles.backContThree}
          styleBtn={styles.btnCont}
        />
      </div>
      <div className={styles.wwaCont}>
        <WWA
          h2="Transparency"
          p1="At Thesus we believe that honesty and transparency are the most important drivers in ensuring progress is made for People and the Planet. We reveal our entire materials list on each product page, so there are no questions left unanswered."
          p2="We are always looking to be better at what we do. That means, we are constantly on the lookout for new and innovative materials and partners. If you have any suggestions or direction, please reach out to us at support@thesusoutdoors.com."
        />
      </div>
      <FooterComp />
    </div>
  );
};

export default Values;
