import { useState, useEffect } from 'react';
import { Grid, Card, Button, Text, Container, Image } from '@nextui-org/react';
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { localFavorite, getPokemon } from '../../utils';
import confetti from 'canvas-confetti';
interface Props {
    pokemon: Pokemon,
}
const NamePokemon: NextPage<Props> = ({ pokemon }) => {

    const router = useRouter();
    const [isInFavorite, setisInFavorite] = useState<boolean>(false);


    const onToggleFavorite = () => {
        localFavorite.localFavorites(pokemon.id);
        setisInFavorite(!isInFavorite);

        if (!isInFavorite) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 100,
                angle: -100,
                origin: {
                    x: 1,
                    y: 0,
                }
            });
        }

    }
    useEffect(() => {
        setisInFavorite(localFavorite.existInFavorite(pokemon.id));
    }, [pokemon.id]);

    return (
        <Layout title={pokemon.name}>

            <Grid.Container css={{ marginTop: "5px" }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: "30px" }}>

                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
                            <Text h1 transform='capitalize'>
                                {pokemon.name}
                            </Text>
                            <Button ghost={isInFavorite} color="gradient" onClick={onToggleFavorite}>
                                {
                                    isInFavorite ? 'En favoritos' : 'Guardar en favoritos'
                                }

                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>
                                Sprites
                            </Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                            </Container>

                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>

        </Layout>
    )
}
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name);
    return {
        //paginas a generar
        paths: pokemonNames.map(name => ({
            params: { name: name },
        })),
        fallback: 'blocking',
    }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string };



    return {
        props: {
            pokemon: await getPokemon(name),
        }
    }
}
export default NamePokemon;