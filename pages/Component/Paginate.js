import { useState } from "react";
import React, { useEffect, useRef } from "react";
export default function Paginate({
  currentPage,
  setCurrentPage,
  pagesCount,
  datapage,
  pageSize,
}) {
  let pagesCount2 = 0;
  if (pagesCount < datapage) {
    pagesCount2 = pagesCount + 1;
  } else {
    pagesCount2 = Math.round(pagesCount / datapage) + 1;
    //pagesCount2 =Math.round(pagesCount/dataPagination )
  }

  const [currentPage2, setCurrentPage2] = useState(1);
  const [selectedPage, setSelectedPage] = useState(pagesCount2);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [selectedTotalPage, setSelectedTotalPage] = useState([]);

  let loopcount = [];
  let counter = 1;

  function initialize() {}

  function* range(from, to, step = 1) {
    let value = from;
    while (value <= to) {
      yield value;
      value += step;
    }
  }

  useEffect(() => {
    // showLodings()
    //setDisplayText("Data Loading")

    for (let i = 0; i < pagesCount2; i++) {
      if (pagesCount < Math.round(counter * pageSize)) {
        loopcount.push(Math.round(pagesCount));
      } else {
        loopcount.push(Math.round(counter * pageSize));
      }

      counter = counter + 1;
    }

    if (pagesCount < datapage) {
      //pagesCount2 =pagesCount+1
    } else {
      //setSelectedTotalPage(loopcount)

      setSelectedTotalPage((prevMovies) => [
        ...selectedTotalPage,
        ...loopcount,
      ]);
      // alert(selectedTotalPage)
      setMaxIndex(selectedTotalPage.length);
      // alert(maxIndex)
    }

    // GetData((parseInt(currentPage)-1) *50 )

    // GetData(currentPage)

    // alert("inside " + currentPage)

    console.log("select total page");

    setSelectedPage(pageSize);
  }, []);

  //const pages = Array.from({ length: selectedPage }, (_, i) => i + 1);
  //const pages = Array.from(range(currentPage2,selectedPage));
  const pages = Array.from(range(currentPage2, selectedPage));

  console.log("loopcounter");
  console.log(loopcount);

  const onPageChange = (page) => {
    setCurrentPage(page);

    // setCurrentPage(page);
    // GetData(CurrentPage )
  };

  const getPages = () => {
    return selectedTotalPage.map((page) => {
      return <option value={page}>{page} </option>;
    });
  };
  const handleChange2 = () => {
    let vindex = currentIndex + 1;

    let maxval = Math.max.apply(null, selectedTotalPage);

    if (selectedTotalPage[vindex] <= maxval) {
      try {
        setCurrentPage2(selectedTotalPage[currentIndex]);

        setSelectedPage(selectedTotalPage[vindex]);
        setCurrentIndex(vindex);
      } catch (e) {}
    }
  };

  const handleChange3 = () => {
    let vindex = currentIndex - 1;

    let minval = Math.min.apply(null, selectedTotalPage);
    //let minval=1
    if (selectedTotalPage[vindex] == undefined) {
      return;
    }
    //alert(selectedTotalPage[vindex])
    //alert(minval)

    if (selectedTotalPage[vindex] == minval) {
      try {
        setCurrentPage2(1);

        setSelectedPage(selectedTotalPage[vindex]);
        setCurrentIndex(vindex);
      } catch (e) {}
    }

    if (selectedTotalPage[vindex] != minval) {
      try {
        setCurrentPage2(selectedTotalPage[vindex]);

        setSelectedPage(selectedTotalPage[currentIndex]);
        setCurrentIndex(vindex);
      } catch (e) {}
    }
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a class="page-link" onClick={() => handleChange3()} href="#">
              Prev
            </a>
          </li>
          {pages.map((page) => (
            <li
              key={page}
              class={page === currentPage ? "page-item active" : "pageItem"}
            >
              <a
                className="page-link"
                onClick={() => onPageChange(page)}
                href="#"
              >
                {page}
              </a>
            </li>
          ))}

          <li class="page-item">
            <a class="page-link" onClick={() => handleChange2()} href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
