import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

interface BlogPostProps {
  id: string;
  title: string;
  body: string;
}

type Props = {
  posts: BlogPostProps[];
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

function BlogPost({ posts }: Props) {
  return (
    <div>
      <h2>Posts </h2>
      {posts?.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}> {post.title} </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPost;
