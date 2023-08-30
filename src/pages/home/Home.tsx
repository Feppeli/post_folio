import { Container, Box, Typography, Button } from "@mui/material";
import NavBarHome from "../../components/NavBarHome/NavBarHome";
import "./style.css"
import perfil from '../../assets/perfil/Frame 2.png'

export default function Home() {
    return (
        <>
            <nav>
                <div className="blur">
                    <NavBarHome />
                </div>
            </nav>
            <Container sx={{ display: "flex", pt: 12, mb: 12, alignItems: 'center' }}>
                <Box >
                    <Typography variant="h3">Seja bem vindo</Typography>
                    <Typography variant="body1" sx={{ maxWidth: "80%", mt: 3 }}>Meu objetivo é compartilhar com vocês um pouco do meu mundo e modo de encarar a vida. Há quem diga que sou um sonhador nato... Eu prefiro acreditar que sou um conquistador de desafios! É isso que me motiva. A zona de conforto nunca me atraiu e pensar fora da caixa me faz obter resultados que jamais imaginei alcançar.</Typography>
                    <Button sx={{ background: "#7B2CBF", color: "#fff", mt: 3 }}>Saiba mais</Button>
                </Box>
                <Box sx={{display:"flex", alignItems:'center', flexDirection: 'column'}}>
                    <img src={perfil} alt="perfil" style={{ height: '300px', marginRight: '3rem' }} />
                </Box>
            </Container>
        </>
    )
}
