import React, { useState } from 'react';

const DeploymentComplete = (props) => {
  const [progress, message, colo] = props.vu;
  const [hover, setHover] = useState(false);

  // keep tooltip from going off the edges (4%–96% clamp)
  const tooltipLeft = Math.min(96, Math.max(4, Number(progress)));

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '16px',
        width: '300px',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Message */}
      <div
        style={{
          marginBottom: '12px',
          fontSize: '16px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color:'white'
        }}
      >
        {message}
      </div>

      {/* Wrapper so tooltip can render outside the track */}
      <div
        style={{ position: 'relative', cursor: 'pointer' }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Track */}
        <div
          style={{
            height: '8px',
            backgroundColor: '#e4e4e7',
            borderRadius: '8px',
            overflow: 'hidden', // keeps bar corners clean
          }}
        >
          {/* Fill */}
          <div
            style={{
              height: '100%',
              width: progress + '%',
              backgroundColor: colo,
              transition: 'width 0.3s ease',
              borderRadius: '8px',
            }}
          />
        </div>

        {/* Tooltip above bar */}
        {hover && (
          <div
            style={{
              position: 'absolute',
              bottom: '100%',              // sit above the track
              left: tooltipLeft + '%',     // follow progress
              transform: 'translate(-50%, -8px)',
              backgroundColor: '#111827',
              color: '#fff',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              zIndex: 2,
            }}
          >
            {progress}%
            {/* Arrow */}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #111827',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DeploymentComplete;
