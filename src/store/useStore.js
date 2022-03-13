import create from 'zustand';

const useStore=create((set)=>{
   
        token: '',
        isLoggedIn: false,
        login: (token) => set(state => ({ bears: state.bears + 1 })),
        logout: logoutHandler,
  
})