import React, { useState } from 'react';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';


const Home = () => {
    
    return (
        <div className='w-4/5 mx-auto flex flex-col'>
            <Header></Header>
            <Category></Category>
            <Featured ></Featured>
        </div>
    );
};

export default Home;