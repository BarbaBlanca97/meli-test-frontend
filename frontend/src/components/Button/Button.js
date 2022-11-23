import styles from './Button.module.scss'
import classNames from 'classnames'


// Parece un poco innecesario ahora, pero quería ilustrar la idea de que el componente controla
// los estilos
const typeToClassNamesMap = {
    primary: 'button--primary',
}

function Button({
    children,
    onClick = () => {},
    type = 'primary',
}) {
    return <button
        onClick={onClick}
        className={classNames(styles.button, styles[typeToClassNamesMap[type]])}
    >
        {children}
    </button>
}

export default Button
