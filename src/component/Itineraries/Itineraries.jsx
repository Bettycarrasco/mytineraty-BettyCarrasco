import React from 'react'

const Itineraries = ({data}) => {
  return (
    <div className='bg-danger-subtle col'>
      <h1>{data.name}</h1>
      <img src={data.photo} alt={data.name}/>
      <p>userName: {data.userName}</p>
      <p><img src={data.photoUser} alt={data.name}/></p>
      <p>price: {"💸".repeat(data.price)}</p>
      <p>duration: ⌚{data.duration} min</p>
      <p>likes: ❤️{data.likes}</p>
      <p>tematicHashtags: {data.likes}</p>
    </div>
  )
}

export default Itineraries

// import React, { useEffect, useState } from 'react';

// const Itineraries = () => {
//   const [itineraries, setItineraries] = useState([]);

//   useEffect(() => {
//     fetchData().then(data => {
//       setItineraries(data);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>ITINERARIES</h1>
//       {itineraries.map((itinerary, index) => (
//         <div key={index} className="itinerary-card">
//           <h2>User: {itinerary.user.name}</h2>
//           <img src={itinerary.user.avatar} alt="foto del user" />
//           <p>Nombre del user</p>
//           <div className="d-flex gap-2">
//             <h2>Hashtags:</h2>
//             {itinerary.hashtags.map((tag, i) => (
//               <p key={i}>{tag}</p>
//             ))}
//           </div>
//           <div>
//             <h2>Duration:</h2>
//             <p>{itinerary.duration}</p>
//           </div>
//           <div>
//             <h2>Price:</h2>
//             {"💸".repeat(itinerary.price)}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Itineraries;

// const Itineraries = ({ Url }) => {
//   const tags = ["#nice", "#nature"];
//   return (
//     <>
//       <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="foto del itinerario" />
//         <div class="card-body">
//           <h5 class="card-title">ITINERATY</h5>
//           <h2>User:</h2>
//           <img
//             src="https://source.unsplash.com/80x80?face"
//             alt="foto del user"
//           />
//           <p>Nombre del user</p>
//           <h2>Hashtags:</h2>
//           {tags.map((e, i) => {
//             <p key={i}>{e}</p>;
//           })}
//           <h2>Duration:</h2>
//           <p>Duracion del itinerario</p>
//           <h2>Price: </h2>
//           {"💸".repeat(3)}
//           <p class="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" class="btn btn-primary">
//             View More
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Itineraries;
