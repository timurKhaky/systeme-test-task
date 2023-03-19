import { IData } from "../../../types/data";
import { useData } from "../../hooks/useData";
import MyButton from "../MyButton/MyButton";

interface Props {
  item: IData;
  index: number;
}

export default function MyTableRow({ item, index }: Props) {
  let [id, title, active, created] = Object.keys(item);
  const { changeData } = useData();

  return (
    <tr
      key={item[id]}
      style={{
        background:
          index % 2 === 0 ? "rgba(203, 203, 203, 0.84)" : "transparent",
      }}
    >
      <td>{item[title]}</td>
      <td>{item[active] ? "Active" : "Inactive"}</td>
      <td>{`${item[created]
        .slice(0, 10)
        .split("-")
        .reverse()
        .join(".")}, ${item[created].slice(11, 16)}`}</td>
      <td>
        <MyButton onClick={() => changeData(item)}>edit</MyButton>
      </td>
    </tr>
  );
}
