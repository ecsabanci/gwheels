"use client";

import Claps from "@upstash/claps";

export default function ClapsButton({ key }: { key: string }) {
    return <div className="bottom-10">
        <Claps fixed="left" shareButton={true} key={key} />
    </div>;
}
