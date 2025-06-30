"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

export default function FloatingMenuButton() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-md"
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 mr-6 mt-2">
          <nav className="space-y-2 flex flex-col items-start gap-2">
            <Button asChild variant="outline">
              <Link href="/">Home</Link>
            </Button>
            <ModeToggle />
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
}
