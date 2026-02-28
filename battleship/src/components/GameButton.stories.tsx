import type { Meta, StoryObj } from "@storybook/react";
import GameButton from "./GameButton";

const meta = {
  title: "Components/GameButton",
  component: GameButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A basic button component for game actions. Supports variants, disabled state, and custom styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Button label text",
      defaultValue: "Click me",
    },
    onClick: {
      description: "Callback function when button is clicked",
      action: "clicked",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
      defaultValue: false,
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "HTML button type",
      defaultValue: "button",
    },
    ariaLabel: {
      control: "text",
      description: "Accessibility label for screen readers",
    },
    className: {
      control: "text",
      description: "Custom CSS classes",
    },
    overrideStyle: {
      description: "Inline style overrides",
      control: "object",
    },
  },
} satisfies Meta<typeof GameButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button state - the standard way to use the component
 */
export const Default: Story = {
  args: {
    children: "Play Game",
    onClick: () => alert("Game started!"),
    disabled: false,
  },
};

/**
 * Primary action button with emphasis styling
 */
export const Secondary: Story = {
  args: {
    children: "Start Game",
    className: "secondary",
    onClick: () => alert("Starting game..."),
    disabled: false,
  },
};

/**
 * Disabled button state - shows how button appears when not interactive
 */
export const Disabled: Story = {
  args: {
    children: "Loading...",
    disabled: true,
  },
};

/**
 * Different button sizes with custom styling
 */
export const Large: Story = {
  args: {
    children: "Play",
    overrideStyle: {
      padding: "16px 32px",
      fontSize: "18px",
      fontWeight: "bold",
    },
    onClick: () => alert("Large button clicked!"),
  },
};

/**
 * Submit button type variant
 */
export const SubmitButton: Story = {
  args: {
    children: "Submit",
    type: "submit",
    ariaLabel: "Submit form",
  },
};

/**
 * Button with screen reader label
 */
export const WithAccessibility: Story = {
  args: {
    children: "⚓",
    ariaLabel: "Navigate to home page",
    onClick: () => alert("Navigating home..."),
  },
};
