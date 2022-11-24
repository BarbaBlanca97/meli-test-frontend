import styles from './LoadingIndicator.module.scss'

function LoadingIndicator() {
    return <div className={styles.container}>
        <span className={styles.text}>Loading...</span>
    </div>
}

export default LoadingIndicator
