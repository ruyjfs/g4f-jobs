"use client";

import {
  AutocompleteItem,
  Autocomplete as AutocompleteNextUI,
} from "@nextui-org/react";

type Item = {
  label: string;
  value: string | number;
};

type Props = {
  label: string;
  items: Item[];
};

export default function Autocomplete(props: Props) {
  const { label, items } = props;

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <AutocompleteNextUI label={label} className="max-w-xs" size="sm">
        {items.map((item) => (
          <AutocompleteItem key={item.value} value={item.value}>
            {item.label}
          </AutocompleteItem>
        ))}
      </AutocompleteNextUI>
    </div>
  );
}
