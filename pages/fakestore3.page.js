import styles from "../styles/faskestore3.module.css";
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import axios from "axios";
import Paginate from "./Component/Paginate";
export default function Fakestore() {
  let datapage = 20;
  //let totaldata = 19235;
  //let pagesCount =Math.ceil(totaldata/datapage)

  //pagesCount=193

  //alert(pagesCount2)

  const [currentPage, setCurrentPage] = useState(1);
  const [returnedData, setreturnedData] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [showPagination, setShowPagination] = useState(false);
  const [displayText, setDisplayText] = useState();
  const [totaldata, setTotaldata] = useState(1);

  const offset = useRef(0);
  let pagesCount = Math.ceil(totaldata / datapage);
  const pageSize = datapage;
  //const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  useEffect(() => {
    const GetData2 = async () => {
      const res = await axios.get("/api/product/getTotalPage");

      setTotaldata(res.data.userTransactionCount);

      if (res.data.userTransactionCount > datapage) {
        setShowPagination(true);
      }
      // alert(res.data.userTransactionCount);
    };

    GetData2();
  }, []);

  useEffect(() => {
    const GetData = async (pageParam) => {
      setIsLoading(true);
      // await new Promise((res) => setTimeout(res, 1000));
      const res = await axios.get(
        "/api/product/getProduct4?skips=" +
          pageParam +
          "&itemperpage=" +
          datapage
      );

      setreturnedData(res.data.result);
      setIsLoading(false);
    };

    if (currentPage == "1") {
      GetData(parseInt(currentPage));
    } else {
      GetData((parseInt(currentPage) - 1) * parseInt(pageSize));
    }
  }, [currentPage]);

  return (
    <>
      {isLoading && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}

      <div>
        {showPagination && (
          <Paginate
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pagesCount={pagesCount}
            datapage={datapage}
            pageSize={pageSize}
          />
        )}

        <table className="table">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Serial Reference</th>
              <th>Period</th>
              <th>subject</th>
              <th>Units</th>
            </tr>
          </thead>

          <tbody>
            {returnedData &&
              returnedData.map((page, currentPage) => (
                <tr>
                  <td>{page.id} </td>
                  <td>{page.series_reference}</td>
                  <td>{page.period}</td>
                  <td>{page.subject}</td>
                  <td>{page.units}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
