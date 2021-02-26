import styles from '../styles/components/Profile.module.css'
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://www.github.com/henriquehdv93.png" alt="Avatar" />
            <div>
                <strong>Henrique Vargas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}