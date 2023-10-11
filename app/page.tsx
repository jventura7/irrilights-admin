import { DataTable } from "@/components/customers/DataTable";
import { columns } from "@/components/customers/Columns";
import { customers } from "@/customers";

export default async function CustomersPage() {
  return (
    <div className="p-10">
      <h1 className="mb-12 text-2xl font-bold">Customers</h1>
      <DataTable columns={columns} data={customers} />
    </div>
  );
}
