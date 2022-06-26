import Layout from "@/components/layouts/Layout";
import { Button, Flex } from "@chakra-ui/react";
import { VFC } from "react";

interface IndexTemplateProps {}

const IndexTemplate: VFC<IndexTemplateProps> = ({}) => {
  return (
    <Layout
      headProps={{
        title: "Color Schemes",
      }}
    >
      <Flex gap={4} wrap="wrap">
        {[
          "whiteAlpha",
          "blackAlpha",
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink",
          "linkedin",
          "facebook",
          "messenger",
          "whatsapp",
          "twitter",
          "telegram",
        ].map((colorScheme) => (
          <Button key={colorScheme} colorScheme={colorScheme}>
            {colorScheme}
          </Button>
        ))}
      </Flex>
    </Layout>
  );
};

export default IndexTemplate;
