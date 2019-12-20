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
  justify-content: space-between;
`;

export const Question = styled.View`
  margin-left: 5px;
  min-width: 320px;
`;

export const AwseredIcon = styled.View`
  border-radius: 50px;
  color: #ff0000;
`;

export const Awsered = styled.Text`
  margin-left: 5px;
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
  color: ${props => (props.answer ? '#0ddb55' : '#aaa')};
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

export const Message = styled.Text`
  margin-top: 10px;
`;
