import { useEffect } from 'react';

const InvestorDeck = () => {
  useEffect(() => {
    window.location.href = 'https://acrobat.adobe.com/id/urn:aaid:sc:EU:7dd6d5b2-2e69-4f14-a039-f80c08b6d0f0';
  }, []);

  return <p>Redirecting...</p>;
};

export default InvestorDeck;