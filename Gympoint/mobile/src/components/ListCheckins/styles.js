import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Checked = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
`;
