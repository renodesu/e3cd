import Twitch from './Twitch'
import Youtube from './Youtube'
import Link from './Link'

const Embed = ({ stream }) => {

  return (
    <React.Fragment>
      <Link href={stream.link} text={stream.type} />
      {stream.type === 'twitch' && (
        <Twitch stream={stream} />
      )}
      {stream.type === 'kek' && (
        <Youtube stream={stream} />
      )}
    </React.Fragment>
  )
}

export default Embed
