'use client';

import { Button } from "antd";
import { shuffleArray } from "@/app/lib/utils";
import React from "react";


function bouleg(): void {
    console.log('bouleg');
};

export default function Page() {
    return (
        <Button 
        type="primary"
        onClick={bouleg}>Bouleg</Button>
    )
}