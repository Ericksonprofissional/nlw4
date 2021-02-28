import styles from  '../style/components/Profile.module.css';

export function Profiler(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ericks0nmartinez.png" alt="Profile" />
            <div>
                <strong>Erickson Martinez</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}