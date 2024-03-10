import { Container, Navbar } from "react-bootstrap";
import MainNav from "./mainNav";


export default function Layout(props){
    return (
        <>
        <MainNav />
        <br />
        <Container>
        {props.children}
        </Container>
        <br />

       </>
    )
}