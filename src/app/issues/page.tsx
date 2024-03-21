
import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function Issues() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Issues</h1>
        <Button variant="soft">
          <Link href="/issues/new">Add New</Link>
        </Button>
      </div>
    </>
  );
}
