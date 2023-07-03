import { twMerge } from "tailwind-merge";

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={twMerge("px-4 py-3 flex flex-row gap-4", props.className)}
    >
      {children}
    </div>
  );
};
