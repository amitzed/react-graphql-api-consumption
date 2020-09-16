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

    <div className="four wide column" style={{textAlign: 'center'}}>
      <h3 className="ui label" style={{marginBottom: '0.25rem'}}>{name}</h3>

        <div className="ui small images">
          <img className="ui fluid image" src={svgFile} alt="svg-image" />
        </div>
    </div>

)

const App = () => {
  const { loading, error, data } = useQuery(GET_FLAGS)

  if(error) return <h1>Something Went Wrong...</h1>
  if(loading) return <h1>Loading...</h1>

  return (
    <div className="ui container" id="wrapper">
      <h2 className="ui center aligned icon header" style={{marginBottom: '2.5rem'}}>
        <i className="circular flag outline inverted olive icon flag-icon"></i>
        Country Flags
      </h2>

      <div className="ui grid country-content">
        {data.Flag.map(flag => (
          <FlagComp key={flag._id} flag={flag} />
        ))}
      </div>

      <footer>
        <a href="#wrapper">Back to Top</a>
      </footer>
    </div>
  );
}

export default App;
