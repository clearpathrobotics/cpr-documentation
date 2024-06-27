import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import styles from './styles.module.css';

function SafetyDangerAdmonition(props) {
  return (
    <div style={{border: "solid red", padding: 10, borderRadius: 5, borderWidth: 4, backgroundColor: "#ffe6e6"}}>
      <div id={styles.safety}>
        <img
          src="/img/safety_images/safety-icon-red.png"
          width="40"
        />
      </div>
      <div  >
        <h5 style={{fontSize: 24}}>{props.title}</h5>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

function SafetyWarningAdmonition(props) {
  return (
    <div style={{border: "dashed #ff9900", padding: 10, borderRadius: 5, borderWidth: 4, backgroundColor: "#ffebcc"}}>
      <div id={styles.safety}>
        <img
          src="/img/safety_images/safety-icon-orange.png"
          width="40"
        />
      </div>
      <div  >
        <h5 style={{fontSize: 24}}>{props.title}</h5>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

function SafetyCautionAdmonition(props) {
  return (
    <div style={{border: "dashed #ffcc00", padding: 10, borderRadius: 5, borderWidth: 4, backgroundColor: "#fffae6"}}>
      <div id={styles.safety}>
        <img
          src="/img/safety_images/safety-icon-yellow.png"
          width="40"
        />
      </div>
      <div  >
        <h5 style={{fontSize: 24}}>{props.title}</h5>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  'safety-danger': SafetyDangerAdmonition,
  'safety-warning': SafetyWarningAdmonition,
  'safety-caution': SafetyCautionAdmonition,
};

export default AdmonitionTypes;