'use client';
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component

export default function Home() {
  const [memoryImages] = useState([
    { id: 1, src: '/memory1.jpg', alt: 'Memory 1' },
    { id: 2, src: '/memory2.jpg', alt: 'Memory 2' },
    { id: 3, src: '/memory3.jpg', alt: 'Memory 3' },
    { id: 4, src: '/memory4.jpg', alt: 'Memory 4' },
    { id: 5, src: '/memory5.jpg', alt: 'Memory 5' },
    { id: 6, src: '/memory6.jpg', alt: 'Memory 6' },
    { id: 7, src: '/memory7.jpg', alt: 'Memory 7' },
    { id: 8, src: '/memory8.jpg', alt: 'Memory 8' },
    { id: 9, src: '/memory9.jpg', alt: 'Memory 9' },
  ]);

  const [startIndex, setStartIndex] = useState(0);
  const imagesPerLoad = 3;

  const displayedImages = memoryImages.slice(startIndex, startIndex + imagesPerLoad);

  const showMessage = (message) => {
    alert(message);
  };

  const loadMoreMemories = () => {
    const newStartIndex = startIndex + imagesPerLoad;
    if (newStartIndex < memoryImages.length) {
      setStartIndex(newStartIndex);
    } else {
      alert('Mrs. Meenakshi Vansh Jaiswal, you should contact your husband ASAP for more memories!');
    }
  };

  const [loveMeter, setLoveMeter] = useState(50);

  const increaseLoveMeter = () => {
    setLoveMeter((prev) => Math.min(prev + 10, 100));
    if (loveMeter >= 90) {
      alert("It's always 100% for you, love! ❤️");
    }
  };

  const decreaseLoveMeter = () => {
    setLoveMeter((prev) => Math.max(prev - 10, 0));
  };

  const playSong = () => {
    const audio = document.getElementById('song1');
    audio.play();
  };

  const stopSong = () => {
    const audio = document.getElementById('song1');
    audio.pause();
    audio.currentTime = 0; // Reset song to start
  };

  return (
    <div style={{ textAlign: 'center', background: 'linear-gradient(to bottom right, #ffebee, #fce4ec)', padding: '30px', fontFamily: 'Arial' }}>
      <h1 style={{ fontFamily: 'Pacifico, cursive', color: '#ff69b4' }}>Happy Birthday, Mei!</h1>
      
      {/* Cute Love Text */}
      <p style={{ color: '#ff4d94', fontSize: '1.2em', marginBottom: '20px' }}>You are the light of my life! ✨</p>

      {/* Song Section */}
      <div style={{ margin: '20px', padding: '20px', borderRadius: '15px', backgroundColor: '#ffe6f2' }}>
        <h2 style={{ fontFamily: 'Pacifico, cursive', color: '#ff4d94' }}>Your Favorite Song</h2>
        <div style={{ margin: '10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image 
            src="/alone.jpg"
            alt="Alone - Alan Walker"
            width={100} // Set image width
            height={100} // Set image height
            style={{ borderRadius: '10px', cursor: 'pointer', transition: 'transform 0.3s' }}
            onClick={playSong}
          />
          <p>Alone - Alan Walker</p>
          <audio id="song1" src="/Alone.mp3" />
          <button onClick={playSong} style={buttonStyle}>Play Song</button>
          <button onClick={stopSong} style={{ ...buttonStyle, marginTop: '10px' }}>Stop Song</button>
        </div>
      </div>

      {/* Memory Section */}
      <div style={{ margin: '20px', padding: '20px', borderRadius: '15px', backgroundColor: '#ffe6f2' }}>
        <h2 style={{ fontFamily: 'Pacifico, cursive', color: '#ff4d94' }}>Memories Together</h2>
        
        {/* Cute Love Message Above Memories */}
        <p style={{ color: '#ff4d94', fontSize: '1.2em', marginBottom: '20px' }}>
          &quot;Every moment with you is a beautiful memory! 💖&quot; {/* Escaped quotes */}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {displayedImages.map((memory) => (
            <div key={memory.id} style={{ margin: '10px', textAlign: 'center' }}>
              <Image
                src={memory.src}
                alt={memory.alt}
                width={200} // Set image width
                height={200} // Set image height
                style={{
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  border: '3px solid #ff4d94',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
        
        <button onClick={loadMoreMemories} style={buttonStyle}>More Memories</button>
        {startIndex >= memoryImages.length && (
          <p style={{ marginTop: '20px', color: '#ff4d94' }}>
            Mrs. Meenakshi Vansh Jaiswal, you should contact your husband ASAP for more memories!
          </p>
        )}
      </div>

      {/* Fun Gifts Section */}
      <div style={{ margin: '20px', padding: '20px', borderRadius: '15px', backgroundColor: '#ffe6f2' }}>
        <h2 style={{ fontFamily: 'Pacifico, cursive', color: '#ff4d94' }}>Fun Gifts for You!</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => showMessage('You light up my life like no one else! 🌟')} style={buttonStyle}>Gift 1</button>
          <button onClick={() => showMessage('You’re sweeter than all the candy in the world! 🍭')} style={buttonStyle}>Gift 2</button>
          <button onClick={() => showMessage('You deserve all the pampering in the universe! 🥰')} style={buttonStyle}>Gift 3</button>
          <button onClick={() => showMessage('Every moment with you is like a fairytale! ✨')} style={buttonStyle}>Gift 4</button>
          <button onClick={() => showMessage('Let’s make beautiful memories together, forever! 💕')} style={buttonStyle}>Gift 5</button>
        </div>
      </div>

      {/* Love Meter Section */}
      <div style={{ margin: '20px', padding: '20px', borderRadius: '15px', backgroundColor: '#ffe6f2' }}>
        <h2 style={{ fontFamily: 'Pacifico, cursive', color: '#ff4d94' }}>Love Meter</h2>
        <div style={{ fontSize: '1.5em' }}>
          <p>{`❤️ ${loveMeter}% of Love`} </p>
          <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>
            <button onClick={increaseLoveMeter} style={buttonStyle}>Increase Love</button>
            <button onClick={decreaseLoveMeter} style={{ ...buttonStyle, marginLeft: '10px' }}>Decrease Love</button>
          </div>
          <div style={{ width: '300px', height: '20px', backgroundColor: '#eee', borderRadius: '10px', overflow: 'hidden', margin: '10px auto' }}>
            <div
              style={{
                width: `${loveMeter}%`,
                height: '100%',
                backgroundColor: '#ff69b4',
                transition: 'width 0.3s',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#ff69b4',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  margin: '10px',
};

buttonStyle[':hover'] = {
  backgroundColor: '#ff4d94',
};

























