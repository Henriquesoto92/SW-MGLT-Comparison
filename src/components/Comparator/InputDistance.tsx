"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";

type IProps = {
  setDistance: (value: number | null) => void;
  distance: number | null;
};

export default function InputDistance(props: IProps) {
  const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;

    props.setDistance(value);
  };

  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="number"
        placeholder="Distance in MGLT"
        value={props.distance ?? ""}
        min="0"
        step="1"
        onChange={onNumberChange}
        required
      />
    </div>
  );
}
