import React from 'react'

import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Preview = (props: any) => {
  const {url, renderDefault} = props
  if (!url) {
    return <div>Missing YouTube URL</div>
  }
  const id = getYouTubeId(url)
  return (
    <div>
      {renderDefault({...props, title: 'YouTube Embed'})}
      <LiteYouTubeEmbed id={id} />
    </div>
  )
}

export default Preview
