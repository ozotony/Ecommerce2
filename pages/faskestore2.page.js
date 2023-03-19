import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { useInView } from "react-intersection-observer";

import styles from "../styles/faskestore2.module.css";

export default function Home() {
  const { ref, inView } = useInView();

  const {
    isLoading,
    isError,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    "posts",
    async ({ pageParam = "" }) => {
      await new Promise((res) => setTimeout(res, 1000));
      const res = await axios.get("/api/post?cursor=" + pageParam);

      // const res = await fetch("/api/post?cursor=" + pageParam);

      return res.data;
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextId ?? false,
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div>Error! {JSON.stringify(error)}</div>;

  return (
    <div className="container">
      <div className="row mt-2 g-4">
        <div className="col-md-3">
          <div className={`${styles.card} p-1 bg-light`}>
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className={`flex-column lh-1 ${styles.imagename}`}>
                {" "}
                <span>Mobile</span> <span>Phones</span> <br />
                <span>Mobile</span> <span>Phones</span>
                <br />
                <br />
                <button type="button" className="btn btn-outline-info">
                  Detail
                </button>
              </div>
              <div>
                {" "}
                <img
                  src="https://s3.amazonaws.com/ozotony/1656007476755_File1.JPEG"
                  height="100"
                  width="100"
                />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className={`${styles.card} p-1 bg-light`}>
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className={`flex-column lh-1 ${styles.imagename}`}>
                {" "}
                <span>Mobile</span> <span>Phones</span>{" "}
              </div>
              <div>
                {" "}
                <img
                  src="https://s3.amazonaws.com/ozotony/1656007476755_File1.JPEG"
                  height="100"
                  width="100"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {data &&
        data.pages.map((page) => {
          return (
            <React.Fragment key={page.nextId ?? "lastPage"}>
              {page.posts.map((post) => (
                <div className="post" key={post.id}>
                  <p>{post.id}</p>
                  <p>{post.title}</p>
                  <p>{post.createdAt}</p>
                </div>
              ))}
            </React.Fragment>
          );
        })}

      {isFetchingNextPage ? <div className="loading">Loading...</div> : null}

      <span style={{ visibility: "hidden" }} ref={ref}>
        intersection observer marker
      </span>
    </div>
  );
}
