"use client";

import { ResumeBuilder, SortableList, ResumeDisplay } from "@/app/components";
import { useState } from "react";
import { BulletPointItem } from "@/app/lib/types";

function getMockItems(): BulletPointItem[] {
  return [
    { id: 1, content: "Description 1" },
    { id: 2, content: "Description 2" },
    { id: 3, content: "Description 3" },
  ];
}

export default function Home() {
  const [items, setItems] = useState(getMockItems);

  return (
    <main>
      <ResumeDisplay />
      <ResumeBuilder />
      {/* <div style={{ maxWidth: 400, margin: "30px auto" }}>
        <SortableList
          items={items}
          onChange={setItems}
          itemContent={(item) => {
            return <>{item.content}</>;
          }}
          itemClassName="SortableItem"
        />
      </div> */}
    </main>
  );
}
