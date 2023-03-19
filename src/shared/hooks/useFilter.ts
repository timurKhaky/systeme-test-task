import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import {
  applyFilter,
  selectDataList,
  selectFilterValue,
} from "../../features/data/dataSlice";
import { IData } from "../../types/data";
import { useDebounce } from "./useDebounce";

export const useFilter = () => {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector(selectFilterValue);
  const data = useAppSelector(selectDataList);

  let filteredData = { ...data };
  let keys = Object.keys(data);

  keys.forEach((key) => {
    const title = Object.keys(filteredData[key][0])[1];
    filteredData[key] = filteredData[key].filter((item: IData) =>
      filterValue ? item[title].toLowerCase().includes(filterValue) : item
    );
  });

  function checkFilter(filter: string) {
    if (!filter) {
      dispatch(applyFilter(""));
    } else {
      dispatch(applyFilter(filter.toLowerCase()));
    }
  }

  const checkFilterwithDebounce = useDebounce(checkFilter, 200);

  return { filteredData, checkFilterwithDebounce };
};
