"use client";

import * as React from "react";
import { useState, useRef } from "react";

import ImageUploader from "@/components/ImageUploader";
import { CardPreview } from "@/components/CardPreview";
import { DownloadButton } from "@/components/DownloadButton";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function GenerateCardsPage() {
  const [cards, setCards] = useState<{ text: string; file: File }[]>([]);
  const [selected, setSelected] = useState<boolean[]>([]);
  const refs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  const handleComplete = (data: { text: string; file: File }[]) => {
    setCards(data);
    setSelected(data.map(() => true));

    // Only reset refs if the count changes
    if (refs.current.length !== data.length) {
      refs.current = data.map(() => React.createRef<HTMLDivElement>());
    }
  };

  const toggleSelect = (index: number) => {
    setSelected((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className="container mx-auto p-6 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Cards Maker</h1>
      </div>

      <ImageUploader onComplete={handleComplete} />

      {cards.length > 0 && (
        <>
          <Separator />
          <div className="flex  gap-6 flex-wrap">
            {cards.map((card, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`select-${index}`}
                    checked={selected[index]}
                    onCheckedChange={() => toggleSelect(index)}
                  />
                  <Label htmlFor={`select-${index}`}>Include this card</Label>
                </div>
                <CardPreview ref={refs.current[index]} text={card.text} />
              </div>
            ))}
          </div>
        </>
      )}

      {cards.length > 0 && (
        <div className="pt-6">
          <DownloadButton refs={refs.current} selected={selected} />
        </div>
      )}
    </div>
  );
}
