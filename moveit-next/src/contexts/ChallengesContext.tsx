import { ReactNode ,createContext, useState, useEffect } from 'react';
import challenges from '../../challenges.json'; 
import { ChallengeBox } from '../components/ChallengeBox';

interface Challenge{
    type: 'body'|'eye'
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number;
    levelUP: () => void;
    currentExperience: number;
    challengesCompleted: number;
    startNewChallenge: () => void;
    activeChallenges: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    compleChallenge: () => void;

}

interface ChallengesProviderProps {
    children: ReactNode;
}
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChellengesCompled] = useState(0);
    const [activeChallenges, setActiveChallenges] = useState(null);
    const experienceToNextLevel = Math.pow((level +1)*4 ,2);

    useEffect(()=>{
        Notification.requestPermission();
    }, [])

    function levelUP(){
        setLevel(level + 1)
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge= challenges[randomChallengeIndex];
        setActiveChallenges(challenge);
        new Audio('/notification.mp3').play();
        if(Notification.permission === 'granted'){
            new Notification('Nomo Desafio ',{
                body: `Valendo ${challenge.amount} pontos, novo desafio`,
                vibrate: [200, 100, 200]
            })
        }
    }

    function resetChallenge(){
        setActiveChallenges(null);
    }

    function compleChallenge(){
        if(!activeChallenges){
            return;
        }
        const { amount} = activeChallenges;
        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUP();
        }
        setCurrentExperience(finalExperience);
        setActiveChallenges(null);
        setChellengesCompled(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider 
            value={{
                level,
                levelUP,
                currentExperience,
                challengesCompleted,
                startNewChallenge,
                activeChallenges,
                resetChallenge,
                experienceToNextLevel,
                compleChallenge
                }}
            >
                {children}
        </ChallengesContext.Provider>
    )
}