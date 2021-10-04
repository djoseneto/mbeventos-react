import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import Items from '../../Data';

function Banner(e) {
    const event = Items.find(item => item.id === JSON.parse(e.e))
    const data = event.details[0].banner
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
    return (
        <div>
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={8000}
            width="900px"
            height="600px"
            captionStyle={captionStyle}
            radius="5px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#7ab7df"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "900px",
              maxHeight: "600px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
    )
}

export default Banner
