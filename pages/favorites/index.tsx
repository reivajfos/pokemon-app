
import { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import localFavorites from "../../utils/localFavorites";
import { PokemonFavorite } from '../../components/pokemon';
const FavortitePage = () => {
    const [favorite, setFavorite] = useState<number[]>([]);

    useEffect(() => {
        setFavorite(localFavorites.pokemons);
    }, []);



    return (
        <Layout title="pokemon-favoritos">
            {
                favorite.length === 0 ? <NoFavorites /> : (
                    <PokemonFavorite pokemonFav={favorite} />
                )

            }

        </Layout>
    )
}

export default FavortitePage;