import { Link } from "react-router-dom";
import { Container, Description, IconArea, Info, Point, Title } from "./styles";
import { ReactComponent as Profile } from '../../assets/profile.svg';
import { ReactComponent as Book } from '../../assets/book.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';

type SidebarItemProps = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active }: SidebarItemProps) => {
    return (
        <Container>
            <Link to={ path }>
                <Info>
                    <Title>{ title }</Title>
                    <Description>{ description }</Description>
                </Info>
                <IconArea active={ active }>
                    {
                        icon === 'profile' &&
                        <Profile fill="white" width={ 24 } height={ 24 } />
                    }

                    {
                        icon === 'book' &&
                        <Book fill="white" width={ 24 } height={ 24 } />
                    }

                    {
                        icon === 'mail' &&
                        <Mail fill="white" width={ 24 } height={ 24 } />
                    }
                </IconArea>
                <Point active={ active } />
            </Link>
        </Container>
    );
}
