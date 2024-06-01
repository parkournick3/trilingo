import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-20 w-full border-t-2 border-slate-200 p-2 hidden lg:block">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src="/jp.svg"
            alt="Japanese"
            height={32}
            width={42}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src="/br.svg"
            alt="Portuguese"
            height={32}
            width={42}
            className="mr-4 rounded-md"
          />
          Portuguese
        </Button>
        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src="/us.svg"
            alt="English"
            height={32}
            width={42}
            className="mr-4 rounded-md"
          />
          English
        </Button>
        <Button className="w-full" variant="ghost" size="lg">
          <Image
            src="/es.svg"
            alt="Spanish"
            height={32}
            width={42}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
      </div>
    </footer>
  );
}
