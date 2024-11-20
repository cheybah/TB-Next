// src/app/redux/slices/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Correct async thunks to fetch regions data
export const fetchRegionsData = createAsyncThunk(
  'fetchRegionsData', // Action type string
  async () => {
    try {
      // Replace with your actual API URL
      const response = await fetch('http://api.resabookings.com/api/api/api_hotel/api_destination_test.php');
      // Check if response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error fetching regions data: ${response.statusText}`);
      }
      const data = await response.json(); // Assuming JSON response
      return data; // Return the fetched data
    } catch (error) {
      throw new Error(error.message); // Handle errors
    }
  }
);

// Correct async thunks to fetch Carousel data
export const fetchCarouselData = createAsyncThunk(
  'fetchCarouselData', // Action type string
  async () => {
    try {
      // Replace with your actual API URL
      const response = await fetch('http://api.resabookings.com/api/api/api_slides/api_slides.php', { cache: 'no-store' });
      // Check if response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error fetching carousel data: ${response.statusText}`);
      }
      const data = await response.json(); // Assuming JSON response
      console.log('Carousel API response:', data); // Debug the response
      return data; // Return the fetched data
    } catch (error) {
      throw new Error(error.message); // Handle errors
    }
  }
);
// Correct async thunks to fetch destinations data
export const fetchDestinations = createAsyncThunk(
  'fetchDestinations', // Action type string
  async () => {
    try {
      // Replace with your actual API URL
      const response = await fetch('http://react.tunisiebooking.com/api/fetchDestinations');
      
      // Check if response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error fetching destinations data: ${response.statusText}`);
      }

      const data = await response.json(); // Assuming JSON response
      return data; // Return the fetched data
    } catch (error) {
      throw new Error(error.message); // Handle errors
    }
  }
);

// Correct async thunks to fetch hotels data
export const fetchHotelsData= createAsyncThunk(
  'fetchHotelsData', // Action type string
  async ({ville,datedep,dateret}) => {
    try {
      // Replace with your actual API URL
      const url = `http://api.resabookings.com/api/api/api_hotel/api_hotel_detail2_v22_vf.php?id_partenaire=10&id_marche=5&destination=${ville}&date_fin_1=${datedep}&date_fin_2=${dateret}&type=not%20all`;
      const response = await fetch(url);
      // Check if response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error fetching hotels data: ${response.statusText}`);
      }
      const data = await response.json(); // Assuming JSON response
      return data; // Return the fetched data
    } catch (error) {
      throw new Error(error.message); // Handle errors
    }
  }
);


// Correct async thunks to fetch note tripadvisor hotels data
export const fetchTripadData= createAsyncThunk(
  'fetchTripadData', // Action type string
  async () => {
    try {
      // Replace with your actual API URL
      const response = await fetch('http://api.resabookings.com/api/api/api_hotel/api_tripad.php');
      // Check if response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error fetching hotels data: ${response.statusText}`);
      }
      const data = await response.json(); // Assuming JSON response
      return data; // Return the fetched data
    } catch (error) {
      throw new Error(error.message); // Handle errors
    }
  }
);



const dataSlice = createSlice({
  name: 'data',
  initialState: {
    regions:[],
    slides: [],
    destinations: [],
    listHotels: [],
    listHotelTripAdv: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

    // Handling regions data
    .addCase(fetchRegionsData.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchRegionsData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.slides = action.payload; // Store fetched regions data
    })
    .addCase(fetchRegionsData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message; // Store error message
    })

      // Handling carousel data
      .addCase(fetchCarouselData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCarouselData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.slides = action.payload; // Store fetched slides data
      })
      .addCase(fetchCarouselData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Store error message
      })
      
      // Handling destinations data
      .addCase(fetchDestinations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.destinations = action.payload; // Store fetched destinations data
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Store error message
      })

      // Handling hotels data
      .addCase(fetchHotelsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHotelsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.listHotels = action.payload; // Store fetched destinations data
      })
      .addCase(fetchHotelsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Store error message
      })

      // Handling  note tripadvisor data
      .addCase(fetchTripadData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTripadData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.listHotelTripAdv = action.payload; // Store fetched destinations data
      })
      .addCase(fetchTripadData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Store error message
      });
  },
});

export default dataSlice.reducer;
