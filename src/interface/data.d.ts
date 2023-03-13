export interface IGraphValue {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface IGraph extends IGraphValue {
  date: string;
}
