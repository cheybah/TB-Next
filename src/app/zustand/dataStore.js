import { create } from 'zustand';

const useDataStore = create((set) => ({
    destinations: [],
    carouselSlides: [],
    status: 'idle',
    error: null,

    // Fetch destinations data
    fetchDestinations: async () => {
        set({ status: 'loading' });
        try {
            const response = await fetch('http://react.tunisiebooking.com/api/fetchDestinations');
            if (!response.ok) throw new Error(`Error fetching destinations: ${response.statusText}`);

            const data = await response.json();
            set({ destinations: data, status: 'succeeded' });
        } catch (error) {
            set({ error: error.message, status: 'failed' });
        }
    },

    // Fetch carousel data
    fetchCarousel: async () => {
        try {
            const response = await fetch('http://api.resabookings.com/api/api/api_slides/api_slides.php', { cache: 'no-store' });
            const data = await response.json();
            set({ carouselSlides: data.Slides });
        } catch (error) {
            set({ error: error.message });
        }
    }
}));

// Initialize both destination and carousel data
const initializeDataStore = async () => {
    const { destinations, carouselSlides, fetchDestinations, fetchCarousel } = useDataStore.getState();
    if (destinations.length === 0) await fetchDestinations();
    if (carouselSlides.length === 0) await fetchCarousel();
};

export { useDataStore, initializeDataStore };