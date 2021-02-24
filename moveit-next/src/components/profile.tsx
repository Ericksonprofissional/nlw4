import styles from  '../style/components/Profile.module.css';

export function Profiler(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHdGYtZVEWbkA/profile-displayphoto-shrink_800_800/0/1553884514455?e=1619654400&v=beta&t=CVX5_HMj0lKUe9JQI3tdWFNTIG_M2JIPLZEk_0B5y_g" alt="Erickson Martinez" />
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