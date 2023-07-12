"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import InputDistance from "./InputDistance";
import { useStarships } from "@/services/hooks/useStarships";
import { formatMGLT } from "@/services/utils/FormatMGLT";

export default function Comparator() {
  const { data: starshipData, isFetched, isError } = useStarships();
  const [distance, setDistance] = useState<number | null>(10000);

  console.log(isError);

  return (
    <div className="flex flex-col gap-5">
      {isFetched && !isError ? (
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
        <Loading isError={isError} />
      )}
    </div>
  );
}

type propsLoading = {
  isError: boolean;
};

function Loading({ isError }: propsLoading) {
  return (
    <h2>
      {isError ? (
        <div className="flex items-center flex-col gap-4">
          sorry, we miscalculated...
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4F4qzPbcFiA?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      ) : (
        <div className="flex items-center flex-col gap-4">
          preparing hyperdrive...
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6ga4IICXyCE?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
    </h2>
  );
}
