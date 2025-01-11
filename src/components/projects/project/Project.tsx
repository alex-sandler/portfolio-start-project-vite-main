import styled from "styled-components";

type Project = {
    title: string
    text: string
    src: string
}

export const Project = ({title, text, src}: Project) => {
    return (
        <StyledWork>
            <Image src={src} alt="#"/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link href="#">demo</Link>
            <Link href="#">code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: #edf5a7;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Link = styled.link`

`

const Title = styled.h3`
    text-align: center;
`

const Text = styled.p`

`