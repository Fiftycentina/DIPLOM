import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
`;

const List = ({ products }) => {
  console.log(products);
  return <Box>{products[0]}</Box>;
};

export default List;
