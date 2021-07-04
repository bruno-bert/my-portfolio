import styles from './Layout.module.scss'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { LeftMenu } from '../LeftMenu/LeftMenu'
import { RightMenu } from '../RightMenu/RightMenu'


interface Props {
    children: JSX.Element
}

export const Layout = (props: Props) => {
    return (
        <>
            <Header />

            <LeftMenu />

            {props.children}

            <RightMenu />

            <Footer />
        </>
    )
}
