import { useEffect, useState } from "react";

import { useFilter } from "../../shared/hooks/useFilter";

import MyButton from "../../shared/ui/MyButton/MyButton";
import MyInput from "../../shared/ui/MyInput/MyInput";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const { checkFilterwithDebounce } = useFilter();

  const [filter, setFilter] = useState("");
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const dropFilter = () => {
    setFilter("");
  };

  useEffect(() => {
    checkFilterwithDebounce(filter);
  }, [filter, checkFilterwithDebounce]);

  return (
    <div className={styles.main}>
      <div className={styles.filter}>
        <MyInput
          placeholder={"Search"}
          type="text"
          value={filter}
          onChange={handleFilter}
        />
        <MyButton onClick={dropFilter}>✖</MyButton>
      </div>
    </div>
  );
}
