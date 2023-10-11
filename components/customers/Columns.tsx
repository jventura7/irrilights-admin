"use client";
import z from "zod";
import { ColumnDef } from "@tanstack/react-table";

const customerSchema = z.object({
  id: z.number(),
  name: z.string(),
  phoneNumber: z.number(),
  street: z.string(),
  city: z.string(),
  zip: z.number(),
  state: z.string(),
  email: z.string(),
});

export const columns: ColumnDef<z.infer<typeof customerSchema>>[] = [
  {
    accessorKey: "name",
    header: "Customer Name",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "street",
    header: "Street",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "zip",
    header: "ZIP Code",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
