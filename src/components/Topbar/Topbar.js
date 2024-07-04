import React from 'react';
import styles from './Topbar.module.css';
import logo from '../../assets/Sign.png';

function Topbar(props) {
    return (
        <div className={styles.topbar}>
            <img src={logo} alt="logo" className={styles.image}/>
            <h1>Внутренний портал ФГУП «Росморпорт»</h1>
        </div>
    );
}
export default Topbar;