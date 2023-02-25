import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import MOCK_DATA_2 from "../../AdminDataCollection/AdminAgentsTableData/MOCK_DATA _2.json";
import COLUMNS from "./AgentsTableColumn";
import AgentsGlobalFiltering from "./AgentsGlobalFiltering";
import AgentsHeaderGroups from "./AgentsHeaderGroups";
import AgentsPagination from "./AgentsPagination";
import AgentsTableModal from "./AgentsTableModal";

const AgentsTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA_2, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <AgentsGlobalFiltering
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />
      <table {...getTableProps()} className="admin-agents__table">
        <AgentsHeaderGroups headerGroups={headerGroups} />
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={openModal}>
                {row.cells.map((cell) => (
                  <td
                    className={
                      cell.column.id === "current_tasks"
                        ? `${
                            cell.value === 0
                              ? "bg-success text-center"
                              : cell.value >= 1 && cell.value <= 3
                              ? "bg-warning text-center"
                              : cell.value >= 4 && cell.value <= 5
                              ? "agent-cell__orange text-center"
                              : "bg-danger text-center"
                          }`
                        : ""
                    }
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <AgentsPagination
        nextPage={nextPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
      />
      <AgentsTableModal showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default AgentsTable;
