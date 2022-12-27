import {Link} from '../'
import styles from './SponsorsBlock.module.scss'
import Dropbox from '../../assets/dropbox.svg'
import Slack from '../../assets/slack.svg'
import Spotify from '../../assets/spotify.svg'
export default () => {

    const data = [
        {name: 'Coinbase', icon: '' },
        {name: 'Spotify', icon: Spotify},
        {name: 'Slack', icon: Slack},
        {name: 'Dropbox', icon: Dropbox },
        {name: 'webflow', icon: ''}
    ]

    return (
        <div className={styles.sponsors}>
            {data?.map(sponsor => (
                <div className={styles.sponsor}>
                    <div>
                        {sponsor.icon
                            ? <img className={styles.icon} src={sponsor.icon} alt='' />
                            : null
                        }
                    </div>
                    {sponsor.name}
                </div>
            ))}
        </div>
    )
}