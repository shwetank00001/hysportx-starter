import React, { Fragment } from "react"
import PropTypes from "prop-types"
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useExpanded,
  usePagination,
} from "react-table"
import { Table, Row, Col, Button } from "reactstrap"
import JobListGlobalFilter from "../../components/Common/GlobalSearchFilter"
import { Link } from "react-router-dom"

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  isJobListGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <React.Fragment>
      {isJobListGlobalFilter && <JobListGlobalFilter setGlobalFilter={setGlobalFilter} />}
      <Col >
        <div className="search-box   my-xxl-0 d-inline-block">
          <div className="position-relative">
            <label htmlFor="search-bar-0" className="search-label">
              <span id="search-bar-0-label" className="sr-only">
                Search this table
              </span>
              <input
                onChange={e => {
                  setValue(e.target.value)
                  onChange(e.target.value)
                }}
                id="search-bar-0"
                type="text"
                className="form-control"
                placeholder={`${count} records...`}
                value={value || ""}
              />
            </label>
            <i className="bx bx-search-alt search-icon"></i>
          </div>
        </div>
      </Col>
    </React.Fragment>
  )
}

const TableResponsive = ({
  columns,
  data,
  isGlobalFilter,
  isJobListGlobalFilter,
  isAddOptions,
  isAddUserList,
  isAddParticipator,
  handleNewParticipator,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  customPageSizeOptions,
  iscustomPageSizeOptions,
  isPagination,
  isShowingPageLength,
  paginationDiv,
  pagination,
  tableClass,
  theadClass
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      // defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0,
        pageSize: customPageSize,
        sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    // useFilters,
    useSortBy,
    useExpanded,
    usePagination
  )

  const generateSortingIndicator = column => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""
  }

  const onChangeInSelect = event => {
    setPageSize(Number(event.target.value))
  }


  return (

    <Fragment>

      <Row className="mb-2 mx-auto">
        {iscustomPageSizeOptions &&
          <Col md={customPageSizeOptions ? customPageSizeOptions : 1}>
            <select
              className="form-select"
              value={pageSize}
              onChange={onChangeInSelect}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </Col>
        }

        {isGlobalFilter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            isJobListGlobalFilter={isJobListGlobalFilter}
          />
        )}
        {isAddOptions && (
          <Col sm="12">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="btn-rounded  mb-2 me-2"
                onClick={handleOrderClicks}
              >
                <i className="mdi mdi-plus me-1" />
                Add New Order
              </Button>
            </div>
          </Col>
        )}
        {isAddUserList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="primary"
                className="btn mb-2 me-2"
                onClick={handleUserClick}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                Create New Participator
              </Button>
            </div>
          </Col>
        )}
        {isAddParticipator && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="primary"
                className="btn mb-2 me-2"
                onClick={handleNewParticipator}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                Create New User
              </Button>
            </div>
          </Col>
        )}
        {isAddCustList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="btn-rounded mb-2 me-2"
                onClick={handleCustomerClick}
              >
                <i className="mdi mdi-plus me-1" />
                New Customers
              </Button>
            </div>
          </Col>
        )}
      </Row>

      <div className="table-responsive">
        <Table {...getTableProps()} className={tableClass}>
          <thead className={theadClass}>
            {headerGroups.map(headerGroup => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                      <th colSpan={column.colSpan} rowSpan={column.rowSpan} key={column.id} className={`${column.isSort ? "sorting text-center" : "text-center"} ${column.HeaderClass}`}>
                        <div className="m-0" {...column.getSortByToggleProps()}>
                          {column.render("Header")}
                        </div>
                        {/* <Filter column={column} /> */}
                      </th>
                ))}
              </tr>
            ))}
          </thead>
          {data.length ?
            <tbody {...getTableBodyProps()}>
              {

                page.map(row => {
                  prepareRow(row);

                  return (
                    <Fragment key={row.getRowProps().key}>
                      <tr>
                        {row.cells.map(cell => {
                          return (
                            <td key={cell.id} className="text-center" {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    </Fragment>
                  );
                })
              }
            </tbody>

            :
            <tbody>
              <tr>
                <td colSpan={columns.length} className="text-center"><h4>No data available</h4></td>
              </tr>
            </tbody>
          }

        </Table>
      </div>

      {
        isPagination && (
          <Row className="justify-content-between align-items-center">
            {isShowingPageLength && <div className="col-sm">
              <div className="text-muted">Showing <span className="fw-semibold">{page.length}</span> of <span className="fw-semibold">{data.length}</span> entries</div>
            </div>}
            <div className={paginationDiv}>
              <ul className={pagination}>
                <li className={`page-item ${!canPreviousPage ? "disabled" : ''}`}>
                  <Link to="#" className="page-link" onClick={previousPage}>
                    <i className="mdi mdi-chevron-left"></i>
                  </Link>
                </li>
                {pageOptions.map((item, key) => (
                  <React.Fragment key={key}>
                    <li className={pageIndex === item ? "page-item active" : "page-item"}>
                      <Link to="#" className="page-link" onClick={() => gotoPage(item)}>{item + 1}</Link>
                    </li>
                  </React.Fragment>
                ))}
                <li className={`page-item ${!canNextPage ? "disabled" : ''}`}>
                  <Link to="#" className="page-link" onClick={nextPage}>
                    <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Row>
        )
      }
    </Fragment>
  )
}

TableResponsive.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default TableResponsive
