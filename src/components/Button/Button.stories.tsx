import Button, {ButtonProps} from ".";
import {Story, Meta} from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;


const Template: Story<ButtonProps>  = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "indigo",
  label: "button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "teal",
  label: "button",
};
