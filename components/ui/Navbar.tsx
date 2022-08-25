import Image from "next/image";
import { CSSProperties } from "react";
import { Text, useTheme, Spacer, Link } from "@nextui-org/react";
import NextLink from "next/link";
const estilos: CSSProperties = {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '0x 50px',
}
export const Navbar = () => {
    const { theme } = useTheme();
    const backGroundColor: CSSProperties = {
        backgroundColor: theme?.colors.gray200.value,
    };
    return (
        <div style={{ ...estilos, ...backGroundColor }}>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Icodo de la app" width={70} height={70} />

            <NextLink href="/" passHref>
                <Link>
                    <Text color="white" h2>
                        P
                    </Text>
                    <Text color="white" h2>
                        okemon
                    </Text>
                </Link>

            </NextLink>
            <Spacer css={{ flex: 1 }} />
            <NextLink href="/favorites" passHref>
                <Link css={{ marginRight: '10px' }}>
                    <Text color="white" h2>
                        Favoritos
                    </Text>
                </Link>
            </NextLink>

        </div>
    )
}
