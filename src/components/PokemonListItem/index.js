import React, { useState, useEffect } from 'react';

import { getPokemonByName } from '../../api';
import loadingIndicator from '../../static/img/pokeball.gif';
import Button from '../Button';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';
import * as SC from './PokemonListItem.sc';

const PokemonListItem = ({ children, data: { name } }) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchDetails = async () => {
      try {
        const pokemonDetails = await getPokemonByName(name);

        setDetails(pokemonDetails);
      } catch (err) {
        setError(
          `Failed to retrieving ${name}, maybe he is hidding somewhere :(`
        );
      }

      setLoading(false);
    };

    fetchDetails();
  }, [name]);

  if (error) {
    return (
      <SC.DivGridContainer>
        <SC.DivEmptyWrapper>{error}</SC.DivEmptyWrapper>
      </SC.DivGridContainer>
    );
  }

  if (loading) {
    return (
      <SC.DivGridContainer>
        <SC.DivEmptyWrapper>
          <img src={loadingIndicator} alt="pokeball" width={60} />
        </SC.DivEmptyWrapper>
      </SC.DivGridContainer>
    );
  }

  return (
    <>
      <SC.DivGridContainer>
        <div>
          <PokemonCard details={details} />
        </div>
        <SC.DivDetailBtn>
          <Button
            outlined={showDetails}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'CLOSE DETAILS' : 'SEE DETAILS'}
          </Button>
        </SC.DivDetailBtn>

        {showDetails && (
          <PokemonDetails sprites={details.sprites} moves={details.moves} />
        )}
      </SC.DivGridContainer>
    </>
  );
};

export default PokemonListItem;
