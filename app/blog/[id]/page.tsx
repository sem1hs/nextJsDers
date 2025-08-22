"use client";

import { useParams, usePathname, useSearchParams } from "next/navigation";
import React from "react";

const BlogIdPage = () => {
  const { id } = useParams();
  const path = usePathname();
  const params = useSearchParams();
  console.log(path);
  return (
    <div>
      <p>Hello From {id}. blog</p>
      <p>{params.get("category")}</p>
    </div>
  );
};

export default BlogIdPage;
