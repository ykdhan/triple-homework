import AwardTitle from "./AwardTitle";
import AwardHistory from "./AwardHistory";
import FadeIn from "./FadeIn";

import "../styles/component/Award.scss";

export default function Award() {
  return (
    <div className="award">
      <FadeIn className="figure">2021년 12월 기준</FadeIn>
      <div className="content">
        <FadeIn className="container title">
          <AwardTitle copy="700만 명의 여행자" />
          <AwardTitle copy="100만 개의 여행 리뷰" />
          <AwardTitle copy="470만 개의 여행 리뷰" />
        </FadeIn>
        <FadeIn className="container history">
          <AwardHistory
            className="google"
            store="2018 구글 플레이스토어"
            content="올해의 앱 최우수상 수상"
          />
          <AwardHistory
            className="apple"
            store="2018 애플 앱스토어"
            content="오늘의 여행앱 선정"
          />
        </FadeIn>
      </div>
    </div>
  );
}
