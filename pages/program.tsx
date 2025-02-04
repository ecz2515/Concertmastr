import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import concertData from '../concert.json'; // Adjust path as needed
import { useAppContext } from '../AppStateProvider'; // Import global state hook

export default function ProgramScreen() {
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();
  const scrollViewRef = useRef<HTMLDivElement>(null);

  const { program, intermissionAfter, intermissionDuration } = concertData;

  useEffect(() => {
    // Scroll to the top when the page loads
    scrollViewRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column' as const,
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
    }}>
      <div
        ref={scrollViewRef}
        style={{
          padding: '20px',
          overflowY: 'auto' as const,
        }}
      >
        {/* Title */}
        <h1 style={{ 
          fontFamily: 'DMSans-Bold',
          textAlign: 'center' as const,
          marginBottom: '20px',
          fontSize: fontSize * 1.8 
        }}>
          Concert Program
        </h1>

        {/* Dynamic Program Blocks */}
        {program.map((piece, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                backgroundColor: '#333',
                borderRadius: '25px',
                padding: '20px',
                marginBottom: '20px',
                ...(enhancedContrast ? {
                  backgroundColor: '#444',
                  border: '1px solid white',
                } : {}),
              }}
            >
              {/* Composer Name */}
              <p style={{ fontFamily: 'DMSans-BoldItalic', fontSize: fontSize * 1.2 }}>
                {piece.composer}{' '}
                <span style={{ fontFamily: 'DMSans-Italic', color: '#CCC' }}>
                  {piece.born && piece.death
                    ? `(${piece.born} - ${piece.death})`
                    : piece.born
                    ? `(b. ${piece.born})`
                    : ''}
                </span>
              </p>

              {/* Piece Title */}
              <p style={{ fontFamily: 'DMSans-Bold', marginTop: '5px', fontSize: fontSize * 1.2 }}>
                {piece.pieceName}{' '}
                <span style={{ fontFamily: 'DMSans-Italic', color: '#CCC' }}>({piece.duration})</span>
              </p>

              {/* Movements */}
              {piece.movements.map((movement, idx) => (
                <p key={idx} style={{ fontFamily: 'DMSans-Italic', marginTop: '5px' }}>
                  {movement}
                </p>
              ))}

              {/* Soloists */}
              {piece.soloists.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  {piece.soloists.map(([name, instrument], idx) => (
                    <p key={idx}>
                      <span style={{ fontFamily: 'DMSans-SemiBold', fontSize: fontSize * 1.1 }}>
                        {name},
                      </span>{' '}
                      <span style={{ fontFamily: 'DMSans-SemiBoldItalic', fontSize: fontSize * 1.0 }}>
                        {instrument}
                      </span>
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Intermission */}
            {index === intermissionAfter && (
              <p style={{ 
                fontFamily: 'DMSans-Italic',
                textAlign: 'center' as const,
                marginBottom: '20px'
              }}>
                ~ {intermissionDuration} minute intermission ~
              </p>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Overlays */}
      {trueTone && <div style={{
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 223, 186, 0.4)',
        zIndex: -1,
      }}></div>}
      {blueLight && <div style={{
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 140, 0, 0.4)',
        zIndex: -1,
      }}></div>}
    </div>
  );
}
