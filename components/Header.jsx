import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 lg:py-12 text-white ">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Rody <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Nav Desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Here Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">

        </div>
      </div>
    </header>
  );
};

export default Header;
