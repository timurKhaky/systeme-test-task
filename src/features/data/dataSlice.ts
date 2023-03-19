import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IData, IDataList } from "../../types/data";

export interface DataState {
  filter: string;
  list: IDataList | [];
  isChanging: boolean;
  dataByID: IData | {};
}

const initialState: DataState = {
  filter: "",
  list: [],
  isChanging: false,
  dataByID: {},
};

export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<IDataList>) => {
      state.list = action.payload;
    },
    changeDataByID: (state, action: PayloadAction<IData | undefined>) => {
      state.isChanging = true;
      state.dataByID = action.payload ?? {};
    },
    completeChanges: (state, action: PayloadAction<IData>) => {
      const { id } = action.payload;
      state.isChanging = false;
      let keys = Object.keys(state.list);
      keys.forEach((key) => {
        state.list[key] = state.list[key].map((item: IData) => {
          return item.id === id ? action.payload : item;
        });
      });
    },
    applyFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: () => {},
});

const selectDataState = (state: RootState) => state.data;

export const selectDataList = createSelector(
  selectDataState,
  (state) => state.list
);

export const selectFilterValue = createSelector(
  selectDataState,
  (state) => state.filter
);

export const selectIsDataChanging = createSelector(
  selectDataState,
  (state) => state.isChanging
);
export const selectDataByID = createSelector(
  selectDataState,
  (state) => state.dataByID
);

export const { fetchData, changeDataByID, completeChanges, applyFilter } =
  DataSlice.actions;
export default DataSlice.reducer;
