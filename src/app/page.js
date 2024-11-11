import dynamic from 'next/dynamic';

// Dynamically import HomePage/HomePage component (SSR enabled by default)
const TestComponent = dynamic(() => import('./HomePage/HomePage'));

export default function Home() {
  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <TestComponent />
    </div>
  );
}
