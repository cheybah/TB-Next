import dynamic from 'next/dynamic';
const Home = dynamic(() => import('../components/Home/Home'),
{
    ssr: true,
  });
const TestComponent = () => {
return (
    <Home />
);
};

export default TestComponent;
