import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface Props {
  href: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const ExternalLink = (props: Props) => {
  return (
    <a
      href={props.href}
      title={props.title}
      rel="noreferrer"
      target="_blank"
      className={cn(props.className)}
    >
      {props.children}
    </a>
  );
};

export default ExternalLink;
