import "../styles/component/AwardHistory.scss";

export default function AwardHistory(props) {
  return (
    <div className={`award-history ${props.className}`}>
      <span>{props.store}</span>
      <span>{props.content}</span>
    </div>
  );
}
