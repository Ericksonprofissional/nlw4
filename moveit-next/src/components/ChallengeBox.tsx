import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../style/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const {
        activeChallenges,
        resetChallenge
    } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
           {
           activeChallenges ? (
               <div className={styles.challengeBoxActive}>
                   <header>Ganhe {activeChallenges.amount} px</header>
                   <main>
                       <img src={`icons/${activeChallenges.type}.svg`} />
                       <strong>Novo desafio</strong>
                       <p>
                           {activeChallenges.description}
                       </p>
                   </main>
                   <footer>
                       <button 
                        type="button"
                        className={styles.challengeSuceedButton}
                       >
                           Completei
                        </button>
                       
                       <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={resetChallenge}
                       >
                           Falhei
                       </button>
                   </footer>
               </div>
           ) : (
               <div className={styles.challengeBoxNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level UP" />
                    Avance de Level completando desafios.
                </p>
            </div>
            )
        }
        </div>
    )
}