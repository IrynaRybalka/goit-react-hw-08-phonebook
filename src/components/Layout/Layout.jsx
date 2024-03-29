import { AppBar } from "components/AppBar/AppBar"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container } from "./Layout.styled"


export const Layout = ()=> {
    return (
        <Container>
             <AppBar />
            <Suspense fallback = {null}>
                <Outlet/>
            </Suspense>
        </Container>
    )
}