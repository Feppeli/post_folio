import { Container, Typography, Box, Link } from "@mui/material";
import "./style.css"
import github from '../../assets/social icons/icons8-github-48.png'
import linkedin from '../../assets/social icons/icons8-linkedin-circundado-60.png'
import instagram from '../../assets/social icons/icons8-instagram-48.png'

export default function NavBarHome() {

    const text_h1 = "<Tecnologia, Novidade e Inovação em um só lugar/>"
    return (
        <Container className="navBar">
            <Box sx={{}} className="navHeader">
                <Typography variant="h4" sx={{ color: "#fff" }}>Felipe Teixeira</Typography >
                <Box className="links">
                    <Link href="">HOME</Link>
                    <Link href="">PORTFÓLIO</Link>
                    <Link href="">SOBRE</Link>
                    <Link href="">BLOG</Link>
                </Box>
            </Box>

            <Box>
                <Typography variant='h2' sx={{ pt: 4, color: '#fff', width: '80%', fontWeight: "900", lineHeight: '3.5rem' }}>{text_h1}</Typography>
                <Typography variant='h5' sx={{ fontWeight: 100, mt: 3, color: '#fff', width: "50%", lineHeight: '2rem' }}>O seu manual de bolso sobre programação e tecnologia</Typography>
            </Box>

            <Box sx={{ pb: '1.5rem', display: "flex", mt: 2 }}>
                <div className="socialButton">
                    <Link href='https://github.com/Feppeli' target='_blank'>
                        <img src={github} alt="github" />
                    </Link>
                </div>
                <div className="socialButton" style={{ marginLeft: '1rem' }}>
                    <Link href='https://www.linkedin.com/in/felipe-teixeira-devfullstack' target='_blank'>
                        <img src={linkedin} alt="linkedin" />
                    </Link>
                </div>
                <div className="socialButton" style={{ marginLeft: '1rem' }}>
                    <Link href='https://www.instagram.com/felipetxa.py/' target='_blank'>
                        <img src={instagram} alt="instagram" />
                    </Link>
                </div>
            </Box>
        </Container>
    )
}