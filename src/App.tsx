import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components';

import Wilder, { WilderProps } from './components/Wilder';
import AddWilder from './components/AddWilder';

import { Container, CardRow } from './style/Container&CardRow';
import './App.css';

function App(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);

  const [wilders, setWilders] = useState<WilderProps[]>([]);
  const fetchData = async (): Promise<void> => {
    try {
      const result = await axios.get(
        'http://localhost:5000/api/v2/wilders/read'
      );

      setWilders(result.data.result); // check object
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </header>
      <Container>
        <h2>Wilders</h2>
        <AddWilder />
        <CardRow>
          {isLoaded &&
            wilders.map((el) => (
              <Wilder
                city={el.city}
                _id={el._id}
                key={el._id}
                name={el.name}
                skills={el.skills}
              />
            ))}
        </CardRow>
      </Container>

      <footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
