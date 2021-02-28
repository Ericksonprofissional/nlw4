import { ReactNode ,createContext, useState } from 'react';
import challenges from '../../challenges.json'; 

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

}

interface ChallengesProviderProps {
    children: ReactNode;
}
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(30);
    const [challengesCompleted, setChellengesCompled] = useState(0);
    const [activeChallenges, setActiveChallenges] = useState(null);
    const experienceToNextLevel = Math.pow((level +1)*4 ,2)
    function levelUP(){
        setLevel(level + 1)
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge= challenges[randomChallengeIndex];
        setActiveChallenges(challenge)
    }

    function resetChallenge(){
        setActiveChallenges(null);
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
                }}
            >
                {children}
        </ChallengesContext.Provider>
    )
}