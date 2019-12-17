import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 30px;
  padding: 20px;
  margin-top: 100px;
  border-radius: 4px;
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
`;

export const Content = styled.View`
  min-height: 200px;
  max-height: auto;
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Question = styled.Text`
  margin-top: 10px;
  margin-left: 5px;
  margin-bottom: 10px;
  font-size: 15px;
  margin-right: 10px;
  text-align: justify;
`;

export const AnswerQuestion = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  text-align: justify;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
`;
