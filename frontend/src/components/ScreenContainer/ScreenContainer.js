import styles from './ScreenContainer.module.scss'

function ScreenContainer({ children }) {
    return <div className={styles.container}>
        {children}
    </div>
}

export default ScreenContainer
