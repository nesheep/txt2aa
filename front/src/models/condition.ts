type Condition = {
  txt: string;
  font: string;
  color: string;
  fontSize: number;
  aaFont: string;
  numy: number;
  exp: number;
};

export const initialCondition: Condition = {
  txt: 'aa',
  font: '',
  color: '#000000',
  fontSize: 200,
  aaFont: '',
  numy: 20,
  exp: 1,
};

export default Condition;

