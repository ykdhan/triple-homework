import Count from "./Count";
import "../styles/component/AwardTitle.scss";

export default function AwardHistory(props) {
  const splitIndex = props.copy.indexOf("의");
  const number = props.copy.substring(0, splitIndex);
  const copy = props.copy.substring(splitIndex);

  return (
    <div className="award-title">
      <Count number={number} />
      {copy}
    </div>
  );
}
