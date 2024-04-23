"use client";

import {
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  Table as TableNextUI,
  TableRow,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

type Props = {
  items: any[];
  columns?: { [key in string]: string };
};

export default function Table(props: Props) {
  const { columns, items } = props;
  const [headers, setHeaders] = useState<string[]>([]);

  useMemo(
    function () {
      if (columns) {
        const headersNew = Object.keys(columns);
        setHeaders(headersNew);
        return;
      }
      if (items[0]) {
        const headersNew = Object.keys(items[0]);
        setHeaders(headersNew);
        return;
      }
    },
    [items]
  );

  function sort({ column, direction }: any) {
    // return {
    //   items: items.sort((a, b) => {
    //     let first = a[sortDescriptor.column];
    //     let second = b[sortDescriptor.column];
    //     let cmp =
    //       (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
    //     if (sortDescriptor.direction === "descending") {
    //       cmp *= -1;
    //     }
    //     return cmp;
    //   }),
    // };
  }

  return (
    <TableNextUI
      isStriped
      aria-label="Example static collection table"
      radius="sm"
      onSortChange={sort}
      removeWrapper
    >
      <TableHeader>
        {headers.map((item) => (
          <TableColumn key={item} allowsSorting>
            {columns ? columns[item] : item}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {items.map((item, key) => (
          <TableRow key={key}>
            {headers.map((header, index) => (
              <TableCell key={index}>{item[header]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableNextUI>
  );
}
