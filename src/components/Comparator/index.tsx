"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { use, useState } from "react";
import InputDistance from "./InputDistance";
import { useStarships } from "@/services/hooks/useStarships";

export default function Comparator() {
  const { data: starshipData } = useStarships();
  const [distance, setDistance] = useState<number | null>(10000);

  console.log(distance, starshipData);
  return (
    <div className="flex flex-col gap-5">
      {!!starshipData ? (
        <>
          <InputDistance setDistance={setDistance} distance={distance} />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Name</TableHead>
                  <TableHead className="text-right">Stops</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!!starshipData &&
                  starshipData?.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-right">{item.MGLT}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

function Loading() {
  return <h2>Loading...</h2>;
}
