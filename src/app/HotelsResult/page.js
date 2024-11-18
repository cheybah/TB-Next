import dynamic from 'next/dynamic';
const ResultPage = dynamic(() => import('../components/ResultPage/ResultPage'));


export default function Result({searchParams }) {
  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <ResultPage searchParams={searchParams} />
    </div>
  );
}
