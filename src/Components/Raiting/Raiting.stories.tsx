import { useState } from "react";
import { RaitingPropsType, Rating } from "./Raiting";


export default {
    title: 'raiting',
    component: Rating
}


export const EmptyRaiting = () => <Rating value={0}  />
export const Raiting1 = () => <Rating value={1} />
export const Raiting2 = () => <Rating value={2} />
export const Raiting3 = () => <Rating value={3} />
export const Raiting4 = () => <Rating value={4} />
export const Raiting5 = () => <Rating value={5} />

