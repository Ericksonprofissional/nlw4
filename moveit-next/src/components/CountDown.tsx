import { useState, useEffect } from 'react';
import styles from '../style/components/CountDown.module.css';

export function CountDown() {
    const [time, setTime] = useState(1 * 60);
    const [active, setActie] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutoLeft, minutoRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
    function startCountDown(){
        setActie(true)
    }

    useEffect(()=>{
        if(active && time > 0){
            setTimeout(()=>{
                setTime(time -1)
            },1000)
        }
    }, [active, time])
//#jornadainfinita
    return (
    <div>
        <div className={styles.countDownContainer}>
            <div>
                <span>{minutoLeft}</span>
                <span>{minutoRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        <button 
            onClick={startCountDown}
            type="button" className={styles.countDownButton}>
            Inicar um ciclo
        </button>
    </div>
    );
}