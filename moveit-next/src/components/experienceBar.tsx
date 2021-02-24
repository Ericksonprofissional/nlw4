import style from '../style/components/ExperienceBar.module.css';

export function ExperienceBar(){
    return (
        <header className={style.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: '50%'}}></div>
                <span  style={{left: '50%'}} className={style.currentExperience}>340 px</span>
            </div>
            <span>680 xp</span>
        </header>
    )
}