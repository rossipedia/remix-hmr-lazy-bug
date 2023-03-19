import { lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      {/* Change the color here to see HMR work and the style change */}
      <p style={{ color: 'lime' }}>This component is NOT lazily rendered</p>
      <LazyComponent />
    </div>
  );
}
