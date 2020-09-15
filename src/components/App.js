import React from 'react';
import '../styles/App.css';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_FLAGS = gql`
  {
    Flag {
      _id
      emoji
      svgFile
      country {
        name
      }
    }
  }
`

const FlagComp = ({ flag: { _id, emoji, svgFile, country: { name } } }) => (
  <div>
    <div>
      <img src={svgFile} alt="svg-image" />
      <h1>{name}</h1>
    </div>
    <a href="#">
      See Info
    </a>
  </div>
)

const App = () => {
  const { loading, error, data } = useQuery(GET_FLAGS)

  if(error) return <h1>Something Went Wrong...</h1>
  if(loading) return <h1>Loading...</h1>

  return (
    <main>
      <h1>Country Flags</h1>
      {data.Flag.map(flag => (
        <FlagComp key={flag._id} flag={flag} />
      ))}
    </main>
  );
}

export default App;
