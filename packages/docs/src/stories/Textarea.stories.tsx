import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, Textarea, TextareaProps } from "@cognu-ui/react";

export default {
  title: "Form/Textarea",
  component: Textarea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <>
          <Box
            as="label"
            css={{ display: "flex", flexDirection: "column", gap: "$2" }}
          >
            <Text size="sm">Description</Text>
            {Story()}
          </Box>
        </>
      );
    },
  ],
} as Meta<TextareaProps>;

export const Primary: StoryObj<TextareaProps> = {
  args: {
    placeholder: "Type your description",
  },
};

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
  },
};
