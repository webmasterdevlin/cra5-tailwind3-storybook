import "../../index.css";
import Button, { ButtonProps } from ".";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "secondary",
};

export const Default = Template.bind({});
Default.args = {
  label: "default",
};
