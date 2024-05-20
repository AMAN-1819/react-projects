import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-red-600 flex">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                  <h1 className='text-2xl text-gray-900 font-bold md:text-4xl  pt-12 pb-12' >Royal Challengers Bangalore (RCB)</h1>
                      <img
                      className='mb-24  '
                          src="https://images.deccanherald.com/deccanherald%2F2024-03%2F7de994bf-1277-49ae-a033-3a9cc3f95388%2Ffile7umjygaqfrq12tbdnhgz.jpg?rect=0%2C0%2C1200%2C630&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100"
                          alt="image"
                      />
                      
    <p className='text-xl text-white font-italic md:text-xl text-justify pb-4  '>The Royal Challengers Bangalore (RCB) is a professional cricket team based in Bangalore, Karnataka, India. They compete in the Indian Premier League (IPL), which is one of the premier Twenty20 cricket leagues in the world. The team was founded in 2008 and is owned by United Spirits, a subsidiary of the British beverage company Diageo.</p>
    
    <h2 className='text-2xl text-black font-bold md:text-2xl pb-4'>Key Points About RCB:</h2>
    <ul>
        <li className='text-justify  text-white text-xl'><strong className='text-black'>Home Ground:</strong> M. Chinnaswamy Stadium, Bangalore.</li>
        <li className='text-justify  text-white text-xl'><strong className='text-black'>Team Colors:</strong> Red, black, and gold.</li>
        <li className='text-justify  text-white text-xl'><strong className='text-black'>Notable Players:</strong> Over the years, RCB has featured prominent cricketers like Virat Kohli, AB de Villiers, Chris Gayle, and Yuzvendra Chahal.</li>
        <li className='text-justify  text-white text-xl'><strong className='text-black'>Performance:</strong> Despite having a strong squad and several high-profile players, RCB has not yet won an IPL title as of 2024. They have reached the finals multiple times and are known for their passionate fan base and competitive spirit.</li>
        <li className='text-justify  text-white text-xl'><strong className='text-black'>Captain:</strong> Virat Kohli led the team for several years before stepping down from the captaincy in 2021. As of 2024, Faf du Plessis is the current captain.</li>
        <li className='text-justify  text-white text-xl'><strong className='text-black'>Strengths:</strong> The team is known for its powerful batting lineup and has often been associated with high-scoring games.</li>
    </ul>
    <p className='text-white text-xl text-justify'>RCB continues to be one of the most popular and followed teams in the IPL, with a significant fan base both in India and globally.</p>
                  </div>
                  <div  className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl pt-12 pb-12">
                          RCB SQUAD-2024
                      </h2>
                      {/* <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p> */}
                       <img
                          className='mb-96 pb-24'
                          src="https://cricgasm.com/wp-content/uploads/2024/03/IPL-2024-Royal-Challengers-Bengaluru-RCB-Full-New-Squad-List.jpg"
                          alt="image"
                      />


                  </div>
              </div>
          </div>
      </div>
  );
}