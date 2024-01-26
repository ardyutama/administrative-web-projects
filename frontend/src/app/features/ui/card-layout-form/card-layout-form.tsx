import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const CardLayoutForm = ({
  title,
  description,
  children,
  classnames
}: {
  title: string;
  description: string;
  classnames?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className={classnames}>{children}</CardContent>
    </>
  );
};
