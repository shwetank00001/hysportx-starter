import React, { useState, useMemo } from 'react'
import { Container, Card, CardBody, } from 'reactstrap'
import { Link } from 'react-router-dom'
import Breadcrumb from 'components/Common/Breadcrumb'
import TableResponsive from 'components/Common/TableResponsive';
const index = () => {

  const leaderboardData = [
    {
      rank: 2,
      finalTotal: 7,
      Name: "Aditit & Praveen",
      round: [
        { round: "r1", AttractName: 280, rank: 1 },
        { round: "r2", AttractName: 280, rank: 1 },
        { round: "r3", AttractName: 280, rank: 1 },
        { round: "r4", AttractName: 280, rank: 1 },
        { round: "r5", AttractName: 280, rank: 1 }
      ]
    },
    
  ];
  const columns = useMemo(
    function () {
      const colarray = [{
        Header: "Final Rank",
        accessor: "rank",
        rowSpan: 2,
        HeaderClass: "",
      },
      {
        Header: "Final Total",
        accessor: "finalTotal",
        rowSpan: 2,
        HeaderClass: "",
      },
      {
        Header: "Name",
        HeaderClass: "bg-light",
        columns: [
          { Header: "Mix Bout (M+F)", accessor: "Name", HeaderClass: "bg-light", }
        ],

      },]

      
      leaderboardData[0].round.map((data, id) => {
        colarray.push({
          Header: `Round ${id + 1}`,
          accessor: `r${id + 1}`,
          colSpan: 2,
          HeaderClass: "bg-light",
          columns: [
            {
              Header: 'Attract NAME',
              accessor: `${id}[0].AttractName`,
              // accessor: `${id}[0].AttractName`,
              HeaderClass: "bg-warning",
            },
            {
              Header: 'Rank',
              accessor: `r${id}[0].rank`,
              HeaderClass: "bg-success",
            },
          ],
        });
      });

      return colarray
    }

  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Dashboard" breadcrumbItem="LeaderBoard List" />

          <Card>
            <CardBody>
              <div className="d-flex align-items-center border-bottom pb-3 mb-2">
                <h1 className="mb-2 card-title flex-grow-1 text-center text-primary">Tie Breaker Round</h1>
                <div className="flex-shrink-0">

                </div>
              </div>
              <TableResponsive
                columns={columns}
                data={leaderboardData ? leaderboardData : []}
                isGlobalFilter={true}
                isPagination={true}
                // iscustomPageSizeOptions={true}
                isShowingPageLength={true}
                customPageSize={5}
                tableClass="table table-bordered align-middle nowrap mt-2"
                paginationDiv="col-sm-12 col-md-7"
                pagination="pagination justify-content-end pagination-rounded"
              />
            </CardBody>
          </Card>
        </Container>
      </div>

    </React.Fragment>
  )
}

export default index