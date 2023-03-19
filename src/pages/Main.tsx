import { useEffect } from "react";
import { useAppDispatch } from "../app/store/hooks";
import Modal from "../components/Modal/Modal";
import SearchBar from "../components/SearchBar/SearchBar";
import { fakeData } from "../fakeDB/FakeDB";
import { fetchData } from "../features/data/dataSlice";
import { useData } from "../shared/hooks/useData";
import { useFilter } from "../shared/hooks/useFilter";
import MyTable from "../shared/ui/MyTable/MyTable";
import styles from "./Main.module.css";

export default function Main() {
  const dispatch = useAppDispatch();
  const { data, isDataChanging } = useData();
  const { filteredData } = useFilter();
  useEffect(() => {
    dispatch(fetchData(fakeData));
  }, [dispatch]);

  if (!data) {
    return <div></div>;
  }

  return (
    <div className={styles.content}>
      {isDataChanging && <Modal />}
      <SearchBar />
      <MyTable headers={["Name", "Status", "Created"]} list={filteredData} />
    </div>
  );
}
