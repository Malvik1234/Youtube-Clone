import React, { useEffect } from 'react'
import data from '../../../Data/sample.json'
import VidCard from './VidCard'
import style from './content.module.css'
// import Data from '../../../Data/sample.json'

const Content = () => {
    return (
        <div className={style.content}>
            {data.map((item) => (
                <VidCard
                    key={item.id}
                    thumbnail={item.thumbnailUrl}
                    title={item.title}
                    channelAvatar="https://yt3.ggpht.com/ytc/AKedOLQpQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQ=s68-c-k-c0x00ffffff-no-rj"
                    channelName={item.author}
                    views={item.views}
                    date={item.uploadTime}
                />
            ))}
        </div>
    )
}
export default Content
