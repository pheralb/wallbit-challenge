import { buttonVariants } from "@/ui/button";
import ExternalLink from "@/ui/externalLink";
import { Github } from "@/ui/logos";

const Header = () => {
  return (
    <nav className="fixed top-0 flex h-14 w-full items-center justify-end">
      <div className="flex items-center space-x-4 px-4 text-sm">
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

export default Header;
