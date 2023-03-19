import styles from "./MyTable.module.css";
import { IData, IDataList } from "../../../types/data";
import MyTableRow from "./MyTableRow";

interface TableProps {
  headers: string[];
  list?: IDataList | [];
}

export default function MyTable({ headers, list }: TableProps) {
  if (!list) {
    return <div>Прелоадер</div>;
  }

  return (
    <div className={styles.main}>
      <table>
        <thead>
          <tr>
            {headers.map((el) => (
              <td key={el}>{el}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(list).map((prod) => {
            return prod.map((item: IData, index: number) => (
              <MyTableRow item={item} key={item.id} index={index} />
            ));
          })}
        </tbody>
      </table>
    </div>
  );
}
