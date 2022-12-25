import { useState } from 'react'
import styles from './Timer.module.scss'
export default ({ start }) => {
    const [state, setState] = useState(start)
    
    return (
        <div className={styles.timer}>
            { !state.d || state.d === 0 ? <span className={styles.d}>{state.d}d</span> : null}
            { !state.h || state.h === 0 ? <span className={styles.h}>{state.h}h</span> : null}
            { !state.m || state.m === 0 ? <span className={styles.m}>{state.m}m</span> : null}
            { !state.s || state.s === 0 ? <span className={styles.s}>{state.s}s</span> : null}
        </div>
    )
}