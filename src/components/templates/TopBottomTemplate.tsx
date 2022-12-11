import { ReactElement } from "react";

type TopBottomTemplateProps = {
  wrapperClassName: string;
  topWrapperClassName?: string;
  title: string;
  topComponent: ReactElement;
  bottomComponent: ReactElement;
};

export default function TopBottomTemplate({
  wrapperClassName,
  topWrapperClassName,
  title,
  topComponent,
  bottomComponent,
}: TopBottomTemplateProps): ReactElement {
  return (
    <div className={wrapperClassName}>
      <div className={topWrapperClassName ? topWrapperClassName : ""}>
        <h1 className="title">{title}</h1>
        {topComponent}
      </div>
      {bottomComponent}
    </div>
  );
}
