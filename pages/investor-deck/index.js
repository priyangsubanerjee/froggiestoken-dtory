import { useEffect } from 'react';

const InvestorDeck = () => {
  useEffect(() => {
    window.location.href = 'https://acrobat.adobe.com/id/urn:aaid:sc:EU:255f7ea0-1331-4fe0-8454-fdc27319f6b1';
  }, []);

  return <p>Redirecting...</p>;
};

export default InvestorDeck;