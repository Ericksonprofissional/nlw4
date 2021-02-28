import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../style/components/CountDown.module.css';

export function CountDown() {
    let countDownTimeOut: NodeJS.Timeout;


    const {
        startNewChallenge
    } = useContext(ChallengesContext);


    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActie] = useState(false);
    const [hasFinish, setHasFinish] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutoLeft, minutoRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
    function startCountDown(){
        setIsActie(true)       
    }
    function resetCountDown(){
        clearTimeout(countDownTimeOut);
        setIsActie(false); 
        setTime(0.1 * 60)
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countDownTimeOut = setTimeout(()=>{
                setTime(time -1)
            },1000)
        }else if (isActive && time == 0){
            setHasFinish(true);
            setIsActie(false);
            startNewChallenge();
        }
    }, [isActive, time]);
   
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
        {
            hasFinish ? (
                <button 
                    disabled                
                    type="button" className={styles.countDownButton}>
                    Ciclo encerrado
                </button>
            ): (
                <>
                    {
                        isActive ? (   
                            <button
                                onClick={resetCountDown}
                                type="button" className={`${styles.countDownButton} ${styles.countDownButtonActive}`}>
                                Abandonar ciclo
                            </button>    
                        ) : (
                            <button 
                                onClick={startCountDown}
                                type="button" className={`${styles.countDownButton}`}>
                                Iniciar ciclo
                            </button>    
            )
            }        
                </>
            )
        }       
    </div>
    );
}