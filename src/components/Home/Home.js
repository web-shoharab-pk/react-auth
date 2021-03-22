import React from 'react';
 import fakedata from './../FakeData/FakeData.json'

const Home = () => {
    const allData = fakedata.employees;
    return (
        <div>
            <h1>THis is Home</h1>
             
             {
                 allData.map(data => console.log(data))
                  
             }
        </div>
    );
};

export default Home;