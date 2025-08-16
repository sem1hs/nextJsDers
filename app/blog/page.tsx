import React, { Suspense } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostType = Post[];

const Posts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostType = await res.json();

  return (
    <ul>
      {data.map((val) => (
        <li key={val.id}>
          <h1>{val.title}</h1>
          <p>{val.body}</p>
        </li>
      ))}
    </ul>
  );
};

const BlogPage = async () => {
  return (
    <div>
      Hello From Blog
      <Suspense fallback={<p>Yükleniyor...</p>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default BlogPage;
