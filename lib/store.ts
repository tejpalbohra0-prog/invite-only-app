import create from 'zustand';

interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  influencers: string[];
}

interface Filter {
  searchTerm: string;
  status: 'all' | 'active' | 'inactive';
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
}

interface StoreState {
  campaigns: Campaign[];
  filters: Filter;
  userProfile: UserProfile | null;
  addCampaign: (campaign: Campaign) => void;
  updateCampaign: (id: string, updatedCampaign: Partial<Campaign>) => void;
  deleteCampaign: (id: string) => void;
  setFilters: (filters: Filter) => void;
  setUserProfile: (userProfile: UserProfile) => void;
}

const useStore = create<StoreState>((set) => ({
  campaigns: [],
  filters: { searchTerm: '', status: 'all' },
  userProfile: null,
  addCampaign: (campaign) => set((state) => ({ campaigns: [...state.campaigns, campaign] })),
  updateCampaign: (id, updatedCampaign) => set((state) => ({
    campaigns: state.campaigns.map((campaign) => (campaign.id === id ? { ...campaign, ...updatedCampaign } : campaign))
  })),
  deleteCampaign: (id) => set((state) => ({ campaigns: state.campaigns.filter((campaign) => campaign.id !== id) })),
  setFilters: (filters) => set({ filters }),
  setUserProfile: (userProfile) => set({ userProfile }),
}));

export default useStore;
