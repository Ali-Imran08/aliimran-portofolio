'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // ponytail: setShow sync dalam effect, tapi cuma client-side render via dynamic import
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(true);
    document.body.style.overflow = 'hidden';

    const leaveTimer = setTimeout(() => setLeaving(true), 2200);
    const hideTimer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = '';
    }, 3100);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!show) return null;

  return (
    <div 
      className={`preloader ${leaving ? 'preloader-leave' : ''}`}
      aria-hidden="true"
    >
      <div className="preloader-content">
        <p className="preloader-label">Welcome to</p>
        <h1 className="preloader-title">
          <span className="word-1">Ali</span>{' '}
          <span className="word-2">Imran&apos;s</span>{' '}
          <span className="word-3"><i>Portfolio</i></span>
        </h1>
      </div>
    </div>
  );
}
