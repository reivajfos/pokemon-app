import { Grid, Card } from "@nextui-org/react"
import { useRouter } from "next/router";
import { FC } from "react";
interface Props {
    id: number;
}
export const CardFavorite: FC<Props> = ({ id }) => {
    const router = useRouter()

    const onFavoriteCLicked = () => {

        router.push(`pokemon/${id}`)

    }

    return (
        <Grid xs={6} sm={2} md={2} xl={1} >
            <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image onClick={onFavoriteCLicked} width={'100%'} height={140} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} />


            </Card>
        </Grid>
    )
}
