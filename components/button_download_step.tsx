import styles from "./button_download.module.css";

export default function ButtonStepDownload(props) {
  return(
    <div>
      <div className={styles.buttons}>
        <a className="button button--secondary button--lg" href={props.filePath}>Download STEP Model Of The Robot</a>
      </div>
      <br/>
    </div>
  )
}
