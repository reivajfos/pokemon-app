import { Container, Text, Image } from '@nextui-org/react';
export const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'cal(100vh-100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        }}>

            <Text h1>
                No hay favoritos
            </Text>
            <Image css={{ opacity: 0.1 }} width={250} height={250} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" />

        </Container>
    )
}
