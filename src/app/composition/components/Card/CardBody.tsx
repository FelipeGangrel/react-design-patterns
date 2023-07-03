import { twMerge } from "tailwind-merge";

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const CardBody: React.FC<CardBodyProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={twMerge("p-4", props.className)}>
      {children}
    </div>
  );
};
