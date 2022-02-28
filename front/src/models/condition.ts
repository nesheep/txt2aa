type Condition = {
  txt: string;
  font: string;
  fontSize: number;
  color: string;
  aaFont: string;
  numy: number;
  exp: number;
};

export const initialCondition: Condition = {
  txt: 'aa',
  font: '',
  fontSize: 200,
  color: '#000000',
  aaFont: '',
  numy: 20,
  exp: 1,
};

export default Condition;

