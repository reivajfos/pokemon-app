import { Grid } from "@nextui-org/react"
import { FC } from 'react';
import { CardFavorite } from "./index";
interface Props {
    pokemonFav: number[]
}

const FavoritePokemon: FC<Props> = ({ pokemonFav }) => {
    return (
        <Grid.Container gap={2} direction='row' justify="flex-start">
            {

                pokemonFav.map(val => (
                    <CardFavorite key={val} id={val} />
                ))

            }
        </Grid.Container>
    )
}

export default FavoritePokemon;