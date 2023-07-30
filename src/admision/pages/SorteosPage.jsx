import { useEffect, useState } from "react";
import { getAllSorteos } from "../../api/sorteos.api";
import { SorteosList } from "../components/SorteosList";

export const SorteosPage = () => {
  return (
    <>
      <h1>Sorteos Page</h1>
      <SorteosList />
    </>
  );
};
