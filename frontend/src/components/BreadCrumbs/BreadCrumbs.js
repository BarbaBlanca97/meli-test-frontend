import styles from './BreadCrumbs.module.scss'

function BreadCrumbs() {
    const crumbs = [
        'Todos',
        'Tecnología',
        'Celulares',
    ]

    return <div className={styles.container}>
        {crumbs.map((crumb, index) => 
            <>
                <span>{crumb}</span>
                {index < crumbs.length - 1 && <span className={styles.separator}>&gt;</span>}
            </>
        )}
    </div>
}

export default BreadCrumbs
