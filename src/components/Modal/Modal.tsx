import { useState } from "react";
import { useData } from "../../shared/hooks/useData";
import MyButton from "../../shared/ui/MyButton/MyButton";
import MyInput from "../../shared/ui/MyInput/MyInput";
import { IData } from "../../types/data";
import styles from "./Modal.module.css";

export default function Modal() {
  const { CompleteChangeData, dataByID } = useData();
  const [data, setData] = useState<IData>(dataByID);
  const title = Object.keys(dataByID)[1];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Edit</h1>
        </div>
        <div className={styles.input}>
          <MyInput
            value={data[title]}
            onChange={handleChange}
            name={title}
            variant="change"
          ></MyInput>
        </div>
        <MyButton variant="change" onClick={() => CompleteChangeData(data)}>
          {dataByID !== data ? "save" : "exit"}
        </MyButton>
      </div>
    </div>
  );
}
