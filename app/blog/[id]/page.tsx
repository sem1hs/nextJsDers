"use client";

import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const BlogIdPage = () => {
  const { id } = useParams();
  const params = useSearchParams();
  return (
    <div>
      <p>Hello From {id}. blog</p>
      <p>{params.get("category")}</p>
    </div>
  );
};

export default BlogIdPage;
