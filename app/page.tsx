
"use client";

import Header from "./components/Header";
import Spinner from "./components/Spinner";

 function Home() {
  

 

  return (
    <div >
      <Header />
     
        <div className="flex justify-center items-center min-h-screen">
          <Spinner />
        </div>
        
      
</div>

     
  );
}
export default Home;




