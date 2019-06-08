import Twitch from './Twitch'
import Link from './Link'

const Embed = ({ stream }) => {
  return (
    <React.Fragment>
      <Link href={stream.link} text={stream.type} />
      {stream.type === 'twitch' && (
        <Twitch stream={stream} />
      )}
    </React.Fragment>
  )
}

export default Embed
