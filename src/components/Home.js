import React from "react";
import { Flex, Heading, Text, Spinner } from "@chakra-ui/react";
import { getPosts } from "../api/posts";

export const Home = () => {
  const [state, setState] = React.useState({
    loading: false,
    posts: [],
    error: null,
  });

  const { loading, posts, error } = state;

  React.useEffect(() => {
    const doFetchPosts = async () => {
      setState({ loading: true, posts: [], error: null });

      try {
        const { data } = await getPosts();
        setState({ loading: false, posts: data, error: null });
      } catch (e) {
        setState({ loading: false, posts: [], error: e.message });
      }
    };

    doFetchPosts();
  }, []);

  // console.log('posts', posts)
  if (loading) {
    return (
      <Flex align="center" justify="center" h="97vh" w="100%">
        <Spinner size="xl" />
      </Flex>
    );
  } else if (error) {
    <Text>{error}</Text>;
  }
  return (
    <Flex direction="column" p="3.5rem">
      <Heading as="h1" mb="1.5rem">
        Mis Publicaciones
      </Heading>
      {posts.map((post) => (
        <Flex
          key={post.id}
          m="0.5rem"
          border="3px solid #c2c2c2"
          direction="column"
          borderRadius="8px"
          p="1.5rem"
        >
          <Heading as="h3" size="lg" mb="1rem">
            {post.title}
          </Heading>
          <Text>{post.body}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

// siempre que queramos guardar información en un componente --> useState
// null --> reincio al estado original
