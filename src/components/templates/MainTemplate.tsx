import { PropsWithChildren, ReactElement } from "react";

type MainTemplateProps = {
  wrapperClassName: string;
  title: string;
};

export default function MainTemplate({
  wrapperClassName,
  title,
  children,
}: PropsWithChildren<MainTemplateProps>): ReactElement {
  return (
    <div className={wrapperClassName}>
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
}
