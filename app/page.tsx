import React from 'react';
import CampaignCard from './components/CampaignCard';

const HomePage = () => {
  const campaigns = [
    { id: 1, title: 'Campaign One', description: 'This is the first campaign.' },
    { id: 2, title: 'Campaign Two', description: 'This is the second campaign.' },
    { id: 3, title: 'Campaign Three', description: 'This is the third campaign.' },
  ];

  return (
    <div>
      <h1>Welcome to Our Campaigns</h1>
      <div className="campaign-cards">
        {campaigns.map(campaign => (
          <CampaignCard key={campaign.id} title={campaign.title} description={campaign.description} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;