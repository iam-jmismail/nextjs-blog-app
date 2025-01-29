import React from "react";

type Props = {
  post: {
    [key: string]: string;
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const post = await response.json();

  const postIds: number[] = post.map((post: any) => post.id);

  const paths = postIds.map((postId) => ({
    params: {
      id: postId.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}

function ViewBlog({ post }: Props) {
  if (!post) return <>Loading...</>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default ViewBlog;
