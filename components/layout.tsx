import { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col p-4 gap-4 w-full min-h-full">
      {props.children}
    </div>
  );
};
