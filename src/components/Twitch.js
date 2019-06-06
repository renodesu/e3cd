import { useState, useEffect } from 'react'

const TwitchEmbed = ({ stream }) => {
  const [showEmbed, setShowEmbed] = useState(false)

  let nodeRef = React.createRef()

  useEffect(() => {
    if (nodeRef.current) {
      new Twitch.Embed(stream.id, {
        width: 800,
        height: 600,
        channel: stream.embed.channel
      })
    }
  })

  return (
    <div>
      <button
        onClick={() => setShowEmbed(!showEmbed)}
      >
        Embed
      </button>
      {showEmbed && (
        <div ref={nodeRef} id={stream.id}>
        </div>
      )}
    </div >
  )
}

export default TwitchEmbed
