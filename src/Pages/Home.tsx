// import React from 'react'

import MainLayout from "../Layouts/MainLayout";
import ProtectedRoutes from "../components/ProtectedRoutes";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    

      <MainLayout>
       <ProtectedRoutes>

        <SideBar/>
       </ProtectedRoutes>
       
      </MainLayout>
    
    
  )
}
