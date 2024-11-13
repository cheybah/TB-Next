// src/app/page.js
import dynamic from 'next/dynamic';

// Dynamically import Home component without disabling SSR
const HomePage = dynamic(() => import('./components/Home/Home'), {
  ssr: true,  // This will enable SSR for HomePage component
});

export default function Page() {
  return (
    // Wrapping the app with Redux Provider to make the store accessible for SSR
      <HomePage />
  );
}
