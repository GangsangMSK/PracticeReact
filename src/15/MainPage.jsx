import styled from 'styled-components';

const Wrapper = styled.div`
    paddding: 1em;
    background: grey;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`;

function MainPage() {
    return (
        <Wrapper>
            <Title>Hello World!</Title>
        </Wrapper>
    );
}

export default MainPage;