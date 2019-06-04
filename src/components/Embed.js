import Twitch from './Twitch'
import Youtube from './Youtube'
import Link from './Link'

const Embed = ({ stream }) => {

  return (
    <div>
      <Link href={stream.link} text={stream.type} />
      {stream.type === 'twitch' && (
        <Twitch stream={stream} />
      )}
      {stream.type === 'kek' && (
        <Youtube stream={stream} />
      )}
    </div>
  )
}

export default Embed
