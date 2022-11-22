import { Fragment } from 'react'
import styles from './BreadCrumbs.module.scss'

function BreadCrumbs({
    crumbs,
}) {
    return <div className={styles.container}>
        {crumbs.map((crumb, index) => 
            <Fragment key={crumb}>
                <span>{crumb}</span>
                {index < crumbs.length - 1 && <span className={styles.separator}>&gt;</span>}
            </Fragment>
        )}
    </div>
}

export default BreadCrumbs
