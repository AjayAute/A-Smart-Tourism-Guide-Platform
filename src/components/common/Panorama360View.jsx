// components/PanoramaViewer.js
import React, { useEffect, useRef } from 'react';
import PhotoSphereViewer from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';

function PanoramaViewer({ imageUrl }) {
  const viewerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!imageUrl || !containerRef.current) return;

    const viewer = new PhotoSphereViewer.Viewer({
      container: containerRef.current,
      panorama: imageUrl,
      navbar: ['zoom', 'fullscreen'],
      defaultLat: 0.3,
    });

    viewerRef.current = viewer;

    return () => {
      viewer.destroy();
    };
  }, [imageUrl]);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}
    />
  );
}

export default PanoramaViewer;
