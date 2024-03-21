"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";

export default function CreateIssue() {
  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button type="submit" variant="surface">
        Submit
      </Button>
    </form>
  );
}
