import { buttonVariants } from "@/ui/button";
import ExternalLink from "@/ui/externalLink";
import { Github } from "@/ui/logos";
import { Separator } from "@/ui/separator";

const Header = () => {
  return (
    <nav className="sticky top-0 flex h-14 w-full items-center justify-end">
      <div className="flex h-5 items-center space-x-4 px-4 text-sm">
        <ExternalLink
          title="Challenge"
          href="https://github.com/goncy/wallbit-challenge"
          className={buttonVariants({
            variant: "link",
            size: "default",
            className:
              "space-x-0.5 px-0 text-neutral-500 decoration-neutral-400 decoration-dotted underline-offset-[6px] hover:text-black hover:underline",
          })}
        >
          <span>Challenge</span>
        </ExternalLink>
        <Separator orientation="vertical" className="bg-neutral-400" />
        <ExternalLink
          title="Github Repository"
          href="https://github.com/pheralb/wallbit-challenge"
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
          })}
        >
          <Github width={20} height={20} />
        </ExternalLink>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bottom-0 px-4 py-2 md:fixed">
      <div className="flex items-center text-sm">
        <ExternalLink
          title="Created by pheralb"
          href="https://pheralb.dev"
          className={buttonVariants({
            variant: "link",
            size: "default",
            className:
              "space-x-0.5 px-0 text-neutral-500 decoration-neutral-400 decoration-dotted underline-offset-[6px] hover:text-black hover:no-underline",
          })}
        >
          <span>✨ Created by pheralb</span>
        </ExternalLink>
      </div>
    </footer>
  );
};

export { Header, Footer };
