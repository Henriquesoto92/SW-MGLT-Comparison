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
import { formatMGLT } from "@/services/utils/FormatMGLT";

export default function Comparator() {
  const { data: starshipData, isFetched } = useStarships();
  const [distance, setDistance] = useState<number | null>(10000);

  return (
    <div className="flex flex-col gap-5">
      {isFetched ? (
        <>
          <InputDistance setDistance={setDistance} distance={distance} />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Name</TableHead>
                  <TableHead className="">MGLT</TableHead>
                  <TableHead className="text-right">Stops</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!!starshipData &&
                  starshipData?.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="font-medium">{item.MGLT}</TableCell>
                      <TableCell className="text-right">
                        {formatMGLT(item.MGLT, distance)}
                      </TableCell>
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
  return <h2>preparing hyperdrive...</h2>;
}
