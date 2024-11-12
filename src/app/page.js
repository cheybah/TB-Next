import dynamic from 'next/dynamic';
const TestComponent = dynamic(() => import('./HomePage/HomePage'));

export default function Home() {
  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <TestComponent />
    </div>
  );
}
