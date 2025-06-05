import styles from "./button_download.module.css";

export default function ButtonDownload(props) {
  return(
    <div>
      <div className={styles.buttons}>
        <a className="button button--secondary button--lg" href={props.filePath} target="_blank">Download The Robot's Wiring Diagram</a>
      </div>
      <br/>
    </div>
  )
}
