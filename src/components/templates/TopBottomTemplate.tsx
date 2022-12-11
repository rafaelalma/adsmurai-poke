import { ReactElement } from "react";

import "./TopBottomTemplate.scss";

type TopBottomTemplateProps = {
  topWrapperClassName?: string;
  title: string;
  topComponent: ReactElement;
  bottomComponent: ReactElement;
};

export default function TopBottomTemplate({
  topWrapperClassName,
  title,
  topComponent,
  bottomComponent,
}: TopBottomTemplateProps): ReactElement {
  return (
    <div className="top-bottom-wrapper">
      <div className={topWrapperClassName ? topWrapperClassName : ""}>
        <h1 className="title">{title}</h1>
        {topComponent}
      </div>
      {bottomComponent}
    </div>
  );
}
