import create from 'zustand';

const useLogInStore=create((set)=>({
   
        token: '',
        isLoggedIn: false,
        login: (token) => set(state => {
                localStorage.setItem('token',token);
               return { token:token, isLoggedIn:true};
        }),
        logout: ()=>set(state => {
                localStorage.removeItem('token');
               return { token:null, isLoggedIn:false};
        })
  
}));
export default useLogInStore;