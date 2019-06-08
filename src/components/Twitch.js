import { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
ReactModal.setAppElement('#app')

const style = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  content: {
    padding: 0,
    border: 'none',
    width: 1000,
    height: 500,
    // top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: '50%',
    marginLeft: '-500px'
  }
}
const TwitchEmbed = ({ stream }) => {
  const [showEmbed, setShowEmbed] = useState(false)
  const [contentRef, setContentRef] = useState(null)

  let nodeRef = React.createRef()

  useEffect(() => {
    if (contentRef) {
      new Twitch.Embed(stream.id, {
        width: 1000,
        height: 500,
        channel: stream.embed.channel,
        layout: 'video'
      })
    }
  })

  return (
    <React.Fragment>
      <button
        onClick={() => setShowEmbed(!showEmbed)}
      >
        Twitch (embed)
      </button>
      <ReactModal
        isOpen={showEmbed}
        onRequestClose={() => setShowEmbed(false)}
        shouldCloseOnEsc={true}
        contentRef={node => setContentRef(node)}
        style={style}
      >
        <div
          ref={nodeRef}
          id={stream.id}
        />
      </ReactModal>
    </React.Fragment>
  )
}

export default TwitchEmbed
