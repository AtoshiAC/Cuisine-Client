import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleChef from './SingleChef';
import { Link } from 'react-router-dom';

const ChefSection = () => {

  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-almahmudsarker.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  },[])


    return (
      <Container className="mt-5 pt-5">
        <div className="text-center mt-5 mb-5">
          <h1>THE TEAM</h1>
          <h6>Experience & Commitment</h6>
        </div>
        {chefs.map((chef) => (
          <SingleChef 
          key={chef.id}
          chef={chef}
          >
          </SingleChef>
        ))}
      </Container>
    );
};

export default ChefSection;