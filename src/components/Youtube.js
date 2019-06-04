import { useState, useEffect } from 'react'

const YoutubeEmbed = ({ stream }) => {
  const [showEmbed, setShowEmbed] = useState(false)

  let nodeRef = React.createRef()

  useEffect(() => {
    console.log('useEffect', nodeRef)
    if (nodeRef.current) {
      new Twitch.Embed(stream.id, {
        width: 800,
        height: 600,
        channel: 'xbox'
      })
    }
  })

  return (
    <div>
      <button
        onClick={() => setShowEmbed(!showEmbed)}
      >
        toggle
      </button>
      {showEmbed && (
        <div ref={nodeRef} id={stream.id}>
        </div>
      )}
    </div >
  )
}

export default YoutubeEmbed
