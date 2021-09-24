import React from 'react'

export default function Winter () {
    return (
        <div
            className="video"
            style={{
                position: "relative",
                paddingBottom: "56.25%", /* 16:9 */
                paddingTop: 50,
                height: 0
            }}
        >
        <iframe 
            title="Winter Snowfall"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }}
            src={`https://www.youtube.com/embed/CUaybv1jdHw?autoplay=1&loop=1`}
            frameBorder="0"
            />
        </div>
    )
}
