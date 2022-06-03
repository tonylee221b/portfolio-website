import { Box, Text } from "@chakra-ui/react";

const AboutText = ({ children }) => {
  return (
    <Text mb={10} ml={16} fontSize={18}>
      {children}
    </Text>
  );
};

const AboutYear = ({ children }) => {
  return (
    <Text fontWeight="bold" fontSize={20} mb={2}>
      {children}
    </Text>
  );
};

const AboutEnvDiv = ({ children }) => {
  return <Box>{children}</Box>;
};

const AboutDeskInfo = ({ title, desc }) => {
  return (
    <Box mb={3}>
      <Text fontSize={20} fontWeight="bold" display="inline">
        {title}
      </Text>
      <Text fontSize={18} display="inline">
        {desc}
      </Text>
    </Box>
  );
};

module.exports = {
  AboutText,
  AboutYear,
  AboutEnvDiv,
  AboutDeskInfo,
};
