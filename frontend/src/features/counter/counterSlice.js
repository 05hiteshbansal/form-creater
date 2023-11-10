import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

export const userRegisterDetails = createAsyncThunk(
    'users/fetchUserDetails', async (data,{ rejectWithValue})=> {

try {
    console.log(data)
    const response = await axios.post('http://localhost:4000/api/v1/registration',data)
    localStorage.setItem("Authorization", response.data.token);
    console.log(response.data)
    return response.data
} catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data.message );
}

    }
  )
export  const formDetails = createAsyncThunk(
    'users/fetchFormDetails',async (data,{ rejectWithValue})=> {
        try {
            console.log(data)
          const value =  localStorage.getItem('Authorization');
          console.log(value)
            const response = axios.post('http://localhost:4000/api/v1/form',data,{headers:{"Autherization": value}})
            toast.promise(
              response,
              {
                pending: {
                  render(){
                    return " Loading"
                  }
                },
                success: {
                  render(){
                    return "Form send Successfully"
                  },
                },
                error: {
                  render({data}){
                    console.log(data)
                    if(!data.response){
                      return data.message
                    }
                    return (data.response.data.message)
                  }
                }
              }
          )
            return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message );
        }}
  )
  export  const loginDetails = createAsyncThunk(
    'users/fetchloginDetails',
    async (data,{ rejectWithValue})=> {
        try {
            console.log(data)
            
            const response = await axios.post('http://localhost:4000/api/v1/login',data)
            localStorage.setItem("Authorization", response.data.token);
            return response.data

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message );
        }}
  )
  export const userLoggedOut = createAsyncThunk(
    'users/ userLoggedOut', async (data,{ rejectWithValue})=> {

try {
    console.log(data)
    const response = await axios.get('http://localhost:4000/api/v1/logout')
    //localStorage.setItem("Authorization", response.data.token);
    return response.data
} catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data.message );
}

    }
  )



const initialState = {
  user:{},
  message:true,
  error:"",
  status:"",
  loading:true
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegisterDetails.pending, (state) => {
    //toast.loading('Waiting...')
    state.message = true;
    state.status = "loading";
    }),
    builder.addCase(userRegisterDetails.rejected, (state,action) => {
      state.message = false;
      state.status = "failed";
      console.log(action)
      console.log(action.payload)
      state.error = action.payload;
      toast.error(action.payload);
      state.loading=false;
    }),
    builder.addCase(userRegisterDetails.fulfilled, (state, action) => {
      state.status = "fulfilled";
      console.log(action.payload);
      state.user=action.payload.result
      state.message=true
      state.loading=false;
     toast.success('Successfully Logged in!')
    }),
    builder.addCase(formDetails.pending, (state) => {
        state.message = true;
        state.status = "loading";
     //   toast.loading('Waiting...')
    }),
    builder.addCase(formDetails.rejected, (state,action) => {
          state.message = false;
          state.status = "failed";
          console.log(action)
          console.log(action.payload)
          state.error = action.payload;
        //  toast.error(action.payload);
          state.loading=false;
    }),
    builder.addCase(formDetails.fulfilled, (state) => {
          state.status = "fulfilled";
          state.message=true
          console.log(state , 1);
          //toast.success('Successfully send!')
          state.loading=false;
    }),
    builder.addCase(loginDetails.pending, (state) => {
      state.message = true;
      state.status = "loading";
     // toast.loading('Waiting...')
  }),
    builder.addCase(loginDetails.rejected, (state,action) => {
        state.message = false;
        state.status = "failed";
        console.log(action)
        console.log(action.payload)
        state.error = action.payload;
       toast.error(action.payload);
  }),
    builder.addCase(loginDetails.fulfilled, (state,action) => {
        state.status = "fulfilled";
        state.message=true
        console.log(action.payload);
        state.user=action.payload
        state.isloggedin=true;
       toast.success('Successfully Logged in!')
        state.loading=false;
  }),
  builder.addCase(userLoggedOut.pending, (state) => {
    state.message = true;
    state.status = "loading";
    // toast.loading('Waiting...')

}),
  builder.addCase(userLoggedOut.rejected, (state,action) => {
      state.message = false;
      state.status = "failed";
      console.log(action)
      console.log(action.payload)
      state.error = action.payload;
      toast.error(action.payload);
      state.loading=false;
}),
  builder.addCase(userLoggedOut.fulfilled, (state) => {
      state.status = "fulfilled";
      state.message=true
      state.isloggedin=false;
      console.log(action.payload);
      state.user={}
      toast.success('Successfully Logged out!')
      state.loading=false;
})
}
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer