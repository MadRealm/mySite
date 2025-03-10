'use client';

import { Button } from "antd";
import { shuffleArray } from "@/app/lib/utils";


function bouleg(): void {
    console.log('bouleg');
};

export default function Page() {
    return (
        <main>
            <Button 
            type="primary"
            onClick={bouleg}>Bouleg</Button>
        </main>

    )
}