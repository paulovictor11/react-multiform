import { Container, Description, Icon, Info, Title } from "./styles"

type SelectOptionProps = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({ title, description, icon, selected, onClick }: SelectOptionProps) => {
    return (
        <Container onClick={ onClick } selected={ selected }>
            <Icon>{ icon }</Icon>
            <Info>
                <Title>{ title }</Title>
                <Description>{ description }</Description>
            </Info>
        </Container>
    )
}
