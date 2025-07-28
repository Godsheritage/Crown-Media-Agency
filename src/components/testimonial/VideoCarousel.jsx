import React from 'react';

const videos = [
  "https://photographysitebucket.s3.us-east-1.amazonaws.com/Crown+Media/Videos/Testimonial+Videos/Built+from+nothing.mp4",
  "https://photographysitebucket.s3.us-east-1.amazonaws.com/Crown+Media/Videos/Testimonial+Videos/Stop+wasting+Content.mp4",
"https://photographysitebucket.s3.us-east-1.amazonaws.com/Crown+Media/Videos/Testimonial+Videos/Video+1.mov"
];

export default function ThreePortraitVideos() {
  return (
    <div style={styles.wrapper} id="video-testimonial">
      <div>
        <h3 style={{ fontSize: "3rem", marginBottom: '3rem' }}><strong>Content like this turns your audience into customers</strong></h3>
      </div>

      {videos.map((src, idx) => (
        <div key={idx} style={styles.card}>
          <video
            src={src}
            controls
            autoPlay
            muted
            playsInline
            style={styles.video}
          />
        </div>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap'
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    padding: '10px'
  },
  video: {
    width: '300px',
    height: '530px',
    objectFit: 'cover',
    borderRadius: '12px',
    backgroundColor: '#000'
  }
};
