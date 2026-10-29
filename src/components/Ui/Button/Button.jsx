import styles from './Button.module.scss'
import {Link} from 'react-router-dom'

const Button = (props) => {
    const {
        variant,
        atag='',
        to='',
        children,
    } = props


    if (to.trim().length > 0){
        return(
            <Link to={to} className={`${styles.button} ${styles[variant]}`}>
                {children}
            </Link>
        )
    }



    if (atag.trim().length > 0){
        return (
            <a className={`${styles.button} ${styles[variant]}`} href={atag}>{children}</a>
        )
    } else {
        return (
            <button className={`${styles.button} ${styles[variant]}`}>{children}</button>
        )
    }
    /* <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
      */


}

export default Button